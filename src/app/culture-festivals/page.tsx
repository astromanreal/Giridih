
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, Users, Mic2, Languages } from 'lucide-react'; // Mic2 for music/dance, Languages for linguistic diversity

export default function CultureFestivalsPage() {
  return (
    <div className="space-y-8">
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://cdn.pixabay.com/photo/2024/10/21/15/04/ai-generated-9137511_1280.jpg"
          alt="Vibrant cultural festival in Giridih"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 brightness-60"
           data-ai-hint="indian festival people colors"
        />
        <div className="relative z-10 p-6 max-w-3xl space-y-4 bg-black/50 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-2">
            <Landmark className="h-10 w-10" /> Culture & Festivals
          </h1>
          <p className="text-lg md:text-xl text-white">
            Celebrating the rich traditions, languages, and vibrant festivals of Giridih.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Users /> Traditions and Communities</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Giridih is home to a diverse population, including various tribal communities like Santhals, Mundas, and Oraons, alongside non-tribal groups. Each community contributes unique customs, social structures, and traditions to the cultural tapestry of the district.
              </p>
              <p>
                Traditional practices related to agriculture, life-cycle events (birth, marriage, death), and community governance are deeply ingrained. Folk art, music, and dance forms are integral parts of cultural expression, often performed during festivals and social gatherings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Mic2 /> Music and Dance</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Folk music and dance are vibrant aspects of Giridih's culture. Traditional instruments like the Mandar (drum), flute, and various string instruments accompany lively community dances.
              </p>
              <p>
                Popular tribal dance forms include Santhali dance, Paika (martial dance), and Chhau (masked dance, more prominent in nearby regions but influential). These performances often narrate stories, celebrate nature, or mark important occasions.
              </p>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Languages /> Languages Spoken</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                The linguistic landscape of Giridih is diverse. Hindi serves as the primary lingua franca. Regional languages like Khortha and Magahi are widely spoken.
              </p>
              <p>
                Tribal communities speak their own languages, such as Santhali (which has its own script, Ol Chiki), Mundari, and Kurukh (Oraon). This linguistic diversity reflects the rich multicultural heritage of the district.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Major Festivals</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong>Sarhul:</strong> Major tribal festival celebrating nature and the Sal tree.</p>
              <p><strong>Karma:</strong> Festival seeking blessings for prosperity and fertility.</p>
              <p><strong>Sohrai:</strong> Cattle festival celebrated after harvest.</p>
              <p><strong>Makar Sankranti (Tusu Parab):</strong> Harvest festival with fairs and community feasting.</p>
              <p><strong>Holi, Diwali, Durga Puja:</strong> Widely celebrated pan-Indian festivals.</p>
              <p><strong>Jain Festivals:</strong> Especially prominent around Parasnath Hill (Shikharji).</p>
            </CardContent>
          </Card>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://cdn.pixabay.com/photo/2021/02/03/09/56/woman-5977329_1280.jpg"
                 alt="Tribal dance performance in Giridih"
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="indian woman traditional dance"
                />
            </div>
             <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                 src="https://cdn.pixabay.com/photo/2023/09/12/11/02/ai-generated-8248592_1280.jpg"
                 alt="Traditional musicians in Giridih"
                 layout="fill"
                 objectFit="cover"
                 data-ai-hint="indian musicians drums festival"
                />
            </div>
        </div>
      </section>
    </div>
  );
}
