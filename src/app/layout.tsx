
'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Default metadata for the entire application
// Specific pages will override this with more targeted metadata.
// Ensure NEXT_PUBLIC_SITE_URL is set in your .env.local file (e.g., NEXT_PUBLIC_SITE_URL=https://yourdomain.com)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Giridih Explorer - Your Guide to Giridih District',
    template: '%s | Giridih Explorer',
  },
  description: 'Discover Giridih: Explore Parasnath Hill, forests, wildlife, culture, history, local crafts, and plan your trip with our comprehensive tourism guide for Giridih District, Jharkhand, India.',
  keywords: ['Giridih', 'Jharkhand', 'tourism', 'Parasnath Hill', 'Shikharji', 'travel guide', 'India tourism', 'Giridih attractions', 'Giridih tourism', 'Jharkhand tourism'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Giridih Explorer',
    title: 'Giridih Explorer - Your Guide to Giridih District',
    description: 'Discover the best of Giridih District. Explore attractions, culture, nature, and plan your perfect trip.',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Replace with your actual default OG image URL in /public folder
        width: 1200,
        height: 630,
        alt: 'Giridih Explorer - Scenic view of Giridih',
        // data-ai-hint: 'Giridih landscape', // This is not a valid property for OpenGraphImage in Metadata type
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giridih Explorer - Your Guide to Giridih District',
    description: 'Your comprehensive guide to exploring Giridih District, Jharkhand. Discover attractions, culture, and nature.',
    images: [`${siteUrl}/og-image-twitter.png`], // Replace with your actual default Twitter image URL
    // creator: '@YourTwitterHandle', // Optional: Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // icons: { // Consider adding actual favicons if you have them
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: `${siteUrl}/site.webmanifest`, // Create a manifest file if you want PWA capabilities
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="mac7aLjz9hgBPOeatEJp8fZ6RL2GRi8PeWQfgcITzFU" />
        {/* 
          The <title> and <meta name="description"> tags are primarily managed by 
          the generateMetadata function in individual page.tsx/route.tsx files.
          The siteMetadata object above provides defaults and site-wide OpenGraph/Twitter data.
          For a custom /og-image.png, place it in your /public folder.
          The data-ai-hint attribute is not standard for meta tags; it's for next/image components.
          If you intend to use AI to generate your OG image, you'd apply hints during that process.
        */}
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false} 
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
             <div className="flex min-h-screen flex-col">
               <SiteHeader />
               <main className="flex-1 p-4 md:p-6">{children}</main>
             </div>
             <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
