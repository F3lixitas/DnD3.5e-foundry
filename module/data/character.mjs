import {ActorData} from "./actor.mjs";

const {
    NumberField, SchemaField, StringField, BooleanField,
} = foundry.data.fields;

const exp_threshold_table = [
    0,
    1000,
    3000,
    6000,
    10000,
    15000,
    21000,
    28000,
    36000,
    45000,
    55000,
    66000,
    78000,
    91000,
    105000,
    120000,
    136000,
    153000,
    171000,
    190000
]

const race_lookup = [
    "noRace",
    "human",
    "dwarf",
    "elf",
    "gnome",
    "halfElf",
    "halfOrc",
    "halfling"
]

export class CharacterData extends ActorData {
    static defineSchema() {
        const schema = super.defineSchema();
        schema.xp = new NumberField({ required: true, integer: true, min: 0, initial: 0 });
        schema.level = new NumberField({required: true, integer: true, min: 1, initial: 1});
        schema.player = new StringField({required: true, initial: ""});
        schema.alignment = new SchemaField({
            goodness: new NumberField({required: true, integer: true, min: 0, max: 2, initial: 1}),
            lawfulness: new NumberField({required: true, integer: true, min: 0, max: 2, initial: 1})
        })
        schema.abilities = new SchemaField(Object.keys(CONFIG.DND35E.abilities).reduce((obj, ability) => {
            obj[ability] = new SchemaField({
                value: new NumberField({ required: true, integer: true, initial: 10, min: 0 }),
                temp: new NumberField({ required: true, integer: true, initial: 10, min: 0 }),
            });
            return obj;
        }, {}));
        schema.skills = new SchemaField(Object.keys(CONFIG.DND35E.skills).reduce((obj, skill) => {
            obj[skill] = new SchemaField({
                classSkill: new BooleanField({required: true, initial: false}),
                rank: new NumberField({required: true, initial: 0})
            });
            return obj;
        }, {}));
        schema.classes = new SchemaField(Object.keys(CONFIG.DND35E.classes).reduce((obj, skill) => {
            obj[skill] = new SchemaField({
                active: new BooleanField({required: true, initial: false}),
                level: new NumberField({required: true, integer: true, initial: 0}),
            });
            return obj;
        }, {}));
        schema.race = new NumberField({required: true, integer: true, initial: 0});

        schema.description = new SchemaField({
            age: new NumberField({required: true, integer: true, initial: 0}),
            gender: new StringField({required: true, initial: ""}),
            size: new StringField({required: true, initial: ""}),
            weight: new StringField({required: true, initial: ""}),
            eyes: new StringField({required: true, initial: ""}),
            hair: new StringField({required: true, initial: ""}),
            skin: new StringField({required: true, initial: ""}),
        })
        return schema;
    }

    prepareDerivedData() {
        super.prepareDerivedData();

        // Derive level from XP.
        for(let i = 0; i < 20; i++) {
            if(exp_threshold_table[i] > this.xp) {
                this.level = i;
                break;
            }
        }
        if(this.exp >= exp_threshold_table[19]) {
            this.level = 20;
        }

        for(const key in this.abilities) {
            this.abilities[key].mod = Math.floor((this.abilities[key].value - 10) / 2);
            this.abilities[key].temp = this.abilities[key].value;
            this.abilities[key].temp_mod = Math.floor((this.abilities[key].temp - 10) / 2);
            this.abilities[key].label = game.i18n.localize(CONFIG.DND35E.abilities[key]) ?? key;
        }

        for(const key in this.skills) {
            this.skills[key].mod = this.abilities[CONFIG.DND35E.skillAbilities[key]].mod + this.skills[key].rank + 0; // add misc mods
            this.skills[key].abilityMod = this.abilities[CONFIG.DND35E.skillAbilities[key]].mod;
            this.skills[key].miscMod = 0; // unimplemented
        }

        this.raceLabel = race_lookup[this.race];
    }

    getRollData() {
        const data = {};

        // Copy the ability scores to the top level, so that rolls can use
        // formulas like `@str.mod + 4`.
        if (this.abilities) {
            for (let [k,v] of Object.entries(this.abilities)) {
                data[k] = foundry.utils.deepClone(v);
            }
        }

        if (this.skills) {
            for (let [k,v] of Object.entries(this.skills)) {
                data[k] = foundry.utils.deepClone(v);
            }
        }

        data.lvl = this.level;

        return data
    }
}