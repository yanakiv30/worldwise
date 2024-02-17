/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useValues } from "../contexts/CitContext";
function Map() {
  const navigate = useNavigate();
  const { cities } = useValues();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(function() {
   if(mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  },[mapLat, mapLng])

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}    
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position = {mapPosition} />
      </MapContainer>

     
    </div>
  );
}

function ChangeCenter({position}) {
  const map= useMap();
  map.setView(position);
  return null;
}
export default Map;
