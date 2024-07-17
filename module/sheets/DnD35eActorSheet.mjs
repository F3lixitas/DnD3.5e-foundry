
export class DnD35eActorSheet extends ActorSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['dnd35e', 'actor', 'sheet'],
            width: 1000,
            height: 600,
            tabs: [
                {
                    navSelector: '.sheet-tabs',
                    contentSelector: '.sheet-body',
                    initial: 'general',
                },
            ],
        });
    }

    get template() {
        return `systems/DnD35e/templates/actor/actor-${this.actor.type}-sheet.hbs`
    }

    async getData() {
        const context = super.getData();
        const actorData = this.document.toPlainObject();
        context.system = actorData.system;
        context.config = CONFIG.DND35E;

        if (actorData.type === 'character') {
            this._prepareItems(context);
            this._prepareCharacterData(context);
        }

        return context;
    }

    _prepareCharacterData(context) {

    }

    _prepareItems(context) {
        const spells = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
        };

        context.spells = spells;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.on('click', '.rollable', this._onRoll.bind(this));
        html.on('click', '.initiative', this._onInitiative.bind(this));
    }

    _onInitiative(event) {
        event.preventDefault();
        this.actor.rollInitiative({createCombatants: true, rerollInitiative: true});
    }

    _onRoll(event) {
        event.preventDefault();
        const element = event.currentTarget;
        const dataset = element.dataset;

        // Handle rolls that supply the formula directly.
        if (dataset.roll) {
            let label = dataset.label ? `[ability] ${dataset.label}` : '';
            let roll = new Roll(dataset.roll, this.actor.getRollData());
            roll.toMessage({
                speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                flavor: label,
                rollMode: game.settings.get('core', 'rollMode'),
            });
            return roll;
        }
    }
}