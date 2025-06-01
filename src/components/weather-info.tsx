
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { getWeatherAction, type WeatherData } from '@/actions/weather';
import { Skeleton } from '@/components/ui/skeleton';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Wind, Droplets, MapPin, HelpCircle, AlertTriangle, CloudOff, CalendarClock } from 'lucide-react';

// Dynamically get Lucide icon component by name
const getIconComponent = (iconName: string): React.ComponentType<LucideIcons.LucideProps> => {
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<LucideIcons.LucideProps>;
  return IconComponent || HelpCircle;
};

export function WeatherInfo() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdatedTime, setLastUpdatedTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getWeatherAction();
        setWeatherData(data);
        setLastUpdatedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      } catch (err) {
         console.error("Error fetching weather:", err);
        setError('Failed to fetch weather data.');
        setLastUpdatedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
     const intervalId = setInterval(fetchWeather, 30 * 60 * 1000);
     return () => clearInterval(intervalId);
  }, []);

   useEffect(() => {
       const timeUpdateInterval = setInterval(() => {
           if (!isLoading && !error && weatherData) {
              setLastUpdatedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
           }
       }, 60000);
       return () => clearInterval(timeUpdateInterval);
   }, [isLoading, error, weatherData]);


  const WeatherIcon = useMemo(() => {
    if (weatherData?.icon) {
      return getIconComponent(weatherData.icon);
    }
    return HelpCircle;
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
      </div>
    );
  };


  const renderPopoverContent = () => {
    const displayTime = (isLoading && !error) || !lastUpdatedTime ? <Skeleton className="h-3 w-16 inline-block" /> : lastUpdatedTime;
    const timeLabel = error ? "Checked:" : "Updated:";

    if (isLoading) {
      return (
         <div className="p-6 space-y-3">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-28" />
            <p className="text-xs text-muted-foreground/80 pt-3 flex items-center">
              <CalendarClock className="h-3 w-3 mr-1.5" /> {timeLabel} {displayTime}
            </p>
          </div>
      );
    }
     if (error) {
      return (
         <div className="p-6 text-sm text-destructive/90">
             {error}
             <p className="text-xs text-muted-foreground/80 pt-3 flex items-center">
                <CalendarClock className="h-3 w-3 mr-1.5" /> {timeLabel} {displayTime}
             </p>
         </div>
        );
    }
     if (!weatherData) {
       return (
         <div className="p-6 text-sm text-muted-foreground/90">
            Weather data unavailable.
            <p className="text-xs text-muted-foreground/80 pt-3 flex items-center">
                <CalendarClock className="h-3 w-3 mr-1.5" /> {timeLabel} {displayTime}
            </p>
         </div>
        );
     }

     return (
       <div className="p-6 space-y-4 text-sm">
         <div className="flex items-center gap-2.5">
            <MapPin className="h-5 w-5 text-primary/90 shrink-0"/>
            <span className="font-semibold text-lg text-foreground">{weatherData.location}</span>
         </div>

         <div className="flex items-center gap-3 my-3">
           <WeatherIcon className="h-12 w-12 text-accent shrink-0" />
           <div className="flex flex-col">
             <span className="text-3xl font-bold text-foreground">{weatherData.temp}°C</span>
             <span className="text-sm text-muted-foreground capitalize">{weatherData.description}</span>
           </div>
         </div>

        <div className="space-y-2 pt-2 border-t border-border/50">
            <div className="flex items-center gap-2.5 text-muted-foreground">
                <Droplets className="h-5 w-5 text-blue-400 shrink-0" />
                <span>Humidity: <span className="font-medium text-foreground/90">{weatherData.humidity}%</span></span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
                <Wind className="h-5 w-5 text-sky-400 shrink-0" />
                <span>Wind: <span className="font-medium text-foreground/90">{weatherData.windSpeed} km/h</span></span>
            </div>
        </div>

         <p className="text-xs text-muted-foreground/80 pt-3 flex items-center">
           <CalendarClock className="h-3 w-3 mr-1.5" /> {timeLabel} {displayTime}
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
      <PopoverContent
        className="w-auto min-w-[280px] bg-gradient-to-br from-card via-background to-background/80 dark:from-popover dark:via-background/90 dark:to-background/70 border-border/70 shadow-2xl backdrop-blur-md"
        align="end"
      >
        {renderPopoverContent()}
      </PopoverContent>
    </Popover>
  );
}
