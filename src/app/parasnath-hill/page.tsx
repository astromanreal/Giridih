import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mountain, Zap, Leaf, MapPin, Calendar, TrendingUp, Flag, Info, Map, Image as ImageIcon, ArrowRight } from 'lucide-react'; // Added more icons
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function ParasnathHillPage() {
  // Define the gallery images with the new URLs
  const galleryImages = [
    { id: 1, src: 'https://t3.ftcdn.net/jpg/02/86/70/92/240_F_286709271_eqrdMRV1mju29M3FhRrP2j0P5nMyLeOp.jpg', alt: 'Parasnath Temple View 1' },
    { id: 2, src: 'https://t3.ftcdn.net/jpg/02/86/70/90/240_F_286709081_4xVbIHRkdvz3l3aFK6vvWfkgbRQXvVjp.jpg', alt: 'Parasnath Temple View 2' },
    { id: 3, src: 'https://t4.ftcdn.net/jpg/03/84/67/31/240_F_384673140_ZseAsxjhqtYrqqiFLzS4FfDVL0DdwqoM.jpg', alt: 'Parasnath Hill Pathway' },
    // You can add more images here if needed, or repeat/use placeholders
    // { id: 4, src: 'https://picsum.photos/seed/parasnath-gallery4/400/300', alt: 'Parasnath Gallery Image 4' },
  ];


  return (
    <div className="space-y-10"> {/* Increased spacing */}
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-xl"> {/* Increased height and shadow */}
        <Image
          src="https://t3.ftcdn.net/jpg/06/44/90/42/240_F_644904289_NbXKTKISNlcpn6ttB2P3upo1IIPqpeKE.jpg" // Updated image URL
          alt="Parasnath Hill Peak"
          layout="fill"
          objectFit="cover"
          quality={85} // Slightly higher quality
          priority // Prioritize loading hero image
          className="absolute inset-0 z-0 brightness-60" // Slightly reduced brightness for contrast
          data-ai-hint="mountain peak temple india"
        />
         {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 z-0"></div>
        <div className="relative z-10 p-6 max-w-4xl space-y-4 bg-black/40 rounded-md backdrop-blur-sm"> {/* Added backdrop blur */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex items-center justify-center gap-3"> {/* Increased gap */}
            <Mountain className="h-10 w-10 md:h-12 md:w-12" /> Parasnath Hill (Shikharji)
          </h1>
          {/* Changed text color for better visibility */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Jharkhand's highest summit and the paramount pilgrimage destination for the Jain faith, revered as the site of Moksha for twenty Tirthankaras.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid md:grid-cols-5 gap-8 items-start">

         {/* Left Column (Main Content) */}
        <div className="md:col-span-3 space-y-8">
          {/* Religious Significance Card */}
          <Card className="shadow-lg border-primary/20"> {/* Subtle border color */}
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                 {/* Using a generic 'Zap' or potentially 'BookOpen' for scriptures */}
                 <Zap className="h-6 w-6" /> Religious Significance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 text-base leading-relaxed"> {/* Increased base text size and line height */}
              <p>
                Parasnath Hill, known reverently as Shikharji, holds unparalleled importance in Jainism. It is venerated as the sacred site where <strong>20 out of the 24 Tirthankaras</strong> (Jain spiritual guides), along with countless other monks, attained Moksha (liberation from the cycle of birth and death). This makes it the most significant pilgrimage destination ('Tirtha') for Jains globally.
              </p>
              <p>
                The summit complex houses the main temple and is surrounded by numerous subsidiary shrines called 'Tonks', each commemorating a Tirthankara who achieved nirvana here. The pilgrimage traditionally involves a strenuous trek up the hill, often performed barefoot by devotees as a mark of respect and penance, culminating in prayers and circumambulation of the sacred sites.
              </p>
            </CardContent>
          </Card>

           {/* Trek and Environment Card */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" /> The Trek and Environment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 text-base leading-relaxed">
              <div className="grid md:grid-cols-3 gap-4 items-center">
                 <div className="md:col-span-2 space-y-4">
                    <p>
                      The pilgrimage trek starts from Madhuban, the base town nestled at the foothills. The main trail spans approximately <strong>9 kilometers one way</strong>, ascending steeply through the verdant forests of the Parasnath Wildlife Sanctuary. This sanctuary protects a rich biodiversity of flora and fauna endemic to the Chota Nagpur Plateau.
                    </p>
                    <p>
                      The journey offers spectacular panoramic views and a tranquil atmosphere, considered both physically challenging and spiritually uplifting. For pilgrims needing assistance, 'doli' or 'palki' (palanquin) services are available. The natural beauty and serenity of the environment greatly enhance the pilgrimage experience.
                    </p>
                 </div>
                  <div className="relative h-48 w-full md:col-span-1 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://picsum.photos/seed/parasnath-trail/400/300"
                        alt="Trekking trail on Parasnath Hill"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="mountain trail forest india"
                      />
                  </div>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Right Column (Sidebar Info) */}
        <div className="md:col-span-2 space-y-6 sticky top-20"> {/* Make sidebar sticky */}
           {/* Quick Facts Card */}
           <Card className="bg-muted/50 border-border">
             <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2"><Info className="h-5 w-5 text-secondary"/> Quick Facts</CardTitle>
             </CardHeader>
             <CardContent className="space-y-3">
                {[
                  { icon: TrendingUp, label: "Elevation", value: "~1,350 m (4,430 ft)" },
                  { icon: MapPin, label: "Location", value: "Giridih District, Jharkhand" },
                  { icon: Flag, label: "Base Town", value: "Madhuban" },
                  { icon: Calendar, label: "Best Season", value: "October - March" },
                  { icon: Zap, label: "Primary Significance", value: "Jain Moksha Sthal" },
                ].map(fact => (
                   <div key={fact.label} className="flex items-center gap-3 text-sm p-2 bg-background rounded-md shadow-sm">
                       <fact.icon className="h-4 w-4 text-secondary shrink-0" />
                       <span className="font-medium flex-1">{fact.label}:</span>
                       <span className="text-muted-foreground text-right">{fact.value}</span>
                   </div>
                ))}
             </CardContent>
           </Card>

           {/* Nearby Attractions Card */}
            <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2"><Map className="h-5 w-5 text-secondary"/> Nearby Attractions</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              {/* Replace # with actual links later */}
               <Link href="/explore#usri-falls" className="flex items-center gap-2 hover:text-primary hover:underline">
                   <MapPin className="h-4 w-4"/> Usri Falls
               </Link>
               <Link href="/explore#khandoli-dam" className="flex items-center gap-2 hover:text-primary hover:underline">
                   <MapPin className="h-4 w-4"/> Khandoli Dam & Park
               </Link>
               <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Madhuban Jain Temples</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

       {/* Gallery Preview Section */}
       <section className="text-center space-y-6">
          <h3 className="text-2xl font-semibold flex items-center justify-center gap-2">
             <ImageIcon className="h-6 w-6 text-primary"/> Gallery Preview
          </h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto"> {/* Adjusted grid columns */}
             {galleryImages.map(image => (
                <div key={image.id} className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-border transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"> {/* Added border and hover effects */}
                    <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                     data-ai-hint="jain temple mountain pilgrimage india"
                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Adjusted sizes for 3 columns
                    />
                     {/* Subtle overlay on hover */}
                     <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         {/* Optional: Add icon or text on hover */}
                     </div>
                </div>
             ))}
           </div>
            {/* Link to Instagram profile */}
             <Button asChild variant="outline" size="lg">
                 <Link href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer">
                     View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
            </Button>
      </section>
    </div>
  );
}
