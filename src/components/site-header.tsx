'use client';

import Link from 'next/link';
import {
  Mountain,
  Settings,
  Mail,
  MoreVertical,
  BookOpen,
  MessageSquare,
  Compass, // Keep Compass for Explore
  TreePine,
  Landmark,
  ScrollText,
  ShoppingBag,
  Map as MapIconUI,
  Users,
  GalleryHorizontalEnd,
  Home as HomeIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { WeatherInfo } from '@/components/weather-info';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Define menu items for the dropdown (excluding Explore, Contact, Settings)
const dropdownMenuItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/parasnath-hill', label: 'Parasnath Hill', icon: Mountain },
  { href: '/forests-wildlife', label: 'Forests & Wildlife', icon: TreePine },
   { href: '/culture-festivals', label: 'Culture & Festivals', icon: Landmark },
   { href: '/history-heritage', label: 'History & Heritage', icon: ScrollText },
   { href: '/local-economy-crafts', label: 'Economy & Crafts', icon: ShoppingBag },
  { href: '/tourism-guide', label: 'Tourism Guide', icon: MapIconUI },
   { href: '/people-lifestyle', label: 'People & Lifestyle', icon: Users },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontalEnd },
  { href: '/blogs', label: 'Blogs & Stories', icon: BookOpen },
  { href: '/forums', label: 'Forums', icon: MessageSquare },
  // Explore, Contact, Settings moved to direct icons
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2 ml-4"> {/* Kept ml-4 */}
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Giridih Explorer</span>
        </Link>

        {/* Weather Info (Centered) */}
        <div className="flex flex-1 justify-center">
           <WeatherInfo />
        </div>

        {/* Right-aligned icons */}
        <div className="flex items-center justify-end space-x-1 md:space-x-2">

          {/* Direct Icons */}
          <Button variant="ghost" size="icon" asChild>
             <Link href="/explore" aria-label="Explore">
                 <Compass className="h-5 w-5" />
             </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/contact" aria-label="Contact">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings" aria-label="Settings">
              <Settings className="h-5 w-5" />
            </Link>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Dropdown Menu for Other Links */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="More options">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dropdownMenuItems.map((item) => (
                <Link key={item.href} href={item.href} passHref legacyBehavior>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <a>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
