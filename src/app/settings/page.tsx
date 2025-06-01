
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Paintbrush, Moon, Sun, Text, Palette } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Metadata } from 'next'; // Cannot use generateMetadata in client component

// Define color theme options
const colorThemes = [
  {
    name: 'Default',
    id: 'default',
    variables: {
        '--background': '40 33% 97%', '--foreground': '210 15% 25%', '--card': '0 0% 100%', '--card-foreground': '210 15% 25%',
        '--popover': '0 0% 100%', '--popover-foreground': '210 15% 25%', '--primary': '175 60% 40%', '--primary-foreground': '0 0% 100%',
        '--secondary': '30 40% 75%', '--secondary-foreground': '210 15% 25%', '--muted': '40 33% 92%', '--muted-foreground': '210 10% 50%',
        '--accent': '45 100% 60%', '--accent-foreground': '210 15% 25%', '--destructive': '0 84.2% 60.2%', '--destructive-foreground': '0 0% 98%',
        '--border': '30 30% 85%', '--input': '30 30% 85%', '--ring': '175 60% 40%', '--chart-1': '175 60% 40%', '--chart-2': '30 40% 75%',
        '--chart-3': '45 100% 60%', '--chart-4': '210 15% 50%', '--chart-5': '15 80% 65%',
        '--dark-background': '210 15% 10%', '--dark-foreground': '40 33% 92%', '--dark-card': '210 15% 15%', '--dark-card-foreground': '40 33% 92%',
        '--dark-popover': '210 15% 10%', '--dark-popover-foreground': '40 33% 92%', '--dark-primary': '175 55% 50%', '--dark-primary-foreground': '210 15% 10%',
        '--dark-secondary': '30 15% 50%', '--dark-secondary-foreground': '40 33% 92%', '--dark-muted': '210 15% 20%', '--dark-muted-foreground': '210 10% 65%',
        '--dark-accent': '45 90% 65%', '--dark-accent-foreground': '210 15% 10%', '--dark-destructive': '0 62.8% 30.6%', '--dark-destructive-foreground': '0 0% 98%',
        '--dark-border': '210 15% 25%', '--dark-input': '210 15% 25%', '--dark-ring': '175 55% 50%', '--dark-chart-1': '175 55% 50%',
        '--dark-chart-2': '30 15% 50%', '--dark-chart-3': '45 90% 65%', '--dark-chart-4': '210 10% 65%', '--dark-chart-5': '15 70% 70%',
    }
  },
  {
    name: 'Forest', id: 'forest', variables: {
      '--background': '120 10% 96%', '--foreground': '110 20% 20%', '--card': '0 0% 100%', '--card-foreground': '110 20% 20%',
      '--popover': '0 0% 100%', '--popover-foreground': '110 20% 20%', '--primary': '115 50% 45%', '--primary-foreground': '0 0% 100%',
      '--secondary': '40 30% 65%', '--secondary-foreground': '110 20% 20%', '--muted': '120 10% 92%', '--muted-foreground': '110 15% 45%',
      '--accent': '80 60% 55%', '--accent-foreground': '110 20% 20%', '--border': '40 20% 80%', '--input': '40 20% 80%', '--ring': '115 50% 45%',
      '--dark-background': '110 20% 12%', '--dark-foreground': '120 10% 85%', '--dark-card': '110 20% 18%', '--dark-card-foreground': '120 10% 85%',
      '--dark-popover': '110 20% 12%', '--dark-popover-foreground': '120 10% 85%', '--dark-primary': '115 45% 55%', '--dark-primary-foreground': '110 20% 10%',
      '--dark-secondary': '40 20% 45%', '--dark-secondary-foreground': '120 10% 85%', '--dark-muted': '110 20% 22%', '--dark-muted-foreground': '110 10% 60%',
      '--dark-accent': '80 55% 60%', '--dark-accent-foreground': '110 20% 10%', '--dark-border': '110 20% 28%', '--dark-input': '110 20% 28%', '--dark-ring': '115 45% 55%',
    }
  },
  {
    name: 'Ocean', id: 'ocean', variables: {
      '--background': '205 30% 96%', '--foreground': '215 40% 18%', '--card': '0 0% 100%', '--card-foreground': '215 40% 18%',
      '--popover': '0 0% 100%', '--popover-foreground': '215 40% 18%', '--primary': '210 65% 50%', '--primary-foreground': '0 0% 100%',
      '--secondary': '185 35% 70%', '--secondary-foreground': '215 40% 18%', '--muted': '205 30% 92%', '--muted-foreground': '215 15% 55%',
      '--accent': '50 95% 60%', '--accent-foreground': '215 40% 18%', '--border': '185 25% 85%', '--input': '185 25% 85%', '--ring': '210 65% 50%',
      '--dark-background': '215 40% 10%', '--dark-foreground': '205 30% 90%', '--dark-card': '215 40% 15%', '--dark-card-foreground': '205 30% 90%',
      '--dark-popover': '215 40% 10%', '--dark-popover-foreground': '205 30% 90%', '--dark-primary': '210 60% 60%', '--dark-primary-foreground': '215 40% 8%',
      '--dark-secondary': '185 30% 50%', '--dark-secondary-foreground': '205 30% 90%', '--dark-muted': '215 40% 20%', '--dark-muted-foreground': '215 10% 60%',
      '--dark-accent': '50 85% 65%', '--dark-accent-foreground': '215 40% 8%', '--dark-border': '215 40% 25%', '--dark-input': '215 40% 25%', '--dark-ring': '210 60% 60%',
    }
  },
];

