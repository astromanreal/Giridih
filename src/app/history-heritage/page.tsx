
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, Landmark, MapPin } from 'lucide-react'; // ScrollText for history, Landmark for heritage sites, MapPin for locations

export default function HistoryHeritagePage() {
  return (
    <div className="space-y-8">
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://cdn.pixabay.com/photo/2020/03/17/11/29/temple-4939831_1280.jpg" // Updated hero image
          alt="Historical site or monument in Giridih"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 brightness-60"
           data-ai-hint="old temple historical monument india" // Updated hint
        />
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/50 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-2">
            <ScrollText className="h-10 w-10" /> History & Heritage
          </h1>
          <p className="text-lg md:text-xl text-white"> {/* Ensure text is visible */}
            Uncovering the stories and landmarks that shape Giridih's past.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><ScrollText /> Historical Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Giridih's history is intertwined with the broader history of the Chota Nagpur Plateau. The region has been inhabited by tribal communities for centuries. It later came under the influence of various regional powers and eventually the British Raj.
              </p>
              <p>
                The discovery of coal and mica in the 19th century significantly impacted Giridih's development, attracting migrants and leading to industrial growth. Giridih town itself grew as an administrative and commercial center during the British period. The district was formally created in 1972, carved out of Hazaribagh district.
              </p>
               <p>
                The area also played a role in India's freedom struggle, with local participation in various movements. The presence of Parasnath Hill has made it a significant religious center for Jains for millennia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Landmark /> Key Heritage Sites</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p><strong>Parasnath Hill (Shikharji):</strong> An ancient and paramount Jain pilgrimage site, dotted with numerous temples (Tonks).</p>
              <p><strong>Harihar Dham:</strong> Famous for its massive Shiva Lingam, located near Bagodar.</p>
              <p><strong>Jharkhand Dham (Hariharnath):</strong> Another important Shiva temple, sometimes confused with Harihar Dham, located near Dhanwar.</p>
              <p><strong>Langta Baba Samadhi Sthal:</strong> A revered site in Kharagdiha.</p>
               <p><strong>Remnants of British Era Architecture:</strong> Some older buildings in Giridih town reflect colonial architectural styles, particularly around the railway station and administrative areas.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Points of Interest</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div className="flex items-start gap-2">
                 <MapPin className="h-4 w-4 mt-1 shrink-0 text-secondary" />
                 <span>Shikharji Temples, Parasnath Hill</span>
              </div>
               <div className="flex items-start gap-2">
                 <MapPin className="h-4 w-4 mt-1 shrink-0 text-secondary" />
                 <span>Harihar Dham, Bagodar</span>
              </div>
               <div className="flex items-start gap-2">
                 <MapPin className="h-4 w-4 mt-1 shrink-0 text-secondary" />
                 <span>Jharkhand Dham, near Dhanwar</span>
              </div>
              <div className="flex items-start gap-2">
                 <MapPin className="h-4 w-4 mt-1 shrink-0 text-secondary" />
                 <span>Langta Baba Samadhi, Kharagdiha</span>
              </div>
               {/* Add more */}
            </CardContent>
          </Card>
           <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://cdn.pixabay.com/photo/2020/05/25/07/39/ancient-5217313_1280.jpg" // Updated down first image
                 alt="Ancient ruins in Giridih region" // Updated alt
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="ancient ruins india stone art" // Updated hint
                />
            </div>
             <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://cdn.pixabay.com/photo/2013/06/23/10/19/thanjavur-140696_1280.jpg" // Updated down second image
                 alt="Historical temple architecture" // Updated alt
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="indian temple architecture heritage" // Updated hint
                />
            </div>
        </div>
      </section>
    </div>
  );
}
