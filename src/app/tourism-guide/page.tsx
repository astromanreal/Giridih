
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  MapPin,
  Mountain,
  Waves, // For Usri Falls
  ShipWheel, // For Khandoli Dam/Boating
  Home as HomeIcon, // For Madhuban
  Trees, // For Parasnath Sanctuary
  Landmark, // For Beniadih Mines & Heritage
  Route,
  Bed,
  Hotel, // More specific for Hotels
  Utensils,
  ShoppingBasket,
  CalendarDays,
  Train,
  Car,
  Plane,
  Sun,
  Phone,
  Camera,
  Download,
  FileText,
  Users as UsersIcon, // For local guides
  MessageCircle, // For feedback
  Languages, // For toggle
  ArrowRight,
  Info,
  Building // For Dharamshalas,
} from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const heroImage = "https://cdn.pixabay.com/photo/2019/04/24/14/03/map-4152197_1280.jpg";
const pageTitle = "Giridih Tourism Guide - Plan Your Visit, Attractions, Stays, Food, and Tips";
const pageContentSummary = "A comprehensive tourism guide for visiting Giridih district. Find essential information on top places to visit like Parasnath Hill and Usri Falls, things to do, accommodation options, local cuisine, and practical travel tips for a memorable trip.";
const contentType = 'guide page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/tourism-guide`;
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
      keywords: seoData.keywords || ['Giridih travel guide', 'plan trip to Giridih', 'Giridih attractions guide', 'where to stay Giridih', 'Giridih food', 'Jharkhand travel tips', 'Parasnath Hill guide', 'Usri Falls information', 'Khandoli Dam activities'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: heroImage, alt: 'Tourist map with compass and travel elements for Giridih guide' },
          ...previousImages
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        images: [heroImage],
      },
    };
  } catch (error: any) {
    let errorMessage = 'Unknown error during SEO metadata generation';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'toString' in error) {
      errorMessage = error.toString();
    }
    console.error(`AI SEO Metadata Generation Error for ${pageTitle}: ${errorMessage}. Details:`, error);
    return {
      title: pageTitle,
      description: pageContentSummary,
      alternates: { canonical: canonicalUrl },
      openGraph: {
          title: pageTitle,
          description: pageContentSummary,
          url: canonicalUrl,
          images: [heroImage],
      }
    };
  }
}

const topAttractions = [
  { name: 'Parasnath Hill (Shikharji)', icon: Mountain, image: 'https://t3.ftcdn.net/jpg/06/44/90/42/240_F_644904289_NbXKTKISNlcpn6ttB2P3upo1IIPqpeKE.jpg', dataAiHint: 'parasnath hill shikharji jain', description: 'Sacred Jain pilgrimage site & Jharkhand\'s highest peak.', href: '/parasnath-hill' },
  { name: 'Usri Falls', icon: Waves, image: 'https://drive.google.com/uc?export=view&id=1qftnXBVFJ3ARkS9Ym3Kk1ODifN2Mv9Os', dataAiHint: 'usri falls waterfall giridih', description: 'Majestic waterfall set in rocky terrain.', href: '/explore#usri-falls' },
  { name: 'Khandoli Dam & Park', icon: ShipWheel, image: 'https://drive.google.com/uc?export=view&id=1NuVl3Ql4tREgjsx3FfTZ2ENgDSqQ3Ps5', dataAiHint: 'khandoli dam boating park', description: 'Boating, birds, and adventure sports.', href: '/explore#khandoli-dam' },
  { name: 'Madhuban', icon: HomeIcon, image: 'https://i.pinimg.com/736x/32/1b/b5/321bb53abf1e64db7f61b55bcf55c342.jpg', dataAiHint: 'madhuban town jain temples', description: 'Spiritual town at the base of Shikharji.', href: '/parasnath-hill' },
  { name: 'Parasnath Wildlife Sanctuary', icon: Trees, image: 'https://i.pinimg.com/736x/8b/4f/67/8b4f67bec605c0dc6c8868cf3b551f0b.jpg', dataAiHint: 'parasnath wildlife sanctuary india', description: 'Forests with elephants, deer, and birds.', href: '/forests-wildlife#parasnath-sanctuary' },
];

