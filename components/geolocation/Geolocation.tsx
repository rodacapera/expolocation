import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { geolocationStyles } from './styles/geolocationStyles';
import GeolocationHook from './hook/GeolocationHook';

const Geolocation = () => {
  const { getLocation, loading, location, errorMsg } = GeolocationHook();

  return (
    <View>
      <Text>Get your Geolocation n</Text>
      <Text>{location}</Text>
      <TouchableOpacity style={geolocationStyles.btnGeo} onPress={getLocation}>
        {loading && <ActivityIndicator size='small' color='white' />}
        <Text style={geolocationStyles.textBtnGeo}>Get GEO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Geolocation;
