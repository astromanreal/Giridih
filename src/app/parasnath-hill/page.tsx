
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mountain, Zap, Leaf, MapPin as MapPinIconLucide, CalendarDays, Users, Home as HomeIcon, Route, Camera, FileText, HelpCircle, ShieldCheck, BookOpen, TrendingUp, Flag, Info, Map, Image as ImageIcon, ArrowRight, Mic2, Download as DownloadIcon, Youtube, MessageSquare } from 'lucide-react'; // Added Youtube, MessageSquare
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';

const pageData = {
  hero: {
    title: "Sacred Peaks of Shikharji",
    subtitle: "Jharkhand's highest summit and the paramount pilgrimage destination for the Jain faith, revered as the site of Moksha for twenty Tirthankaras.",
    backgroundImage: "https://t3.ftcdn.net/jpg/06/44/90/42/240_F_644904289_NbXKTKISNlcpn6ttB2P3upo1IIPqpeKE.jpg",
    dataAiHint: "parasnath hill shikharji temple sunrise",
  },
  spiritualSignificance: {
    title: "Spiritual Significance",
    icon: Zap,
    alsoKnownAs: "Shikharji – \"Venerable Peak\"",
    jainBelief: "It is profoundly sacred as 20 out of 24 Jain Tirthankaras (Ford-makers) are believed to have attained moksha (liberation) on this hill.",
    mainTemple: "The main temple at the summit is dedicated to Lord Parshvanath, the 23rd Tirthankara.",
    pilgrimageRoute: "The pilgrimage involves a Parikrama (circumambulation) starting from Madhuban. The ascent to the main temples is approximately 9 km. The full traditional Parikrama circuit, visiting key Tonks, is a challenging spiritual journey covering about 27 km, including the ascent and descent. Many pilgrims complete this in a single day, often starting very early in the morning.",
    sects: "Deeply revered by all major Jain sects, including Digambara and Shwetambara, making it a unifying symbol of Jain faith."
  },
  geographyNature: {
    title: "Geography & Nature",
    icon: Leaf,
    location: "Part of the Chota Nagpur Plateau, prominently situated in the Giridih district of Jharkhand.",
    elevation: "Approximately 1,365 meters (4,478 feet), making it the highest peak in Jharkhand.",
    flora: "The hills are covered with dense tropical dry deciduous forests, rich in Sal (Shorea robusta) and bamboo, along with various medicinal herbs and plants of significant ecological value.",
    fauna: "Home to diverse wildlife including leopards, sloth bears, sambar deer, nilgai, barking deer, wild boars, langurs, and numerous bird species, reflecting the region's rich biodiversity.",
    ecoSensitive: "The area around Parasnath Hill has been declared an eco-sensitive zone to protect its rich biodiversity and pristine environment, emphasizing the need for responsible tourism.",
  },
  trekking: {
    title: "Trekking to the Top",
    icon: Route,
    startingPoints: "Madhuban (base village), Nimiaghat (near Isri Bazar). Madhuban is the primary base.",
    templesEnRoute: "The trekking path is dotted with numerous Tonks, small temples or shrines, each dedicated to a Tirthankara or a significant event.",
    trekDistance: "The main trek to the summit temples is around 9 km uphill from Madhuban. The full parikrama circuit visiting key Tonks is approximately 27 km.",
    viewpoint: "The summit offers breathtaking panoramic views of the surrounding forests and plains, especially captivating at sunrise and sunset.",
    devoteesNote: "Many devotees undertake the pilgrimage barefoot as a mark of deep reverence. Basic facilities like water, snacks, and palanquin services (dolis) for the elderly or those unable to walk are available along the route.",
    image: "https://t4.ftcdn.net/jpg/03/84/67/31/240_F_384673140_ZseAsxjhqtYrqqiFLzS4FfDVL0DdwqoM.jpg", 
    dataAiHint: "parasnath hill pathway pilgrimage"
  },
  madhuban: {
    title: "Madhuban – The Gateway",
    icon: HomeIcon,
    features: [
      { name: "Ancient Jain Temples", description: "Madhuban houses several beautiful and ancient Jain temples with intricate carvings and historical significance, serving as a spiritual prelude to the main ascent. These temples often feature detailed marble work and serene prayer halls." },
      { name: "Dharamshalas & Lodges", description: "Numerous dharamshalas (pilgrim guest houses) and lodges provide accommodation for pilgrims and tourists, offering varying levels of comfort and amenities, many adhering to Jain dietary principles." },
      { name: "Local Markets & Amenities", description: "Small markets cater to pilgrim needs, selling religious items, books, local crafts, and essentials for the trek. Basic medical facilities and transport options are also available." },
      { name: "Sattvik Food Outlets", description: "Availability of pure Jain vegetarian (sattvik) meals and local snacks suitable for pilgrims. Many dharamshalas also provide bhojanshalas (community dining halls)." },
    ]
  },
  importantTonks: {
    title: "Important Tonks (Shrines)",
    icon: Mountain, 
    tonks: [
      { name: "Gautam Swami Tonk", description: "Sacred shrine dedicated to Gautam Swami, a chief disciple of Lord Mahavira." },
      { name: "Kunthunath Tonk", description: "Marks the liberation site of Tirthankara Kunthunath, the 17th Tirthankara." },
      { name: "Rishabhanatha Tonk", description: "Commemorates Tirthankara Rishabhanatha, the first Tirthankara." },
      { name: "Chandraprabhu Tonk", description: "Dedicated to Tirthankara Chandraprabhu, the 8th Tirthankara." },
      { name: "Parshvanath Tonk", description: "The main summit temple complex for Tirthankara Parshvanath, the 23rd Tirthankara." },
      { name: "Shantinath Tonk", description: "Shrine for Tirthankara Shantinath, the 16th Tirthankara." },
      { name: "Mahavira Tonk", description: "Associated with Tirthankara Mahavira, the 24th Tirthankara." },
      { name: "Jal Mandir (Madhuban)", description: "A beautiful water temple located at the base in Madhuban, known for its serene ambiance." },
    ],
    note: "Each Tonk marks the spot where a Tirthankara is believed to have attained Moksha. There are officially 31 Tonks, though pilgrims primarily visit about 20-24 significant ones during the Parikrama."
  },
  historicalCulturalNotes: {
    title: "Historical & Cultural Notes",
    icon: BookOpen,
    notes: [
      { title: "Ancient Scriptures", content: "Shikharji's sanctity is documented in ancient Jain scriptures and texts, dating back centuries, establishing its long-standing importance." },
      { title: "British Era Recognition", content: "British-era surveys and administrative records also acknowledged Parasnath Hill as a major holy site for the Jains." },
      { title: "Community Preservation Efforts", content: "The Jain community worldwide actively participates in the preservation and maintenance of Shikharji. There have been significant movements to maintain its religious sanctity and protect it from disruptive commercial activities or inappropriate tourism." },
      { title: "Cultural Hub", content: "Madhuban, the base town, acts as a cultural and spiritual hub, reflecting Jain traditions, lifestyle, and cuisine." },
    ]
  },
  conservationEcoEthics: {
    title: "Conservation & Eco-Ethics",
    icon: ShieldCheck,
    points: [
      { text: "Recognized as a sacred site, with efforts to maintain its religious sanctity. The Jharkhand government has also acknowledged its special status.", icon: Flag },
      { text: "Eco-trekking is encouraged. Pilgrims and visitors are urged to minimize their environmental impact, and plastic use is strongly discouraged.", icon: Leaf },
      { text: "Local organizations and volunteers often conduct nature awareness programs and cleanliness drives.", icon: Users },
      { text: "Respect for the pristine environment, its flora, and fauna is paramount for all visitors.", icon: HelpCircle }
    ]
  },
  pilgrimageGallery: {
    title: "Pilgrimage Gallery",
    icon: Camera,
    images: [
      { src: "https://t3.ftcdn.net/jpg/02/86/70/92/240_F_286709271_eqrdMRV1mju29M3FhRrP2j0P5nMyLeOp.jpg", alt: "Monks on Parasnath pathway", dataAiHint: "jain monks pilgrimage shikharji" },
      { src: "https://t3.ftcdn.net/jpg/02/86/70/90/240_F_286709081_4xVbIHRkdvz3l3aFK6vvWfkgbRQXvVjp.jpg", alt: "Temple detail at Shikharji", dataAiHint: "shikharji temple architecture detail" },
      { src: "https://t4.ftcdn.net/jpg/03/84/67/31/240_F_384673140_ZseAsxjhqtYrqqiFLzS4FfDVL0DdwqoM.jpg", alt: "Pathway view at Shikharji", dataAiHint: "parasnath hill pathway view" },
    ]
  },
  travelTips: {
    title: "Travel & Tips",
    icon: Info,
    points: [
      { label: "How to Reach", value: "Nearest major town is Isri Bazar. The main railway station is Parasnath (PNME), well-connected to major cities. Nearest airports are Ranchi (IXR, approx 150km) and Kazi Nazrul Islam Airport, Durgapur (RDP, approx 130km). From Parasnath station or Isri, Madhuban is reachable by road (taxis, autos).", icon: Route },
      { label: "Best Time to Visit", value: "October to March offers pleasant weather for trekking. Summers can be hot, and monsoons (July-September) bring rain, making the trek challenging.", icon: CalendarDays },
      { label: "Stay", value: "Numerous Ashrams, dharamshalas in Madhuban catering to pilgrims. Basic hotels are also available in Madhuban and nearby towns like Isri.", icon: HomeIcon },
      { label: "Essentials", value: "Comfortable walking shoes (many walk barefoot), light woolens (evenings/mornings can be cool, especially at the summit), reusable water bottle, basic first-aid kit, and a small backpack.", icon: Zap },
      { label: "Respect Local Customs", value: "Dress modestly, maintain silence and sanctity in temple areas, follow Jain dietary restrictions if staying in dharamshalas, and be respectful of pilgrims.", icon: Users },
    ]
  },
  visitorQuotes: {
    title: "Visitor Quotes",
    icon: MessageSquare, 
    quotes: [
      { text: "Walking on Shikharji is not just a trek, it's a journey towards the soul’s freedom and inner peace. The vibrations here are palpable.", by: "Jain pilgrim from Gujarat" },
      { text: "It’s more than just a hill; it’s a living temple cradled in the clouds. The serenity and spiritual energy are unparalleled. A truly transformative experience.", by: "Spiritual traveler from Mumbai" },
    ]
  },
  footerResources: {
    title: "Resources & Further Exploration",
    icon: FileText,
    links: [
      { text: "Pilgrimage Map (Soon)", href: "#", icon: DownloadIcon, download: false, disabled: true },
      { text: "Watch Travel Guides on YouTube", href: "https://www.youtube.com/results?search_query=Shikharji+Parasnath+travel+guide", icon: Youtube, target: "_blank" },
    ],
    quickLinks: [
      { href: "/tourism-guide", text: "Complete Tourism Guide" },
      { href: "/culture-festivals", text: "Explore Local Culture" },
      { href: "/history-heritage", text: "Delve into Heritage" },
    ]
  }
};

