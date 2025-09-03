import {SystemActor} from "./module/actor/entity.mjs";
import {SystemItem} from "./module/item/entity.mjs";
// import {SystemItem} from "./module/item/entity.mjs";
import {CharacterData} from "./module/data/character.mjs";
import {DnD35eActorSheet} from "./module/sheets/DnD35eActorSheet.mjs";
import {DnD35eItemSheet} from "./module/sheets/DnD35eItemSheet.mjs";
import {DND35E} from "./module/helpers/config.mjs";
import {ClassData} from "./module/data/class.mjs";
// import {preloadHandlebarsTemplates} from "./module/helpers/templates.mjs";


Hooks.once("init", () => {
    game.DnD35e = {
        SystemActor,
        SystemItem
    };

    CONFIG.DND35E = DND35E;

    CONFIG.Actor.documentClass = SystemActor;
    CONFIG.Item.documentClass = SystemItem;


    CONFIG.Combat.initiative = {
        formula:'1d20 + @abilities.dex.mod',
        decimals: 2
    };

    CONFIG.Actor.dataModels = {
        character: CharacterData
    };

    CONFIG.Item.dataModels = {
        class: ClassData
    };

    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('DnD35e', DnD35eActorSheet, {
        makeDefault: true,
        label: 'DND35E.SheetLabels.Actor',
    });

    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('DnD35e', DnD35eItemSheet, {
        makeDefault: true,
        label: 'DND35E.SheetLabels.Item',
    });

    // return preloadHandlebarsTemplates();
});

Handlebars.registerHelper('toLowerCase', function (str) {
    return str.toLowerCase();
});
Handlebars.registerHelper('toUpperCase', function (str) {
    return str.toUpperCase();
});
Handlebars.registerHelper('concatenate', function (str1, str2) {
    return `${str1}${str2}`;
});
Handlebars.registerHelper('toAlignment', function (goodness, lawfulness) {
    if (goodness === 1 && lawfulness === 1) {
        return "Neutral";
    }
    let gs = "";
    switch (goodness) {
        case 0:
            gs = "Evil";
            break;
        case 1:
            gs = "Neutral";
            break;
        default:
            gs = "Good";
    }
    let ls = "";
    switch (lawfulness) {
        case 0:
            ls = "Chaotic";
            break;
        case 1:
            ls = "Neutral";
            break;
        default:
            ls = "Lawful";
    }
    return `${ls}${gs}`;
});