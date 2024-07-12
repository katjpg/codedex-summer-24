'use client';

import React, { useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 40.6828,
  lng: -73.9957,
};

const GoogleMapComponent: React.FC = () => {
  const apiKey = useMemo(() => process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '', []);

  console.log('API Key length:', apiKey.length); // For debugging

  if (!apiKey) {
    console.error('Google Maps API key is not set');
    return <div>Error loading map: API key is missing</div>;
  }

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      onError={(error) => console.error("LoadScript Error:", error)}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;