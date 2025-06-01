
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingBag, Hammer, Tractor, Palette, MapPin, Building2, Leaf, DollarSign, TrendingUp, Users, ArrowRight, Factory, Mountain, Anchor, Sprout, Droplets, Fish, Briefcase, Gem, Shirt, Sparkles, Vegan, Store, ShoppingCart } from 'lucide-react'; // Added ShoppingCart
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';

const heroImage = "https://images.pexels.com/photos/2892269/pexels-photo-2892269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const pageTitle = "Local Economy & Crafts - Industries, Agriculture, Artisans, and Markets";
const pageContentSummary = "Explore Giridih's diverse economy: agriculture (paddy, maize, fishing), industries (coal, mica, Mongia Steel), traditional crafts (stone carving, handloom, Sohrai), local markets (KD Market), and sustainable forest products like Tendu leaves and honey.";
const contentType = 'informational page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/local-economy-crafts`;
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
      keywords: seoData.keywords || ['Giridih economy', 'Giridih crafts', 'mica mining India', 'coal mining Jharkhand', 'Giridih agriculture', 'local handicrafts India', 'Mongia Steel', 'KD Market Giridih', 'Sohrai art'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: heroImage, alt: 'Vibrant market scene or artisan at work in Giridih, showcasing local economy and crafts' },
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
          images: [heroImage],
      }
    };
  }
}

const industrialUnits = [
  { name: "Mongia Steel Ltd.", type: "Sponge Iron, Steel Billets", tags: ["Medium Scale", "Metal"], location: "Giridih Industrial Area", icon: Factory },
  { name: "Saluja Power and Steel Limited", type: "Steel Products", tags: ["Medium Scale", "Metal"], location: "Giridih", icon: Factory },
  { name: "Atibir Industries Co. Ltd.", type: "Sponge Iron", tags: ["Medium Scale", "Metal"], location: "Giridih", icon: Factory },
  { name: "Gaurishanker Electrocastings Pvt. Ltd.", type: "Castings, Steel", tags: ["Medium Scale", "Metal"], location: "Giridih", icon: Factory },
  { name: "Central Coalfields Limited (CCL)", type: "Coal Mining", tags: ["Large Scale", "Mining"], location: "Southern Giridih", icon: Mountain },
];

const traditionalCrafts = [
  { name: "Stone Carving", description: "Artisans create intricate designs on marble and granite, showcasing exceptional craftsmanship.", significance: "Preserves ancient sculpting techniques.", icon: Gem },
  { name: "Handloom Weaving", description: "Traditional weaving techniques produce beautiful cotton and silk fabrics, reflecting the region's rich textile heritage.", significance: "Supports local weavers and traditional patterns.", icon: Shirt },
  { name: "Sohrai & Kohbar Paintings", description: "These traditional wall paintings, characterized by motifs of flowers, birds, and indigenous designs, are integral to local festivals and rituals.", significance: "A vibrant folk art form passed through generations.", icon: Palette },
  { name: "Lac Work", description: "Colorful lac bangles, jewelry, and decorative items are crafted with skill.", significance: "Utilizes natural resin for ornamentation.", icon: Sparkles },
  { name: "Bamboo Craft", description: "Functional and decorative items like baskets, mats, and furniture made from bamboo.", significance: "Eco-friendly and showcases versatility of bamboo.", icon: Vegan },
  { name: "Honeybee Wax Products", description: "Candles, balms, and other products made from locally sourced honeybee wax.", significance: "Supports apiculture and natural product use.", icon: Droplets },
];

const localMarkets = [
  { name: "KD Market", specialty: "Women's apparel, traditional clothing, accessories", locationLink: "https://www.google.com/maps/search/?api=1&query=KD+Market+Giridih", icon: Store },
  { name: "DD Market", specialty: "Groceries, clothing, wide range of products", locationLink: "https://www.google.com/maps/search/?api=1&query=DD+Market+Giridih", icon: Store },
  { name: "Weekly Haats (Rural Markets)", specialty: "Fresh produce, local crafts, livestock", locationLink: "https://www.google.com/maps/search/?api=1&query=Giridih+rural+market", icon: ShoppingCart },
];

