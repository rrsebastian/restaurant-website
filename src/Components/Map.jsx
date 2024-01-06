import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../assets/marker.png";

const position = [51.505, -0.19];

function Map() {
  return (
    <MapContainer
      className="map-container"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={position}
        icon={L.icon({
          iconUrl: markerIcon,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        })}
      >
        <Popup>London, Palace Green</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
