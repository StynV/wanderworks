export const ALL_MAPS_QUERY = `
query MyQuery {
  allMaps {
    id
    mapType
    startlocatie {
      latitude
      longitude
    }
    eindlocatie {
      latitude
      longitude
    }
    beschrijving
  }
}
`
