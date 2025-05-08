
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Hammer, Tractor, Palette } from 'lucide-react'; // Hammer for mining/industry, Tractor for agriculture, Palette for crafts

export default function LocalEconomyCraftsPage() {
  return (
    <div className="space-y-8">
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://images.pexels.com/photos/2892269/pexels-photo-2892269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Updated hero image URL
          alt="Local market or craft workshop in Giridih"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 brightness-60"
           data-ai-hint="indian market vegetables spices" // Updated data-ai-hint
        />
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/50 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-2">
            <ShoppingBag className="h-10 w-10" /> Local Economy & Crafts
          </h1>
          <p className="text-lg md:text-xl text-white">
            Exploring the industries, agriculture, and traditional crafts that sustain Giridih.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Hammer /> Mining and Industry</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Giridih has historically been known for its rich mineral resources, particularly high-quality mica and coal. The mica industry, though diminished from its peak, played a significant role in the region's economy. Coal mining continues to be a major industrial activity, with several collieries operated by Central Coalfields Limited (CCL).
              </p>
              <p>
                Besides mining, small-scale industries related to mineral processing, engineering workshops, and manufacturing exist. The industrial landscape is evolving, with potential for growth in other sectors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Tractor /> Agriculture</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Agriculture remains the backbone of Giridih's rural economy, employing a large portion of the population. The primary crop is paddy (rice), grown during the monsoon season. Other important crops include maize, pulses (like arhar and gram), oilseeds, and vegetables.
              </p>
              <p>
                Farming practices are often traditional, relying heavily on monsoon rains. Irrigation facilities are limited but expanding. Livestock rearing, including cattle, goats, and poultry, also contributes significantly to rural livelihoods.
              </p>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Palette /> Local Crafts and Handlooms</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Giridih possesses a tradition of local crafts, though many are facing challenges. Handloom weaving, particularly of cotton textiles, exists in some clusters. Bamboo craft is common, producing items for daily use like baskets and mats.
              </p>
              <p>
                Pottery, simple metalwork, and wood carving are other traditional crafts practiced in villages. Efforts to support and revive these crafts are crucial for preserving cultural heritage and providing alternative livelihoods. Local markets (haats) are important centers for trade in both agricultural produce and crafts.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Economic Pillars</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong>Mining:</strong> Coal, Mica (historically significant)</p>
              <p><strong>Agriculture:</strong> Rice, Maize, Pulses, Vegetables</p>
              <p><strong>Forestry:</strong> Non-timber forest products (Mahua, Kendu leaves)</p>
              <p><strong>Small Scale Industries:</strong> Mineral-based, Engineering</p>
              <p><strong>Handicrafts:</strong> Weaving, Bamboo work, Pottery</p>
            </CardContent>
          </Card>
           <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://cdn.pixabay.com/photo/2022/08/01/07/36/embroidery-7357531_1280.jpg" // Updated down first image link
                 alt="Embroidery craft in Giridih" // Updated alt
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="embroidery textile art india" // Updated data-ai-hint
                />
            </div>
             <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://cdn.pixabay.com/photo/2022/06/08/15/23/ceramics-7250708_1280.jpg" // Updated down second image link
                 alt="Ceramics and pottery" // Updated alt
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="ceramics pottery craft india" // Updated data-ai-hint
                />
            </div>
        </div>
      </section>
    </div>
  );
}
