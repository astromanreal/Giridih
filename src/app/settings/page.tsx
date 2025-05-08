
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Paintbrush, Moon, Sun, Text, Palette } from 'lucide-react'; // Removed Laptop icon
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define color theme options (matches CSS variables structure)
const colorThemes = [
  {
    name: 'Default',
    id: 'default',
    variables: {
        // Light mode base vars
        '--background': '40 33% 97%',
        '--foreground': '210 15% 25%',
        '--card': '0 0% 100%',
        '--card-foreground': '210 15% 25%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '210 15% 25%',
        '--primary': '175 60% 40%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '30 40% 75%',
        '--secondary-foreground': '210 15% 25%',
        '--muted': '40 33% 92%',
        '--muted-foreground': '210 10% 50%',
        '--accent': '45 100% 60%',
        '--accent-foreground': '210 15% 25%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '30 30% 85%',
        '--input': '30 30% 85%',
        '--ring': '175 60% 40%',
        '--chart-1': '175 60% 40%',
        '--chart-2': '30 40% 75%',
        '--chart-3': '45 100% 60%',
        '--chart-4': '210 15% 50%',
        '--chart-5': '15 80% 65%',

        // Dark mode overrides for default theme (prefixed with --dark-)
        '--dark-background': '210 15% 10%',
        '--dark-foreground': '40 33% 92%',
        '--dark-card': '210 15% 15%',
        '--dark-card-foreground': '40 33% 92%',
        '--dark-popover': '210 15% 10%',
        '--dark-popover-foreground': '40 33% 92%',
        '--dark-primary': '175 55% 50%',
        '--dark-primary-foreground': '210 15% 10%',
        '--dark-secondary': '30 15% 50%',
        '--dark-secondary-foreground': '40 33% 92%',
        '--dark-muted': '210 15% 20%',
        '--dark-muted-foreground': '210 10% 65%',
        '--dark-accent': '45 90% 65%',
        '--dark-accent-foreground': '210 15% 10%',
        '--dark-destructive': '0 62.8% 30.6%',
        '--dark-destructive-foreground': '0 0% 98%',
        '--dark-border': '210 15% 25%',
        '--dark-input': '210 15% 25%',
        '--dark-ring': '175 55% 50%',
        '--dark-chart-1': '175 55% 50%',
        '--dark-chart-2': '30 15% 50%',
        '--dark-chart-3': '45 90% 65%',
        '--dark-chart-4': '210 10% 65%',
        '--dark-chart-5': '15 70% 70%',
    }
  },
   {
    name: 'Forest',
    id: 'forest',
    variables: {
      // Light mode base vars
      '--background': '120 10% 96%', // Very Light Green
      '--foreground': '110 20% 20%', // Dark Forest Green
      '--card': '0 0% 100%',
      '--card-foreground': '110 20% 20%',
      '--popover': '0 0% 100%',
      '--popover-foreground': '110 20% 20%',
      '--primary': '115 50% 45%', // Leaf Green
      '--primary-foreground': '0 0% 100%',
      '--secondary': '40 30% 65%', // Earthy Brown
      '--secondary-foreground': '110 20% 20%',
      '--muted': '120 10% 92%', // Lighter Green Muted
      '--muted-foreground': '110 15% 45%', // Muted Green-Gray
      '--accent': '80 60% 55%', // Bright Lime Green
      '--accent-foreground': '110 20% 20%',
      '--destructive': '0 84.2% 60.2%',
      '--destructive-foreground': '0 0% 98%',
      '--border': '40 20% 80%', // Light Brown Border
      '--input': '40 20% 80%',
      '--ring': '115 50% 45%',
      '--chart-1': '115 50% 45%',
      '--chart-2': '40 30% 65%',
      '--chart-3': '80 60% 55%',
      '--chart-4': '110 15% 45%',
      '--chart-5': '30 70% 75%', // Complementary light terracotta

      // Dark mode overrides for forest theme
      '--dark-background': '110 20% 12%',
      '--dark-foreground': '120 10% 85%',
      '--dark-card': '110 20% 18%',
      '--dark-card-foreground': '120 10% 85%',
      '--dark-popover': '110 20% 12%',
      '--dark-popover-foreground': '120 10% 85%',
      '--dark-primary': '115 45% 55%', // Slightly Brighter Leaf Green
      '--dark-primary-foreground': '110 20% 10%',
      '--dark-secondary': '40 20% 45%', // Darker Brown
      '--dark-secondary-foreground': '120 10% 85%',
      '--dark-muted': '110 20% 22%',
      '--dark-muted-foreground': '110 10% 60%',
      '--dark-accent': '80 55% 60%', // Slightly Brighter Lime
      '--dark-accent-foreground': '110 20% 10%',
      '--dark-destructive': '0 62.8% 30.6%',
      '--dark-destructive-foreground': '0 0% 98%',
      '--dark-border': '110 20% 28%',
      '--dark-input': '110 20% 28%',
      '--dark-ring': '115 45% 55%',
      '--dark-chart-1': '115 45% 55%',
      '--dark-chart-2': '40 20% 45%',
      '--dark-chart-3': '80 55% 60%',
      '--dark-chart-4': '110 10% 60%',
      '--dark-chart-5': '30 60% 65%', // Darker terracotta
    }
  },
    {
    name: 'Ocean',
    id: 'ocean',
    variables: {
      // Light mode base vars
      '--background': '205 30% 96%', // Very Light Blue
      '--foreground': '215 40% 18%', // Deep Navy Blue
      '--card': '0 0% 100%',
      '--card-foreground': '215 40% 18%',
      '--popover': '0 0% 100%',
      '--popover-foreground': '215 40% 18%',
      '--primary': '210 65% 50%', // Bright Ocean Blue
      '--primary-foreground': '0 0% 100%',
      '--secondary': '185 35% 70%', // Aqua Teal
      '--secondary-foreground': '215 40% 18%',
      '--muted': '205 30% 92%', // Lighter Blue Muted
      '--muted-foreground': '215 15% 55%', // Muted Blue-Gray
      '--accent': '50 95% 60%', // Sandy Yellow
      '--accent-foreground': '215 40% 18%',
      '--destructive': '0 84.2% 60.2%',
      '--destructive-foreground': '0 0% 98%',
      '--border': '185 25% 85%', // Light Aqua Border
      '--input': '185 25% 85%',
      '--ring': '210 65% 50%',
      '--chart-1': '210 65% 50%',
      '--chart-2': '185 35% 70%',
      '--chart-3': '50 95% 60%',
      '--chart-4': '215 15% 55%',
      '--chart-5': '0 70% 70%', // Coral red

       // Dark mode overrides for ocean theme
      '--dark-background': '215 40% 10%',
      '--dark-foreground': '205 30% 90%',
      '--dark-card': '215 40% 15%',
      '--dark-card-foreground': '205 30% 90%',
      '--dark-popover': '215 40% 10%',
      '--dark-popover-foreground': '205 30% 90%',
      '--dark-primary': '210 60% 60%', // Brighter Ocean Blue
      '--dark-primary-foreground': '215 40% 8%',
      '--dark-secondary': '185 30% 50%', // Deeper Aqua Teal
      '--dark-secondary-foreground': '205 30% 90%',
      '--dark-muted': '215 40% 20%',
      '--dark-muted-foreground': '215 10% 60%',
      '--dark-accent': '50 85% 65%', // Brighter Sandy Yellow
      '--dark-accent-foreground': '215 40% 8%',
      '--dark-destructive': '0 62.8% 30.6%',
      '--dark-destructive-foreground': '0 0% 98%',
      '--dark-border': '215 40% 25%',
      '--dark-input': '215 40% 25%',
      '--dark-ring': '210 60% 60%',
      '--dark-chart-1': '210 60% 60%',
      '--dark-chart-2': '185 30% 50%',
      '--dark-chart-3': '50 85% 65%',
      '--dark-chart-4': '215 10% 60%',
      '--dark-chart-5': '0 60% 60%', // Darker Coral
    }
  },
  // Add more themes here if needed
];

