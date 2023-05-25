import { Model } from "objection";

class Presence extends Model {
    static get tableName() {
        return "presences";
    }

    static get idColumn() {
        return "id";
    }
}

export default Presence;
