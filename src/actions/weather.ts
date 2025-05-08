'use server';

export interface WeatherData {
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string; // Icon name from lucide-react
  location: string;
}

// Simulate fetching weather data
export async function getWeatherAction(location: string = 'Giridih'): Promise<WeatherData> {
  // In a real app, fetch from a weather API using an API key stored securely
  console.log(`Fetching weather for ${location}...`);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

  // Simulate different weather conditions randomly for demo
  const randomCondition = Math.random();
  let data: WeatherData;

  if (randomCondition < 0.3) {
    data = {
      temp: Math.floor(Math.random() * 5 + 28), // 28-32 C
      description: 'Sunny',
      humidity: Math.floor(Math.random() * 20 + 40), // 40-60%
      windSpeed: Math.floor(Math.random() * 5 + 5), // 5-10 km/h
      icon: 'Sun',
      location: location,
    };
  } else if (randomCondition < 0.7) {
    data = {
      temp: Math.floor(Math.random() * 4 + 25), // 25-28 C
      description: 'Partly Cloudy',
      humidity: Math.floor(Math.random() * 15 + 55), // 55-70%
      windSpeed: Math.floor(Math.random() * 6 + 7), // 7-13 km/h
      icon: 'CloudSun',
      location: location,
    };
  } else {
     data = {
      temp: Math.floor(Math.random() * 3 + 23), // 23-25 C
      description: 'Cloudy',
      humidity: Math.floor(Math.random() * 10 + 70), // 70-80%
      windSpeed: Math.floor(Math.random() * 7 + 10), // 10-17 km/h
      icon: 'Cloud',
      location: location,
    };
  }

  // Simulate potential error
  // if (Math.random() > 0.9) {
  //    throw new Error("Simulated weather API failure.");
  // }

  return data;
}
