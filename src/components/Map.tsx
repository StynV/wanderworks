'use client'

import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import { useMediaQuery } from 'react-responsive'

import { AllMaps, MapType } from '@/types/allMaps'

import YGWYS from './YGWYS'

import 'leaflet/dist/leaflet.css'

type Props = {
  className: string
  locations: AllMaps[]
}

const Map = ({ className, locations }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

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
      zoom={isMobile ? 3 : 4}
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
