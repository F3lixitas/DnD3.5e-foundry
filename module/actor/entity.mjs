

export class SystemActor extends Actor {

    prepareDerivedData() {

    }

    toPlainObject() {
        const result = {...this};

        result.system = this.system.toPlainObject();

        return result;
    }


}