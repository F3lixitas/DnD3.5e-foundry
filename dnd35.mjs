const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

class CharacterData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            biography: new HTMLField(),
            health: new SchemaField({
                value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
                min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
            }),
            proficiencies: new SchemaField({
                weapons: new ArrayField(new StringField()),
                skills: new ArrayField(new StringField())
            }),
            crest: new FilePathField({ required: false, categories: ["IMAGE"] }),
            xp: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        };
    }

    get dead() {
        const invulnerable = CONFIG.specialStatusEffects.INVULNERABLE;
        if ( this.parent.statuses.has("invulnerable") ) return false;
        return this.health.value <= this.health.min;
    }

    prepareDerivedData() {
        super.prepareDerivedData();

        // Make sure HP cannot exceed its maximum.
        this.health.value = Math.min(this.health.value, this.health.max);

        // Derive level from XP.
        this.level = Math.floor(this.xp / 100);
    }
}

Hooks.on("init", () => {
    CONFIG.Actor.dataModels.character = CharacterData;
    CONFIG.Actor.trackableAttributes = {
        character: {
            bar: ["health"],
            value: ["xp"]
        }
    };
});