const travelTrails = [
  { name: 'Spiritual Trail', icon: Landmark, description: 'Shikharji → Madhuban Temples → Rural Jain Shrines. Ideal for pilgrims and those seeking spiritual solace.', points: ['Shikharji Peak', 'Madhuban Jain Temples', 'Local Village Shrines'] },
  { name: 'Nature & Wildlife Trail', icon: Trees, description: 'Khandoli Dam → Usri Falls → Forest Trek in Parasnath Sanctuary. Perfect for nature lovers and birdwatchers.', points: ['Khandoli Dam (Boating, Birding)', 'Usri Falls (Scenic Views)', 'Parasnath Sanctuary (Trekking, Wildlife Spotting)'] },
  { name: 'Heritage Trail', icon: Route, description: 'Old mining towns → British-era structures → Historic railway sites. A journey into Giridih\'s industrial and colonial past.', points: ['Beniadih Coal Mines', 'Colonial Bungalows', 'Old Railway Stations'] },
];

const accommodationTypes = [
  { name: 'Hotels (Mid-Range)', icon: Hotel, description: 'Comfortable stays in Giridih town with standard amenities.', details: 'Various options available, ranging from budget to 3-star quality. Check online travel agencies or local listings for reviews and booking. Good for easy access to town amenities and transport hubs.' },
  { name: 'Homestays & Guesthouses', icon: HomeIcon, description: 'Experience local life, possibly near tribal villages or in quieter localities.', details: 'Offers authentic cultural immersion. Availability can be limited, often arranged through local contacts or specific tourism initiatives. Ideal for understanding local customs and enjoying home-cooked meals.' },
  { name: 'Jain Dharamshalas', icon: Building, description: 'Pilgrim lodges primarily in and around Madhuban.', details: 'Primarily cater to Jain pilgrims. Offer basic, clean accommodation, often adhering to Jain dietary principles (Sattvik food). Located conveniently for the Shikharji pilgrimage.' },
  { name: 'Eco-Camps & Forest Lodges', icon: Trees, description: 'Stay close to nature, particularly near Khandoli Dam or Parasnath Sanctuary periphery.', details: 'Tent-based or rustic cottage stays. Focus on nature, trekking, and adventure. Check for seasonal availability and pre-booking requirements, especially for forest department guesthouses.' },
];

const localCuisine = [
  { name: 'Thekua', image: 'https://i.pinimg.com/736x/7f/00/9f/7f009f4102f231abce0bf7297c73a342.jpg', dataAiHint: 'thekua indian sweet snack', description: 'Sweet wheat flour snack.' },
  { name: 'Handia', image: 'https://i.pinimg.com/736x/9b/75/cb/9b75cb878c8d4598ab3ce719472ce26f.jpg', dataAiHint: 'handia rice beer tribal drink', description: 'Traditional rice beer (tribal brew).' },
  { name: 'Dhooska', image: 'https://i.pinimg.com/736x/1d/2a/84/1d2a84895743d79cd0fe01c5a36ee9e0.jpg', dataAiHint: 'dhuska jharkhand food snack', description: 'Deep-fried rice flour pancake.' },
  { name: 'Arsa Roti', image: 'https://i.pinimg.com/736x/5e/82/64/5e8264afa5243e1256fa5d16d351d274.jpg', dataAiHint: 'arsa roti jharkhand sweet', description: 'Sweet rice flour bread.' },
];

