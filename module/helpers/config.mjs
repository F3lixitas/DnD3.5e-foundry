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

DND35E.skillNames = {
    appraise: 'DND35E.SkillNames.Appraise',
    balance: 'DND35E.SkillNames.Balance',
    bluff: 'DND35E.SkillNames.Bluff',
    climb: 'DND35E.SkillNames.Climb',
    concentration: 'DND35E.SkillNames.Concentration',
}

DND35E.skillAbilities = {
    appraise: DND35E.abilityAbbreviations.int,
    balance: DND35E.abilityAbbreviations.dex,
    bluff: DND35E.abilityAbbreviations.cha,
    climb: DND35E.abilityAbbreviations.str,
    concentration: DND35E.abilityAbbreviations.con,
}

DND35E.skillArmorPenalty = {
    appraise: false,
    balance: true,
    bluff: false,
    climb: true,
    concentration: false,
}

DND35E.skillUntrainedUse = {
    appraise: true,
    balance: true,
    bluff: true,
    climb: true,
    concentration: true,
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
    }
}