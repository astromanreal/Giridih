'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
// import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar'; // Removed sidebar imports
import { SiteHeader } from '@/components/site-header';
// import { SiteSidebar } from '@/components/site-sidebar'; // Removed SiteSidebar import
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip'; // Keep TooltipProvider if used elsewhere

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <TooltipProvider delayDuration={0}> {/* Keep TooltipProvider if needed */}
             {/* Removed SidebarProvider, Sidebar, SidebarInset */}
             <div className="flex min-h-screen flex-col"> {/* Basic structure */}
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
