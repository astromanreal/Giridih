
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, ListChecks, Edit, Users, Search } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';

const pageTitle = "Giridih Community Forums - Discuss, Share Experiences, and Connect";
const pageContentSummary = "Join the Giridih Explorer community forums to discuss travel tips, share your experiences, ask questions about attractions like Parasnath Hill, and connect with fellow travelers and locals. (Forum functionality coming soon).";
// Removed heroImage placeholder
const contentType = 'forum page';

export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/forums`;
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
      keywords: seoData.keywords || ['Giridih forum', 'Giridih community', 'travel discussion India', 'Parasnath Hill forum', 'Jharkhand travel tips'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: previousImages.length > 0 ? previousImages : undefined, // Use site default if no other images
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

export default function ForumsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/forums`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageContentSummary,
    "url": canonicalUrl,
    // Removed image from LD+JSON as it was a placeholder
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
          "name": "Community Forums"
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
    <div className="space-y-8 flex flex-col items-center pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="items-center text-center">
          <MessageSquare className="h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-3xl font-bold">Community Forums</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Connect, Share, and Discuss! (Coming Soon)
          </CardDescription>
        </CardHeader>
        <CardContent className="text-left space-y-6">
          <p className="text-muted-foreground text-center">
            We're building a space for the Giridih Explorer community to connect! Soon, you'll be able to join discussions, share your experiences, ask questions, and interact with fellow explorers and locals.
          </p>

          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="text-xl font-semibold text-center mb-3">Planned Features:</h3>

            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
              <ListChecks className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Organized Categories</h4>
                <div className="text-sm text-muted-foreground">
                    <p className="mb-1">Browse topics organized into relevant categories like:</p>
                    <ul className="list-disc list-inside ml-4 text-xs">
                        <li>Travel Tips & Itineraries</li>
                        <li>Accommodation Reviews & Suggestions</li>
                        <li>Experiences & Stories from Giridih</li>
                        <li>Parasnath Hill (Shikharji) Trek & Info</li>
                        <li>Khandoli Dam, Usri Falls & Other Attractions</li>
                        <li>Culture, Festivals & Local Life</li>
                        <li>Food & Local Cuisine Discoveries</li>
                        <li>General Discussion & Q&A</li>
                    </ul>
                    <p className="mt-1">Easily find conversations related to your interests.</p>
                </div>
              </div>
            </div>

             <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
              <Edit className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Create & Reply to Topics</h4>
                <p className="text-sm text-muted-foreground">
                  Start new discussion threads within categories or reply to existing conversations. Share your insights, ask for advice, or recount your Giridih adventures.
                </p>
              </div>
            </div>

             <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
               <Users className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Community Interaction</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with others who share your interest in Giridih. See who's posting and engage in meaningful discussions. (User profiles and authentication will be required for posting).
                </p>
              </div>
            </div>

             <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
               <Search className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Search Functionality</h4>
                <p className="text-sm text-muted-foreground">
                  Easily find topics or posts related to specific keywords or interests across all categories.
                </p>
              </div>
            </div>
          </div>

           <p className="text-center text-sm text-muted-foreground pt-4">
            Stay tuned for updates! We're excited to launch this community space soon.
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
