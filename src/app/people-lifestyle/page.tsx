
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users, GraduationCap, Home, Languages, Briefcase, Palette, Music, Drama, ShoppingCart, Smartphone, BookOpen, MessageSquare, Download, Camera, Users2, Heart, Milestone, Tv2 as TechIcon, Building, LifeBuoy, Shirt, UtensilsCrossed, Handshake, Activity } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';


const pageData = {
  hero: {
    title: "Where Life Unfolds: People of Giridih",
    subtitle: "Glimpse into the rich, rooted, and evolving daily life of Giridih’s diverse communities.",
    cta: "Discover Lifestyles",
    ctaLink: "#community-mosaic",
  },
  communityMosaic: {
    title: "Community Mosaic: The Faces of Giridih",
    icon: Users2,
    sections: [
      { name: "Santhals, Mundas, Oraons", description: "Indigenous tribal groups deeply connected to nature, preserving unique languages, sustainable living practices, and vibrant community traditions.", icon: LifeBuoy },
      { name: "Jains", description: "A significant community, especially around Parasnath Hill (Shikharji), known for their spiritual discipline, vegetarian lifestyle, and contributions to trade and philanthropy.", icon: Handshake },
      { name: "Rural Agricultural Families", description: "The backbone of the local economy, engaged in cultivating rice, maize, and seasonal crops, often following traditional farming calendars and techniques.", icon: Home },
      { name: "Urban & Semi-Urban Dwellers", description: "Residing in Giridih town and block headquarters, involved in government services, education, local businesses, mining support services, and skilled trades.", icon: Building },
    ],
    languages: "Predominantly Hindi, Khortha, Santhali, and Nagpuri are spoken, reflecting the linguistic diversity and daily communication patterns."
  },
  traditionalLifestyle: {
    title: "Daily Rhythms & Traditional Ways",
    icon: Activity,
    aspects: [
      { name: "Housing & Homesteads", description: "Rural villages often feature homes built with locally sourced materials like mud, bamboo, and wood, with tiled or thatched roofs designed for the climate. Courtyards are common for daily activities and social gatherings. Towns see a mix, with more brick and concrete structures alongside older architectural styles.", icon: Home },
      { name: "Attire & Adornment", description: "Daily wear is practical, with sarees for women and shirts/trousers or dhoti/kurta for men. Traditional handwoven fabrics are cherished. Tribal communities often have distinctive attire for special occasions and adorn themselves with unique silver jewelry and natural ornaments.", icon: Shirt },
      { name: "Food Habits & Cuisine", description: "Rice is a staple, usually accompanied by lentils (dal), seasonal vegetables, and sometimes locally sourced fish or poultry. Forest produce like wild greens and mushrooms supplement diets. Meals are typically home-cooked, emphasizing fresh ingredients.", icon: UtensilsCrossed },
      { name: "Primary Occupations & Livelihoods", description: "Agriculture is the main occupation for a majority. Other key livelihoods include coal and mica mining-related work, collection of non-timber forest products (like lac, tendu leaves, honey), local artisanship, and small-scale trade.", icon: Briefcase },
    ]
  },
  artMusicDance: { 
    title: "Cultural Expressions in Daily Life",
    icon: Palette,
    items: [
      { name: "Sohrai & Khovar Art", type: "Household Art", description: "Traditional wall paintings adorning homes during festivals, created by women, reflecting nature and community themes. A living art form passed down generations.", dataAiHint: "sohrai painting tribal art india" },
      { name: "Folk Music & Storytelling", type: "Community Bonding", description: "Folk songs narrating local legends, daily life, and social themes are sung during gatherings, agricultural activities, and family functions, often accompanied by simple instruments.", dataAiHint: "folk music village india" },
      { name: "Community Dances", type: "Social Celebration", description: "Group dances like Santhali or Paika are integral to festivals and social events, strengthening community ties and expressing collective joy rather than just being performances.", dataAiHint: "tribal dance community festival" },
      { name: "Local Craftsmanship", type: "Functional Art", description: "Bamboo work, pottery, and simple wood carvings are often created for daily use or local sale, blending utility with traditional skills.", dataAiHint: "bamboo craft pottery india" },
    ],
    summary: "Artistic expressions are woven into the fabric of daily life and community celebrations."
  },
  dailyLifeEconomy: { 
    title: "Snapshot of Daily Interactions & Economy",
    icon: ShoppingCart,
    aspects: [
      { name: "Weekly Haats (Village Markets)", description: "These bustling markets are central to rural life, serving as hubs for trade in fresh produce, livestock, tools, and daily essentials. They are also important social spaces.", icon: ShoppingCart, dataAiHint: "indian village market haat" },
      { name: "Education & Skill Development", description: "Access to education is expanding with government and private schools. Vocational training initiatives aim to equip youth with skills for diverse employment opportunities.", icon: GraduationCap, dataAiHint: "indian rural school children education" },
      { name: "Healthcare Access", description: "Government health centers and private clinics provide medical services. Efforts are ongoing to improve healthcare reach in remote areas, with traditional remedies also playing a role.", icon: Heart, dataAiHint: "rural healthcare india clinic" },
      { name: "Connectivity & Information", description: "Mobile phone usage is widespread, connecting communities and providing access to information. Local news sources and community radio also play a role.", icon: TechIcon, dataAiHint: "mobile phone use india village connectivity" },
    ]
  },
  socialStructure: {
    title: "Social Fabric & Community Values",
    icon: Users,
    points: [
      { text: "Strong family bonds and joint family systems are prevalent, especially in rural areas, emphasizing mutual support.", icon: Home },
      { text: "Village panchayats and traditional community councils often guide local decision-making and mediate disputes.", icon: Users2 },
      { text: "Deep-rooted respect for elders, community traditions, and active participation in local festivals are common.", icon: Handshake },
      { text: "Hospitality is a key cultural value, with guests often warmly welcomed ('Atithi Devo Bhava').", icon: Heart },
      { text: "Tribal communities maintain distinct social customs, often emphasizing collective well-being and shared stewardship of resources.", icon: LifeBuoy },
    ],
  },
  changingLifestyles: {
    title: "Evolving Lifestyles & Aspirations",
    icon: Milestone,
    changes: [
      { aspect: "Urban Influence & Migration", description: "Giridih town and block headquarters are slowly urbanizing. Some youth migrate for education or employment, bringing back new perspectives.", icon: Building, dataAiHint: "indian town development migration" },
      { aspect: "Technology Adoption", description: "Smartphones and internet access are increasingly common, influencing communication, access to information, and entertainment among all age groups.", icon: Smartphone, dataAiHint: "indian youth smartphone technology" },
      { aspect: "Women's Changing Roles", description: "Women are increasingly participating in local governance, education, Self-Help Groups (SHGs), and small enterprises, contributing to family income and community development.", icon: Users2, dataAiHint: "indian women empowerment rural education" },
      { aspect: "Balancing Tradition & Modernity", description: "Communities navigate the integration of modern amenities and ideas while striving to preserve their cultural identity and traditional values.", icon: Milestone, dataAiHint: "cultural fusion india modern traditional balance" },
    ],
  },
  gallery: {
    title: "Portraits of Giridih Life - Gallery",
    icon: Camera,
    description: "A visual tapestry showcasing the diverse faces and daily lives of Giridih's people. (Photo gallery is currently being curated. Please check back soon!)",
    images: []
  },
  voices: {
    title: "Voices from the Community",
    icon: MessageSquare,
    testimonials: [
      { quote: "We farm the land our ancestors did, and our festivals are tied to the seasons. Life is simple but fulfilling when shared with family and neighbors.", by: "Sukhram Munda, Village Elder", dataAiHint: "indian village elder farmer" },
      { quote: "My children are learning on computers now. It's a different world, but we teach them our traditions too, so they remember where they come from.", by: "Rina Devi, SHG Member & Mother", dataAiHint: "indian woman rural mother children" },
    ]
  },
  footer: {
    links: [
      { href: "/culture-festivals", text: "Culture & Festivals" },
      { href: "/history-heritage", text: "History & Heritage" },
      { href: "/local-economy-crafts", text: "Economy & Crafts" },
    ],
    downloadBrochure: { text: "Download Brochure: Life in Giridih", link: "#" },
    watchVideo: { text: "Watch: Day in a Tribal Village", link: "#" },
  }
};


