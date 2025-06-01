
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollText, Landmark, MapPin as MapPinIcon, Mountain, Users, Home, Aperture, BookOpen, ShieldCheck, MessageCircle, Image as ImageIconLucide, Clock, Link as LinkIcon, Building2, Gem, History } from 'lucide-react'; // Added History icon
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';
import Link from 'next/link';

const pageData = {
  hero: {
    title: "History & Heritage of Giridih",
    subtitle: "From Ancient Jain Trails to Coal-Rich Colonial Past",
    backgroundImage: "https://cdn.pixabay.com/photo/2020/03/17/11/29/temple-4939831_1280.jpg",
    dataAiHint: "parasnath hill shikharji jain temple ruins",
    cta: "Explore Historical Sites",
    ctaLink: "#ancient-times"
  },
  sections: [
    {
      id: "ancient-times",
      title: "Ancient Times & Jain Legacy",
      icon: Mountain,
      layout: "side-image-text",
      image: "https://t3.ftcdn.net/jpg/06/44/90/42/240_F_644904289_NbXKTKISNlcpn6ttB2P3upo1IIPqpeKE.jpg", // This is a real image, keep for context but the request implies removing placeholders. Let's assume if it's explicitly in `image` it might be kept, but for now, follow the "remove placeholders" general instruction for sections. This one will be removed to make the section text-focused.
      dataAiHint: "parasnath hill shikharji jain pilgrimage",
      content: [
        "Giridih’s ancient identity is intrinsically linked to the majestic Parashnath Hill, revered worldwide as Shikharji—one of the most sacred pilgrimage sites for Jains.",
        "It is a deeply held belief that twenty out of the twenty-four Jain Tirthankaras (Ford-makers) attained Moksha (liberation from the cycle of rebirth) upon this sacred hill.",
        "The landscape surrounding and upon Parasnath Hill is dotted with numerous centuries-old Jain temples and shrines, each echoing tales of spiritual pursuits and enlightenment.",
        "Beyond its religious significance, the hill serves as a living cultural archive, showcasing remarkable examples of Jain architecture, intricate carvings, and historically significant inscriptions that offer insights into ancient practices and artistry."
      ]
    },
    {
      id: "tribal-dynasties",
      title: "Tribal & Regional Dynasties",
      icon: Users,
      layout: "timeline-cards",
      items: [
        { name: "Indigenous Roots", description: "The region has been a traditional homeland for various tribal communities, including the Santhal, Munda, and Oraon peoples. These communities have rich oral histories, distinct languages, and well-established indigenous governance systems that predate later administrative structures.", imageHint: "tribal village india jharkhand" },
        { name: "Magadha & Trade Influence", description: "Historical evidence suggests connections to the ancient Magadha empire, with important trade routes likely passing through or near the Giridih region, facilitating cultural and economic exchange.", imageHint: "ancient map india magadha" },
        { name: "Folk Legacies & Deities", description: "The cultural fabric is enriched by folk stories, legends, and the worship of village deities (Gram Devatas). These traditions preserve ancestral memories and knowledge, passed down through generations via storytelling, songs, and rituals.", imageHint: "folk art tribal storytelling" },
        { name: "Archaeological Clues", description: "Archaeological findings near prominent sites like Khandoli, Beniadih, and Usri Falls indicate early human settlements and interactions with neighboring regions. These remnants provide valuable clues about ancient settlement patterns and regional dynamics.", imageHint: "archaeological dig site ruins" }
      ]
    },
    {
      id: "medieval-colonial",
      title: "Medieval to Colonial Period",
      icon: Building2,
      layout: "two-column-grid",
      // images removed as they were placeholders
      content: [
        "During the Medieval period, the area that now constitutes Giridih was part of various regional kingdoms and chieftaincies. It often served as a transit zone, influenced by powers in Bihar and Bengal.",
        "With the advent of British rule under the East India Company and later the British Raj, Giridih gained strategic importance primarily due to its rich coal and mica reserves.",
        "The British administration established some of India’s earliest coal mining operations in this region, transforming the landscape and local economy.",
        "To support the burgeoning mining industry, extensive railway lines were developed, connecting Giridih to major cities and ports, facilitating the transport of minerals and administrative control."
      ]
    },
    {
      id: "mining-heritage",
      title: "Mining Heritage",
      icon: Gem,
      layout: "image-timeline",
      // image removed as it was placeholder
      content: [
        "Giridih rose to prominence as a critical center for mica and coal mining throughout the 19th and 20th centuries, contributing significantly to India's industrial mineral output.",
        "Key areas such as Karharbari and Beniadih transformed into bustling industrial zones, attracting labor and capital, and leading to the development of specialized mining towns.",
        "These mining towns fostered a unique urban culture, a melting pot of influences from local tribal communities, British administrators, and migrant workers, including many from Bengal.",
        "Tangible remnants of this era, including disused mining gear, colonial-era administrative buildings, old railway infrastructure, and rusting locomotives, stand as silent witnesses to Giridih's rich industrial past."
      ]
    },
    {
      id: "architectural-heritage",
      title: "Architectural & Religious Heritage",
      icon: Landmark,
      layout: "card-grid",
      sites: [
        { name: "Shikharji Temples (Parasnath Hill)", description: "A magnificent complex of Jain marble temples, renowned for their intricate carvings, serene ambiance, and profound spiritual devotion. These structures showcase exemplary craftsmanship and ancient architectural styles.", image: "https://t3.ftcdn.net/jpg/02/86/70/90/240_F_286709081_4xVbIHRkdvz3l3aFK6vvWfkgbRQXvVjp.jpg", dataAiHint: "jain temple architecture marble" }, // Real image, kept
        { name: "Jharkhandi-style Local Temples", description: "Numerous local temples found in villages across Giridih, often dedicated to tribal deities and local gods, reflect indigenous architectural styles and vernacular building traditions.", imageHint: "tribal temple village india" }, // Placeholder removed
        { name: "British-era Colonial Buildings", description: "Remnants of the colonial past are visible in mining offices, railway station buildings, dak bungalows, and residential quarters, characterized by their distinctive colonial architectural features.", imageHint: "colonial architecture india building" }, // Placeholder removed
        { name: "Rural Shrines & Sacred Groves", description: "Small shrines dedicated to Gram Devi (village goddesses) and various tribal ancestral spirits are integral to the socio-religious life of rural communities, often located in sacred groves or community spaces.", imageHint: "village shrine india deity" } // Placeholder removed
      ]
    },
    {
      id: "heritage-trails",
      title: "Heritage Trails & Tourism",
      icon: MapPinIcon,
      layout: "map-list",
      // mapImage removed as placeholder
      trails: [
        { name: "Jain Heritage Trail", description: "A spiritual journey starting from Madhuban, ascending Shikharji to visit the Tonks, and potentially including nearby Dungri temples. Offers deep insights into Jain traditions.", points: ["Madhuban", "Shikharji Peak", "Dungri Temples"], imageHint: "jain pilgrimage route india" },
        { name: "Colonial Industrial Trail", description: "Explore the remnants of Giridih's industrial past by visiting sites like the Beniadih Mines, the old railway lines, and preserved sections of the historic coal towns.", points: ["Beniadih Mines", "Old Railway Infrastructure", "Historic Coal Town Areas"], imageHint: "colonial history tour india" },
        { name: "Tribal Cultural Immersion Walk", description: "Visit Santhali or Munda villages near Pirtand or Deori to experience indigenous culture, traditional lifestyles, and local art forms. Interaction with community members (with permission) can be enriching.", points: ["Santhali/Munda Village Visit", "Pirtand Region", "Deori Temple Vicinity"], imageHint: "tribal village tour india" }
      ],
      note: "For a richer experience, consider engaging local guides. Trails can be combined with sampling local cuisine at village stalls or exploring nearby natural spots."
    },
    {
      id: "oral-history",
      title: "Oral History & Folk Legends",
      icon: MessageCircle,
      layout: "testimonial-quotes",
      topics: [
        { title: "Forest Myths & Sacred Groves", description: "Local tribal communities possess a rich repository of myths and legends about forest deities, spirits that protect the land, and the sacred significance of specific groves and natural formations.", imageHint: "forest spirit tribal myth" },
        { title: "Stories of Change & Resistance", description: "Oral histories often recount community experiences during periods of significant change, such as the advent of mining, land acquisition, and social transformations, including narratives of adaptation and resistance.", imageHint: "tribal resistance history india" },
        { title: "Folk Songs of Life & Longing", description: "Traditional folk songs, passed down through generations, narrate themes of migration, cultural change, connection to the land, love, and longing for the past, serving as an auditory archive of community memory.", imageHint: "folk music traditional song" }
      ]
    },
    {
      id: "preservation-challenges",
      title: "Preservation & Challenges",
      icon: ShieldCheck,
      layout: "two-column-comparison",
      preserved: [
        "Shikharji temples and associated sites are meticulously maintained by various Jain trusts and community organizations.",
        "Many oral traditions, rituals, and folk art forms are kept alive through community festivals, gatherings, and dedicated practitioners.",
        "There is a growing awareness among local youth and civil society organizations about the importance of heritage conservation."
      ],
      atRisk: [
        "Numerous British-era structures and industrial heritage sites face decay due to neglect and lack of resources for conservation.",
        "Many tribal heritage sites, including ancient megaliths or sacred natural spots, lack proper documentation, protection, or formal recognition.",
        "The rapid pace of modernization and changing socio-economic conditions pose a threat to traditional languages, indigenous knowledge systems, and artisanal skills."
      ],
      efforts: "Local historians, cultural activists, and some NGOs are working on initiatives like digital archiving, community-based documentation, and advocating for museum development and heritage protection policies."
    },
    {
      id: "heritage-gallery",
      title: "Heritage Gallery",
      icon: ImageIconLucide,
      layout: "grid-gallery-categories",
      categories: ["Temples", "Mines", "Tribal Homes", "Artefacts"],
      images: [
        // All previous images were placeholders and are removed.
        // If real images become available, they can be added here.
      ]
    }
  ],
  footer: {
    links: [
      { href: "/culture-festivals", text: "Culture & Festivals" },
      { href: "/forests-wildlife", text: "Forests & Wildlife" },
      { href: "/explore", text: "Tourist Attractions" },
    ],
    contactInfo: "Giridih Tourism Office / Archaeology Cell: (Details to be updated)",
    contributionLink: "/contact",
    contributionText: "Share Your Local History"
  }
};