const fontSizes = [
  { name: 'Small', value: 'sm', className: 'text-sm' },
  { name: 'Default', value: 'base', className: 'text-base' },
  { name: 'Large', value: 'lg', className: 'text-lg' },
];


export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [selectedColorTheme, setSelectedColorTheme] = useState<string>('default');
  const [selectedFontSize, setSelectedFontSize] = useState<string>('base');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedColorTheme = localStorage.getItem('colorTheme') || 'default';
    const storedFontSize = localStorage.getItem('fontSize') || 'base';
    setSelectedColorTheme(storedColorTheme);
    setSelectedFontSize(storedFontSize);
    setIsMounted(true);
  }, []);

  const applyColorTheme = useCallback((themeId: string) => {
     if (typeof window === 'undefined') return;
    const themeData = colorThemes.find(t => t.id === themeId);
    if (themeData) {
      const root = document.documentElement;
      const isDarkMode = root.classList.contains('dark');

       colorThemes.forEach(ct => {
         Object.keys(ct.variables).forEach(key => {
           root.style.removeProperty(key.startsWith('--dark-') ? key.substring(7) : key);
         });
       });

      Object.entries(themeData.variables).forEach(([key, value]) => {
         if (isDarkMode) {
            const darkKey = `--dark-${key.substring(2)}`;
            if (themeData.variables[darkKey as keyof typeof themeData.variables]) {
              root.style.setProperty(key, themeData.variables[darkKey as keyof typeof themeData.variables]);
            } else if (!key.startsWith('--dark-')) {
              root.style.setProperty(key, value);
            }
         } else {
            if (!key.startsWith('--dark-')) {
                root.style.setProperty(key, value);
            }
         }
      });
      localStorage.setItem('colorTheme', themeId);
    }
  }, []);

   useEffect(() => {
      if (isMounted) {
        applyColorTheme(selectedColorTheme);
      }
   }, [theme, isMounted, selectedColorTheme, applyColorTheme]);

  const applyFontSize = useCallback((sizeValue: string) => {
    if (typeof window === 'undefined') return;
    const body = document.body;
    fontSizes.forEach(fs => body.classList.remove(fs.className));
    const selected = fontSizes.find(fs => fs.value === sizeValue);
    if (selected) {
      body.classList.add(selected.className);
      localStorage.setItem('fontSize', sizeValue);
    }
  }, []);

   useEffect(() => {
      if (isMounted) {
         applyFontSize(selectedFontSize);
      }
   }, [isMounted, selectedFontSize, applyFontSize]);

  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  const handleColorThemeChange = (value: string) => {
    setSelectedColorTheme(value);
    applyColorTheme(value);
  };

   const handleFontSizeChange = (value: string) => {
    setSelectedFontSize(value);
    applyFontSize(value);
  };

  if (!isMounted) {
    return null;
  }
  
  // Set document title for client component
  if (typeof window !== 'undefined') {
    document.title = "Settings | Giridih Explorer";
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Add a simple JSON-LD for WebPage if desired, though less critical for settings */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Settings - Giridih Explorer",
            "description": "Customize your appearance settings for the Giridih Explorer website.",
            "url": "${process.env.NEXT_PUBLIC_SITE_URL || 'https://giridih.example.com'}/settings"
          }
        `}
      </script>
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
          <div className="space-y-2">
            <Label className="flex items-center gap-1 font-semibold"><Palette className="h-4 w-4"/> Theme Mode</Label>
             <RadioGroup
                value={theme ?? 'dark'}
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
                        {ct.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
             <p className="text-xs text-muted-foreground">Select the overall color scheme for the application.</p>
          </div>

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
    </div>
  );
}
