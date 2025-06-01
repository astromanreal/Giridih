
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Twitter, Instagram, UserCircle, PhoneCall, Shield, Baby, Heart, HelpCircle, Github } from 'lucide-react';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';

const helplineNumbers = [
  { label: 'Ambulance Helpline', number: '06532-226180', icon: PhoneCall },
  { label: 'NIC Service Helpline', number: '1800111555', icon: HelpCircle },
  { label: 'Women Helpline', number: '228239', icon: UserCircle },
  { label: 'Police Helpline', number: '100', icon: Shield },
  { label: 'Child Helpline', number: '1098', icon: Baby },
  { label: 'Blood Helpline', number: '06532 223304', icon: Heart },
  { label: 'Jan Samvad', number: '181', icon: PhoneCall },
];

const pageTitle = "Contact Giridih Explorer - Get in Touch & Helpline Numbers";
const pageContentSummary = "Contact information for Sarthak Sathyam, the creator of Giridih Explorer. Reach out for inquiries, feedback, or collaboration. Also find important helpline numbers for Giridih district.";
// Removed ogImage placeholder for metadata. It will use site default.
const contentType = 'contact page';


export async function generateMetadata(
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/contact`;
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
      keywords: seoData.keywords || ['contact Giridih Explorer', 'Sarthak Sathyam contact', 'Giridih helpline numbers', 'Giridih support'],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        images: previousImages.length > 0 ? previousImages : undefined, // Use site default if no other images
        type: 'profile',
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

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/contact`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": pageTitle,
    "description": pageContentSummary,
    "url": canonicalUrl,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Giridih Explorer",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`,
        "dataAiHint": "site logo"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "astroman6569@gmail.com",
        "contactType": "customer support"
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center py-8 md:py-12 bg-gradient-to-br from-background via-muted/30 to-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-10 w-full max-w-lg px-4">
        <Card className="shadow-xl border-border/30 bg-card/90 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
          <CardHeader className="items-center text-center space-y-3">
            <UserCircle className="h-20 w-20 text-primary" />
            <CardTitle className="text-3xl font-bold">
              Sarthak Sathyam
            </CardTitle>
            <p className="text-md text-muted-foreground">Creator of Giridih Explorer</p>
          </CardHeader>
          <CardContent className="space-y-4 pt-2">
            {[
              { icon: Mail, text: "astroman6569@gmail.com", href: "mailto:astroman6569@gmail.com" },
              { icon: Phone, text: "+91 81021 16569", href: "tel:+918102116569" },
              { icon: Instagram, text: "@srishikharji", href: "https://www.instagram.com/srishikharji/", external: true },
              { icon: Twitter, text: "@Sathyamsarthak", href: "https://x.com/Sathyamsarthak", external: true },
              { icon: Github, text: "@astromanreal", href: "https://github.com/astromanreal", external: true },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-3 bg-muted/60 hover:bg-muted rounded-lg transition-colors group"
              >
                <item.icon className="h-6 w-6 text-secondary group-hover:text-primary transition-colors" />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {item.text}
                </span>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-border/30 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-center justify-center font-semibold">
                  <PhoneCall className="h-6 w-6 text-primary" /> Giridih District Helplines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {helplineNumbers.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-muted/60 hover:bg-muted rounded-lg transition-colors group text-sm">
                    <item.icon className="h-5 w-5 text-secondary group-hover:text-primary transition-colors shrink-0" />
                    <span className="font-medium text-foreground flex-1">{item.label}:</span>
                    <a href={`tel:${item.number.replace(/\s+/g, '')}`} className="text-muted-foreground group-hover:text-primary group-hover:underline transition-colors">
                        {item.number}
                    </a>
                  </div>
              ))}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
