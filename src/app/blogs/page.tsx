
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ArrowRight, FileText } from 'lucide-react'; // Added FileText
import { Button } from '@/components/ui/button';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';

// Sample Blog Data
const blogPosts = [
  {
    id: 'blog1',
    slug: 'parasnath-trek',
    title: 'A Trekker\'s Tale: Conquering Parasnath Hill',
    excerpt: 'Reliving the spiritual and physical journey to the summit of Shikharji, encountering breathtaking views and moments of reflection along the way.',
    author: 'Adventurous Soul',
    date: '2024-07-15',
    content: `
      <p>The air grew thinner, the path steeper, but the spirit soared higher with every step towards the sacred summit of Parasnath Hill, affectionately known as Shikharji. This wasn't just a trek; it was a pilgrimage, a journey inward as much as upward.</p>
      <p>Starting from the bustling base town of Madhuban, the initial trail wound through dense forests, echoing with the chirping of unseen birds. The early morning sun filtered through the canopy, painting dappled patterns on the path. Fellow pilgrims, young and old, some chanting softly, others walking in contemplative silence, shared the way.</p>
      <p>As we ascended, the trees gave way to rocky outcrops, offering panoramic vistas of the sprawling landscape below. The plains stretched out like a patchwork quilt, dotted with tiny villages and shimmering water bodies. It was a humbling sight, putting our small existence into perspective.</p>
      <p>Reaching the Tonks, the small temples marking the places where Tirthankaras attained nirvana, felt like stepping into timelessness. The serene atmosphere, the intricate carvings, and the unwavering faith of the devotees created moments of profound peace and reflection. The final push to the main temple at the summit was fueled by a sense of accomplishment and spiritual anticipation.</p>
      <p>Standing at the peak, enveloped by clouds that drifted like ethereal veils, was an experience beyond words. The physical exhaustion melted away, replaced by a deep sense of tranquility and connection. The journey down was filled with shared smiles and a quiet understanding among fellow travelers – we had all been part of something special.</p>
    `,
  },
  {
    id: 'blog2',
    slug: 'sohrai-celebration',
    title: 'The Vibrant Colors of Sohrai: A Village Celebration',
    excerpt: 'Experience the joy and traditions of the Sohrai festival, where homes are adorned with art and cattle are celebrated in rural Giridih.',
    author: 'Culture Explorer',
    date: '2024-06-28',
    content: `
      <p>As the harvest season concludes, the villages around Giridih burst into a riot of color and activity for the Sohrai festival. It's a time of thanksgiving, community bonding, and, most uniquely, a celebration of cattle – the farmer's indispensable partners.</p>
      <p>Weeks before the main day, women begin decorating the mud walls of their homes with intricate paintings. Using natural pigments derived from earth and minerals – ochre, white, black – they create stunning murals depicting geometric patterns, animals, birds, and scenes from nature. Each artwork is a testament to their creativity and connection to the land.</p>
      <p>On the day of Sohrai, the cattle are given a day of rest. They are bathed, their horns are oiled and decorated, and garlands are placed around their necks. Special prayers are offered for their well-being and for a prosperous agricultural year ahead. It's a heartwarming display of respect and gratitude towards these animals.</p>
      <p>The evenings come alive with music and dance. The rhythmic beats of the Mandar drum fill the air as villagers gather to sing traditional songs and perform folk dances. The sense of community is palpable, a shared joy that transcends the hardships of rural life. Witnessing Sohrai is not just observing a festival; it's experiencing the living heart of Giridih's culture.</p>
    `,
  },
  {
    id: 'blog3',
    slug: 'giridih-history-whispers',
    title: 'Whispers of the Past: Unearthing History in Giridih',
    excerpt: 'A journey through time exploring the lesser-known historical sites and remnants of the British era that tell the story of Giridih\'s evolution.',
    author: 'History Buff',
    date: '2024-05-10',
    content: `
      <p>Beyond the well-trodden paths of Parasnath, Giridih holds subtle whispers of a rich and layered past. Exploring its lesser-known corners reveals remnants of bygone eras, from ancient tribal roots to the significant impact of the British Raj.</p>
      <p>The discovery of coal and mica in the 19th century transformed Giridih. While the grand colonial structures might not be as prominent as in larger cities, glimpses remain. Old railway buildings, administrative offices, and bungalows around the town center showcase architectural styles of the period – sturdy structures with arched verandahs and high ceilings, designed for the climate.</p>
      <p>Venturing into the countryside, one might stumble upon ancient megalithic sites or ruins of small fortifications, hinting at pre-colonial settlements and regional power struggles. While not always well-documented or preserved, these sites spark the imagination about the lives of those who inhabited this land centuries ago.</p>
      <p>The local museums, though perhaps modest, sometimes house artifacts that piece together parts of this history – old tools, pottery shards, photographs, and documents. Piecing together Giridih's history requires a keen eye and a curious mind, listening to the subtle whispers carried on the wind and etched into the landscape.</p>
    `,
  },
   {
    id: 'blog4',
    slug: 'usri-river-life',
    title: 'Life by the Usri: Encounters Along the Riverbanks',
    excerpt: 'Discovering the serene beauty and daily life that unfolds along the banks of the Usri River, a lifeline for many communities in Giridih.',
    author: 'Nature Lover',
    date: '2024-08-01',
    content: `
      <p>The Usri River, winding its way through the Giridih district, is more than just a body of water; it's a lifeline, a source of sustenance, and a silent witness to the rhythms of rural life. Spending time along its banks offers a glimpse into a world moving at a gentler pace.</p>
      <p>In the early mornings, the riverbanks come alive. Villagers arrive for their daily ablutions, women wash clothes, and children splash playfully in the shallows. Fishermen cast their nets, hoping for a modest catch. The air is fresh, carrying the scent of damp earth and distant woodsmoke.</p>
      <p>Further downstream lies the famous Usri Falls, especially spectacular during the monsoon season when the river swells and cascades over the rocks with impressive force. Even during drier months, the falls area retains a serene beauty, a popular spot for picnics and quiet contemplation.</p>
      <p>As the day ends, the setting sun paints the sky in hues of orange and purple, reflecting beautifully on the water's surface. Cattle are herded back home, their bells tinkling softly. The sounds of the day fade, replaced by the chirping of crickets and the gentle murmur of the flowing river. Life by the Usri is simple, connected to nature, and possesses a quiet dignity that stays with you long after you leave its banks.</p>
    `,
  },
];

