

'use client'; // Required for useRef, useState, useEffect

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react'; // Import React
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, MapPin, Globe, Users, Languages, Milestone, User, Info, LibrarySquare, LayoutGrid, Building2, BookOpen, Briefcase, Pyramid, GalleryHorizontalEnd, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';

const allExploreSections = [
  { title: 'Parasnath Hill', href: '/parasnath-hill', image: 'https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_1280.jpg', dataAiHint: 'mountain pilgrimage', description: 'Sacred Jain pilgrimage site and Jharkhand\'s highest peak.' },
  { title: 'Forests & Wildlife', href: '/forests-wildlife', image: 'https://cdn.pixabay.com/photo/2022/08/18/06/57/monkey-7394077_1280.jpg', dataAiHint: 'dense forest animals', description: 'Explore the rich biodiversity and green landscapes.' },
  { title: 'Culture & Festivals', href: '/culture-festivals', image: 'https://cdn.pixabay.com/photo/2021/01/08/17/02/old-man-5900410_1280.jpg', dataAiHint: 'indian festival tribal', description: 'Discover local traditions, music, dance, and celebrations.' },
  { title: 'History & Heritage', href: '/history-heritage', image: 'https://cdn.pixabay.com/photo/2016/12/18/15/28/hazara-rama-temple-1915985_1280.jpg', dataAiHint: 'old monument ruins', description: 'Uncover the stories and landmarks of Giridih\'s past.' },
  { title: 'Local Economy & Crafts', href: '/local-economy-crafts', image: 'https://cdn.pixabay.com/photo/2023/05/29/18/10/pottery-8026823_1280.jpg', dataAiHint: 'handicraft market india', description: 'Learn about mining, agriculture, and traditional crafts.' },
  { title: 'Tourism Guide', href: '/tourism-guide', image: 'https://cdn.pixabay.com/photo/2019/12/05/10/01/forest-4674703_1280.jpg', dataAiHint: 'travel guide map', description: 'Plan your visit: attractions, stays, food, and tips.' },
  { title: 'People & Lifestyle', href: '/people-lifestyle', image: 'https://cdn.pixabay.com/photo/2017/08/29/12/07/adult-2693054_1280.jpg', dataAiHint: 'indian village people community', description: 'Understand the communities and daily life in Giridih.' },
   { href: '/gallery', label: 'Gallery', icon: GalleryHorizontalEnd, image: 'https://cdn.pixabay.com/photo/2017/08/06/09/29/man-2590655_1280.jpg', dataAiHint: 'photo gallery collection images', description: 'Visual glimpses of Giridih.' }, // Added Gallery explicitly
  { title: 'Blogs & Stories', href: '/blogs', image: 'https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628_1280.jpg', dataAiHint: 'writing storytelling journal india', description: 'Read experiences and tales from Giridih.', icon: BookOpen }, // Added Blogs section
   { href: '/forums', label: 'Forums', icon: MessageSquare, image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg', dataAiHint: 'community discussion forum people', description: 'Connect and discuss with the community.' }, // Added Forums explicitly
];


const keyStats = [
    { label: 'Area', value: '4853.56 Sq.Km', icon: MapPin },
    { label: 'Population', value: '24,45,774', icon: Users },
    { label: 'Male', value: '12,58,098', icon: User },
    { label: 'Female', value: '11,87,376', icon: User }, // Could use a specific female icon if available/needed
    { label: 'Language', value: 'Hindi', icon: Languages },
    { label: 'Villages', value: '2,772', icon: Milestone },
];

const adminStats = [
    { label: 'Sub Divisions', value: '4', icon: Pyramid },
    { label: 'Blocks', value: '13', icon: LayoutGrid },
    { label: 'Panchayats', value: '358', icon: Building2 },
]

const subdivisions = [
    'Giridih subdivision',
    'Bagodar-Sariya subdivision',
    'Khorimahua subdivision',
    'Dumri subdivision',
];

const blocks = [
    'Bagodar', 'Bengabad', 'Birni', 'Deori', 'Dhanwar', 'Dumri', 'Gandey',
    'Gawan', 'Giridih', 'Jamua', 'Pirtand', 'Sariya', 'Tisri',
];


export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredSections, setFilteredSections] = React.useState(allExploreSections);

  React.useEffect(() => {
    if (searchQuery === '') {
      setFilteredSections(allExploreSections);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = allExploreSections.filter(section =>
        (section.title?.toLowerCase() || section.label?.toLowerCase() || '').includes(lowerCaseQuery) ||
        section.description.toLowerCase().includes(lowerCaseQuery) ||
        section.dataAiHint.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredSections(filtered);
    }
  }, [searchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div className="space-y-12">
      {/* Modernized Hero Section - Added background image and overlay */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 rounded-lg shadow-inner bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg')" }} data-ai-hint="landscape mountain travel india">
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content container */}
        <div className="container text-center relative z-10">
           {/* Text Content & CTA */}
           <div className="space-y-6 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"> {/* Changed text color to white */}
                  Explore <span className="text-primary">Giridih</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90"> {/* Changed text color to light white */}
                   Discover the natural beauty, rich culture, and vibrant life of Jharkhand's hidden gem. Your journey starts here.
                </p>
                 {/* Only the Browse Attractions button, centered */}
                 <div className="flex justify-center">
                   <Button size="lg" asChild variant="default" className="shadow-lg hover:shadow-primary/30 transition-shadow">
                     <Link href="/explore">
                         Browse Attractions <ArrowRight className="ml-2" />
                     </Link>
                   </Button>
                 </div>
            </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Giridih Explorer</h2>
        <p className="text-muted-foreground leading-relaxed">
          Embark on a digital journey through Giridih District, a land of towering hills, lush forests, ancient traditions, and industrious people. This platform is your comprehensive guide to everything Giridih has to offer, from the sacred Parasnath Hill to the intricate local crafts. Explore, learn, and be inspired.
        </p>
      </section>


       {/* About Giridih Section */}
      <section className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2"><Info className="text-primary"/> About Giridih District</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Description */}
            <div className="lg:col-span-3">
                 <Card className="shadow-md h-full">
                     <CardHeader>
                        <CardTitle className="text-xl">District Overview</CardTitle>
                     </CardHeader>
                     <CardContent className="text-muted-foreground leading-relaxed space-y-4">
                        <p>
                            Giridih District, an administrative district of Jharkhand, has its headquarters at Giridih. It was carved out from Hazaribagh District on 4th Dec 1972.
                        </p>
                        <p>
                            The district lies between 24° 11' North latitude and 86° 18' East longitude.
                        </p>
                        <p>
                            This district is bounded by Jamui District and part of Nawada district of Bihar in the north, by the districts of Deoghar and Jamtara on the east, by Dhanbad & Bokaro on the south, and by Hazaribagh & Kodarma on the west.
                        </p>
                     </CardContent>
                 </Card>
            </div>

             {/* Key Statistics */}
             <div className="space-y-4">
                 <Card className="shadow-md">
                    <CardHeader>
                       <CardTitle className="text-xl">Key Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                       {keyStats.map((stat) => (
                           <div key={stat.label} className="flex items-center gap-3 text-sm bg-muted/50 p-2 rounded">
                               <stat.icon className="h-5 w-5 text-secondary shrink-0" />
                               <span className="font-medium">{stat.label}:</span>
                               <span className="text-muted-foreground ml-auto">{stat.value}</span>
                           </div>
                       ))}
                    </CardContent>
                 </Card>
            </div>

             {/* Admin Stats */}
             <div className="space-y-4">
                 <Card className="shadow-md">
                    <CardHeader>
                       <CardTitle className="text-xl flex items-center gap-2"><Briefcase /> Administration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {adminStats.map((stat) => (
                           <div key={stat.label} className="flex items-center gap-3 text-sm bg-muted/50 p-2 rounded">
                               <stat.icon className="h-5 w-5 text-secondary shrink-0" />
                               <span className="font-medium">{stat.label}:</span>
                               <span className="text-muted-foreground ml-auto">{stat.value}</span>
                           </div>
                        ))}
                    </CardContent>
                 </Card>
            </div>

             {/* Subdivisions */}
            <div>
                 <Card className="shadow-md h-full">
                     <CardHeader>
                        <CardTitle className="text-xl">Subdivisions ({subdivisions.length})</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                           {subdivisions.map((sub) => (
                              <li key={sub}>{sub}</li>
                           ))}
                        </ul>
                     </CardContent>
                 </Card>
            </div>

             {/* Blocks */}
            <div className="lg:col-span-2">
                 <Card className="shadow-md h-full">
                     <CardHeader>
                        <CardTitle className="text-xl">Blocks ({blocks.length})</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 text-sm text-muted-foreground list-disc list-inside">
                           {blocks.map((block) => (
                              <li key={block}>{block}</li>
                           ))}
                        </ul>
                     </CardContent>
                 </Card>
            </div>
        </div>
      </section>


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
                <Card key={section.href} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  {/* Ensure href is always a string */}
                  <Link href={section.href || '#'} className="block flex flex-col flex-grow">
                    <div className="relative h-48 w-full">
                      <Image
                        src={section.image}
                         alt={section.title || section.label || ''} // Provide a default alt text
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={section.dataAiHint}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="transition-transform duration-300 group-hover:scale-105" // Added hover effect
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div> {/* Added gradient */}
                    </div>
                    <CardHeader>
                       <CardTitle className="text-xl group-hover:text-primary transition-colors">{section.title || section.label}</CardTitle> {/* Use title or label */}
                    </CardHeader>
                    <CardContent className="flex-grow">
                       <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{section.description}</p> {/* Line clamp description */}
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
    </div>
  );
}