// Define font size options
const fontSizes = [
  { name: 'Small', value: 'sm', className: 'text-sm' },
  { name: 'Default', value: 'base', className: 'text-base' },
  { name: 'Large', value: 'lg', className: 'text-lg' },
];


export default function SettingsPage() {
  // theme will now be 'light' or 'dark'
  const { theme, setTheme } = useTheme();
  const [selectedColorTheme, setSelectedColorTheme] = useState<string>('default');
  const [selectedFontSize, setSelectedFontSize] = useState<string>('base');
  const [isMounted, setIsMounted] = useState(false);

   // Load settings from localStorage on mount
  useEffect(() => {
    const storedColorTheme = localStorage.getItem('colorTheme') || 'default';
    const storedFontSize = localStorage.getItem('fontSize') || 'base';
    setSelectedColorTheme(storedColorTheme);
    setSelectedFontSize(storedFontSize);
    // Don't apply styles here initially, let the effect below handle it after mount
    setIsMounted(true);
  }, []);

  // Apply color theme styles to the :root element
  const applyColorTheme = useCallback((themeId: string) => {
     if (typeof window === 'undefined') return; // Ensure runs on client
    const themeData = colorThemes.find(t => t.id === themeId);
    if (themeData) {
      const root = document.documentElement;
      const isDarkMode = root.classList.contains('dark'); // Check if dark mode is active

       // Clear previous theme variables first (less targeted, but simpler)
      // This is important to prevent styles from previous themes bleeding over
      // Ideally, only remove variables specific to the previous theme, but this is safer
       colorThemes.forEach(ct => {
         Object.keys(ct.variables).forEach(key => {
           root.style.removeProperty(key.startsWith('--dark-') ? key.substring(7) : key); // Remove both light and potential dark applied vars
         });
       });

      // Apply new theme variables based on current light/dark mode
      Object.entries(themeData.variables).forEach(([key, value]) => {
         if (isDarkMode) {
            // If dark mode, look for a '--dark-' prefixed variable
            const darkKey = `--dark-${key.substring(2)}`; // e.g., converts '--background' to '--dark-background'
            if (themeData.variables[darkKey as keyof typeof themeData.variables]) {
              // If a dark override exists, apply its value to the base variable name
              root.style.setProperty(key, themeData.variables[darkKey as keyof typeof themeData.variables]);
            } else if (!key.startsWith('--dark-')) {
              // If no dark override, apply the light value (only for non --dark- keys)
              root.style.setProperty(key, value);
            }
            // Don't apply --dark- keys directly
         } else {
            // If light mode, only apply non '--dark-' prefixed variables
            if (!key.startsWith('--dark-')) {
                root.style.setProperty(key, value);
            }
         }
      });

      localStorage.setItem('colorTheme', themeId);
    }
  }, []);


   // Apply initial theme and re-apply on theme (light/dark) change
   useEffect(() => {
      if (isMounted) {
        applyColorTheme(selectedColorTheme);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [theme, isMounted, selectedColorTheme]); // applyColorTheme is stable due to useCallback

   // Apply font size class to the body element
  const applyFontSize = useCallback((sizeValue: string) => {
    if (typeof window === 'undefined') return; // Ensure runs on client
    const body = document.body;
    // Remove existing font size classes
    fontSizes.forEach(fs => body.classList.remove(fs.className));
    // Add the selected font size class
    const selected = fontSizes.find(fs => fs.value === sizeValue);
    if (selected) {
      body.classList.add(selected.className);
      localStorage.setItem('fontSize', sizeValue);
    }
  }, []);

   // Apply initial font size
   useEffect(() => {
      if (isMounted) {
         applyFontSize(selectedFontSize);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isMounted, selectedFontSize]); // applyFontSize is stable

  // Handlers for theme changes
  const handleThemeChange = (value: string) => {
    setTheme(value); // value will be 'light' or 'dark'
    // Color theme application is handled by the useEffect watching 'theme'
  };

  const handleColorThemeChange = (value: string) => {
    setSelectedColorTheme(value);
    applyColorTheme(value); // Apply immediately on selection change
  };

   const handleFontSizeChange = (value: string) => {
    setSelectedFontSize(value);
    applyFontSize(value); // Apply immediately
  };


   // Prevent rendering until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null; // Or a loading skeleton
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Paintbrush className="h-6 w-6 text-primary" /> Appearance Settings
          </CardTitle>
          <CardDescription>
            Customize the look and feel of the application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Theme Selection (Light/Dark) */}
          <div className="space-y-2">
            <Label className="flex items-center gap-1 font-semibold"><Palette className="h-4 w-4"/> Theme Mode</Label>
             {/* Ensure theme state is correctly passed */}
             <RadioGroup
                value={theme ?? 'dark'} // Default to 'dark' if theme is undefined during hydration
                onValueChange={handleThemeChange}
                className="flex flex-col sm:flex-row gap-4"
             >
               <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-md border border-transparent has-[:checked]:border-primary">
                 <RadioGroupItem value="light" id="theme-light" />
                 <Label htmlFor="theme-light" className="flex items-center gap-1 cursor-pointer">
                   <Sun className="h-4 w-4" /> Light
                 </Label>
               </div>
               <div className="flex items-center space-x-2 p-3 bg-muted/50 rounded-md border border-transparent has-[:checked]:border-primary">
                 <RadioGroupItem value="dark" id="theme-dark" />
                 <Label htmlFor="theme-dark" className="flex items-center gap-1 cursor-pointer">
                   <Moon className="h-4 w-4" /> Dark
                 </Label>
               </div>
            </RadioGroup>
          </div>

          {/* Color Theme Selection */}
          <div className="space-y-2">
            <Label htmlFor="color-theme" className="flex items-center gap-1 font-semibold"><Palette className="h-4 w-4"/> Color Palette</Label>
            <Select value={selectedColorTheme} onValueChange={handleColorThemeChange}>
              <SelectTrigger id="color-theme" className="w-full">
                <SelectValue placeholder="Select a color theme" />
              </SelectTrigger>
              <SelectContent>
                {colorThemes.map((ct) => (
                  <SelectItem key={ct.id} value={ct.id}>
                    <div className="flex items-center gap-2">
                        {/* Optional: Add color preview dots */}
                        {/* <span className="h-3 w-3 rounded-full" style={{ backgroundColor: `hsl(${ct.variables['--primary']})` }}></span> */}
                        {ct.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
             <p className="text-xs text-muted-foreground">Select the overall color scheme for the application.</p>
          </div>

           {/* Font Size Selection */}
          <div className="space-y-2">
            <Label htmlFor="font-size" className="flex items-center gap-1 font-semibold"><Text className="h-4 w-4"/> Font Size</Label>
             <Select value={selectedFontSize} onValueChange={handleFontSizeChange}>
              <SelectTrigger id="font-size" className="w-full">
                <SelectValue placeholder="Select font size" />
              </SelectTrigger>
              <SelectContent>
                {fontSizes.map((fs) => (
                  <SelectItem key={fs.value} value={fs.value}>
                    {fs.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Adjust the base text size across the application.</p>
          </div>

        </CardContent>
      </Card>

      {/* Add more settings cards here (e.g., Accessibility, Notifications) */}

    </div>
  );
}
