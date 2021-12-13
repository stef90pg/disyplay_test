import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import iconMark from '../../img/map-c.png';

const GooMaps = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDDYNkKTGejAEWAviNWrJHp8l5YeZZ4xr0',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        center={{
          lat: 42.44,
          lng: 19.24,
        }}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker icon={iconMark} name={'Current location'} />
      </GoogleMap>
    </>
  ) : (
    ''
  );
};

export default React.memo(GooMaps);
