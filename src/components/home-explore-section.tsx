
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';

// Define the type for a section, ensuring it only contains serializable data
interface ExploreSectionData {
  title?: string;
  label?: string;
  href: string;
  image: string;
  dataAiHint: string;
  description: string;
  // iconName?: string; // If icons were to be rendered client-side by name
}

interface HomeExploreSectionProps {
  allExploreSectionsData: ExploreSectionData[];
}

export function HomeExploreSection({ allExploreSectionsData }: HomeExploreSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSections, setFilteredSections] = useState(allExploreSectionsData);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredSections(allExploreSectionsData);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = allExploreSectionsData.filter(section =>
        (section.title?.toLowerCase() || section.label?.toLowerCase() || '').includes(lowerCaseQuery) ||
        section.description.toLowerCase().includes(lowerCaseQuery) ||
        section.dataAiHint.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredSections(filtered);
    }
  }, [searchQuery, allExploreSectionsData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      {/* Search/Explore Section */}
      <section className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">Search & Explore</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for places, topics, or activities..."
            className="pl-10"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          {searchQuery ? `${filteredSections.length} results found.` : 'Or browse popular sections below.'}
        </p>
      </section>

      {/* Explore Grid */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-center">Discover More</h3>
        {filteredSections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSections.map((section) => (
              <Card key={section.href} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                <Link href={section.href || '#'} className="block flex flex-col flex-grow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={section.image}
                      alt={section.title || section.label || 'Explore Giridih Section'}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={section.dataAiHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{section.title || section.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{section.description}</p>
                    <Button variant="link" className="p-0 text-primary mt-auto">
                      Explore Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No sections match your search.</p>
        )}
      </section>
    </>
  );
}
