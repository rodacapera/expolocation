import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Location } from 'react-native-background-geolocation';
import { Response } from '../types/http';

const ResponseView = ({
  count,
  myLocation,
  response,
}: {
  count: number;
  myLocation: Location;
  response: Response;
}) => {
  return (
    <ScrollView style={{ paddingHorizontal: 30 }}>
      <Text>{count}</Text>
      <View
        style={{
          marginVertical: 20,
          marginTop: 20,
          display: 'flex',
          alignSelf: 'flex-start',
        }}
      >
        <Text
          style={{
            textAlign: 'left',
            width: 'auto',
            fontWeight: '700',
          }}
        >
          BgLocation Response:{' '}
        </Text>
      </View>
      <Text style={{ fontFamily: 'monospace', fontSize: 12 }}>
        {JSON.stringify(myLocation?.coords)}
      </Text>
      <View
        style={{
          marginVertical: 20,
          marginTop: 20,
          display: 'flex',
          alignSelf: 'flex-start',
        }}
      >
        <Text
          style={{
            textAlign: 'left',
            width: 'auto',
            fontWeight: '700',
          }}
        >
          Server Response:{' '}
        </Text>
      </View>
      <Text style={{ fontFamily: 'monospace', fontSize: 12 }}>
        {JSON.stringify(response?.location)}
      </Text>
    </ScrollView>
  );
};

export default ResponseView;
