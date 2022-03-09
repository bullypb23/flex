import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useWindowSize from '../utils/useWindowSize';

const Map = ({ mapWidth }) => {
  const { width } = useWindowSize();

  return (
    typeof window !== 'undefined' ? (
      <div className="map-container">
        <MapContainer center={[40.776030, -73.908140]} zoom={14} scrollWheelZoom={false} style={{ height: "450px", width: width > 1200 ? "800px" : width > 768 && width < 1200 ? "500px" : `${mapWidth}px` }}>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            maxZoom={20}
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
