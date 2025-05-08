'use client';

import React, { useState, useEffect, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { getWeatherAction, type WeatherData } from '@/actions/weather';
import { Skeleton } from '@/components/ui/skeleton';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Wind, Droplets, MapPin, HelpCircle, AlertTriangle, CloudOff } from 'lucide-react'; // Import HelpCircle instead of CloudQuestion

// Dynamically get Lucide icon component by name
const getIconComponent = (iconName: string): React.ComponentType<LucideIcons.LucideProps> => {
  // Use a type assertion here
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<LucideIcons.LucideProps>;
  return IconComponent || HelpCircle; // Fallback icon changed to HelpCircle
};

export function WeatherInfo() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdatedTime, setLastUpdatedTime] = useState<string | null>(null); // State for client-side time

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getWeatherAction(); // Call the server action
        setWeatherData(data);
        // Set time only after data is fetched and component is mounted
        setLastUpdatedTime(new Date().toLocaleTimeString());
      } catch (err) {
         console.error("Error fetching weather:", err);
        setError('Failed to fetch weather data.'); // Set error message
        setLastUpdatedTime(new Date().toLocaleTimeString()); // Also set time on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
     // Optional: Refresh weather every 30 minutes
     const intervalId = setInterval(fetchWeather, 30 * 60 * 1000);
     return () => clearInterval(intervalId);
  }, []);

   // Effect to update time periodically without re-fetching (optional)
   useEffect(() => {
       const timeUpdateInterval = setInterval(() => {
           if (!isLoading && !error && weatherData) { // Only update time if not loading and data exists
              setLastUpdatedTime(new Date().toLocaleTimeString());
           }
       }, 60000); // Update every minute
       return () => clearInterval(timeUpdateInterval);
   }, [isLoading, error, weatherData]); // Re-run if loading state or data changes


  const WeatherIcon = useMemo(() => {
    if (weatherData?.icon) {
      return getIconComponent(weatherData.icon);
    }
    return HelpCircle; // Default fallback changed to HelpCircle
  }, [weatherData?.icon]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center space-x-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-4 w-10" />
        </div>
      );
    }

    if (error) {
       return (
         <div className="flex items-center space-x-2 text-destructive">
           <AlertTriangle className="h-5 w-5" />
           <span className="text-xs">Error</span>
         </div>
       );
    }

    if (!weatherData) {
      return (
        <div className="flex items-center space-x-2 text-muted-foreground">
          <CloudOff className="h-5 w-5" />
           <span className="text-xs">N/A</span>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-1">
        <WeatherIcon className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium">{weatherData.temp}°C</span>
        {/* Optional: Add location to the trigger button if space allows */}
        {/* <span className="text-xs text-muted-foreground hidden sm:inline">in {weatherData.location}</span> */}
      </div>
    );
  };


  const renderPopoverContent = () => {
    // Display loading state for time until it's ready
    const displayTime = (isLoading && !error) || !lastUpdatedTime ? <Skeleton className="h-3 w-16 inline-block" /> : lastUpdatedTime;
    const timeLabel = error ? "Last checked:" : "Last updated:";

    if (isLoading) {
      return (
         <div className="p-4 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
            <p className="text-xs text-muted-foreground pt-2">{timeLabel} {displayTime}</p>
          </div>
      );
    }
     if (error) {
      return (
         <div className="p-4 text-sm text-destructive">
             {error}
             <p className="text-xs text-muted-foreground pt-2">{timeLabel} {displayTime}</p>
         </div>
        );
    }
     if (!weatherData) {
       return (
         <div className="p-4 text-sm text-muted-foreground">
            Weather data unavailable.
            <p className="text-xs text-muted-foreground pt-2">{timeLabel} {displayTime}</p>
         </div>
        );
     }

     return (
       <div className="p-4 space-y-2">
         <div className="flex items-center gap-2 font-semibold">
            <MapPin className="h-4 w-4 text-secondary"/> {weatherData.location}
         </div>
         <div className="flex items-center gap-2 text-lg">
           <WeatherIcon className="h-6 w-6 text-primary" />
           <span>{weatherData.temp}°C, {weatherData.description}</span>
         </div>
         <div className="text-sm text-muted-foreground space-y-1">
           <div className="flex items-center gap-2">
             <Droplets className="h-4 w-4" /> Humidity: {weatherData.humidity}%
           </div>
           <div className="flex items-center gap-2">
             <Wind className="h-4 w-4" /> Wind: {weatherData.windSpeed} km/h
           </div>
         </div>
         {/* Render time only when available */}
         <p className="text-xs text-muted-foreground pt-2">
            {timeLabel} {displayTime}
         </p>
       </div>
     );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-auto p-1 md:p-2" aria-label="Current Weather">
           {renderContent()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto" align="end">
        {renderPopoverContent()}
      </PopoverContent>
    </Popover>
  );
}
