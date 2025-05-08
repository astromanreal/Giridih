
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, Home } from 'lucide-react'; // GraduationCap for education, Home for rural life

export default function PeopleLifestylePage() {
  return (
    <div className="space-y-8">
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://picsum.photos/seed/giridih-people/1600/900"
          alt="People of Giridih"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 brightness-60"
           data-ai-hint="indian village people community gathering"
        />
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/50 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-2">
            <Users className="h-10 w-10" /> People & Lifestyle
          </h1>
          <p className="text-lg md:text-xl text-white">
            Understanding the communities, education, and daily life in Giridih.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Users /> Communities and Demographics</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Giridih district is characterized by a diverse population mix. Significant tribal communities, including Santhals, Mundas, and Oraons, reside here, maintaining their distinct languages and cultural practices. They often live in close-knit village communities.
              </p>
              <p>
                Alongside tribal groups, various non-tribal communities contribute to the social fabric. The population is predominantly rural, with agriculture and related activities forming the mainstay of livelihoods for many. Urban centers like Giridih town are hubs of administration, commerce, and education.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Home /> Rural Life</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Life in rural Giridih often revolves around the agricultural cycle and community traditions. Villages typically consist of houses made from mud, bamboo, and tiles or thatch. Access to basic amenities like electricity, clean water, and healthcare varies across the district but has been improving.
              </p>
              <p>
                Weekly markets (haats) play a crucial social and economic role, serving as places for trade, interaction, and information exchange. Community bonds are generally strong, with collective participation in festivals and social events.
              </p>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><GraduationCap /> Education and Development</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Education infrastructure in Giridih includes government and private schools, colleges, and vocational training centers. Literacy rates have been steadily improving, although challenges remain, particularly in remote rural and tribal areas.
              </p>
              <p>
                Various government and non-governmental organizations are working on development initiatives focused on improving education, healthcare, livelihoods, and infrastructure. Empowering local communities, especially women and tribal groups, is a key aspect of ongoing development efforts.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lifestyle Aspects</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Predominantly agrarian society</p>
              <p>Strong community ties</p>
              <p>Importance of local markets (haats)</p>
              <p>Blend of traditional and modern influences</p>
              <p>Focus on improving access to education and healthcare</p>
            </CardContent>
          </Card>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://picsum.photos/seed/giridih-village/600/338"
                 alt="Typical village scene in Giridih"
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="indian village rural house mud hut"
                />
            </div>
             <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://picsum.photos/seed/giridih-school/600/338"
                 alt="Children in a school in Giridih"
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="indian school children classroom rural"
                />
            </div>
        </div>
      </section>
    </div>
  );
}
