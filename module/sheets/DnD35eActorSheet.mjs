
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
        html.on('click', '.alignment-field', this._onAlignmentClicked.bind(this));
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
            let label = dataset.label ? `Ability roll : ${dataset.label}` : '';
            let roll = new Roll(dataset.roll, this.actor.getRollData());
            roll.toMessage({
                speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                flavor: label,
                rollMode: game.settings.get('core', 'rollMode'),
            });
            return roll;
        }
    }

    async _onAlignmentClicked(event) {
        event.preventDefault();

        console.log(this.actor);

        const template = "systems/DnD35e/templates/pop-ups/select-alignment.hbs";
        const html = await renderTemplate(template, {});

        return new Promise(resolve => {
            const data = {
                title: "Alignment selection",
                content: html,
                buttons: {
                    ce: {
                        label: "Chaotic-Evil",
                        callback: html => resolve(this._processAlignment(0))
                    },
                    cn: {
                        label: "Chaotic-Neutral",
                        callback: html => resolve(this._processAlignment(1))
                    },
                    cg: {
                        label: "Chaotic-Good",
                        callback: html => resolve(this._processAlignment(2))
                    },
                    ne: {
                        label: "Neutral-Evil",
                        callback: html => resolve(this._processAlignment(3))
                    },
                    n: {
                        label: "Neutral",
                        callback: html => resolve(this._processAlignment(4))
                    },
                    ng: {
                        label: "Neutral-Good",
                        callback: html => resolve(this._processAlignment(5))
                    },
                    le: {
                        label: "Lawful-Evil",
                        callback: html => resolve(this._processAlignment(6))
                    },
                    ln: {
                        label: "Lawful-Neutral",
                        callback: html => resolve(this._processAlignment(7))
                    },
                    lg: {
                        label: "Lawful-Good",
                        callback: html => resolve(this._processAlignment(8))
                    },
                    cancel: {
                        label: "Cancel",
                        callback: html => resolve({cancelled: true})
                    }
                },
                default: "n",
                close: () => resolve({cancelled: true})
            };

            new Dialog(data, null).render(true);
        })
    }

    _processAlignment(value) {

        console.log(value);
        switch (value) {
            case 0:
                this.actor.system.alignment.goodness = 0;
                this.actor.system.alignment.lawfulness = 0;
                break;
            case 1:
                this.actor.system.alignment.goodness = 1;
                this.actor.system.alignment.lawfulness = 0;
                break;
            case 2:
                this.actor.system.alignment.goodness = 2;
                this.actor.system.alignment.lawfulness = 0;
                break;
            case 3:
                this.actor.system.alignment.goodness = 0;
                this.actor.system.alignment.lawfulness = 1;
                break;
            case 4:
                this.actor.system.alignment.goodness = 1;
                this.actor.system.alignment.lawfulness = 1;
                break;
            case 5:
                this.actor.system.alignment.goodness = 2;
                this.actor.system.alignment.lawfulness = 1;
                break;
            case 6:
                this.actor.system.alignment.goodness = 0;
                this.actor.system.alignment.lawfulness = 2;
                break;
            case 7:
                this.actor.system.alignment.goodness = 1;
                this.actor.system.alignment.lawfulness = 2;
                break;
            default:
                this.actor.system.alignment.goodness = 2;
                this.actor.system.alignment.lawfulness = 2;
        }
    }
}