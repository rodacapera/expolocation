import { StyleSheet } from 'react-native';

export const geolocationStyles = StyleSheet.create({
  contentSwitch: {},
  containerSwitch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGeo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007cff',
    padding: 20,
    borderRadius: 8,
    marginVertical: 20,
  },
  textBtnGeo: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 6,
  },
});
