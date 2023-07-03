import lodash from "lodash";
import { Model } from "objection";

class Users extends Model {
    static get tableName() {
        return "users";
    }

    static get idColumn() {
        return "id";
    }

    get $hiddenFields() {
        return ["password"];
    }

    $formatJson(json) {
        const jsonFormatted = super.$formatJson(json);

        if (this.$hiddenFields.length) {
            return lodash.omit(jsonFormatted, this.$hiddenFields);
        }

        return jsonFormatted;
    }
}

export default Users;
