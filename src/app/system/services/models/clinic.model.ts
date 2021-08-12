import { ClinicBindingType } from "./clinic_binding_type.model";
import { ClinicContacts } from "./clinic_contacts.model";
import { ClinicDriveMap } from "./clinic_drive_map.model";
import { ClinicType } from "./clinic_type.model";
import { Placement } from "./placement.model";
import { WorkSchedule } from "./work_schedule.model";

export interface Clinic {
    id? : number;
    name? : string;
    placement? : Placement;
    clinic_type? : ClinicType;
    clinic_contacts? : ClinicContacts;
    work_schedule? : WorkSchedule;
    clinic_drive_map? : ClinicDriveMap;
    description_about? : string;
    reviews_count? : number;
    rating? : number;
    email? : string;
    logo_url? : string;
    dispensary_schedule? : WorkSchedule;
    call_home_schedule? : WorkSchedule;
    clinic_binding_type? : ClinicBindingType;
}


export interface ClinicResponse {
    id? : number;
    name? : string;
    placement_id? : number;
    clinic_type_id? : number;
    clinic_contacts_id? : number;
    work_schedule_id? : number;
    clinic_drive_map_id? : number;
    description_about? : string;
    reviews_count? : number;
    rating? : number;
    email? : string;
    logo_url? : string;
    dispensary_schedule_id? : number;
    call_home_schedule_id? : number;
    clinic_binding_type_id? : number;
    active_sign?: boolean;
}