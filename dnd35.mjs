import {SystemActor} from "./module/actor/entity.mjs";
// import {SystemItem} from "./module/item/entity.mjs";
import {CharacterData} from "./module/data/character.mjs";
import {DnD35eActorSheet} from "./module/sheets/DnD35eActorSheet.mjs";
import {DND35E} from "./module/helpers/config.mjs";
// import {preloadHandlebarsTemplates} from "./module/helpers/templates.mjs";


Hooks.once("init", () => {
    game.DnD35e = {
        SystemActor
    }

    CONFIG.DND35E = DND35E;

    CONFIG.Actor.documentClass = SystemActor;


    CONFIG.Combat.initiative = {
        formula:'1d20 + @abilities.dex.mod',
        decimals: 2
    }

    CONFIG.Actor.dataModels = {
        character: CharacterData
    };

    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('DnD35e', DnD35eActorSheet, {
        makeDefault: true,
        label: 'DND35E.SheetLabels.Actor',
    });

    // return preloadHandlebarsTemplates();
});

Handlebars.registerHelper('toLowerCase', function (str) {
    return str.toLowerCase();
});
Handlebars.registerHelper('toUpperCase', function (str) {
    return str.toUpperCase();
});