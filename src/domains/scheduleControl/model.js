import { Model } from "objection";

class ScheduleControl extends Model {
    static get tableName() {
        return "schedules_controls";
    }

    static get idColumn() {
        return "id";
    }
}

export default ScheduleControl;
