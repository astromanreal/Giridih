
'use server';

export interface WeatherData {
  temp: number; // Celsius
  description: string;
  humidity: number; // Percentage
  windSpeed: number; // km/h
  icon: string; // Lucide icon name
  location: string;
}

// Helper function to map Visual Crossing icons to Lucide icons
function mapIconToLucide(vcIconName: string | null | undefined): string {
  if (!vcIconName) return 'Cloud'; // Default if no icon name is provided

  const icon = vcIconName.toLowerCase();
  if (icon.includes('clear-day')) return 'Sun';
  if (icon.includes('clear-night')) return 'Moon';
  if (icon.includes('partly-cloudy-day')) return 'CloudSun';
  if (icon.includes('partly-cloudy-night')) return 'CloudMoon';
  if (icon.includes('cloudy')) return 'Cloud';
  if (icon.includes('rain')) return 'CloudRain';
  if (icon.includes('showers-day') || icon.includes('showers-night')) return 'CloudDrizzle';
  if (icon.includes('snow')) return 'CloudSnow';
  if (icon.includes('sleet')) return 'CloudHail';
  if (icon.includes('wind')) return 'Wind';
  if (icon.includes('fog')) return 'CloudFog';
  if (icon.includes('thunderstorm') || icon.includes('thunder')) return 'CloudLightning';
  
  return 'Cloud'; // A generic fallback for unmapped icons
}

// WARNING: API Key is hardcoded here from the prompt. 
// For production, store API keys in environment variables (e.g., .env.local)
// and access via process.env.VISUAL_CROSSING_API_KEY.
const API_KEY = 'JASE4LNQ7N4GD4TQFJEYC8NTJ';
const WEATHER_API_URL_BASE = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

// Fetches real-time weather data from Visual Crossing API
export async function getWeatherAction(locationQuery: string = 'Giridih'): Promise<WeatherData> {
  // The API URL provided in the prompt is specific to 'giridih'.
  // This implementation uses 'giridih' regardless of locationQuery to match the prompt's URL.
  // To make location dynamic, the API URL construction would need to use locationQuery.
  const targetLocation = 'giridih';
  const apiUrl = `${WEATHER_API_URL_BASE}${targetLocation}?unitGroup=us&key=${API_KEY}&contentType=json&include=current`;

  try {
    const response = await fetch(apiUrl, { cache: 'no-store' }); // Use no-store for real-time data

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Weather API Error (${response.status}): ${errorBody}`);
      throw new Error(`Failed to fetch weather data (Status: ${response.status})`);
    }

    const data = await response.json();

    if (!data.currentConditions) {
      console.error('Weather API Error: currentConditions not found in response.', data);
      throw new Error('Invalid weather data format from API.');
    }

    const current = data.currentConditions;

    // Convert Fahrenheit to Celsius
    const tempF = current.temp;
    const tempC = Math.round(((tempF - 32) * 5) / 9);

    // Convert mph to km/h
    const windSpeedMph = current.windspeed;
    const windSpeedKmh = Math.round(windSpeedMph * 1.60934);

    return {
      temp: tempC,
      description: current.conditions || 'N/A',
      humidity: Math.round(current.humidity),
      windSpeed: windSpeedKmh,
      icon: mapIconToLucide(current.icon),
      location: data.resolvedAddress || targetLocation.charAt(0).toUpperCase() + targetLocation.slice(1),
    };
  } catch (error) {
    console.error('Error in getWeatherAction:', error);
    // Let the client-side component (WeatherInfo.tsx) catch this and set its error state.
    if (error instanceof Error) {
      throw new Error(`Weather service error: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching weather data.');
  }
}
