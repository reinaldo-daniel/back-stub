import { Model } from "objection";

class StudentNote extends Model {
    static get tableName() {
        return "students_notes";
    }

    static get idColumn() {
        return "id";
    }
}

export default StudentNote;