export const getBlogPosts = () => blogPosts;

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

const pageTitle = "Giridih Explorer Blogs & Stories - Tales from Jharkhand";
const pageContentSummary = "Read insightful blog posts, travel stories, and cultural experiences from Giridih district. Discover trekker's tales, festival celebrations, historical insights, and life along the Usri River.";
const contentType = 'blog listing page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/blogs`;
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
      keywords: seoData.keywords || ['Giridih blog', 'Jharkhand travel stories', 'Parasnath trek blog', 'Sohrai festival blog', 'Giridih culture', 'travel experiences India'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: previousImages.length > 0 ? previousImages : undefined,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        images: previousImages.length > 0 ? previousImages.map(img => typeof img === 'string' ? img : img.url) : undefined,
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
        images: previousImages.length > 0 ? previousImages : undefined,
      }
    };
  }
}


export default function BlogsPage() {
  const posts = getBlogPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/blogs`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": pageTitle,
    "description": pageContentSummary,
    "url": canonicalUrl,
    "publisher": {
        "@type": "Organization",
        "name": "Giridih Explorer",
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/logo.png`,
            "dataAiHint": "site logo"
        }
    },
    "blogPost": posts.map(post => ({
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteUrl}/blogs/${post.slug}`
        },
        "headline": post.title,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "datePublished": post.date,
        "description": post.excerpt
        // Removed image property as post.image is no longer available
    }))
  };


  return (
    <div className="space-y-8">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" /> Blogs & Stories
        </h1>
        <p className="text-muted-foreground mt-2">
          Experiences, insights, and tales from Giridih District.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-border rounded-lg transform hover:-translate-y-1 group">
            <Link href={`/blogs/${post.slug}`} className="flex flex-col flex-grow p-6">
              <CardHeader className="p-0 pb-3">
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <CardDescription className="text-xs pt-1">
                  By {post.author} on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-0 pt-4">
                <Button variant="link" className="p-0 text-primary font-semibold" asChild>
                  <span className="flex items-center">
                     Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Button>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
