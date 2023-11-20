export interface Location {
  odometer: number;
  event: string;
  age: number;
  uuid: string;
  is_moving: boolean;
  extras: Extras;
  mock: boolean;
  timestamp: string;
  coords: Coords;
  battery: Battery;
  activity: Activity;
}

export interface Activity {
  confidence: number;
  type: string;
}

export interface Battery {
  is_charging: boolean;
  level: number;
}

export interface Coords {
  altitude: number;
  latitude: number;
  heading: number;
  altitude_accuracy: number;
  heading_accuracy: number;
  ellipsoidal_altitude: number;
  accuracy: number;
  speed_accuracy: number;
  longitude: number;
  speed: number;
  floor: null;
}

export interface Extras {}

export type GeoSwitchParams = {
  label?: string;
  thumbColor?: string;
  trackColorFalse?: string;
  trackColorTrue?: string;
  endPoint?: string;
};
