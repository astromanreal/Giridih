
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Compass, ArrowRight, Mountain, TreePine, Landmark, ScrollText, ShoppingBag, Map as MapIconUI, Users, GalleryHorizontalEnd as GalleryIcon, BookOpen, MessageSquare, Mail, Settings, MapPin, ExternalLink, Waves, Home as HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeaturedAttractionCard } from '@/components/featured-attraction-card';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';


// Function to transform Google Drive share links to direct view links
const transformGoogleDriveUrl = (url: string): string => {
  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  return url;
};

const featuredAttractions = [
  {
    id: 'jharkhand-dham',
    name: 'Jharkhand Dham',
    description: 'A sacred temple complex dedicated to Lord Shiva, known for its spiritual significance and unique architecture.',
    features: 'Pilgrimage site, hosts large fairs.',
    image: transformGoogleDriveUrl('https://drive.google.com/file/d/12VIR4I8Ai9H7lDyO3f9ih02804tSG-nn/view?usp=sharing'),
    dataAiHint: 'hindu temple shiva india architecture',
    category: 'Spiritual',
    location: { name: 'Near Dhanwar', coords: { lat: 24.41, lng: 86.00 } },
    iconName: 'Mountain',
  },
  {
    id: 'harihar-dham',
    name: 'Harihar Dham',
    description: 'Renowned for housing one of the largest Shiva lingams in India, attracting devotees year-round.',
    features: 'Massive 65ft Shiva Lingam, major crowds during Shravan.',
    image: transformGoogleDriveUrl('https://drive.google.com/file/d/1NnlrsGwICznocDJxz8VSWABTYgt-lo1V/view?usp=sharing'),
    dataAiHint: 'large shiva lingam hindu temple india',
    category: 'Spiritual',
    location: { name: 'Bagodar Block', coords: { lat: 24.06, lng: 85.85 } },
    iconName: 'Mountain',
  },
  {
    id: 'khandoli-dam',
    name: 'Khandoli Dam & Park',
    description: 'A scenic dam offering water sports, birdwatching opportunities, and a peaceful recreational area.',
    features: 'Boating, rock climbing, toy train, watchtower.',
    image: transformGoogleDriveUrl('https://drive.google.com/file/d/1NuVl3Ql4tREgjsx3FfTZ2ENgDSqQ3Ps5/view?usp=sharing'),
    dataAiHint: 'dam lake boating park india',
    category: 'Nature',
    location: { name: 'Near Giridih Town', coords: { lat: 24.22, lng: 86.30 } },
    iconName: 'Waves',
  },
  {
    id: 'usri-falls',
    name: 'Usri Falls',
    description: 'A beautiful multi-tiered waterfall cascading over rugged rocks amidst lush greenery, ideal for nature lovers.',
    features: 'Picturesque scenery, popular picnic spot.',
    image: transformGoogleDriveUrl('https://drive.google.com/file/d/1qftnXBVFJ3ARkS9Ym3Kk1ODifN2Mv9Os/view?usp=sharing'),
    dataAiHint: 'waterfall india nature rocks monsoon',
    category: 'Nature',
    location: { name: 'Near Tundi Road', coords: { lat: 24.16, lng: 86.26 } },
    iconName: 'Waves',
  },
];

