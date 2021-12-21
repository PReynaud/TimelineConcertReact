export interface Band {
  id: string;
  name: string;
}

export function bandFromJson(fromApiEntity: any): Band {
  return { id: fromApiEntity.id, name: fromApiEntity.name };
}
