export const DND35E = {};

DND35E.abilities = {
    str: 'DND35E.Ability.Str.long',
    dex: 'DND35E.Ability.Dex.long',
    con: 'DND35E.Ability.Con.long',
    int: 'DND35E.Ability.Int.long',
    wis: 'DND35E.Ability.Wis.long',
    cha: 'DND35E.Ability.Cha.long',
};

DND35E.abilityAbbreviations = {
    str: 'DND35E.Ability.Str.abbr',
    dex: 'DND35E.Ability.Dex.abbr',
    con: 'DND35E.Ability.Con.abbr',
    int: 'DND35E.Ability.Int.abbr',
    wis: 'DND35E.Ability.Wis.abbr',
    cha: 'DND35E.Ability.Cha.abbr',
};

DND35E.tabnames = {
    general: 'DND35E.TabName.General',
    skills: 'DND35E.TabName.Skills',
    spells: 'DND35E.TabName.Spells',
    equipment: 'DND35E.TabName.Equipment',
    inventory: 'DND35E.TabName.Inventory',
    description: 'DND35E.TabName.Description'
};

DND35E.classes = {
    barbarian: 'DND35E.Classes.Barbarian',
    bard: 'DND35E.Classes.Bard',
    cleric: 'DND35E.Classes.Cleric',
    druid: 'DND35E.Classes.Druid',
    fighter: 'DND35E.Classes.Fighter',
    monk: 'DND35E.Classes.Monk',
    paladin: 'DND35E.Classes.Paladin',
    ranger: 'DND35E.Classes.Ranger',
    rogue: 'DND35E.Classes.Rogue',
    sorcerer: 'DND35E.Classes.Sorcerer',
    wizard: 'DND35E.Classes.Wizard'
}

DND35E.races = {
    noRace: "DND35E.RaceNames.NoRace",
    human: "DND35E.RaceNames.Human",
    dwarf: "DND35E.RaceNames.Dwarf",
    elf: "DND35E.RaceNames.Elf",
    gnome: "DND35E.RaceNames.Gnome",
    halfElf: "DND35E.RaceNames.HalfElf",
    halfOrc: "DND35E.RaceNames.HalfOrc",
    halfling: "DND35E.RaceNames.Halfling"
}

DND35E.skillNames = {
    appraise: 'DND35E.SkillNames.Appraise',
    balance: 'DND35E.SkillNames.Balance',
    bluff: 'DND35E.SkillNames.Bluff',
    climb: 'DND35E.SkillNames.Climb',
    concentration: 'DND35E.SkillNames.Concentration',
    craft: 'DND35E.SkillNames.Craft',
    decipherScript: 'DND35E.SkillNames.DecipherScript',
    diplomacy: 'DND35E.SkillNames.Diplomacy',
    disableDevice: 'DND35E.SkillNames.DisableDevice',
    disguise: 'DND35E.SkillNames.Disguise',
    escapeArtist: 'DND35E.SkillNames.EscapeArtist',
    forgery: 'DND35E.SkillNames.Forgery',
    gatherInformation: 'DND35E.SkillNames.GatherInformation',
    handleAnimal: 'DND35E.SkillNames.HandleAnimal',
    heal: 'DND35E.SkillNames.Heal',
    hide: 'DND35E.SkillNames.Hide',
    intimidate: 'DND35E.SkillNames.Intimidate',
    jump: 'DND35E.SkillNames.Jump',
    knowledge: 'DND35E.SkillNames.Knowledge',
    listen: 'DND35E.SkillNames.Listen',
    moveSilently: 'DND35E.SkillNames.MoveSilently',
    openLock: 'DND35E.SkillNames.OpenLock',
    perform: 'DND35E.SkillNames.Perform',
    profession: 'DND35E.SkillNames.Profession',
    ride: 'DND35E.SkillNames.Ride',
    search: 'DND35E.SkillNames.Search',
    senseMotive: 'DND35E.SkillNames.SenseMotive',
    sleightOfHand: 'DND35E.SkillNames.SleightOfHand',
    spellcraft: 'DND35E.SkillNames.Spellcraft',
    spot: 'DND35E.SkillNames.Spot',
    survival: 'DND35E.SkillNames.Survival',
    swim: 'DND35E.SkillNames.Swim',
    tumble: 'DND35E.SkillNames.Tumble',
    useMagicDevice: 'DND35E.SkillNames.UseMagicDevice',
    useRope: 'DND35E.SkillNames.UseRope'
}