const exploreSections = [
  { href: '/parasnath-hill', label: 'Parasnath Hill', icon: Mountain, image: 'https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_1280.jpg', dataAiHint: 'mountain pilgrimage jain', description: 'Sacred Jain site & Jharkhand\'s highest peak.' },
  { href: '/forests-wildlife', label: 'Forests & Wildlife', icon: TreePine, image: 'https://cdn.pixabay.com/photo/2022/08/18/06/57/monkey-7394077_1280.jpg', dataAiHint: 'dense forest animals india', description: 'Explore rich biodiversity and green landscapes.' },
  { href: '/culture-festivals', label: 'Culture & Festivals', icon: Landmark, image: 'https://cdn.pixabay.com/photo/2021/01/08/17/02/old-man-5900410_1280.jpg', dataAiHint: 'indian festival tribal dance', description: 'Discover local traditions and celebrations.' },
  { href: '/history-heritage', label: 'History & Heritage', icon: ScrollText, image: 'https://cdn.pixabay.com/photo/2016/12/18/15/28/hazara-rama-temple-1915985_1280.jpg', dataAiHint: 'old monument ruins india', description: 'Uncover stories and landmarks of the past.' },
  { href: '/local-economy-crafts', label: 'Economy & Crafts', icon: ShoppingBag, image: 'https://cdn.pixabay.com/photo/2023/05/29/18/10/pottery-8026823_1280.jpg', dataAiHint: 'handicraft market india pottery', description: 'Learn about mining, agriculture, and crafts.' },
  { href: '/tourism-guide', label: 'Tourism Guide', icon: MapIconUI, image: 'https://cdn.pixabay.com/photo/2019/12/05/10/01/forest-4674703_1280.jpg', dataAiHint: 'travel guide map compass', description: 'Plan your visit: attractions, stays, tips.' },
  { href: '/people-lifestyle', label: 'People & Lifestyle', icon: Users, image: 'https://cdn.pixabay.com/photo/2017/08/29/12/07/adult-2693054_1280.jpg', dataAiHint: 'indian village people community', description: 'Understand communities and daily life.' },
  { href: '/gallery', label: 'Gallery', icon: GalleryIcon, image: 'https://cdn.pixabay.com/photo/2017/08/06/09/29/man-2590655_1280.jpg', dataAiHint: 'photo gallery collection images', description: 'Visual glimpses of Giridih.' },
  { href: '/blogs', label: 'Blogs & Stories', icon: BookOpen, image: 'https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628_1280.jpg', dataAiHint: 'writing storytelling journal', description: 'Read experiences and tales from Giridih.' },
  { href: '/forums', label: 'Forums', icon: MessageSquare, image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg', dataAiHint: 'community discussion forum people', description: 'Connect and discuss with the community.' },
];

const pageTitle = "Explore Giridih - Attractions, Destinations, and Activities";
const pageContentSummary = "Find featured destinations, nature spots, spiritual sites, and cultural experiences in Giridih. Plan your exploration with our detailed guide.";
const contentType = 'directory page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://giridih.example.com';
  const canonicalUrl = `${siteUrl}/explore`;
  const pageImage = featuredAttractions[0]?.image || `${siteUrl}/og-explore.png`;
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
      keywords: seoData.keywords || ['Giridih attractions', 'explore Giridih', 'Jharkhand tourism', 'Parasnath Hill guide', 'Khandoli Dam', 'Usri Falls'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: pageImage, alt: 'Explore Giridih Attractions' },
          ...previousImages
        ],
        type: 'website', 
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        images: [pageImage],
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
          images: [pageImage],
      }
    };
  }
}


export default function ExplorePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://giridih.example.com';
  const canonicalUrl = `${siteUrl}/explore`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage", 
    "name": pageTitle,
    "description": pageContentSummary,
    "url": canonicalUrl,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Explore Giridih"
        }
      ]
    },
    "mainEntity": {
        "@type": "ItemList",
        "name": "Giridih Exploration Sections",
        "itemListElement": exploreSections.map((section, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "WebPage", 
                "url": `${siteUrl}${section.href}`,
                "name": section.label,
                "description": section.description,
                "image": section.image
            }
        }))
    }
  };

  return (
    <div className="space-y-12">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <section>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-2">
                    <MapPin className="h-7 w-7 text-primary" /> Featured Destinations
                </h2>
                <p className="text-muted-foreground mt-2">
                    Discover the top attractions Giridih has to offer.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredAttractions.map((attraction) => (
                   <FeaturedAttractionCard key={attraction.id} attraction={attraction} />
                ))}
            </div>
        </section>

      
      <section>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <Compass className="h-8 w-8 text-primary" /> Explore Giridih
          </h1>
          <p className="text-muted-foreground mt-2">
            Navigate through different sections of the Giridih Explorer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {exploreSections.map((section) => (
            <Card
              key={section.href}
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-border rounded-lg transform hover:-translate-y-1 group flex flex-col"
            >
              <Link href={section.href} className="flex flex-col flex-grow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.label}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={section.dataAiHint}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 p-1.5 bg-background/70 backdrop-blur-sm rounded-full">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{section.label}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

    