const shoppingItems = [
  { name: 'Tribal Jewelry', description: 'Unique silver and bead jewelry often featuring traditional motifs.', category: 'Handicrafts, Fashion', availability: 'Local markets (haats), artisan co-ops, shops near tourist spots.', dataAiHint: 'tribal jewelry silver india' },
  { name: 'Bamboo Art & Crafts', description: 'Handcrafted bamboo items like baskets, mats, decorative pieces, and small furniture.', category: 'Home Decor, Utility', availability: 'Village markets, craft fairs, government emporiums.', dataAiHint: 'bamboo craft basket india' },
  { name: 'Stone Carvings & Sculptures', description: 'Intricate stone carvings, often depicting deities or traditional patterns, made by local artisans.', category: 'Art, Souvenirs', availability: 'Specialized shops, particularly near Parasnath/Madhuban.', dataAiHint: 'stone carving sculpture india' },
  { name: 'Jain Religious Souvenirs', description: 'Religious items, mementos, books, and images related to Jainism.', category: 'Religious, Souvenirs', availability: 'Shops in Madhuban, catering to pilgrims.', dataAiHint: 'jain religious souvenirs' },
  { name: 'Giridih Honey & Forest Products', description: 'Pure local honey, medicinal herbs, and other non-timber forest produce.', category: 'Food, Wellness', availability: 'Forest department outlets, local vendors, weekly markets.', dataAiHint: 'local honey herbal products' },
  { name: 'Sohrai & Khovar Paintings', description: 'Traditional tribal paintings on paper or cloth, showcasing vibrant folk art.', category: 'Art, Decor', availability: 'Artisan collectives, cultural centers, some local markets.', dataAiHint: 'sohrai khovar painting tribal' },
];

const festivalsEvents = [
  { name: 'Mahavir Jayanti (Shikharji)', month: 'March/April', description: 'Grand celebrations at Parasnath Hill.', image: 'https://i.pinimg.com/736x/3e/eb/05/3eeb058e14836876b596129168f0848f.jpg', dataAiHint: 'mahavir jayanti jain festival' },
  { name: 'Sohrai & Karma Festival', month: 'October/November (Sohrai), August/September (Karma)', description: 'Vibrant tribal harvest festivals.', image: 'https://i.pinimg.com/736x/0f/82/fc/0f82fcf6eb847c4ce971b04ac7c6afa3.jpg', dataAiHint: 'sohrai festival karma puja' },
  { name: 'Local Fairs & Cultural Dances', month: 'Varies', description: 'Various local fairs showcasing regional culture.', image: 'https://i.pinimg.com/736x/15/2a/ec/152aec4793761f20778a33fb93838ee9.jpg', dataAiHint: 'indian fair cultural dance' },
];

const travelEssentials = [
  { label: 'Nearest Station', value: 'Giridih (GRD) & Parasnath (PNME)', icon: Train },
  { label: 'Road Connectivity', value: 'NH-114A connects major cities', icon: Car },
  { label: 'Nearest Airport', value: 'Ranchi (IXR) or Kazi Nazrul Islam Airport, Durgapur (RDP)', icon: Plane },
  { label: 'Best Time to Visit', value: 'October to March', icon: Sun },
  { label: 'Emergency Numbers', value: 'Police: 100, Ambulance: 102/108', icon: Phone },
];

