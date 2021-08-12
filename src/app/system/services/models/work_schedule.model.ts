import { WorkTime } from "./work_time.model";

export interface WorkSchedule {
    id?: number
    worker_type?: string;
    worker_id?: number;
    work_time?: WorkTime[];
}