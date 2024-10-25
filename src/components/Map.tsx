'use client'

import 'leaflet/dist/leaflet.css'

import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Popup, Polyline, Marker } from 'react-leaflet'
import Image from 'next/image'

type Props = {
  className: string
}

const Map = ({ className }: Props) => {
  const center: LatLngExpression = [64.128288, -21.827774]
  const antwerp: LatLngExpression = [51.21989, 4.40346]

  const polyline: LatLngExpression[] = [center, antwerp]

  const limeOptions = { color: 'lime' }

  return (
    <MapContainer
      className={className}
      center={center}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup minWidth={500}>
          <Image
            src="/reykjavik.jpg"
            alt="reykjavik"
            width={1000}
            height={1000}
            className="mb-4"
          />
          Reykjavik
        </Popup>
      </Marker>
      <Marker position={antwerp}>
        <Popup>Antwerp</Popup>
      </Marker>
      <Polyline pathOptions={limeOptions} positions={polyline} />
    </MapContainer>
  )
}

export default Map
