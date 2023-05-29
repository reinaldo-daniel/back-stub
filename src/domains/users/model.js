import { Model } from "objection";

class Users extends Model {
    static get tableName() {
        return "users";
    }

    static get idColumn() {
        return "id";
    }
}

export default Users;
