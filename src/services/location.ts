/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Represents information about a location, including its name and description.
 */
export interface LocationInfo {
  /**
   * The name of the location.
   */
  name: string;
  /**
   * A description of the location.
   */
  description: string;
  /**
   * Location of the point of interest
   */
  location: Location;
}

/**
 * Asynchronously retrieves information for a given location.
 *
 * @param locationName The name of the location for which to retrieve information.
 * @returns A promise that resolves to a LocationInfo object containing name, description, and coordinates.
 */
export async function getLocationInfo(locationName: string): Promise<LocationInfo> {
  // TODO: Implement this by calling an API.

  return {
    name: locationName,
    description: 'This is a stubbed location description for ' + locationName,
    location: {
      lat: 24.29,
      lng: 86.30
    }
  };
}
