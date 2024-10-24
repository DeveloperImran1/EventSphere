// components/Map.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Marker er default icon setup (eta fix kora jonne)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LeafLetMap = ({ city }) => {
    const [position, setPosition] = useState([23.8103, 90.4125]); // Default Dhaka er lat, lon

    useEffect(() => {
        const fetchCityLocation = async () => {
            if (city) {
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
                    );
                    const data = await response.json();

                    // First item e jodi city thake, tar lat lon nite hobe
                    if (data.length > 0) {
                        const { lat, lon } = data[0];
                        setPosition([lat, lon]);
                    }
                } catch (error) {
                    console.error('Error fetching city data:', error);
                }
            }
        };

        fetchCityLocation();
    }, [city]); // city change hole e effect run hobe

    return (
        <div style={{ height: '600px' }}>
            <MapContainer center={position} zoom={12} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© OpenStreetMap contributors'
                />
                <Marker position={position}>
                    <Popup>{city}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LeafLetMap;
