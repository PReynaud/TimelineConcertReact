export interface Place {
  id: string;
  name: string;
  address?: string;
  zipCode?: string;
  town?: string;
  country?: string;
}

export function placeFromJson(fromApiEntity: any): Place {
  return {
    id: fromApiEntity.id,
    name: fromApiEntity.name,
    address: fromApiEntity.address,
    zipCode: fromApiEntity.zipCode,
    town: fromApiEntity.town,
    country: fromApiEntity.country
  };
}

export function displayPlace(place: Place): string {
  if (place.town && place.country) {
    return `${place.name}, ${place.town}, ${place.country}`;
  } else if (place.country) {
    return `${place.name}, ${place.country}`;
  } else {
    return `${place.name}`;
  }
}