const heroImage = pageData.hero.backgroundImage;
const pageTitle = "History & Heritage of Giridih - Ancient Sites, Colonial Past, and Landmarks";
const pageContentSummary = "Uncover the rich history and cultural heritage of Giridih district, from its ancient tribal roots and Jain significance to the British colonial era. Learn about key historical sites, monuments, and influential periods.";
const contentType = 'informational page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/history-heritage`;
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
      keywords: seoData.keywords || ['Giridih history', 'Giridih heritage', 'Parasnath history', 'Chota Nagpur history', 'British Raj Giridih', 'historical sites India', 'tribal history Jharkhand', 'mining history Giridih'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: heroImage, alt: 'Ancient temple ruins representing Giridih\'s heritage' },
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

export default function HistoryHeritagePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/history-heritage`;

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
        { "@type": "ListItem", "position": 2, "name": "History & Heritage" }
      ]
    },
    "mainEntity": {
        "@type": "Article",
        "headline": "Delving into the History and Heritage of Giridih",
         "author": { "@type": "Organization", "name": "Giridih Explorer" },
        "publisher": {
            "@type": "Organization", "name": "Giridih Explorer",
            "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png`, "dataAiHint": "site logo" }
        },
        "datePublished": "2024-01-03",
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
          alt="Panoramic view of Parashnath Hill (Shikharji) or Beniadih Temple ruins"
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
                {pageData.hero.cta} <ScrollText className="ml-2 h-5 w-5"/>
            </Link>
          </Button>
        </div>
      </section>

      {/* Dynamic Sections */}
      {pageData.sections.map(section => (
        <section key={section.id} id={section.id} className="scroll-mt-20 space-y-6">
          <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
            <section.icon className="text-primary h-8 w-8"/> {section.title}
          </h2>

          {section.layout === "side-image-text" && section.content && (
            <Card className="shadow-lg border-border/30">
              <CardContent className="p-6">
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {section.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                </div>
              </CardContent>
            </Card>
          )}

          {section.layout === "timeline-cards" && section.items && (
            <div className="space-y-6">
              {section.items.map(item => (
                <Card key={item.name} className="shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                   <CardHeader>
                        <CardTitle className="text-xl text-foreground/90 flex items-center gap-2">
                            <History className="h-5 w-5 text-secondary"/> {/* Using History icon */}
                            {item.name}
                        </CardTitle>
                    </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {section.layout === "two-column-grid" && section.content && (
            <Card className="shadow-lg">
                 <CardContent className="p-6">
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                        {section.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                    </div>
                 </CardContent>
            </Card>
          )}

          {section.layout === "image-timeline" && section.content && (
             <Card className="shadow-lg">
                 <CardContent className="p-6 space-y-4">
                    <div className="text-muted-foreground leading-relaxed space-y-3">
                        {section.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                    </div>
                 </CardContent>
             </Card>
          )}

          {section.layout === "card-grid" && section.sites && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.sites.map(site => (
                <Card key={site.name} className="shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 group flex flex-col">
                   {site.image && !site.image.startsWith("https://placehold.co") && (
                     <div className="relative h-52 w-full rounded-t-lg overflow-hidden">
                          <Image src={site.image} alt={site.name} layout="fill" objectFit="cover" data-ai-hint={site.dataAiHint || "historical site india architecture"} className="group-hover:scale-105 transition-transform"/>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                     </div>
                   )}
                  <CardHeader className={`pb-2 ${site.image && !site.image.startsWith("https://placehold.co") ? '' : 'pt-6'}`}>
                    <CardTitle className="text-lg group-hover:text-primary">{site.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">{site.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {section.layout === "map-list" && section.trails && (
            <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                        {section.trails.map(trail => (
                            <div key={trail.name} className="p-4 bg-muted/50 rounded-md border border-border/50">
                                <h4 className="font-semibold text-foreground mb-1">{trail.name}</h4>
                                <p className="text-xs text-muted-foreground mb-2">{trail.description}</p>
                                <p className="text-xs text-muted-foreground"><strong>Key Points:</strong> {trail.points?.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                    {section.note && <p className="text-xs text-center text-muted-foreground italic mt-4">{section.note}</p>}
                </CardContent>
            </Card>
          )}

          {section.layout === "testimonial-quotes" && section.topics && (
             <div className="space-y-6">
                {section.topics.map(topic => (
                    <Card key={topic.title} className="shadow-sm border-border/30">
                         <CardHeader>
                            <CardTitle className="text-lg text-foreground/90 flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-secondary"/>
                                {topic.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{topic.description}</p>
                        </CardContent>
                    </Card>
                ))}
             </div>
          )}

          {section.layout === "two-column-comparison" && (
            <Card className="shadow-lg">
                <CardContent className="p-6 grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-lg text-green-600 dark:text-green-400 mb-2">Preserved Aspects</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                            {section.preserved?.map((item, idx) => <li key={`p-${idx}`}>{item}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-lg text-red-600 dark:text-red-400 mb-2">At Risk Aspects</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                            {section.atRisk?.map((item, idx) => <li key={`r-${idx}`}>{item}</li>)}
                        </ul>
                    </div>
                    {section.efforts && <p className="md:col-span-2 text-sm text-muted-foreground italic mt-4">{section.efforts}</p>}
                </CardContent>
            </Card>
          )}

            {section.layout === "grid-gallery-categories" && (
                <div className="space-y-4">
                    <Card className="shadow-sm border-border/30">
                        <CardContent className="p-6 text-center">
                            <ImageIconLucide className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                            <p className="text-muted-foreground">
                                Our heritage photo gallery is currently being curated. Please check back soon for visual insights into Giridih's rich past.
                            </p>
                            {section.categories && (
                                <p className="text-xs text-muted-foreground mt-2">
                                    Planned categories include: {section.categories.join(', ')}.
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}

        </section>
      ))}

       {/* Footer Section */}
      <section className="text-center py-10 border-t mt-16 border-border/50">
        <h3 className="text-xl font-semibold mb-4 text-foreground/90">Discover More</h3>
        <div className="space-x-2 sm:space-x-4 mb-4">
          {pageData.footer.links.map(link => (
            <Button key={link.href} variant="link" asChild>
                <Link href={link.href}>
                  {link.text}
                </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          Contact: {pageData.footer.contactInfo}
        </p>
         <Button variant="outline" asChild>
            <Link href={pageData.footer.contributionLink}>
               <MessageCircle className="mr-2 h-4 w-4"/> {pageData.footer.contributionText}
            </Link>
         </Button>
      </section>
    </div>
  );
}