const heroImage = pageData.hero.backgroundImage;
const pageTitle = "Parasnath Hill (Shikharji) - Sacred Jain Pilgrimage & Trek in Giridih";
const pageContentSummary = "Explore Parasnath Hill (Shikharji), Jharkhand's highest peak and a paramount Jain pilgrimage site. Learn about its spiritual significance, the trek, temples, Madhuban, conservation efforts, and plan your visit to this iconic destination in Giridih.";
const contentType = 'destination page';

export async function generateMetadata(
  { params }: { params: { slug: string } }, 
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/parasnath-hill`;
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
      keywords: seoData.keywords || ['Parasnath Hill', 'Shikharji', 'Jain pilgrimage', 'Giridih tourism', 'Jharkhand trekking', 'Madhuban', 'Tirthankara', 'Moksha Sthal', 'Jain temples Jharkhand'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: heroImage, alt: 'Panoramic view of Parasnath Hill (Shikharji) peak and temples' },
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

export default function ParasnathHillPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/parasnath-hill`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Parasnath Hill (Shikharji)",
    "description": pageContentSummary,
    "image": heroImage,
    "url": canonicalUrl,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.9684",
      "longitude": "86.1174"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madhuban",
      "addressRegion": "Giridih District, Jharkhand",
      "addressCountry": "IN"
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": canonicalUrl
    },
    "isLocatedIn": {
        "@type": "AdministrativeArea",
        "name": "Giridih District, Jharkhand, India"
    },
    "keywords": "Parasnath Hill, Shikharji, Jain pilgrimage, Giridih, Jharkhand, trekking, temples, Madhuban, Tirthankara, Moksha Sthal",
    "hasMap": `${siteUrl}/tourism-guide#travel-trails` 
  };


  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-xl">
        <Image
          src={pageData.hero.backgroundImage}
          alt="Panoramic view of Parashnath peak with temple silhouettes at sunrise"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="absolute inset-0 z-0 brightness-75" 
          data-ai-hint={pageData.hero.dataAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 z-0"></div>
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/60 rounded-md backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {pageData.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed"> 
            {pageData.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Section 1: Spiritual Significance */}
      <section id="spiritual-significance" className="scroll-mt-20 space-y-6">
        <Card className="shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
               <pageData.spiritualSignificance.icon className="text-primary h-8 w-8" /> {pageData.spiritualSignificance.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4 text-muted-foreground leading-relaxed text-base">
              <p><strong>Also Known As:</strong> <span className="font-medium text-foreground">{pageData.spiritualSignificance.alsoKnownAs}</span></p>
              <p>{pageData.spiritualSignificance.jainBelief}</p>
              <p><strong>Main Temple:</strong> {pageData.spiritualSignificance.mainTemple}</p>
              <p><strong>Pilgrimage Route:</strong> {pageData.spiritualSignificance.pilgrimageRoute}</p>
              <p><strong>Revered By:</strong> {pageData.spiritualSignificance.sects}</p>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Geography & Nature */}
      <section id="geography-nature" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.geographyNature.icon className="text-primary h-8 w-8"/> {pageData.geographyNature.title}
        </h2>
        <Card className="shadow-lg">
            <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md shadow-sm">
                            <MapPinIconLucide className="h-6 w-6 text-secondary mt-1 shrink-0"/>
                            <div>
                                <h4 className="font-semibold text-foreground">Location</h4>
                                <p className="text-sm text-muted-foreground">{pageData.geographyNature.location}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md shadow-sm">
                            <TrendingUp className="h-6 w-6 text-secondary mt-1 shrink-0"/>
                            <div>
                                <h4 className="font-semibold text-foreground">Elevation</h4>
                                <p className="text-sm text-muted-foreground">{pageData.geographyNature.elevation}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="p-3 bg-muted/50 rounded-md shadow-sm">
                             <h4 className="font-semibold text-foreground mb-1">Flora Highlights</h4>
                             <p className="text-sm text-muted-foreground leading-relaxed">{pageData.geographyNature.flora}</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-md shadow-sm">
                             <h4 className="font-semibold text-foreground mb-1">Fauna Highlights</h4>
                             <p className="text-sm text-muted-foreground leading-relaxed">{pageData.geographyNature.fauna}</p>
                        </div>
                    </div>
                </div>
                 <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-md shadow-sm border border-green-200 dark:border-green-700">
                    <p className="text-green-700 dark:text-green-400 font-medium flex items-center gap-2"><ShieldCheck className="h-5 w-5"/> {pageData.geographyNature.ecoSensitive}</p>
                 </div>
            </CardContent>
        </Card>
      </section>

      {/* Section 3: Trekking to the Top */}
      <section id="trekking" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.trekking.icon className="text-primary h-8 w-8"/> {pageData.trekking.title}
        </h2>
        <Card className="shadow-lg">
            <CardContent className="p-6 grid md:grid-cols-5 gap-6 items-center">
                 <div className="md:col-span-2 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                    <Image src={pageData.trekking.image} alt="Trekking trail on Parasnath Hill" layout="fill" objectFit="cover" data-ai-hint={pageData.trekking.dataAiHint}/>
                </div>
                <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong>Starting Points:</strong> {pageData.trekking.startingPoints}</p>
                    <p>{pageData.trekking.templesEnRoute}</p>
                    <p><strong>Trek Distance:</strong> {pageData.trekking.trekDistance}</p>
                    <p><strong>Viewpoint:</strong> {pageData.trekking.viewpoint}</p>
                    <p>{pageData.trekking.devoteesNote}</p>
                    <p className="text-xs italic"> (Illustrated map/step-by-step visual coming soon)</p>
                </div>
            </CardContent>
        </Card>
      </section>

      {/* Section 4: Madhuban – The Gateway */}
      <section id="madhuban" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.madhuban.icon className="text-primary h-8 w-8"/> {pageData.madhuban.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.madhuban.features.map(feature => (
                <Card key={feature.name} className="shadow-md hover:shadow-xl transition-shadow flex flex-col">
                    <CardHeader className="pb-2 pt-3">
                        <CardTitle className="text-lg">{feature.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      {/* Section 5: Important Tonks */}
      <section id="important-tonks" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.importantTonks.icon className="text-primary h-8 w-8"/> {pageData.importantTonks.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pageData.importantTonks.tonks.map(tonk => (
                <Card key={tonk.name} className="shadow-md hover:shadow-lg transition-shadow bg-muted/30">
                    <CardHeader className="p-4">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Mountain className="h-5 w-5 text-secondary shrink-0"/>
                            {tonk.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">{tonk.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        <p className="text-center text-sm text-muted-foreground italic">{pageData.importantTonks.note}</p>
      </section>

      {/* Section 6: Historical & Cultural Notes */}
      <section id="historical-notes" className="scroll-mt-20 space-y-6">
         <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.historicalCulturalNotes.icon className="text-primary h-8 w-8"/> {pageData.historicalCulturalNotes.title}
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto shadow-lg rounded-lg border border-border/30">
          {pageData.historicalCulturalNotes.notes.map((note, index) => (
            <AccordionItem value={`item-${index}`} key={note.title}>
              <AccordionTrigger className="text-lg px-6 hover:no-underline">
                <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-secondary"/> 
                    {note.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{note.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Section 7: Conservation & Eco Ethics */}
      <section id="conservation" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.conservationEcoEthics.icon className="text-primary h-8 w-8"/> {pageData.conservationEcoEthics.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {pageData.conservationEcoEthics.points.map(point => (
            <Card key={point.text} className="p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
              <point.icon className="h-10 w-10 text-green-600 mb-3" />
              <p className="text-sm font-medium text-foreground">{point.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 8: Pilgrimage Gallery */}
      <section id="pilgrimage-gallery" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.pilgrimageGallery.icon className="text-primary h-8 w-8"/> {pageData.pilgrimageGallery.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pageData.pilgrimageGallery.images.map(image => (
            <Card key={image.src} className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
              <div className="relative aspect-video w-full">
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" data-ai-hint={image.dataAiHint} className="transition-transform duration-300 group-hover:scale-110"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <p className="text-white text-xs font-semibold truncate">{image.alt}</p>
                 </div>
              </div>
            </Card>
          ))}
        </div>
         <div className="text-center">
            <Button asChild variant="outline" size="lg">
                 <Link href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer">
                     View Full Gallery on Instagram <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
            </Button>
        </div>
      </section>

      {/* Section 9: Travel & Tips */}
      <section id="travel-tips" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.travelTips.icon className="text-primary h-8 w-8"/> {pageData.travelTips.title}
        </h2>
        <Card className="shadow-lg">
            <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                {pageData.travelTips.points.map(tip => (
                    <div key={tip.label} className="flex items-start gap-3">
                        <tip.icon className="h-6 w-6 text-secondary mt-1 shrink-0"/>
                        <div>
                            <h4 className="font-semibold text-foreground">{tip.label}</h4>
                            <p className="text-sm text-muted-foreground">{tip.value}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      </section>

      {/* Section 10: Visitor Quotes */}
      <section id="visitor-quotes" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.visitorQuotes.icon className="text-primary h-8 w-8"/> {pageData.visitorQuotes.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pageData.visitorQuotes.quotes.map((quote, idx) => (
            <Card key={idx} className="shadow-lg border-border/30 bg-card hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-3">
                <MessageSquare className="h-8 w-8 text-primary/70 mb-2" />
                <blockquote className="italic text-foreground text-base leading-relaxed">
                  “{quote.text}”
                </blockquote>
                <p className="text-sm font-semibold text-muted-foreground text-right pt-2">- {quote.by}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <p className="text-center text-xs text-muted-foreground italic">(Testimonial slideshow coming soon)</p>
      </section>

      {/* Footer/Resources Section */}
      <footer className="text-center py-10 border-t mt-16 border-border/50">
        <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
            <pageData.footerResources.icon className="text-primary h-7 w-7"/> {pageData.footerResources.title}
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          {pageData.footerResources.links.map(link => (
            <Button key={link.text} variant="outline" size="lg" asChild={!link.disabled} disabled={link.disabled}>
                <Link 
                  href={link.href} 
                  target={link.target || "_self"} 
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                   <link.icon className="mr-2 h-5 w-5"/> {link.text}
                </Link>
            </Button>
          ))}
        </div>
        <Separator className="my-6 max-w-md mx-auto" />
        <h4 className="text-lg font-medium mb-3 text-foreground/90">Quick Links to Explore More:</h4>
        <div className="space-x-2 sm:space-x-4">
          {pageData.footerResources.quickLinks.map(link => (
            <Button key={link.href} variant="link" size="sm" asChild className="text-base">
                <Link href={link.href}>
                  {link.text}
                </Link>
            </Button>
          ))}
        </div>
      </footer>
    </div>
  );
}
