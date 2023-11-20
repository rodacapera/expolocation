export interface Response {
  user_id: number;
  location: Location[];
  device_id: number;
  id: number;
}

export interface Location {
  extras?: Extras;
  mock?: boolean;
  coords: Coords;
  is_moving: boolean;
  age: number;
  odometer: number;
  uuid: string;
  event?: string;
  battery: Battery;
  activity: Activity;
  timestamp: string;
}

export interface Activity {
  type: string;
  confidence: number;
}

export interface Battery {
  level: number;
  is_charging: boolean;
}

export interface Coords {
  speed_accuracy: number;
  speed: number;
  longitude: number;
  ellipsoidal_altitude: number;
  floor: null;
  heading_accuracy: number;
  latitude: number;
  accuracy: number;
  altitude_accuracy: number;
  altitude: number;
  heading: number;
}

export interface Extras {}
