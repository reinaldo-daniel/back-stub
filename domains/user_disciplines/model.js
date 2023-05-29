import { Model } from "objection";

class UserDiscipline extends Model {
    static get tableName() {
        return "user_discipline";
    }

    static get idColumn() {
        return "id";
    }
}

export default UserDiscipline;
