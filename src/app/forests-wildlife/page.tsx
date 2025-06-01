
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TreePine, PawPrint, Leaf, Bird, ShieldCheck, CalendarDays, MapPin, Info, Sun, CloudRain, UserCheck, Phone, Mountain, Users, ArrowRight } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';
import Link from 'next/link';

const pageData = {
  hero: {
    title: "Forests & Wildlife of Giridih",
    subtitle: "Exploring the Green Heart of Jharkhand",
    backgroundImage: "https://cdn.pixabay.com/photo/2025/01/31/17/03/fallow-deer-9372866_1280.jpg",
    dataAiHint: "dense forest giridih parasnath fallow deer",
    cta: "Discover Nature"
  },
  mapSection: {
    title: "Giridih's Biodiversity Hotspots",
    description: "Giridih is home to significant ecological zones. Key areas include the Parasnath Wildlife Sanctuary, a haven for diverse species around the sacred hill; Khandoli Lake, an important site for resident and migratory birds; and the Usri Forest Area, known for its scenic beauty and local fauna. An interactive map showcasing these zones with detailed information on endemic species, terrain, and eco-tourism value is under development.",
    locations: [
      { name: "Parasnath Wildlife Sanctuary", icon: Mountain, details: "Rich in flora and fauna, surrounds the sacred Parasnath Hill." },
      { name: "Khandoli Lake & Forest Area", icon: Bird, details: "Important for birdwatching, especially migratory birds, and recreational activities." },
      { name: "Usri Forest Area", icon: TreePine, details: "Known for its scenic beauty and the Usri Falls, supporting local wildlife." }
    ]
  },
  floraSection: {
    title: "Forest Cover & Flora",
    description: "Giridih’s forests are part of the Chota Nagpur Plateau’s ecological landscape, dominated by tropical dry deciduous forests. These forests support biodiversity and livelihoods via non-timber products like Tendu leaves, honey, and medicinal herbs.",
    keySpecies: ["Sal (Shorea robusta) – Dominant tree", "Mahua", "Teak", "Bamboo", "Palash", "Kusum", "Simul", "Asan", "Kend", "Harra", "Bahera"]
  },
  faunaSection: {
    title: "Wildlife Diversity",
    description: "Giridih is home to several mammals, reptiles, and avian species, reflecting its ecological diversity and indicating a relatively healthy forest ecosystem. Common sightings include various deer species, langurs, and wild boars. More elusive animals like leopards and sloth bears also inhabit these forests.",
    animals: [
      { name: "Leopard", icon: PawPrint, dataAiHint: "leopard india wildlife" },
      { name: "Sloth Bear", icon: PawPrint, dataAiHint: "sloth bear india" },
      { name: "Sambar Deer", icon: PawPrint, dataAiHint: "sambar deer india" },
      { name: "Nilgai", icon: PawPrint, dataAiHint: "nilgai antelope india" },
      { name: "Barking Deer", icon: PawPrint, dataAiHint: "barking deer india" },
      { name: "Wild Boar", icon: PawPrint, dataAiHint: "wild boar india" },
      { name: "Langur", icon: PawPrint, dataAiHint: "langur monkey india" },
      { name: "Jungle Cat", icon: PawPrint, dataAiHint: "jungle cat india" },
      { name: "Mongoose", icon: PawPrint, dataAiHint: "mongoose india" },
      { name: "Hyena", icon: PawPrint, dataAiHint: "hyena india" },
      { name: "Porcupine", icon: PawPrint, dataAiHint: "porcupine india" },
      { name: "Indian Fox", icon: PawPrint, dataAiHint: "indian fox wildlife" }
    ]
  },
  birdlifeSection: {
    title: "Birdlife & Khandoli",
    description: "Bird watchers will love Giridih’s natural settings, especially around Khandoli Lake, which is a haven for avian species. Khandoli is particularly vibrant between November and February when migratory birds arrive, adding to the resident bird population.",
    birds: [
      { name: "Indian Peafowl", details: "National bird, often seen in forest peripheries." },
      { name: "Red Junglefowl", details: "Wild ancestor of domestic chicken, found in forests." },
      { name: "Gray Francolin", details: "Common ground-dwelling bird." },
      { name: "Spotted Dove", details: "Familiar dove species." },
      { name: "Green Pigeon", details: "Often seen in fruiting trees." },
      { name: "Siberian Duck (Winter Migrant)", details: "Various duck species migrate from Siberia." },
      { name: "Brahminy Shelduck (Winter Migrant)", details: "Distinctive migratory waterfowl." },
      { name: "Bar-headed Goose (Winter Migrant)", details: "High-altitude migratory geese." },
      { name: "Kingfishers", details: "Multiple species found near water bodies." },
      { name: "Woodpeckers", details: "Various species inhabit the forests." }
    ]
  },
  parasnathSanctuary: {
    title: "Parasnath Wildlife Sanctuary",
    description: "Located around the sacred Parasnath Hills, this 49.33 sq. km sanctuary offers dense forest cover and a rich mix of fauna, including leopards, sloth bears, and various deer. It's a unique hotspot where nature trails and spiritual pilgrimage routes converge, making it vital for both ecological balance and cultural heritage.",
    highlights: ["Key animals: Leopard, Sloth Bear, Sambar, Porcupine, Nilgai.", "Rich in avian diversity and various reptiles.", "Nature trails intertwine with spiritual pilgrimage routes leading to Shikharji.", "Offers opportunities for eco-tourism and responsible wildlife viewing."],
  },
  conservationSection: {
    title: "Conservation Efforts",
    description: "The Jharkhand Forest Department, along with local communities and NGOs, implements several initiatives to protect and preserve Giridih's rich biodiversity and ensure sustainable use of forest resources. These efforts aim to balance ecological needs with the livelihoods of forest-dependent communities.",
    efforts: [
      { text: "Anti-poaching patrols & forest monitoring", icon: ShieldCheck },
      { text: "Afforestation, nursery programs & habitat restoration", icon: Leaf },
      { text: "Community-led forest protection committees (Van Suraksha Samitis)", icon: Users },
      { text: "Wildlife census, biodiversity data gathering & research", icon: PawPrint },
      { text: "Awareness campaigns on human-wildlife conflict mitigation", icon: Info }
    ]
  },
  visitorGuide: {
    title: "Visitor Guide & Eco-Ethics",
    faqs: [
      {
        question: "Best Time to Visit for Wildlife & Nature?",
        answer: "The period from October to March offers pleasant weather, ideal for trekking, forest exploration, and bird migration sightseeing. Summers (April-June) are hot, and monsoons (July-September) bring heavy rains, which can make forest trails challenging but also enhance the lushness and waterfall flows.",
        icon: CalendarDays
      },
      {
        question: "Essential Guidelines for Eco-Tourism",
        answer: "Always respect wildlife and maintain a safe distance. Do not feed animals. Avoid littering; carry your waste back. Follow all Forest Department regulations and signages. Stick to marked trails and preferably take a local guide for forest excursions. Avoid playing loud music or making excessive noise. Do not disturb plant life or take souvenirs from the forest.",
        icon: UserCheck
      },
      {
        question: "Important Contacts for Forest Areas",
        answer: "Details for the Local Forest Division Office are typically available through district administration channels. Eco-tourism guides can often be found or inquired about locally at Forest Check Posts or Madhuban for the Parasnath area. For general emergencies, dial 112. For wildlife distress, contact the nearest Forest Range Officer.",
        icon: Phone
      }
    ]
  }
};


