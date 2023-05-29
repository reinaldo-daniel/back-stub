import { Model } from "objection";

class StudentNote extends Model {
    static get tableName() {
        return "student_note";
    }

    static get idColumn() {
        return "id";
    }
}

export default StudentNote;
