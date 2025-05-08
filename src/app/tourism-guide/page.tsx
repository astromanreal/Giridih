
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, Utensils, Bed, Bike, Info } from 'lucide-react'; // Bike for things to do, Info for general info

export default function TourismGuidePage() {
  return (
    <div className="space-y-8">
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://cdn.pixabay.com/photo/2019/04/24/14/03/map-4152197_1280.jpg" // Updated hero image URL
          alt="Tourist map or scenic spot in Giridih"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 brightness-60"
           data-ai-hint="travel map compass adventure india"
        />
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/50 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-2">
            <Map className="h-10 w-10" /> Tourism Guide
          </h1>
          <p className="text-lg md:text-xl text-white">
            Plan your visit to Giridih: Places to see, things to do, stay, and eat.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Places to Visit */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2"><MapPin className="text-primary" /> Places to Visit</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
             <div className="relative h-40 w-full mb-3 rounded overflow-hidden">
                <Image src="https://cdn.pixabay.com/photo/2017/12/11/21/17/bridge-3013297_1280.jpg" layout="fill" objectFit="cover" alt="Parasnath Hill view" data-ai-hint="mountain temple view bridge"/>
             </div>
            <p><strong>Parasnath Hill (Shikharji):</strong> Prime attraction for pilgrimage and trekking.</p>
            <p><strong>Usri Falls:</strong> Picturesque waterfall, popular picnic spot.</p>
            <p><strong>Khandoli Dam & Park:</strong> Boating, rock climbing, toy train, watchtower.</p>
            <p><strong>Harihar Dham & Jharkhand Dham:</strong> Important religious sites.</p>
            <p><strong>Madhuban:</strong> Base town for Shikharji, numerous Jain temples and dharamshalas.</p>
             {/* Link to dedicated pages or map */}
          </CardContent>
        </Card>

        {/* Things to Do */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2"><Bike className="text-primary" /> Things to Do</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <div className="relative h-40 w-full mb-3 rounded overflow-hidden">
                <Image src="https://cdn.pixabay.com/photo/2020/03/17/08/20/silhouette-4939371_1280.jpg" layout="fill" objectFit="cover" alt="Trekking activity" data-ai-hint="trekking hiking mountains silhouette"/>
             </div>
            <p><strong>Pilgrimage & Trekking:</strong> Primarily at Parasnath Hill.</p>
            <p><strong>Nature Walks & Birdwatching:</strong> In forest areas and around Khandoli.</p>
            <p><strong>Boating & Water Sports:</strong> Available at Khandoli Dam.</p>
            <p><strong>Rock Climbing:</strong> Offered at Khandoli Park.</p>
            <p><strong>Explore Local Markets:</strong> Experience local life and find handicrafts.</p>
            <p><strong>Attend Local Festivals:</strong> If your visit coincides with one.</p>
          </CardContent>
        </Card>

        {/* Where to Stay */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2"><Bed className="text-primary" /> Where to Stay</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
             <div className="relative h-40 w-full mb-3 rounded overflow-hidden">
                <Image src="https://cdn.pixabay.com/photo/2016/04/15/11/48/hotel-1330850_1280.jpg" layout="fill" objectFit="cover" alt="Accommodation view" data-ai-hint="hotel room comfortable bed"/>
             </div>
            <p><strong>Giridih Town:</strong> Offers a range of hotels and guesthouses catering to different budgets.</p>
            <p><strong>Madhuban:</strong> Numerous Jain dharamshalas (pilgrim lodges) and some guesthouses, primarily for pilgrims.</p>
            <p><strong>Khandoli Tourist Complex:</strong> Government-run accommodation near the dam.</p>
            <p>Booking in advance is recommended, especially during peak pilgrimage seasons.</p>
          </CardContent>
        </Card>

        {/* Local Cuisine */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2"><Utensils className="text-primary" /> Local Cuisine</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
             <div className="relative h-40 w-full mb-3 rounded overflow-hidden">
                <Image src="https://picsum.photos/seed/jharkhand-food/400/200" layout="fill" objectFit="cover" alt="Local Jharkhandi food" data-ai-hint="indian food thali rice curry"/>
             </div>
            <p>Jharkhandi cuisine is simple yet flavorful, often featuring rice, lentils (dal), vegetables, and greens (saag).</p>
            <p><strong>Try Local Specialties:</strong> Dhuska (fried rice flour snack), Litti Chokha (dough balls with roasted vegetable mash - popular Bihar/Jharkhand dish), Pitha (rice flour dumplings), various preparations using local greens.</p>
            <p>In Madhuban, strictly vegetarian Jain food is readily available.</p>
          </CardContent>
        </Card>

        {/* Travel Tips */}
         <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2"><Info className="text-primary" /> Travel Tips</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p><strong>Best Time to Visit:</strong> October to March offers pleasant weather. Summers can be very hot, and monsoons (July-September) bring heavy rain.</p>
            <p><strong>Getting There:</strong> Giridih has a railway station connecting it to major cities. The nearest major airport is in Ranchi (RNC), about 160 km away.</p>
            <p><strong>Getting Around:</strong> Auto-rickshaws and taxis are available in Giridih town. For exploring further, hiring a vehicle is recommended.</p>
            <p><strong>Connectivity:</strong> Mobile networks are generally available in towns but can be patchy in remote areas.</p>
            <p><strong>Respect Local Customs:</strong> Dress modestly, especially when visiting religious sites. Seek permission before photographing people.</p>
          </CardContent>
        </Card>

      </section>
    </div>
  );
}

// Placeholder MapPin Icon if not imported
const MapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

