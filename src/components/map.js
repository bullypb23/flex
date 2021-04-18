import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    typeof window !== 'undefined' ? <div>
      <MapContainer center={[40.776030, -73.908140]} zoom={14} scrollWheelZoom={false} style={{ height: "400px", width: "600px" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.776030, -73.908140]}>
          <Popup>
            Flex Moving Company <br />
            21-48 35th Street, 11105 Astoria NY <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div> : null
  )
}

export default Map;
