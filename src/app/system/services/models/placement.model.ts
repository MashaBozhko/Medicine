import { City } from "./city.model";
import { Country } from "./country.model";
import { District } from "./district.model";
import { Region } from "./region.model";
import { StreetType } from "./street.type.model";

export interface Placement {
    id?: number;
    country?: Country;
    city?: City;
    index?: number;
    region?: Region;
    district?: District;
    street?: string;
    street_type?: StreetType;
    home?: string;
    room?: string;
    coordinate_latitude?: number;
    coordinate_longitude?: number;
}