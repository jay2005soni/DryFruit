// src/components/LocationMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

const LocalMap = () => {
  const position = [26.9124, 75.7873]; // Forest Hills, NY coordinates

  return (
    <section className="py-12 px-4 md:px-24 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Find Us Here</h2>
      <div className="rounded-2xl overflow-hidden shadow-md">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="h-[400px] w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>
              Own Solutions <br /> Jaipur Rajasthan
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default LocalMap;
