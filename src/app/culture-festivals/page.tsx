
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Landmark, Users, Mic2, Languages, CalendarDays, Palette, Camera, BookOpen, HelpCircle, ShieldCheck, TreePine as NatureIcon, ArrowRight, Zap, Users2, Drama, Drum, Music, Palette as PaintPaletteIcon, Calendar as CalendarIcon, MapPin, Tv2, UserRound, HandHeart, User, Vegan, Brush, Paintbrush as PaintbrushIcon } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const pageData = {
  hero: {
    title: "Culture & Festivals",
    subtitle: "A Celebration of Identity, Rhythm, and Spirit in Giridih",
    backgroundImage: "https://cdn.pixabay.com/photo/2024/10/21/15/04/ai-generated-9137511_1280.jpg",
    dataAiHint: "indian festival tribal dance",
    cta: "Explore Festivities",
    ctaLink: "#major-festivals",
  },
  overview: {
    title: "Cultural Overview",
    icon: Landmark,
    content: "Giridih is home to a mosaic of cultures—Santhals, Mundas, Oraons, and other communities enrich the region with folk traditions. Hindi, Khortha, Santhali, and Urdu are widely spoken, shaping the district’s diverse cultural palette.",
     features: [
        { name: "Diverse Languages", icon: Languages, description: "Hindi, Khortha, Santhali, Urdu." },
        { name: "Rich Community Mix", icon: Users2, description: "Santhals, Mundas, Oraons, and more." },
        { name: "Strong Traditions", icon: HandHeart, description: "Deep-rooted folk customs and rituals." },
    ]
  },
  folkArts: {
    title: "Tribal & Folk Arts",
    icon: Drum,
    dances: [
      { name: "Santhali Dance", description: "Colorful group performance with traditional instruments.", image: "https://i.pinimg.com/736x/f8/95/d5/f895d57962f7d7a95464a351d806867b.jpg", dataAiHint: "santhali dance", type: "Dance" },
      { name: "Paika Dance", description: "Martial-style tribal dance.", image: "https://i.pinimg.com/736x/b5/50/50/b550501ba3022b1c3b4e7915401b344a.jpg", dataAiHint: "paika dance", type: "Dance" },
      { name: "Chhau (Nearby regions)", description: "Masked folk dance sometimes seen during festivals.", image: "https://i.pinimg.com/736x/03/f4/e2/03f4e263e5872901b4b4f1c3a857dd34.jpg", dataAiHint: "chhau dance", type: "Dance" },
    ],
    music: "Traditional drums (Madal, Dhol), Bansuri (flute), Nagara, and Manjira. Local folk songs narrate stories of harvests, legends, love, and community struggles.",
  },
  majorFestivals: {
    title: "Major Festivals Celebrated",
    icon: CalendarIcon,
    categories: [
      {
        name: "Hindu & Regional Festivals",
        festivals: [
          { name: "Chhath Puja", description: "Celebrated at rivers and lakes, with rituals at sunrise/sunset.", image: "https://i.pinimg.com/736x/6a/8c/cb/6a8ccb0540d533667f5ef2ac623a827e.jpg", dataAiHint: "chhath puja", dateInfo: "October/November" },
          { name: "Makar Sankranti", description: "Marking harvest and kite-flying.", image: "https://i.pinimg.com/736x/2d/7d/32/2d7d32a8229903ef42018d5b28d9ef49.jpg", dataAiHint: "makar sankranti", dateInfo: "January" },
          { name: "Durga Puja", description: "Community pandals, rituals, cultural programs.", image: "https://i.pinimg.com/736x/07/a9/08/07a908633d346912817bab5580e87231.jpg", dataAiHint: "durga puja", dateInfo: "September/October" },
          { name: "Holi & Diwali", description: "Widely celebrated with color, lights, and family gatherings.", image: "https://i.pinimg.com/736x/23/65/57/23655777714425c26add38deb5a57ddf.jpg", dataAiHint: "indian festival", dateInfo: "March (Holi), Oct/Nov (Diwali)" },
          { name: "Saraswati Puja", description: "School children and youth participation.", image: "https://i.pinimg.com/736x/1f/30/fb/1f30fb009afeae3b1927768394ea134f.jpg", dataAiHint: "saraswati puja", dateInfo: "January/February" },
        ]
      },
      {
        name: "Tribal & Cultural Festivals",
        festivals: [
          { name: "Sarhul", description: "Worship of nature and village deity by Oraon and Munda tribes.", image: "https://i.pinimg.com/736x/e0/3e/b7/e03eb79182be9322d6f5e30e6f21f159.jpg", dataAiHint: "sarhul festival", dateInfo: "Spring (March/April)" },
          { name: "Karma Puja", description: "Celebrates fertility, love, and community bonding.", image: "https://i.pinimg.com/736x/2d/80/62/2d80626f3afc609d51549edd6643fb6e.jpg", dataAiHint: "karma puja", dateInfo: "August/September" },
          { name: "Sohrai", description: "Cattle worship and household painting after harvest.", image: "https://i.pinimg.com/736x/0f/82/fc/0f82fcf6eb847c4ce971b04ac7c6afa3.jpg", dataAiHint: "sohrai festival", dateInfo: "October/November" },
        ]
      }
    ],
    summary: "Each festival brings together food, dance, ritual, and storytelling, preserving ancient traditions."
  },
  culturalEvents: {
    title: "Cultural Events & Local Celebrations",
    icon: Tv2,
    events: [
      { name: "Giridih Mahotsav", description: "Annual cultural fest by district admin with music, dance, crafts, cuisine." },
      { name: "Tribal Fair Exhibitions", description: "Showcasing tribal artifacts, jewelry, and food." },
      { name: "School/College Events", description: "Folk competitions and youth cultural engagement." },
    ]
  },
  attireAndCrafts: {
    title: "Traditional Attire & Crafts",
    icon: PaintPaletteIcon,
    attire: {
      men: "Dhoti, Kurta, turbans",
      women: "Sari with tribal motifs, silver jewelry",
    },
    crafts: [
      { name: "Bamboo Works", description: "Functional and decorative items like baskets and mats.", icon: Vegan, imageHint: "bamboo craft india" },
      { name: "Wood Carvings", description: "Intricate carvings on locally sourced wood.", icon: Brush, imageHint: "wood carving india" },
      { name: "Tribal Painting", description: "Sohrai & Khovar art inspired wall paintings.", icon: PaintbrushIcon, imageHint: "sohrai painting tribal" },
    ],
  },
  culturalPreservation: {
    title: "Cultural Preservation & Challenges",
    icon: UserRound,
    points: [
      "Threat to tribal languages and rituals",
      "Migration and urbanization impact",
      "Efforts by NGOs and cultural groups to preserve heritage",
      "School programs for tribal dance and language",
    ],
    message: "Preserving Giridih's cultural soul requires community effort and awareness."
  },
  festivalCalendar: {
    title: "Festival Calendar (Indicative)",
    icon: CalendarIcon,
    months: [
      { month: "January", festival: "Makar Sankranti" },
      { month: "March", festival: "Holi" },
      { month: "April", festival: "Sarhul" },
      { month: "August/September", festival: "Karma Puja" },
      { month: "October", festival: "Durga Puja" },
      { month: "November", festival: "Chhath Puja, Sohrai" },
    ]
  },
  footer: {
    links: [
      { href: "/forests-wildlife", text: "Forests & Wildlife" },
      { href: "/local-economy-crafts", text: "Local Economy" },
      { href: "/tourism-guide", text: "Tourism Guide" },
    ],
    contactInfo: "Contact details for the Culture Dept. Giridih to be updated.",
  }
};

