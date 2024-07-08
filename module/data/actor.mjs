const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;


export class ActorData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            health: new SchemaField({
                value: new NumberField({required: true, integer: true, min: 0, initial: 10}),
                min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
            })
        }
    }

    toPlainObject() {
        return {...this};
    }
}