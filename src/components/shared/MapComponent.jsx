// components/MapComponent.jsx
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ city }) => {
  const [coordinates, setCoordinates] = useState({ lat: 23.8103, lng: 90.4125 }); // Default location Dhaka

  // City er upor base kore coordinates fetch korar function
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBisSjiNfT1wtsrUkJvqWumCIdQ8LJUBPQ`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          const location = data.results[0].geometry.location;
          console.log(location)
          setCoordinates({ lat: location.lat, lng: location.lng });
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    if (city) {
      fetchCoordinates();
    }
  }, [city]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBisSjiNfT1wtsrUkJvqWumCIdQ8LJUBPQ">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={coordinates}
        zoom={10}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
