import {ItemData} from "./item.mjs";

const {
    NumberField, SchemaField, StringField, BooleanField,
} = foundry.data.fields;

export class ClassData extends ItemData {
    static defineSchema() {
        return this.mergeSchema(super.defineSchema(), {
            level: new NumberField({required: true, nullable: false, integer: true, min: 0, initial: 1})
        });
    }
}