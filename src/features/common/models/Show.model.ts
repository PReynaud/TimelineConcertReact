import { Band, bandFromJson } from './Band.model';
import { Place, placeFromJson } from './Place.model';

export interface Show {
  id: string;
  date: string;
  band: Band;
  place?: Place;
}

export function showfromJson(fromApiEntity: any): Show {
  return {
    id: fromApiEntity.id,
    date: fromApiEntity.date,
    band: bandFromJson(fromApiEntity.band),
    place: fromApiEntity.place ? placeFromJson(fromApiEntity.place) : undefined
  };
}
