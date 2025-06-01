
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryHorizontalEnd } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';

const galleryImages = [
  { id: 'img1', src: 'https://cdn.pixabay.com/photo/2024/01/25/03/16/capuchin-monkey-8530884_1280.jpg', alt: 'Capuchin monkey in a tree, Giridih wildlife', dataAiHint: 'monkey wildlife', category: 'Wildlife' },
  { id: 'img2', src: 'https://cdn.pixabay.com/photo/2019/05/06/19/13/green-4183977_1280.jpg', alt: 'Lush green forest path in Giridih', dataAiHint: 'forest path', category: 'Nature' },
  { id: 'img3', src: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg', alt: 'Elephant walking in the wilderness of Giridih', dataAiHint: 'elephant wildlife', category: 'Wildlife' },
  { id: 'img4', src: 'https://cdn.pixabay.com/photo/2019/08/08/13/52/elephant-4393034_1280.jpg', alt: 'Close-up portrait of an elephant in Giridih', dataAiHint: 'elephant face', category: 'Wildlife' },
  { id: 'img5', src: 'https://cdn.pixabay.com/photo/2020/08/28/12/43/forest-5524525_1280.jpg', alt: 'Sunlight filtering through a dense forest in Giridih district', dataAiHint: 'forest sunlight', category: 'Nature' },
  { id: 'img6', src: 'https://cdn.pixabay.com/photo/2016/07/13/10/59/waterfall-1514145_1280.jpg', alt: 'Majestic waterfall cascading down rocks, possibly Usri Falls, Giridih', dataAiHint: 'waterfall rocks', category: 'Nature' },
  { id: 'img7', src: 'https://cdn.pixabay.com/photo/2016/11/21/15/19/dirt-road-1845933_1280.jpg', alt: 'Dirt road winding through a forest in Giridih region', dataAiHint: 'forest road', category: 'Nature' },
  { id: 'img8', src: 'https://cdn.pixabay.com/photo/2020/06/14/15/55/landscape-5298395_1280.jpg', alt: 'Panoramic landscape view with mountains near Giridih', dataAiHint: 'landscape mountains', category: 'Nature' },
  { id: 'img9', src: 'https://cdn.pixabay.com/photo/2016/07/28/08/50/sunbeams-1547273_1280.jpg', alt: 'Sunbeams shining through forest canopy in Giridih', dataAiHint: 'sunbeams forest', category: 'Nature' },
  { id: 'img10', src: 'https://cdn.pixabay.com/photo/2020/01/01/06/17/off-road-4733034_1280.jpg', alt: 'Off-road vehicle on a trail, adventure in Giridih', dataAiHint: 'offroad vehicle', category: 'Adventure' },
  { id: 'img11', src: 'https://cdn.pixabay.com/photo/2020/12/02/09/50/man-5796871_1280.jpg', alt: 'Man standing on a viewpoint looking at Giridih landscape', dataAiHint: 'man viewpoint', category: 'People' },
  { id: 'img12', src: 'https://cdn.pixabay.com/photo/2017/03/20/08/40/monkey-2158511_1280.jpg', alt: 'Monkey sitting on a branch, wildlife of Giridih', dataAiHint: 'monkey wildlife', category: 'Wildlife' },
  { id: 'img13', src: 'https://cdn.pixabay.com/photo/2019/12/13/07/45/landscape-4692446_1280.jpg', alt: 'Serene landscape with hills and water body near Giridih', dataAiHint: 'landscape water', category: 'Nature' },
];

const pageTitle = "Giridih Photo Gallery - Visual Journey Through Nature, Wildlife, and Culture";
const pageContentSummary = "A visual gallery showcasing the stunning landscapes, diverse wildlife, vibrant culture, traditional festivals, and daily life in Giridih district through captivating photographs.";
const contentType = 'gallery page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/gallery`;
  const firstImage = galleryImages[0]?.src || `${siteUrl}/og-gallery-default.png`;
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
      keywords: seoData.keywords || ['Giridih photos', 'Giridih gallery', 'Jharkhand images', 'nature photography India', 'wildlife photography Giridih', 'Indian culture photos'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: [
          { url: firstImage, alt: 'Preview image from Giridih Photo Gallery' },
          ...previousImages
        ],
        type: 'website', 
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        images: [firstImage],
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
          images: [firstImage],
      }
    };
  }
}

export default function GalleryPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/gallery`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": pageTitle,
    "description": pageContentSummary,
    "url": canonicalUrl,
    "image": galleryImages.map(img => ({
        "@type": "ImageObject",
        "contentUrl": img.src,
        "caption": img.alt,
        "description": img.alt, 
        "thumbnailUrl": img.src 
    })),
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
          "name": "Gallery"
        }
      ]
    },
    "publisher": {
        "@type": "Organization",
        "name": "Giridih Explorer",
        "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/logo.png`,
            "dataAiHint": "site logo"
        }
    }
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
          <GalleryHorizontalEnd className="h-8 w-8 text-primary" /> Visual Gallery
        </h1>
        <p className="text-muted-foreground mt-2">
          A glimpse into the beauty, culture, and life of Giridih District.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden group relative shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video w-full relative">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.dataAiHint}
                 sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
               <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm truncate">{image.alt}</p>
               </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
