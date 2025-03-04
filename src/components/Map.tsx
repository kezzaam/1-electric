import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix default marker issue in Leaflet
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const center: [number, number] = [-37.943471, 175.634829]; // Replace with your actual location coordinates

export default function CustomMap() {
  // Reduce z-index of map layers after mount
  useEffect(() => {
    const mapLayers = document.querySelectorAll(".leaflet-layer, .leaflet-control, .leaflet-marker-icon");
    mapLayers.forEach(layer => {
      (layer as HTMLElement).style.zIndex = "0"; // Set all layers to a lower z-index
    });
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: "300px", width: "100%", borderRadius: "8px", overflow: "hidden", zIndex: 0 }}
      scrollWheelZoom={false} // Disable scroll zoom to prevent accidental map scrolling
    >
      {/* Tile Layer (Lower z-index) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        className="leaflet-map-layer"
      />

      {/* Marker */}
      <Marker position={center} icon={customIcon}>
        <Popup>1 Electric Ltd - Bay of Plenty</Popup>
      </Marker>
    </MapContainer>
  );
}