DND35E.skillAbilities = {
    appraise: 'int',
    balance: 'dex',
    bluff: 'cha',
    climb: 'str',
    concentration: 'con',
    craft: 'int',
    decipherScript: 'int',
    diplomacy: 'cha',
    disableDevice: 'int',
    disguise: 'cha',
    escapeArtist: 'dex',
    forgery: 'int',
    gatherInformation: 'cha',
    handleAnimal: 'cha',
    heal: 'wis',
    hide: 'dex',
    intimidate: 'cha',
    jump: 'str',
    knowledge: 'int',
    listen: 'wis',
    moveSilently: 'dex',
    openLock: 'dex',
    perform: 'cha',
    profession: 'wis',
    ride: 'dex',
    search: 'int',
    senseMotive: 'wis',
    sleightOfHand: 'dex',
    spellcraft: 'int',
    spot: 'wis',
    survival: 'wis',
    swim: 'str',
    tumble: 'dex',
    useMagicDevice: 'cha',
    useRope: 'dex'
}

DND35E.skillArmorPenalty = {
    appraise: false,
    balance: true,
    bluff: false,
    climb: true,
    concentration: false,
    craft: false,
    decipherScript: false,
    diplomacy: false,
    disableDevice: false,
    disguise: false,
    escapeArtist: true,
    forgery: false,
    gatherInformation: false,
    handleAnimal: false,
    heal: false,
    hide: true,
    intimidate: false,
    jump: true,
    knowledge: false,
    listen: false,
    moveSilently: true,
    openLock: false,
    perform: false,
    profession: false,
    ride: false,
    search: false,
    senseMotive: false,
    sleightOfHand: true,
    spellcraft: false,
    spot: false,
    survival: false,
    swim: true,
    tumble: true,
    useMagicDevice: false,
    useRope: false
}

DND35E.skillUntrainedUse = {
    appraise: true,
    balance: true,
    bluff: true,
    climb: true,
    concentration: true,
    craft: true,
    decipherScript: false,
    diplomacy: true,
    disableDevice: false,
    disguise: true,
    escapeArtist: true,
    forgery: true,
    gatherInformation: true,
    handleAnimal: false,
    heal: true,
    hide: true,
    intimidate: true,
    jump: true,
    knowledge: false,
    listen: true,
    moveSilently: true,
    openLock: false,
    perform: false,
    profession: false,
    ride: true,
    search: true,
    senseMotive: true,
    sleightOfHand: false,
    spellcraft: false,
    spot: true,
    survival: true,
    swim: true,
    tumble: true,
    useMagicDevice: false,
    useRope: true
}

