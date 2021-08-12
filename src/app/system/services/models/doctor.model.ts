import { WorkSchedule } from "./work_schedule.model";
import { WorkTime } from "./work_time.model";

export interface Doctor {
id?: number;
certificate?: any;
image_url?: string;
first_name?: string;
last_name?: string;
patronymic?: string;
specialization?: any;
work_experience?: number;
work_phone?: string;
post?: string;
work_schedule?: WorkSchedule;
}