const heroImage = pageData.hero.backgroundImage;
const pageTitle = "Culture & Festivals of Giridih - Traditions, Music, Dance, and Celebrations";
const pageContentSummary = "Explore the vibrant culture, rich traditions, diverse languages, folk music, dance forms, and major festivals celebrated in Giridih district, Jharkhand. Experience the heart of local life, from Chhath Puja and Sarhul to Sohrai, and discover traditional arts like Santhali dance and Paika.";
const contentType = 'informational page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/culture-festivals`;
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
      keywords: seoData.keywords || ['Giridih culture', 'Giridih festivals', 'Jharkhand traditions', 'Santhali dance', 'Sohrai festival', 'Sarhul festival', 'Chhath Puja Giridih', 'Karma Puja', 'tribal culture India', 'folk arts Jharkhand'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: heroImage, alt: 'Vibrant cultural festival performance in Giridih' },
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

export default function CultureFestivalsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/culture-festivals`;

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
        { "@type": "ListItem", "position": 2, "name": "Culture & Festivals" }
      ]
    },
    "mainEntity": {
        "@type": "Article",
        "headline": "The Vibrant Tapestry of Giridih's Culture and Festivals",
         "author": { "@type": "Organization", "name": "Giridih Explorer" },
        "publisher": {
            "@type": "Organization", "name": "Giridih Explorer",
            "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png`, "dataAiHint": "site logo" }
        },
        "datePublished": "2024-01-02",
        "dateModified": new Date().toISOString().split('T')[0]
    }
  };

  return (
    <div className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-xl">
        <Image
          src={pageData.hero.backgroundImage}
          alt="Vibrant cultural performance or Chhath Puja scene in Giridih"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="absolute inset-0 z-0 brightness-50"
          data-ai-hint={pageData.hero.dataAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 z-0"></div>
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/50 rounded-md backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {pageData.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {pageData.hero.subtitle}
          </p>
          <Button size="lg" asChild className="mt-4">
            <Link href={pageData.hero.ctaLink}>
              {pageData.hero.cta} <ArrowRight className="ml-2 h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 1: Cultural Overview */}
        <section id="cultural-overview" className="scroll-mt-20 space-y-6">
            <Card className="shadow-lg border-border/30">
            <CardHeader>
                <CardTitle className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                <pageData.overview.icon className="text-primary h-8 w-8"/> {pageData.overview.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">{pageData.overview.content}</p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                    {pageData.overview.features.map(feature => (
                        <div key={feature.name} className="p-4 bg-muted/50 rounded-md shadow-sm">
                            <feature.icon className="h-8 w-8 text-secondary mx-auto mb-2"/>
                            <h4 className="font-semibold text-foreground text-sm">{feature.name}</h4>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
            </Card>
        </section>

      {/* Section 2: Tribal & Folk Arts */}
      <section id="folk-arts" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.folkArts.icon className="text-primary h-8 w-8"/> {pageData.folkArts.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pageData.folkArts.dances.map(dance => (
            <Card key={dance.name} className="shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 group">
               <div className="relative h-52 w-full rounded-t-lg overflow-hidden">
                <Image src={dance.image} alt={dance.name} layout="fill" objectFit="cover" data-ai-hint={dance.dataAiHint} className="group-hover:scale-105 transition-transform duration-300"/>
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Drama className="h-16 w-16 text-white/90"/>
                 </div>
                  <Badge variant="secondary" className="absolute top-2 left-2 bg-black/60 text-white text-xs">{dance.type}</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{dance.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{dance.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="shadow-lg mt-6 border-border/30">
            <CardHeader><CardTitle className="text-xl flex items-center gap-2"><Music className="text-secondary"/> Music & Instruments</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground leading-relaxed">{pageData.folkArts.music}</p></CardContent>
        </Card>
      </section>

      {/* Section 3: Major Festivals Celebrated */}
      <section id="major-festivals" className="scroll-mt-20 space-y-8">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.majorFestivals.icon className="text-primary h-8 w-8"/> {pageData.majorFestivals.title}
        </h2>
        {pageData.majorFestivals.categories.map(category => (
          <div key={category.name}>
            <h3 className="text-2xl font-medium mb-6 text-center md:text-left text-foreground/90">{category.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.festivals.map(festival => (
                <Card key={festival.name} className="shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 group">
                  <div className="relative h-52 w-full rounded-t-lg overflow-hidden">
                    <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" data-ai-hint={festival.dataAiHint} className="group-hover:scale-105 transition-transform"/>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                     <div className="absolute bottom-2 right-2 text-xs text-white bg-black/60 px-2 py-1 rounded-md shadow-sm">{festival.dateInfo}</div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{festival.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{festival.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
        <p className="text-center text-muted-foreground mt-6 italic">{pageData.majorFestivals.summary}</p>
      </section>

      {/* Section 4: Cultural Events & Local Celebrations */}
      <section id="cultural-events" className="scroll-mt-20 space-y-6">
         <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.culturalEvents.icon className="text-primary h-8 w-8"/> {pageData.culturalEvents.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
            {pageData.culturalEvents.events.map(event => (
                <Card key={event.name} className="shadow-sm border-border/30">
                    <CardHeader>
                        <CardTitle className="text-lg text-foreground/90">{event.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <p className="text-xs text-primary mt-2"> (Details on location/dates coming soon)</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      {/* Section 5: Traditional Attire & Crafts */}
        <section id="attire-crafts" className="scroll-mt-20 space-y-6">
            <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                <pageData.attireAndCrafts.icon className="text-primary h-8 w-8"/> {pageData.attireAndCrafts.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-start">
                <Card className="shadow-md border-border/30">
                    <CardHeader><CardTitle className="text-xl text-foreground/90">Traditional Attire</CardTitle></CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <div className="flex items-start gap-3">
                           <User className="h-5 w-5 text-secondary mt-1 shrink-0"/>
                           <div>
                             <h4 className="font-semibold text-foreground">Men:</h4>
                             <p>{pageData.attireAndCrafts.attire.men}</p>
                           </div>
                        </div>
                         <div className="flex items-start gap-3">
                           <UserRound className="h-5 w-5 text-secondary mt-1 shrink-0"/>
                           <div>
                             <h4 className="font-semibold text-foreground">Women:</h4>
                             <p>{pageData.attireAndCrafts.attire.women}</p>
                           </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground/90 text-center md:text-left">Featured Crafts</h3>
                    {pageData.attireAndCrafts.crafts.map(craft => (
                         <Card key={craft.name} className="shadow-sm border-border/30 group">
                            <CardContent className="p-4 flex items-center gap-4">
                                {craft.icon && <craft.icon className="h-10 w-10 text-secondary shrink-0 group-hover:text-primary transition-colors"/>}
                                <div>
                                   <CardTitle className="text-md mb-1 group-hover:text-primary">{craft.name}</CardTitle>
                                   <p className="text-xs text-muted-foreground">{craft.description}</p>
                                </div>
                            </CardContent>
                         </Card>
                    ))}
                </div>
            </div>
        </section>

      {/* Section 6: Cultural Preservation & Challenges */}
        <section id="cultural-preservation" className="scroll-mt-20 space-y-6">
            <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                <pageData.culturalPreservation.icon className="text-primary h-8 w-8"/> {pageData.culturalPreservation.title}
            </h2>
            <div className="grid md:grid-cols-5 gap-6 items-center">
                 <Card className="shadow-md border-border/30 md:col-span-3">
                    <CardHeader><CardTitle className="text-xl text-foreground/90">Key Considerations</CardTitle></CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {pageData.culturalPreservation.points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                    </CardContent>
                 </Card>
                 <div className="md:col-span-2 flex flex-col items-center justify-center p-6 bg-muted/30 rounded-lg shadow-inner text-center">
                    <HandHeart className="h-16 w-16 text-primary/70 mb-3"/>
                    <p className="text-muted-foreground italic">{pageData.culturalPreservation.message}</p>
                 </div>
            </div>
        </section>

      {/* Section 8: Festival Calendar */}
      <section id="festival-calendar" className="scroll-mt-20 space-y-6">
         <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.festivalCalendar.icon className="text-primary h-8 w-8"/> {pageData.festivalCalendar.title}
        </h2>
        <Card className="shadow-lg border-border/30">
            <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {pageData.festivalCalendar.months.map(item => (
                        <div key={item.month} className="p-4 bg-muted/50 rounded-lg shadow-sm border border-border/50">
                            <p className="font-semibold text-foreground text-lg">{item.month}</p>
                            <p className="text-sm text-muted-foreground">{item.festival}</p>
                        </div>
                    ))}
                </div>
                 <p className="text-xs text-muted-foreground mt-6 text-center">Note: Specific dates vary annually based on lunar/solar calendars. Check local listings for precise dates.</p>
            </CardContent>
        </Card>
      </section>

      {/* Footer Section */}
      <section className="text-center py-10 border-t mt-16 border-border/50">
        <h3 className="text-xl font-semibold mb-4 text-foreground/90">Explore More Insights</h3>
        <div className="space-x-2 sm:space-x-4 mb-4">
          {pageData.footer.links.map(link => (
            <Button key={link.href} variant="link" asChild>
                <Link href={link.href}>
                  {link.text}
                </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          {pageData.footer.contactInfo}
        </p>
         <div className="mt-4">
            <Button variant="outline" disabled>Newsletter Signup (Coming Soon)</Button>
         </div>
      </section>
    </div>
  );
}
