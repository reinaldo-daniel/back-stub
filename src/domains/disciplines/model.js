import { Model } from "objection";

class Disciplines extends Model {
    static get tableName() {
        return "disciplines";
    }

    static get idColumn() {
        return "id";
    }
}

export default Disciplines;
