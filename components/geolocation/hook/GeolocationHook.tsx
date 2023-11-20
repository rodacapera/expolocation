import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import BackgroundGeolocation from 'react-native-background-geolocation';
import { sendGeolocation } from '../../api/sendLoation';

const GeolocationHook = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);
    setTimeout(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      } else {
        let location = await Location.getCurrentPositionAsync({});
        // const resultUpdateLocation = sendGeolocation(location);
        setLocation(JSON.stringify(location));
        setLoading(false);
      }
    }, 4000);
  };

  return { getLocation, loading, location, errorMsg };
};

export default GeolocationHook;