const heroImage = pageData.hero.backgroundImage; 
const pageTitle = "People & Lifestyle in Giridih - Communities, Rural Life, and Culture";
const pageContentSummary = "Discover the soul of Giridih through its diverse communities including tribal groups like Santhals and Mundas, their traditional lifestyles, rural occupations, education, arts, music, and the evolving modernity in Giridih district, Jharkhand.";
const contentType = 'informational page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/people-lifestyle`;
  const ogImage = heroImage || `${siteUrl}/og-default-people-lifestyle.png`; 
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
      keywords: seoData.keywords || ['Giridih people', 'Giridih lifestyle', 'Santhal tribe', 'Munda tribe', 'Oraon tribe', 'Jharkhand rural life', 'Giridih demographics', 'education in Giridih', 'tribal culture Jharkhand', 'Giridih communities'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: ogImage, alt: 'Diverse people representing the communities of Giridih' },
          ...previousImages
        ],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        images: [ogImage],
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
          images: [ogImage],
      }
    };
  }
}

export default function PeopleLifestylePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/people-lifestyle`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageContentSummary,
    "url": canonicalUrl,
    "image": heroImage || `${siteUrl}/og-default-people-lifestyle.png`,
     "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": "People & Lifestyle" }
      ]
    },
    "mainEntity": {
        "@type": "Article",
        "headline": "The Social Fabric and Lifestyles of Giridih District",
         "author": { "@type": "Organization", "name": "Giridih Explorer" },
        "publisher": {
            "@type": "Organization", "name": "Giridih Explorer",
            "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png`, "dataAiHint": "site logo" }
        },
        "datePublished": "2024-01-05",
        "dateModified": new Date().toISOString().split('T')[0]
    }
  };

  return (
    <div className="space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section - Text Focused */}
      <section className="py-16 md:py-24 text-center bg-muted/50 rounded-lg shadow-inner">
        <div className="container max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {pageData.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {pageData.hero.subtitle}
          </p>
          <Button size="lg" asChild className="mt-4">
            <Link href={pageData.hero.ctaLink}>
                {pageData.hero.cta} <Users className="ml-2 h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 1: Community Mosaic */}
      <section id="community-mosaic" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.communityMosaic.icon className="text-primary h-8 w-8"/> {pageData.communityMosaic.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pageData.communityMosaic.sections.map(community => (
            <Card key={community.name} className="shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="flex-row items-center gap-3 pb-3">
                 {community.icon && <community.icon className="h-8 w-8 text-secondary shrink-0"/>}
                <CardTitle className="text-xl text-foreground/90">{community.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{community.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="shadow-lg border-border/30 mt-6">
            <CardHeader><CardTitle className="text-xl flex items-center justify-center gap-2"><Languages className="text-secondary"/> Local Languages</CardTitle></CardHeader>
            <CardContent><p className="text-center text-muted-foreground">{pageData.communityMosaic.languages}</p></CardContent>
        </Card>
      </section>

      {/* Section 2: Traditional Lifestyle */}
      <section id="traditional-lifestyle" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.traditionalLifestyle.icon className="text-primary h-8 w-8"/> {pageData.traditionalLifestyle.title}
        </h2>
         <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto shadow-lg rounded-lg border border-border/30">
          {pageData.traditionalLifestyle.aspects.map((aspect, index) => (
            <AccordionItem value={`item-${index}`} key={aspect.name}>
              <AccordionTrigger className="text-lg px-6 hover:no-underline">
                <div className="flex items-center gap-3">
                    {aspect.icon && <aspect.icon className="h-5 w-5 text-secondary"/>}
                    {aspect.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{aspect.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Section 3: Cultural Expressions in Daily Life */}
      <section id="art-music-dance" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.artMusicDance.icon className="text-primary h-8 w-8"/> {pageData.artMusicDance.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pageData.artMusicDance.items.map(item => (
                 <Card key={item.name} className="shadow-md hover:shadow-xl transition-shadow group">
                    <CardHeader className="pb-2 flex-row items-center gap-3">
                        {item.type === "Household Art" && <Palette className="h-6 w-6 text-secondary shrink-0" />}
                        {item.type === "Community Bonding" && <Music className="h-6 w-6 text-secondary shrink-0" />}
                        {item.type === "Social Celebration" && <Drama className="h-6 w-6 text-secondary shrink-0" />}
                        {item.type === "Functional Art" && <Briefcase className="h-6 w-6 text-secondary shrink-0" />}
                        <CardTitle className="text-lg group-hover:text-primary">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Badge variant="outline" className="mb-2">{item.type}</Badge>
                        <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                    </CardContent>
                 </Card>
            ))}
        </div>
        <p className="text-center text-muted-foreground italic">{pageData.artMusicDance.summary}</p>
      </section>

      {/* Section 4: Daily Life & Economy Snapshot */}
      <section id="daily-life-economy" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.dailyLifeEconomy.icon className="text-primary h-8 w-8"/> {pageData.dailyLifeEconomy.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pageData.dailyLifeEconomy.aspects.map(aspect => (
            <Card key={aspect.name} className="text-center p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <aspect.icon className="h-10 w-10 text-secondary mb-3" />
              <h3 className="text-md font-semibold text-foreground mb-1">{aspect.name}</h3>
              <p className="text-xs text-muted-foreground flex-grow">{aspect.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 5: Social Structure & Values */}
      <section id="social-structure" className="scroll-mt-20 space-y-6">
         <Card className="shadow-lg border-border/30">
            <CardHeader>
                 <CardTitle className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                    <pageData.socialStructure.icon className="text-primary h-8 w-8"/> {pageData.socialStructure.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                    {pageData.socialStructure.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
                            {point.icon && <point.icon className="h-5 w-5 text-secondary mt-0.5 shrink-0"/>}
                            <span className="text-sm text-muted-foreground leading-relaxed">{point.text}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
         </Card>
      </section>

      {/* Section 6: Evolving Lifestyles */}
      <section id="evolving-lifestyles" className="scroll-mt-20 space-y-6">
         <Card className="shadow-lg border-border/30">
            <CardHeader>
                <CardTitle className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
                    <pageData.changingLifestyles.icon className="text-primary h-8 w-8"/> {pageData.changingLifestyles.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                    {pageData.changingLifestyles.changes.map(change => (
                        <Card key={change.aspect} className="p-4 bg-muted/50 rounded-md border border-border/50 shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                                {change.icon && <change.icon className="h-6 w-6 text-secondary shrink-0"/>}
                                <h4 className="font-semibold text-foreground">{change.aspect}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">{change.description}</p>
                        </Card>
                    ))}
                </div>
            </CardContent>
         </Card>
      </section>

      {/* Section 7: People of Giridih - Gallery */}
      <section id="people-gallery" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.gallery.icon className="text-primary h-8 w-8"/> {pageData.gallery.title}
        </h2>
        <Card className="shadow-sm border-border/30">
            <CardContent className="p-10 text-center">
                <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">{pageData.gallery.description}</p>
            </CardContent>
        </Card>
      </section>

      {/* Section 8: Voices from the Community */}
      <section id="voices-from-giridih" className="scroll-mt-20 space-y-6">
        <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <pageData.voices.icon className="text-primary h-8 w-8"/> {pageData.voices.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pageData.voices.testimonials.map(testimonial => (
            <Card key={testimonial.by} className="shadow-md border-border/30">
              <CardContent className="p-6 space-y-3">
                <MessageSquare className="h-8 w-8 text-primary/70" />
                <blockquote className="italic text-muted-foreground">“{testimonial.quote}”</blockquote>
                <p className="text-sm font-semibold text-foreground pt-2">- {testimonial.by}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <section className="text-center py-10 border-t mt-16 border-border/50">
        <h3 className="text-xl font-semibold mb-4 text-foreground/90">Explore Further</h3>
        <div className="space-x-2 sm:space-x-4 mb-6">
          {pageData.footer.links.map(link => (
            <Button key={link.href} variant="link" asChild>
                <Link href={link.href}>
                  {link.text}
                </Link>
            </Button>
          ))}
        </div>
        <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
            <Button variant="outline" asChild disabled>
                <Link href={pageData.footer.downloadBrochure.link} target="_blank" rel="noopener noreferrer" download>
                   <Download className="mr-2 h-4 w-4"/> {pageData.footer.downloadBrochure.text} (Soon)
                </Link>
            </Button>
             <Button variant="outline" asChild disabled>
                <Link href={pageData.footer.watchVideo.link} target="_blank" rel="noopener noreferrer">
                   <Camera className="mr-2 h-4 w-4"/> {pageData.footer.watchVideo.text} (Soon)
                </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