export default function TourismGuidePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/tourism-guide`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageContentSummary,
    "url": canonicalUrl,
    "image": heroImage,
     "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": "Tourism Guide" }
      ]
    },
    "mainEntity": {
        "@type": "Guide",
        "name": "Giridih Tourism Guide",
        "author": { "@type": "Organization", "name": "Giridih Explorer" },
        "publisher": {
            "@type": "Organization", "name": "Giridih Explorer",
            "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png`, "dataAiHint": "site logo" }
        },
        "datePublished": "2024-01-06",
        "dateModified": new Date().toISOString().split('T')[0],
        "hasPart": topAttractions.map(att => ({
            "@type": "TouristAttraction",
            "name": att.name,
            "description": att.description,
            "image": att.image,
            "url": `${siteUrl}${att.href}`
        }))
    }
  };

  return (
    <div className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-xl">
        <Image
          src={heroImage}
          alt="Panoramic view representing Giridih's tourism potential"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="absolute inset-0 z-0 brightness-50"
          data-ai-hint="giridih landscape travel map"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 z-0"></div>
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/50 rounded-md backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Welcome to Giridih
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Land of Hills, Forests & Faith. Your ultimate guide to exploring the wonders of Giridih.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button size="lg" asChild>
                <Link href="#top-attractions">Top Attractions <MapPin className="ml-2 h-5 w-5"/></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                 <Link href="#travel-essentials">Plan Your Trip <Info className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1: Top Tourist Attractions */}
      <section id="top-attractions" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
          <MapPin className="text-primary h-8 w-8"/> Top Tourist Attractions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topAttractions.map(attraction => (
            <Card key={attraction.name} className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <Link href={attraction.href} className="block">
                <div className="relative h-52 w-full">
                  <Image src={attraction.image} alt={attraction.name} layout="fill" objectFit="cover" data-ai-hint={attraction.dataAiHint} className="transition-transform duration-300 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 right-2 p-1.5 bg-background/70 backdrop-blur-sm rounded-full">
                    <attraction.icon className="h-5 w-5 text-primary"/>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{attraction.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 2: Themed Travel Trails */}
      <section id="travel-trails" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
          <Route className="text-primary h-8 w-8"/> Themed Travel Trails
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Discover Giridih through curated trails that highlight its diverse offerings. Whether you seek spiritual enlightenment, natural beauty, or a glimpse into history, these trails provide a structured way to explore.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {travelTrails.map(trail => (
            <Card key={trail.name} className="shadow-lg border-border/30 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-foreground">
                    <trail.icon className="h-7 w-7 text-secondary shrink-0"/> {trail.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed">{trail.description}</p>
                <div>
                    <h4 className="text-xs font-semibold text-primary mb-1">Key Stops:</h4>
                    <ul className="list-disc list-inside pl-2 text-xs text-muted-foreground space-y-0.5">
                        {trail.points.map(point => <li key={point}>{point}</li>)}
                    </ul>
                </div>
              </CardContent>
              <CardContent className="pt-2">
                 <Button variant="outline" size="sm" className="w-full" disabled>
                    View Trail Map (Soon)
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: Stay & Accommodation */}
      <section id="accommodation" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
          <Bed className="text-primary h-8 w-8"/> Stay & Accommodation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accommodationTypes.map(type => (
            <Card key={type.name} className="shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="pb-3 pt-4">
                <div className="flex items-center gap-3 mb-2">
                    <type.icon className="h-8 w-8 text-primary"/>
                    <CardTitle className="text-lg leading-tight">{type.name}</CardTitle>
                </div>
                <CardDescription className="text-xs">{type.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">{type.details}</p>
              </CardContent>
              <CardContent className="pt-2">
                 <Button variant="link" size="sm" className="p-0 text-xs" disabled>
                    Find Options (Soon) <ArrowRight className="ml-1 h-3 w-3"/>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground"> (Detailed listings and map integration coming soon)</p>
      </section>

      {/* Section 4: Food & Local Cuisine */}
        <section id="food" className="scroll-mt-20 space-y-6">
            <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                <Utensils className="text-primary h-8 w-8"/> Food & Local Cuisine
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {localCuisine.map(dish => (
                    <Card key={dish.name} className="overflow-hidden group shadow-sm">
                        <div className="relative aspect-square w-full">
                            <Image src={dish.image} alt={dish.name} layout="fill" objectFit="cover" data-ai-hint={dish.dataAiHint} className="group-hover:scale-105 transition-transform"/>
                        </div>
                        <CardContent className="p-3 text-center">
                            <p className="text-sm font-medium text-foreground group-hover:text-primary">{dish.name}</p>
                            <p className="text-xs text-muted-foreground line-clamp-1">{dish.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">Explore local bazaars, forest canteens, and Shikharji dhabas for authentic tastes. (Eatery map coming soon)</p>
        </section>

      {/* Section 5: Shopping & Crafts */}
        <section id="shopping" className="scroll-mt-20 space-y-6">
            <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                <ShoppingBasket className="text-primary h-8 w-8"/> Shopping & Crafts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shoppingItems.map(item => (
                     <Card key={item.name} className="shadow-md hover:shadow-lg transition-shadow flex flex-col">
                        <CardHeader className="pb-2 pt-4">
                           <CardTitle className="text-lg group-hover:text-primary">{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-2">
                           <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                           <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                           <p className="text-xs text-muted-foreground"><strong>Available at:</strong> {item.availability}</p>
                        </CardContent>
                        <CardContent className="pt-1">
                            <Button variant="outline" size="sm" className="w-full text-xs" disabled>
                                Where to Buy (Soon)
                            </Button>
                        </CardContent>
                     </Card>
                ))}
            </div>
             <p className="text-center text-sm text-muted-foreground">(Shop locations and artisan details coming soon)</p>
        </section>

      {/* Section 6: Festivals & Events */}
      <section id="festivals-events" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
          <CalendarDays className="text-primary h-8 w-8"/> Festivals & Events
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
            {festivalsEvents.map(event => (
                <Card key={event.name} className="shadow-sm border-border/30 overflow-hidden group">
                     <div className="relative h-40 w-full">
                        <Image src={event.image} alt={event.name} layout="fill" objectFit="cover" data-ai-hint={event.dataAiHint} className="group-hover:scale-105 transition-transform"/>
                    </div>
                    <CardHeader>
                         <CardTitle className="text-lg text-foreground/90 group-hover:text-primary">{event.name}</CardTitle>
                         <CardDescription className="text-xs text-primary">{event.month}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
         <p className="text-center text-sm text-muted-foreground">(Detailed calendar with popups coming soon)</p>
      </section>

      {/* Section 7: Travel Essentials */}
      <section id="travel-essentials" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
          <Info className="text-primary h-8 w-8"/> Travel Essentials
        </h2>
        <Card className="shadow-lg">
            <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {travelEssentials.map(essential => (
                    <div key={essential.label} className="flex items-start gap-3">
                        <essential.icon className="h-6 w-6 text-secondary mt-1 shrink-0"/>
                        <div>
                            <h4 className="font-semibold text-foreground">{essential.label}</h4>
                            <p className="text-sm text-muted-foreground">{essential.value}</p>
                        </div>
                    </div>
                ))}
                 <div className="flex items-start gap-3">
                    <Landmark className="h-6 w-6 text-secondary mt-1 shrink-0"/>
                    <div>
                        <h4 className="font-semibold text-foreground">Banks & ATMs</h4>
                        <p className="text-sm text-muted-foreground">Available in Giridih town and major block HQs.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-3">
                    <HomeIcon className="h-6 w-6 text-secondary mt-1 shrink-0"/> {/* Using HomeIcon or similar as FirstAidKit is not common */}
                    <div>
                        <h4 className="font-semibold text-foreground">Medical Facilities</h4>
                        <p className="text-sm text-muted-foreground">Sadar Hospital Giridih, private clinics. Basic facilities in rural areas.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </section>

      {/* Section 8: Downloadables & Help */}
      <section id="downloadables" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
          <Download className="text-primary h-8 w-8"/> Downloadables & Help
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
                { title: "Tourist Brochure", icon: FileText, dataAiHint: "tourist brochure giridih pdf" },
                { title: "Interactive Map (Link)", icon: MapPin, dataAiHint: "giridih interactive map" },
                { title: "Jain Pilgrimage Guide", icon: Landmark, dataAiHint: "jain pilgrimage guide pdf" },
                { title: "Local Guides List", icon: UsersIcon, dataAiHint: "local guides contact giridih" }
            ].map(item => (
                <Card key={item.title} className="p-4 shadow-sm hover:shadow-md transition-shadow">
                    <item.icon className="h-10 w-10 text-secondary mx-auto mb-2"/>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">(Coming Soon)</p>
                </Card>
            ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-10 border-t mt-16 border-border/50">
        <h3 className="text-xl font-semibold mb-4 text-foreground/90">Plan Your Adventure!</h3>
        <div className="space-x-2 sm:space-x-4 mb-4">
          <Button variant="link" asChild><Link href="/culture-festivals">Culture & Festivals</Link></Button>
          <Button variant="link" asChild><Link href="/history-heritage">History & Heritage</Link></Button>
          <Button variant="link" asChild><Link href="/forests-wildlife">Forests & Wildlife</Link></Button>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          For official tourism inquiries: Giridih Tourism Department (Details to be added)
        </p>
        <div className="flex gap-2 justify-center">
            <Button variant="outline" disabled>
                <MessageCircle className="mr-2 h-4 w-4"/> How was your trip? (Feedback Soon)
            </Button>
             <Button variant="outline" disabled>
                <Languages className="mr-2 h-4 w-4"/> Language (EN/HI Soon)
            </Button>
        </div>
      </footer>
    </div>
  );
}

