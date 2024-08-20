const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

export class ItemData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            name: new StringField(),
            description: new StringField()
        }
    }

    toPlainObject() {
        return {...this};
    }
}