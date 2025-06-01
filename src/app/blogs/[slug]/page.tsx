
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/app/blogs/page'; 
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata, ResolvingMetadata } from 'next';
import { generateSeoMetaTags } from '@/ai/flows/generate-seo-meta-flow';


type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


export async function generateMetadata(
  { params }: BlogPostPageProps,
  parentResolvingMetadata: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  const canonicalUrl = `${siteUrl}/blogs/${slug}`;
  const previousImages = (await parentResolvingMetadata).openGraph?.images || [];

  try {
    const plainTextContent = post.content.replace(/<[^>]*>?/gm, ' ').substring(0, 500);
    const contentSummary = post.excerpt || plainTextContent;

    const seoInput = {
      title: post.title,
      contentSummary: contentSummary,
      contentType: 'blog post',
    };

    const seoData = await generateSeoMetaTags(seoInput);
    
    // Since post.image is removed from data, we only include previousImages if they exist
    const openGraphImages = previousImages.length > 0 ? previousImages : undefined;
    const twitterImages = previousImages.length > 0 ? previousImages.map(img => typeof img === 'string' ? img : img.url) : undefined;


    return {
      title: seoData.seoTitle,
      description: seoData.metaDescription,
      keywords: seoData.keywords,
      alternates: { 
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        url: canonicalUrl,
        images: openGraphImages,
      },
      twitter: {
        card: 'summary_large_image',
        title: seoData.seoTitle,
        description: seoData.metaDescription,
        images: twitterImages,
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
    console.error(`AI SEO Metadata Generation Error for blog ${slug}: ${errorMessage}`, error);
    const openGraphImages = previousImages.length > 0 ? previousImages : undefined;
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: openGraphImages,
      },
    };
  }
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }
  
  const siteUrl = typeof window !== 'undefined' ? window.origin : (process.env.NEXT_PUBLIC_SITE_URL || '');
  const canonicalUrl = siteUrl ? `${siteUrl}/blogs/${slug}` : `/blogs/${slug}`;


  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    // image removed as post.image is no longer available
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Giridih Explorer', 
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`, 
        dataAiHint: 'logo site'
      },
    },
    datePublished: post.date,
    dateModified: post.date, 
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  return (
    <article className="max-w-4xl mx-auto space-y-8">
        <Button variant="outline" size="sm" asChild className="mb-4">
            <Link href="/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
            </Link>
        </Button>

      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </div>
      </header>

      {/* Image component removed as post.image is no longer available in data */}
      {/* 
      <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={post.image} // This would cause an error if post.image is undefined
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority 
          data-ai-hint={post.dataAiHint || 'blog post image'} // post.dataAiHint also not in data
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
      */}

      <Card className="shadow-none border-none mt-8"> 
        <CardContent className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none p-0">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