const pageTitle = "Forests & Wildlife of Giridih - Biodiversity and Nature Sanctuaries";
const pageContentSummary = "Discover the rich biodiversity, dense forests, various wildlife species, and key nature sanctuaries like Parasnath Wildlife Sanctuary in Giridih district. Information on flora, fauna, and conservation efforts.";
const contentType = 'informational page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/forests-wildlife`;
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
      keywords: seoData.keywords || ['Giridih forests', 'Giridih wildlife', 'Parasnath Wildlife Sanctuary', 'Jharkhand biodiversity', 'Sal forest', 'Indian wildlife', 'Khandoli birdwatching', 'eco-tourism Jharkhand'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: pageData.hero.backgroundImage, alt: 'Fallow deer in a lush forest in Giridih' },
          ...previousImages
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        images: [pageData.hero.backgroundImage],
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
          images: [pageData.hero.backgroundImage],
      }
    };
  }
}

export default function ForestsWildlifePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/forests-wildlife`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageContentSummary,
    "url": canonicalUrl,
    "image": pageData.hero.backgroundImage,
     "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": "Forests & Wildlife" }
      ]
    },
    "mainEntity": {
        "@type": "Article",
        "headline": "Exploring Giridih's Forests and Wildlife",
        "author": { "@type": "Organization", "name": "Giridih Explorer" },
        "publisher": {
            "@type": "Organization", "name": "Giridih Explorer",
            "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png`, "dataAiHint": "site logo" }
        },
        "datePublished": "2024-01-01", 
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
          alt="Dense Giridih forest or Parasnath Hills backdrop with fallow deer"
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
            <Link href="#biodiversity-hotspots">
              {pageData.hero.cta} <MapPin className="ml-2 h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 1: Biodiversity Hotspots */}
      <section id="biodiversity-hotspots" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
          <MapPin className="text-primary h-8 w-8"/> {pageData.mapSection.title}
        </h2>
        <Card className="shadow-lg border-border/30">
          <CardContent className="p-4 md:p-6">
            <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">{pageData.mapSection.description}</p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {pageData.mapSection.locations.map(loc => (
                <Card key={loc.name} className="p-4 bg-muted/50 rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <loc.icon className="h-10 w-10 text-secondary mx-auto mb-3"/>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{loc.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{loc.details}</p>
                </Card>
              ))}
            </div>
             <p className="text-xs text-center text-muted-foreground mt-6 italic">(Interactive map feature with species details coming soon)</p>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Forest Cover & Flora */}
      <section id="flora" className="scroll-mt-20 space-y-6">
        <Card className="shadow-lg border-border/30">
            <CardHeader>
                <CardTitle className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                    <Leaf className="text-primary h-8 w-8"/> {pageData.floraSection.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">{pageData.floraSection.description}</p>
                <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-3 text-center text-xl">Key Floral Species:</h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-center">
                    {pageData.floraSection.keySpecies.map(species => (
                        <li key={species} className="p-3 bg-muted/50 rounded-lg text-sm text-foreground shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                            {species}
                        </li>
                    ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
      </section>

      {/* Section 3: Wildlife Diversity */}
      <section id="fauna" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <PawPrint className="text-primary h-8 w-8"/> {pageData.faunaSection.title}
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">{pageData.faunaSection.description}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {pageData.faunaSection.animals.map(animal => (
            <Card key={animal.name} className="text-center p-4 shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 group flex flex-col items-center justify-center border-border/30">
              <animal.icon className="h-12 w-12 text-secondary group-hover:text-primary transition-colors mb-2" />
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{animal.name}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4: Birdlife & Khandoli */}
      <section id="birdlife" className="scroll-mt-20 space-y-6">
         <Card className="shadow-lg border-border/30">
            <CardHeader>
                <CardTitle className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                    <Bird className="text-primary h-8 w-8"/> {pageData.birdlifeSection.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <p className="text-center text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">{pageData.birdlifeSection.description}</p>
                <div>
                    <h4 className="font-semibold text-foreground mb-4 text-center text-xl">Notable Bird Species:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {pageData.birdlifeSection.birds.map(bird => (
                        <li key={bird.name} className="p-4 bg-muted/50 rounded-lg shadow-sm border border-border/50">
                            <h5 className="font-semibold text-foreground text-md flex items-center gap-2"><Bird className="h-4 w-4 text-secondary shrink-0"/>{bird.name}</h5>
                            <p className="text-xs text-muted-foreground mt-1">{bird.details}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                 <p className="text-xs text-center text-muted-foreground mt-6 italic">(Detailed bird gallery and seasonal watching tips coming soon)</p>
            </CardContent>
        </Card>
      </section>

      {/* Section 5: Parasnath Wildlife Sanctuary */}
      <section id="parasnath-sanctuary" className="scroll-mt-20 space-y-6">
        <Card className="shadow-xl border-primary/20 overflow-hidden bg-card">
            <CardHeader className="bg-muted p-6 text-center">
                <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center gap-3">
                     <Mountain className="h-9 w-9"/> {pageData.parasnathSanctuary.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">{pageData.parasnathSanctuary.description}</p>
                <div className="mt-4">
                    <h4 className="font-semibold text-foreground mb-3 text-xl text-center">Sanctuary Highlights:</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-md mx-auto text-sm">
                    {pageData.parasnathSanctuary.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                    </ul>
                </div>
                 <div className="text-center mt-6">
                    <Button asChild variant="outline">
                        <Link href="/parasnath-hill">
                            Learn More About Parasnath Hill <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                 </div>
            </CardContent>
        </Card>
      </section>

      {/* Section 6: Conservation Efforts */}
      <section id="conservation" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <ShieldCheck className="text-primary h-8 w-8"/> {pageData.conservationSection.title}
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">{pageData.conservationSection.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pageData.conservationSection.efforts.map(effort => (
            <Card key={effort.text} className="p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow border-border/30 transform hover:-translate-y-1">
              <effort.icon className="h-12 w-12 text-green-600 mb-4" />
              <p className="text-md font-medium text-foreground">{effort.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 7: Visitor Guide */}
      <section id="visitor-guide" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <Info className="text-primary h-8 w-8"/> {pageData.visitorGuide.title}
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto shadow-lg rounded-lg border border-border/30">
          {pageData.visitorGuide.faqs.map(faq => (
            <AccordionItem value={faq.question} key={faq.question}>
              <AccordionTrigger className="text-left hover:no-underline px-6 py-4 text-lg font-medium">
                <div className="flex items-center gap-3">
                    <faq.icon className="h-6 w-6 text-secondary"/> {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer Links */}
      <footer className="text-center py-10 border-t mt-16 border-border/50">
        <h3 className="text-xl font-semibold mb-4">Explore More</h3>
        <div className="space-x-2 sm:space-x-4 mb-4">
            <Button variant="link" asChild><Link href="/local-economy-crafts">Local Economy &amp; Crafts</Link></Button>
            <Button variant="link" asChild><Link href="/culture-festivals">Culture &amp; Festivals</Link></Button>
            <Button variant="link" asChild><Link href="/tourism-guide">Tourism Guide</Link></Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
            Content Credits (Conceptual): Forest Dept. Jharkhand, Local Wildlife Experts, Giridih Tourism Development Initiatives
        </p>
      </footer>
    </div>
  );
}