DND35E.skills = {
    appraise: {
        name: 'DND35E.SkillNames.Appraise',
        ability: DND35E.abilityAbbreviations.int,
        untrainedUse: true,
        armorPenalty: false
    },
    balance: {
        name: 'DND35E.SkillNames.Balance',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: true,
        armorPenalty: true
    },
    bluff: {
        name: 'DND35E.SkillNames.Bluff',
        ability: DND35E.abilityAbbreviations.cha,
        untrainedUse: true,
        armorPenalty: false
    },
    climb: {
        name: 'DND35E.SkillNames.Climb',
        ability: DND35E.abilityAbbreviations.str,
        untrainedUse: true,
        armorPenalty: true
    },
    concentration: {
        name: 'DND35E.SkillNames.Concentration',
        ability: DND35E.abilityAbbreviations.con,
        untrainedUse: true,
        armorPenalty: false
    },
    craft: {
        name: 'DND35E.SkillNames.Craft',
        ability: DND35E.abilityAbbreviations.int,
        untrainedUse: true,
        armorPenalty: false
    },
    decipherScript: {
        name: 'DND35E.SkillNames.DecipherScript',
        ability: DND35E.abilityAbbreviations.int,
        untrainedUse: false,
        armorPenalty: false
    },
    diplomacy: {
        name: 'DND35E.SkillNames.Diplomacy',
        ability: DND35E.abilityAbbreviations.cha,
        untrainedUse: true,
        armorPenalty: false
    },
    disableDevice: {
        name: 'DND35E.SkillNames.DisableDevice',
        ability: DND35E.abilityAbbreviations.int,
        untrainedUse: false,
        armorPenalty: false
    },
    disguise: {
        name: 'DND35E.SkillNames.Disguise',
        ability: DND35E.abilityAbbreviations.cha,
        untrainedUse: true,
        armorPenalty: false
    },
    escapeArtist: {
        name: 'DND35E.SkillNames.EscapeArtist',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: true,
        armorPenalty: true
    },
    forgery: {
        name: 'DND35E.SkillNames.Forgery',
        ability: DND35E.abilityAbbreviations.int,
        untrainedUse: true,
        armorPenalty: false
    },
    gatherInformation: {
        name: 'DND35E.SkillNames.GatherInformation',
        ability: DND35E.abilityAbbreviations.cha,
        untrainedUse: true,
        armorPenalty: false
    },
    handleAnimal: {
        name: 'DND35E.SkillNames.HandleAnimal',
        ability: DND35E.abilityAbbreviations.cha,
        untrainedUse: false,
        armorPenalty: false
    },
    heal: {
        name: 'DND35E.SkillNames.Heal',
        ability: DND35E.abilityAbbreviations.wis,
        untrainedUse: true,
        armorPenalty: false
    },
    hide: {
        name: 'DND35E.SkillNames.Hide',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: true,
        armorPenalty: true
    },
    intimidate: {
        name: 'DND35E.SkillNames.Intimidate',
        ability: DND35E.abilityAbbreviations.cha,
        untrainedUse: true,
        armorPenalty: false
    },
    jump: {
        name: 'DND35E.SkillNames.Jump',
        ability: DND35E.abilityAbbreviations.str,
        untrainedUse: true,
        armorPenalty: true
    },
    knowledge: {
        name: 'DND35E.SkillNames.Knowledge',
        ability: DND35E.abilityAbbreviations.int,
        untrainedUse: false,
        armorPenalty: false
    },
    listen: {
        name: 'DND35E.SkillNames.Listen',
        ability: DND35E.abilityAbbreviations.wis,
        untrainedUse: true,
        armorPenalty: false
    },
    moveSilently: {
        name: 'DND35E.SkillNames.MoveSilently',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: true,
        armorPenalty: true
    },
    openLock: {
        name: 'DND35E.SkillNames.OpenLock',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: false,
        armorPenalty: false
    },
    perform: {
        name: 'DND35E.SkillNames.Perform',
        ability: DND35E.abilityAbbreviations.cha,
        untrainedUse: false,
        armorPenalty: false
    },
    profession: {
        name: 'DND35E.SkillNames.Profession',
        ability: DND35E.abilityAbbreviations.wis,
        untrainedUse: false,
        armorPenalty: false
    },
    ride: {
        name: 'DND35E.SkillNames.Ride',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: true,
        armorPenalty: false
    },
    search: {
        name: 'DND35E.SkillNames.Search',
        ability: DND35E.abilityAbbreviations.int,
        untrainedUse: true,
        armorPenalty: false
    },
    senseMotive: {
        name: 'DND35E.SkillNames.SenseMotive',
        ability: DND35E.abilityAbbreviations.wis,
        untrainedUse: true,
        armorPenalty: false
    },
    sleightOfHand: {
        name: 'DND35E.SkillNames.SleightOfHand',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: false,
        armorPenalty: true
    },
    spellcraft: {
        name: 'DND35E.SkillNames.Spellcraft',
        ability: DND35E.abilityAbbreviations.int,
        untrainedUse: false,
        armorPenalty: false
    },
    spot: {
        name: 'DND35E.SkillNames.Spot',
        ability: DND35E.abilityAbbreviations.wis,
        untrainedUse: true,
        armorPenalty: false
    },
    survival: {
        name: 'DND35E.SkillNames.Survival',
        ability: DND35E.abilityAbbreviations.wis,
        untrainedUse: true,
        armorPenalty: false
    },
    swim: {
        name: 'DND35E.SkillNames.Swim',
        ability: DND35E.abilityAbbreviations.str,
        untrainedUse: true,
        armorPenalty: true
    },
    tumble: {
        name: 'DND35E.SkillNames.Tumble',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: true,
        armorPenalty: true
    },
    useMagicDevice: {
        name: 'DND35E.SkillNames.UseMagicDevice',
        ability: DND35E.abilityAbbreviations.cha,
        untrainedUse: false,
        armorPenalty: false
    },
    useRope: {
        name: 'DND35E.SkillNames.UseRope',
        ability: DND35E.abilityAbbreviations.dex,
        untrainedUse: true,
        armorPenalty: false
    }

}