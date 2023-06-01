import { Model } from "objection";

class UserDiscipline extends Model {
    static get tableName() {
        return "users_disciplines";
    }

    static get idColumn() {
        return "id";
    }
}

export default UserDiscipline;
