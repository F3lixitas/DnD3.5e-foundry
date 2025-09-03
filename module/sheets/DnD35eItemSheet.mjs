export class DnD35eItemSheet extends ItemSheet {

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['dnd35e', 'item', 'sheet'],
            width: 1000,
            height: 600,
        });
    }

    get template() {
        return `systems/DnD35e/templates/items/item-${this.item.type}-sheet.hbs`
    }

    async getData() {
        const context = super.getData();
        const actorData = this.document.toPlainObject();
        context.system = actorData.system;
        context.config = CONFIG.DND35E;

        return context;
    }
}