export default function LocalEconomyCraftsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/local-economy-crafts`;

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
        { "@type": "ListItem", "position": 2, "name": "Local Economy & Crafts" }
      ]
    },
     "mainEntity": {
        "@type": "Article",
        "headline": "The Economic Landscape and Artisanal Heritage of Giridih",
        "author": { "@type": "Organization", "name": "Giridih Explorer" },
        "publisher": {
            "@type": "Organization", "name": "Giridih Explorer",
            "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png`, "dataAiHint": "site logo" }
        },
        "datePublished": "2024-01-04",
        "dateModified": new Date().toISOString().split('T')[0]
    }
  };

  return (
    <div className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[60vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-xl">
        <Image
          src={heroImage}
          alt="Vibrant market scene with colorful spices and produce in Giridih"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="absolute inset-0 z-0 brightness-50"
           data-ai-hint="indian market crafts economy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-0"></div>
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/40 rounded-md backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Local Economy & Traditional Crafts
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            A Journey Through Rural Industries, Handicrafts, and Heritage
          </p>
          <Button size="lg" asChild className="mt-4">
            <Link href="#traditional-crafts">
                Explore Local Crafts <Palette className="ml-2 h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-3">Overview of Local Economy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Giridih, nestled in the heart of Jharkhand, boasts a diverse economy that seamlessly blends traditional practices with modern industries. From its rich mineral reserves to vibrant handicrafts, the district reflects a unique amalgamation of natural wealth and cultural heritage.
          </p>
      </section>

      {/* Agriculture & Allied Activities Section */}
      <section id="agriculture" className="space-y-6 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2"><Tractor className="text-primary h-8 w-8"/>Agriculture & Allied Activities</h2>
        <Card className="shadow-lg">
          <CardContent className="p-6 space-y-6">
            <div className="text-muted-foreground space-y-4">
              <p>
                Agriculture remains the backbone for a significant portion of Giridih's population. Farmers cultivate crops like paddy, wheat, maize, sugarcane, and pulses, contributing substantially to the local economy.
              </p>
              <p>
                Beyond farming, activities such as dairy farming, poultry, apiculture (beekeeping), and fishing are prevalent. Approximately 7,000 families depend on fishing, utilizing the district's abundant water resources, including rivers, ponds, and lakes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg shadow-sm border border-border/50">
                    <Sprout className="h-8 w-8 text-green-600 mb-2"/>
                    <span className="text-md font-semibold text-foreground">Major Crops</span>
                    <span className="text-sm text-muted-foreground text-center">Paddy, Wheat, Maize</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg shadow-sm border border-border/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 mb-2"><path d="M19.5 12.5c0 2.48-2.02 4.5-4.5 4.5s-4.5-2.02-4.5-4.5c0-4.5-4.5-4.5-4.5-4.5s4.5 0 4.5-4.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5c0 4.5 4.5 4.5 4.5 4.5s-4.5 0-4.5 4.5Z"/><path d="m15 7-3 3-3-3"/><path d="M15 17v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5V17"/><path d="M15 17v.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5V17"/></svg>
                    <span className="text-md font-semibold text-foreground">Poultry</span>
                    <span className="text-sm text-muted-foreground">Key Livelihood</span>
                </div>
                 <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg shadow-sm border border-border/50">
                    <Fish className="h-8 w-8 text-blue-500 mb-2"/>
                    <span className="text-md font-semibold text-foreground">Fisheries</span>
                    <span className="text-sm text-muted-foreground">~7000 Families</span>
                </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Industrial Landscape Section */}
      <section id="industry" className="space-y-6 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2"><Hammer className="text-primary h-8 w-8"/>Industrial Landscape</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Giridih's industrial sector has witnessed significant growth, especially in mining and manufacturing. The district is rich in minerals like coal, mica, bauxite, and limestone. The southern region houses coal mines operated by Central Coalfields Limited. Numerous small and medium-scale industries focus on metals, sponge iron, induction furnaces, and rolling mills.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrialUnits.map((unit) => (
            <Card key={unit.name} className="shadow-md hover:shadow-lg transition-shadow flex flex-col border border-border/70">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2"><unit.icon className="h-6 w-6 text-secondary"/>{unit.name}</CardTitle>
                <CardDescription>{unit.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1"><MapPin className="h-4 w-4 shrink-0"/>{unit.location}</p>
                <div className="flex flex-wrap gap-1">
                  {unit.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         <p className="text-center text-xs text-muted-foreground pt-2">More industries include those dealing with induction furnaces and rolling mills.</p>
      </section>

      {/* Traditional Crafts Section */}
      <section id="traditional-crafts" className="space-y-6 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2"><Palette className="text-primary h-8 w-8"/>Traditional Crafts & Handicrafts</h2>
         <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Giridih is renowned for its rich tradition of handicrafts, reflecting the cultural ethos of its tribal communities. Artisans craft exquisite items using materials like lac, wood, bamboo, honeybee wax, and stone. These crafts are not only a source of income but also play a pivotal role in preserving the district's cultural heritage.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {traditionalCrafts.map((craft) => (
            <Card key={craft.name} className="shadow-md hover:shadow-lg transition-shadow flex flex-col border border-border/70">
              <CardHeader className="flex-row items-center gap-3 pb-2">
                 <craft.icon className="h-8 w-8 text-primary shrink-0"/>
                <CardTitle className="text-lg">{craft.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <p className="text-sm text-muted-foreground">{craft.description}</p>
                <p className="text-xs text-accent font-medium italic">{craft.significance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Local Markets Section */}
      <section id="local-markets" className="space-y-6 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2"><ShoppingBag className="text-primary h-8 w-8"/>Local Markets & Commerce</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Giridih's markets are vibrant hubs of economic activity, offering a blend of traditional and modern goods. These markets not only cater to the daily needs of residents but also attract tourists seeking authentic local products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localMarkets.map((market) => (
            <Card key={market.name} className="shadow-md hover:shadow-lg transition-shadow flex flex-col border border-border/70">
              <CardHeader className="flex-row items-center gap-3 pb-2">
                <market.icon className="h-7 w-7 text-primary shrink-0"/>
                <CardTitle className="text-lg">{market.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">Specialty: {market.specialty}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={market.locationLink} target="_blank" rel="noopener noreferrer">
                        <MapPin className="mr-2 h-4 w-4"/> View on Map
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Sustainability & Forest Products Section */}
      <section id="sustainability" className="space-y-6 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2"><Leaf className="text-primary h-8 w-8"/>Sustainability & Forest Products</h2>
         <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            The district's dense forests are a treasure trove of medicinal herbs like basil and are a source of honey and dairy products. The collection and processing of Tendu leaves, used in bidi production, provide employment to many locals. These sustainable practices highlight the community's harmonious relationship with nature.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 shadow-md border border-border/70">
                <Briefcase className="h-10 w-10 text-green-700 mx-auto mb-3"/>
                <h3 className="font-semibold text-lg mb-1">Tendu Leaf Collection</h3>
                <p className="text-sm text-muted-foreground">Provides significant employment, especially in rural areas. Used for bidi production.</p>
            </Card>
             <Card className="text-center p-6 shadow-md border border-border/70">
                <Droplets className="h-10 w-10 text-yellow-500 mx-auto mb-3"/>
                <h3 className="font-semibold text-lg mb-1">Honey Production</h3>
                <p className="text-sm text-muted-foreground">Local apiculture yields pure honey, supporting biodiversity and livelihoods.</p>
            </Card>
             <Card className="text-center p-6 shadow-md border border-border/70">
                 <Sprout className="h-10 w-10 text-teal-600 mx-auto mb-3"/>
                <h3 className="font-semibold text-lg mb-1">Medicinal Herbs</h3>
                <p className="text-sm text-muted-foreground">Forests are rich in herbs like Basil, used in traditional medicine.</p>
            </Card>
        </div>
      </section>

      {/* Future Development Section */}
      <section id="future-development" className="space-y-6 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2"><TrendingUp className="text-primary h-8 w-8"/>Economic Development & Future Prospects</h2>
         <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Giridih's strategic focus on diversifying its economy has led to significant developments in infrastructure, education, and industry. The district's rich cultural heritage, combined with its natural resources, positions it as a promising region for sustainable economic growth and cultural preservation.
        </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md border border-border/70">
                <CardHeader><CardTitle className="text-xl">Government Initiatives</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">Various schemes focusing on infrastructure, skill development, and support for small businesses are being implemented.</p></CardContent>
            </Card>
             <Card className="shadow-md border border-border/70">
                <CardHeader><CardTitle className="text-xl">Investment Potential</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">Opportunities exist in agro-processing, tourism, and further development of mineral-based industries.</p></CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}

    