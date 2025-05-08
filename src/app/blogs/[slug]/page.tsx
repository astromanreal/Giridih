
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogPostBySlug, getBlogPosts } from '@/app/blogs/page'; // Import functions to get blog data
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Define params type for TypeScript
type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

// Function to generate static paths for blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// The actual blog post page component
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  // If post not found, return 404
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto space-y-8">
       {/* Back Button */}
        <Button variant="outline" size="sm" asChild className="mb-4">
            <Link href="/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
            </Link>
        </Button>

      {/* Post Header */}
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

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority // Prioritize loading the main image
          data-ai-hint={post.dataAiHint}
        />
         {/* Subtle overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Post Content */}
      <Card className="shadow-none border-none"> {/* Removing Card styling for seamless content flow */}
        <CardContent className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none p-0 mt-6">
          {/* Use dangerouslySetInnerHTML to render the HTML content */}
          {/* Ensure the source of this HTML is trusted or sanitized */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardContent>
      </Card>

      {/* Optional: Author Bio or Related Posts section */}
      {/* <footer className="mt-12 border-t border-border pt-8">
        <h3 className="text-xl font-semibold mb-4">About the Author</h3>
        <p className="text-muted-foreground">...</p>
      </footer> */}
    </article>
  );
}
