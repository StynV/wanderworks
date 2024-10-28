export enum MapType {
  MARKER = 'Marker',
  LIJN = 'Lijn',
  STIPPELLIJN = 'Stippellijn',
}

export interface Locatie {
  latitude: number
  longitude: number
}

export interface AllMaps {
  id: string
  mapType: MapType
  startlocatie: Locatie
  eindlocatie: Locatie
  beschrijving: string
}
