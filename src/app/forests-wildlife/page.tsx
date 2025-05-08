import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TreePine, PawPrint, Leaf } from 'lucide-react'; // Icons for forests, wildlife, flora

export default function ForestsWildlifePage() {
  return (
    <div className="space-y-8">
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://cdn.pixabay.com/photo/2025/01/31/17/03/fallow-deer-9372866_1280.jpg" // Updated hero image link
          alt="Fallow deer in a forest in Giridih"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 brightness-60"
           data-ai-hint="deer forest wildlife" // Updated data-ai-hint
        />
         {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 z-0"></div>
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/50 rounded-md backdrop-blur-sm"> {/* Added backdrop blur */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-2">
            <TreePine className="h-10 w-10" /> Forests & Wildlife
          </h1>
           {/* Changed text color to white for better visibility */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Exploring the rich biodiversity and verdant landscapes of Giridih.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><TreePine /> Forest Reserves</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Giridih district is blessed with significant forest cover, primarily comprising dry deciduous forests. Key tree species include Sal, Teak, Mahua, Palash, and Bamboo. These forests play a crucial role in the region's ecology and economy.
              </p>
              <p>
                Notable forest areas include the Parasnath Wildlife Sanctuary, surrounding the sacred hill, and various reserved and protected forest blocks spread across the district. Conservation efforts focus on preserving these vital ecosystems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><PawPrint /> Wildlife Diversity</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                The forests of Giridih are home to a variety of wildlife. While larger mammals like tigers are rare now, common sightings include leopards, sloth bears, wild boars, hyenas, jackals, and various species of deer like Sambar and Cheetal (Spotted Deer). Fallow deer can also be found.
              </p>
              <p>
                The region also boasts a rich avian population, with numerous resident and migratory birds. Reptiles like snakes and lizards are common, and the water bodies support diverse aquatic life. The Parasnath Wildlife Sanctuary is particularly important for biodiversity conservation.
              </p>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Leaf /> Flora and Medicinal Plants</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Beyond the dominant Sal trees, Giridih's forests contain a wealth of plant life. Many species have traditional medicinal uses known to local communities. Mahua flowers are collected for consumption and making local beverages, while Kendu leaves are used for rolling bidis.
              </p>
              <p>
                Efforts are underway to document and conserve this traditional knowledge and promote sustainable harvesting of non-timber forest products, providing livelihoods while protecting the environment.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Areas</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong>Parasnath Wildlife Sanctuary:</strong> Protecting the slopes of Parasnath Hill.</p>
              <p><strong>Khandoli Forest Area:</strong> Surrounding the popular Khandoli Dam.</p>
              <p><strong>Usri River Basin:</strong> Riparian forests along the river.</p>
               {/* Add more */}
            </CardContent>
          </Card>
          <Card>
             <CardHeader>
                <CardTitle>Conservation Challenges</CardTitle>
             </CardHeader>
             <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Habitat fragmentation</p>
                <p>Illegal logging and mining</p>
                <p>Human-wildlife conflict</p>
                <p>Forest fires (seasonal)</p>
             </CardContent>
          </Card>
           <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://cdn.pixabay.com/photo/2016/11/08/05/31/boys-1807545_1280.jpg" // Updated second image link
                 alt="Children playing near a river in Giridih"
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="children river india rural" // Updated data-ai-hint
                />
            </div>
        </div>
      </section>
    </div>
  );
}
