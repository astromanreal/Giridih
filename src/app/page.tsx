
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MapPin, Users, Languages, Milestone, User, Info, LayoutGrid, Building2, BookOpen, Briefcase, Pyramid, GalleryHorizontalEnd, MessageSquare, Home as HomeIcon } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';
import { HomeExploreSection } from '@/components/home-explore-section'; 

const allExploreSections = [
  { title: 'Parasnath Hill', href: '/parasnath-hill', image: 'https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_1280.jpg', dataAiHint: 'mountain pilgrimage jain', description: 'Sacred Jain pilgrimage site and Jharkhand\'s highest peak.' },
  { title: 'Forests & Wildlife', href: '/forests-wildlife', image: 'https://cdn.pixabay.com/photo/2022/08/18/06/57/monkey-7394077_1280.jpg', dataAiHint: 'dense forest animals india', description: 'Explore the rich biodiversity and green landscapes.' },
  { title: 'Culture & Festivals', href: '/culture-festivals', image: 'https://cdn.pixabay.com/photo/2021/01/08/17/02/old-man-5900410_1280.jpg', dataAiHint: 'indian festival tribal dance', description: 'Discover local traditions, music, dance, and celebrations.' },
  { title: 'History & Heritage', href: '/history-heritage', image: 'https://cdn.pixabay.com/photo/2016/12/18/15/28/hazara-rama-temple-1915985_1280.jpg', dataAiHint: 'old monument ruins india', description: 'Uncover the stories and landmarks of Giridih\'s past.' },
  { title: 'Local Economy & Crafts', href: '/local-economy-crafts', image: 'https://cdn.pixabay.com/photo/2023/05/29/18/10/pottery-8026823_1280.jpg', dataAiHint: 'handicraft market india pottery', description: 'Learn about mining, agriculture, and traditional crafts.' },
  { title: 'Tourism Guide', href: '/tourism-guide', image: 'https://cdn.pixabay.com/photo/2019/12/05/10/01/forest-4674703_1280.jpg', dataAiHint: 'travel guide map compass', description: 'Plan your visit: attractions, stays, food, and tips.' },
  { title: 'People & Lifestyle', href: '/people-lifestyle', image: 'https://cdn.pixabay.com/photo/2017/08/29/12/07/adult-2693054_1280.jpg', dataAiHint: 'indian village people community', description: 'Understand the communities and daily life in Giridih.' },
  { title: 'Gallery', href: '/gallery', image: 'https://cdn.pixabay.com/photo/2017/08/06/09/29/man-2590655_1280.jpg', dataAiHint: 'photo gallery collection images', description: 'Visual glimpses of Giridih.', label: 'Gallery', iconName: 'GalleryHorizontalEnd' },
  { title: 'Blogs & Stories', href: '/blogs', image: 'https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628_1280.jpg', dataAiHint: 'writing storytelling journal india', description: 'Read experiences and tales from Giridih.', iconName: 'BookOpen' },
  { title: 'Forums', href: '/forums', image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg', dataAiHint: 'community discussion forum people', description: 'Connect and discuss with the community.', label: 'Forums', iconName: 'MessageSquare' },
];


const keyStats = [
    { label: 'Area', value: '4853.56 Sq.Km', icon: MapPin },
    { label: 'Population', value: '24,45,774', icon: Users },
    { label: 'Male', value: '12,58,098', icon: User },
    { label: 'Female', value: '11,87,376', icon: User },
    { label: 'Language', value: 'Hindi', icon: Languages },
    { label: 'Villages', value: '2,772', icon: Milestone },
];

const adminStats = [
    { label: 'Sub Divisions', value: '4', icon: Pyramid },
    { label: 'Blocks', value: '13', icon: LayoutGrid },
    { label: 'Panchayats', value: '358', icon: Building2 },
];

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

const pageTitle = "Giridih Explorer - Your Guide to Giridih District";
const pageContentSummary = "Discover Giridih: Explore Parasnath Hill, forests, wildlife, culture, history, local crafts, and plan your trip with our comprehensive tourism guide for Giridih District, Jharkhand, India.";
const contentType = 'website homepage';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://giridih.example.com';
  const canonicalUrl = `${siteUrl}/`;
  const heroImageUrl = `${siteUrl}/og-image.png`; 
  const previousImages = (await parentResolvingMetadata).openGraph?.images || [];

  try {
    const seoInput = {
      title: pageTitle,
      contentSummary: pageContentSummary,
      contentType: contentType,
    };
    const seoData = await generateSeoMetaTags(seoInput);

    return {
      title: seoData.seoTitle,
      description: seoData.metaDescription,
      keywords: seoData.keywords || ['Giridih', 'Jharkhand', 'tourism', 'Parasnath Hill', 'Shikharji', 'travel guide', 'India tourism'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        siteName: 'Giridih Explorer',
        images: [
          {
            url: heroImageUrl,
            width: 1200,
            height: 630,
            alt: 'Giridih Explorer - Scenic view of Giridih',
          },
          ...previousImages,
        ],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        images: [heroImageUrl],
      },
    };
  } catch (error) {
    let errorMessage = 'Unknown error during SEO metadata generation';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'toString' in error) {
      errorMessage = error.toString();
    }
    console.error(`AI SEO Metadata Generation Error for ${pageTitle}: ${errorMessage}`, error);
    return {
      title: pageTitle,
      description: pageContentSummary,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: pageTitle,
        description: pageContentSummary,
        url: canonicalUrl,
        images: [heroImageUrl],
      },
    };
  }
}

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://giridih.example.com';
  const canonicalUrl = `${siteUrl}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": canonicalUrl,
    "name": "Giridih Explorer",
    "description": "Your comprehensive guide to exploring Giridih District, Jharkhand. Discover attractions, culture, nature, and plan your perfect trip.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/explore?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Giridih Explorer",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`,
        "width": 200,
        "height": 60,
        "dataAiHint": "site logo"
      }
    }
  };

  const serializableExploreSections = allExploreSections.map(section => ({
    title: section.title,
    label: section.label,
    href: section.href,
    image: section.image,
    dataAiHint: section.dataAiHint,
    description: section.description,
  }));


  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 rounded-lg shadow-inner bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg')" }} data-ai-hint="landscape mountain travel india background">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container text-center relative z-10">
           <div className="space-y-6 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Explore <span className="text-primary">Giridih</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                   Discover the natural beauty, rich culture, and vibrant life of Jharkhand's hidden gem. Your journey starts here.
                </p>
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

      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Giridih Explorer</h2>
        <p className="text-muted-foreground leading-relaxed">
          Embark on a digital journey through Giridih District, a land of towering hills, lush forests, ancient traditions, and industrious people. This platform is your comprehensive guide to everything Giridih has to offer, from the sacred Parasnath Hill to the intricate local crafts. Explore, learn, and be inspired.
        </p>
      </section>

      <section className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2"><Info className="text-primary"/> About Giridih District</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                         <div className="flex items-center gap-3 text-sm bg-muted/50 p-2 rounded">
                            <HomeIcon className="h-5 w-5 text-secondary shrink-0" />
                            <span className="font-medium">Villages:</span>
                            <span className="text-muted-foreground ml-auto">2772</span>
                        </div>
                    </CardContent>
                 </Card>
            </div>

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

      <HomeExploreSection allExploreSectionsData={serializableExploreSections} />
    </div>
  );
}

    