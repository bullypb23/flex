import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useWindowSize from '../utils/useWindowSize';

const Map = ({ mapWidth }) => {
  const { width } = useWindowSize();
  return (
    typeof window !== 'undefined' ? (
      <div className="map-container">
        <MapContainer center={[40.776030, -73.908140]} zoom={14} scrollWheelZoom={false} style={{ height: "350px", width: width > 767 ? "500px" : `${mapWidth}px` }}>
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
      </div>
    ) : <div></div>
  )
}

export default Map;
