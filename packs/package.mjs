

import {compilePack, extractPack} from "@foundryvtt/foundryvtt-cli";


/* ----------------------------------------- */
/*  Clean Packs                              */
/* ----------------------------------------- */

/**
 * Removes unwanted flags, permissions, and other data from entries before extracting or compiling.
 * @param {object} data                           Data for a single entry to clean.
 * @param {object} [options={}]
 * @param {boolean} [options.clearSourceId=true]  Should the core sourceId flag be deleted.
 * @param {number} [options.ownership=0]          Value to reset default ownership to.
 */
function cleanPackEntry(data, { clearSourceId=true, ownership=0 }={}) {
    if ( data.ownership ) data.ownership = { default: ownership };
    if ( clearSourceId ) {
        delete data._stats?.compendiumSource;
        delete data.flags?.core?.sourceId;
    }
    delete data.flags?.importSource;
    delete data.flags?.exportSource;
    if ( data._stats?.lastModifiedBy ) data._stats.lastModifiedBy = "dnd5ebuilder0000";

    // Remove empty entries in flags
    if ( !data.flags ) data.flags = {};
    Object.entries(data.flags).forEach(([key, contents]) => {
        if ( Object.keys(contents).length === 0 ) delete data.flags[key];
    });

    if ( data.system?.activation?.cost === 0 ) data.system.activation.cost = null;
    if ( data.system?.duration?.value === "0" ) data.system.duration.value = "";
    if ( data.system?.target?.value === 0 ) data.system.target.value = null;
    if ( data.system?.target?.width === 0 ) data.system.target.width = null;
    if ( data.system?.range?.value === 0 ) data.system.range.value = null;
    if ( data.system?.range?.long === 0 ) data.system.range.long = null;
    if ( data.system?.uses?.value === 0 ) data.system.uses.value = null;
    if ( data.system?.uses?.max === "0" ) data.system.duration.value = "";
    if ( data.system?.save?.dc === 0 ) data.system.save.dc = null;
    if ( data.system?.capacity?.value === 0 ) data.system.capacity.value = null;
    if ( data.system?.strength === 0 ) data.system.strength = null;

    // Remove mystery-man.svg from Actors
    if ( ["character", "npc"].includes(data.type) && data.img === "icons/svg/mystery-man.svg" ) {
        data.img = "";
        data.prototypeToken.texture.src = "";
    }

    if ( data.effects ) data.effects.forEach(i => cleanPackEntry(i, { clearSourceId: false }));
    if ( data.items ) data.items.forEach(i => cleanPackEntry(i, { clearSourceId: false }));
    if ( data.pages ) data.pages.forEach(i => cleanPackEntry(i, { ownership: -1 }));
    if ( data.system?.description?.value ) data.system.description.value = cleanString(data.system.description.value);
    if ( data.label ) data.label = cleanString(data.label);
    if ( data.name ) data.name = cleanString(data.name);
}


/**
 * Removes invisible whitespace characters and normalizes single- and double-quotes.
 * @param {string} str  The string to be cleaned.
 * @returns {string}    The cleaned string.
 */
function cleanString(str) {
    return str.replace(/\u2060/gu, "").replace(/[‘’]/gu, "'").replace(/[“”]/gu, '"');
}

await compilePack("./packs/src/classes", "./packs/classes", {recursive: true, log: true})