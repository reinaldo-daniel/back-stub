import { Model } from "objection";

class Rooms extends Model {
    static get tableName() {
        return "rooms";
    }

    static get idColumn() {
        return "id";
    }
}
export default Rooms;
