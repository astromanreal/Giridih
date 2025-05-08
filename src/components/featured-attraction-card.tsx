
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, MapPin, HelpCircle } from 'lucide-react'; // Keep necessary base icons
import * as LucideIcons from 'lucide-react'; // Import all icons for dynamic use
import React from 'react'; // Import React

type Attraction = {
    id: string;
    name: string;
    description: string;
    features: string;
    image: string;
    dataAiHint: string;
    category: string;
    location: { name: string; coords: { lat: number; lng: number } };
    iconName: string; // Accept icon name as a string
};

interface FeaturedAttractionCardProps {
  attraction: Attraction;
}

// Dynamically get Lucide icon component by name
const getIconComponent = (iconName: string): React.ComponentType<LucideIcons.LucideProps> => {
   // Ensure iconName is a valid key, otherwise fallback
   const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<LucideIcons.LucideProps>;
   return IconComponent || HelpCircle; // Fallback icon
};

export function FeaturedAttractionCard({ attraction }: FeaturedAttractionCardProps) {
    // Get the icon component dynamically based on the name
    const AttractionIcon = getIconComponent(attraction.iconName);
    const mapUrl = `https://www.google.com/maps?q=${attraction.location.coords.lat},${attraction.location.coords.lng}`;

    const handleExternalLinkClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        // Prevent the parent Link component from navigating
        e.stopPropagation();
        // Open the map link in a new tab
        window.open(mapUrl, '_blank', 'noopener,noreferrer');
    };

  return (
    <Card
        key={attraction.id}
        className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-border rounded-lg group flex flex-col transform hover:-translate-y-2 hover:scale-[1.02]" // 3D effect on hover
        style={{ perspective: '1000px' }} // Add perspective for 3D effect
    >
        {/* Link covers the entire card for better interaction */}
        {/* TODO: Update href to a dedicated page later if needed */}
        <Link href={`#${attraction.id}`} className="flex flex-col flex-grow"> {/* Placeholder link */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={attraction.image}
                    alt={attraction.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={attraction.dataAiHint}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="transition-transform duration-500 group-hover:scale-110" // Slightly slower zoom
                />
                <div className="absolute top-2 right-2 z-10">
                    <Badge variant="secondary" className="capitalize backdrop-blur-sm bg-background/70">{attraction.category}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 p-1 bg-background/70 backdrop-blur-sm rounded-full z-10">
                    {/* Render the dynamically selected icon */}
                    <AttractionIcon className="h-5 w-5 text-primary" />
                </div>
            </div>
            <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{attraction.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-2 pb-3">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2"> {/* Limit description lines */}
                    {attraction.description}
                </p>
                <p className="text-xs font-medium text-foreground line-clamp-1"> {/* Limit features line */}
                    <span className="font-semibold">Features:</span> {attraction.features}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground pt-1">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span>{attraction.location.name}</span>
                    {/* Use a span instead of <a> to prevent nesting */}
                    <span
                        className="ml-1 inline-flex items-center hover:text-primary hover:underline z-20 cursor-pointer" // Ensure link is clickable and looks like a link
                        aria-label={`View ${attraction.name} on Google Maps`}
                        onClick={handleExternalLinkClick} // Use the handler here
                        role="link" // Add role for accessibility
                    >
                        <ExternalLink className="h-3 w-3" />
                    </span>
                </div>
            </CardContent>
            <CardFooter className="pt-0 pb-4">
                <Button variant="link" className="p-0 text-primary font-semibold text-sm">
                    Explore Now <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
            </CardFooter>
         </Link>
    </Card>
  );
}
