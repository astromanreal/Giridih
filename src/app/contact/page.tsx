
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Twitter, Instagram, UserCircle, PhoneCall, Shield, Baby, Heart, HelpCircle, Github } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const helplineNumbers = [
  { label: 'Ambulance Helpline', number: '06532-226180', icon: PhoneCall },
  { label: 'NIC Service Helpline', number: '1800111555', icon: HelpCircle },
  { label: 'Women Helpline', number: '228239', icon: UserCircle }, // Consider a more specific icon if available
  { label: 'Police Helpline', number: '100', icon: Shield },
  { label: 'Child Helpline', number: '1098', icon: Baby },
  { label: 'Blood Helpline', number: '06532 223304', icon: Heart },
  { label: 'Jan Samvad', number: '181', icon: PhoneCall }, // Or Users icon
];


export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-start pt-10 space-y-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="items-center text-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="https://picsum.photos/seed/contact-person/200/200" // Replace with actual image URL
              alt="Contact Person"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-primary"
              data-ai-hint="profile picture person"
            />
          </div>
          <CardTitle className="text-2xl flex items-center gap-2">
             <UserCircle className="h-6 w-6 text-primary" /> Contact Information
          </CardTitle>
           {/* Optional: Add a short bio or title here */}
           {/* <p className="text-muted-foreground">Web Developer & Explorer</p> */}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            <Mail className="h-5 w-5 text-secondary shrink-0" />
            <a href="mailto:astroman6569@gmail.com" className="text-sm hover:underline">
              astroman6569@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            <Phone className="h-5 w-5 text-secondary shrink-0" />
            <a href="tel:+918102116569" className="text-sm hover:underline">
              +91 81021 16569
            </a>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            <Instagram className="h-5 w-5 text-secondary shrink-0" />
            <Link href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              @srishikharji
            </Link>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            <Twitter className="h-5 w-5 text-secondary shrink-0" />
            <Link href="https://x.com/Sathyamsarthak" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              @Sathyamsarthak
            </Link>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            <Github className="h-5 w-5 text-secondary shrink-0" />
            <Link href="https://github.com/astromanreal" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              @astromanreal
            </Link>
          </div>
        </CardContent>
      </Card>

       {/* Helpline Section */}
       <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
             <CardTitle className="text-xl flex items-center gap-2 text-center justify-center">
                <PhoneCall className="h-5 w-5 text-primary" /> Giridih Helpline Numbers
             </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
             {helplineNumbers.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 bg-muted/50 rounded-md text-sm">
                   <item.icon className="h-5 w-5 text-secondary shrink-0" />
                   <span className="font-medium flex-1">{item.label}:</span>
                   <a href={`tel:${item.number.replace(/\s+/g, '')}`} className="text-muted-foreground hover:underline">
                      {item.number}
                   </a>
                </div>
             ))}
          </CardContent>
       </Card>
    </div>
  );
}
