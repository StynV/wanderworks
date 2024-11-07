'use client'

import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Popup, Polyline, Marker } from 'react-leaflet'
import { AllMaps, MapType } from '@/types/allMaps'
import YGWYS from './YGWYS'

type Props = {
  className: string
  locations: AllMaps[]
}

const Map = ({ className, locations }: Props) => {
  const limeOptions = { color: 'lime' }
  const redOptions = { color: 'red', dashArray: '5, 5' }

  const getPolyLine = (location: AllMaps, options: any) => (
    <Polyline
      key={location.id}
      pathOptions={options}
      positions={[
        [location.startlocatie.latitude, location.startlocatie.longitude],
        [location.eindlocatie.latitude, location.eindlocatie.longitude],
      ]}
    />
  )

  return (
    <MapContainer
      className={className}
      center={[
        locations[0].startlocatie.latitude,
        locations[0].startlocatie.longitude,
      ]}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(location => {
        if (location.mapType === MapType.MARKER) {
          return (
            <Marker
              key={location.id}
              position={[
                location.startlocatie.latitude,
                location.startlocatie.longitude,
              ]}
            >
              <Popup minWidth={500}>
                <YGWYS text={location.beschrijving} />
              </Popup>
            </Marker>
          )
        } else if (location.mapType === MapType.LIJN) {
          return getPolyLine(location, limeOptions)
        } else if (location.mapType === MapType.STIPPELLIJN) {
          return getPolyLine(location, redOptions)
        }
      })}
    </MapContainer>
  )
}

export default Map
