
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryHorizontalEnd } from 'lucide-react';

// Updated gallery images with new links
const galleryImages = [
  { id: 'img1', src: 'https://cdn.pixabay.com/photo/2024/01/25/03/16/capuchin-monkey-8530884_1280.jpg', alt: 'Capuchin monkey in a tree', dataAiHint: 'monkey wildlife animal', category: 'Wildlife' },
  { id: 'img2', src: 'https://cdn.pixabay.com/photo/2019/05/06/19/13/green-4183977_1280.jpg', alt: 'Lush green forest path', dataAiHint: 'forest path nature', category: 'Nature' },
  { id: 'img3', src: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg', alt: 'Elephant walking in the wild', dataAiHint: 'elephant wildlife animal', category: 'Wildlife' },
  { id: 'img4', src: 'https://cdn.pixabay.com/photo/2019/08/08/13/52/elephant-4393034_1280.jpg', alt: 'Close-up of an elephant', dataAiHint: 'elephant animal face', category: 'Wildlife' },
  { id: 'img5', src: 'https://cdn.pixabay.com/photo/2020/08/28/12/43/forest-5524525_1280.jpg', alt: 'Sunlight filtering through a dense forest', dataAiHint: 'forest sunlight trees', category: 'Nature' },
  { id: 'img6', src: 'https://cdn.pixabay.com/photo/2016/07/13/10/59/waterfall-1514145_1280.jpg', alt: 'Majestic waterfall cascading down rocks', dataAiHint: 'waterfall nature rocks', category: 'Nature' },
  { id: 'img7', src: 'https://cdn.pixabay.com/photo/2016/11/21/15/19/dirt-road-1845933_1280.jpg', alt: 'Dirt road winding through a forest', dataAiHint: 'road forest path', category: 'Nature' },
  { id: 'img8', src: 'https://cdn.pixabay.com/photo/2020/06/14/15/55/landscape-5298395_1280.jpg', alt: 'Panoramic landscape view with mountains', dataAiHint: 'landscape mountains nature', category: 'Nature' },
  { id: 'img9', src: 'https://cdn.pixabay.com/photo/2016/07/28/08/50/sunbeams-1547273_1280.jpg', alt: 'Sunbeams shining through forest canopy', dataAiHint: 'sunbeams forest light', category: 'Nature' },
  { id: 'img10', src: 'https://cdn.pixabay.com/photo/2020/01/01/06/17/off-road-4733034_1280.jpg', alt: 'Off-road vehicle on a trail', dataAiHint: 'offroad adventure vehicle', category: 'Adventure' },
  { id: 'img11', src: 'https://cdn.pixabay.com/photo/2020/12/02/09/50/man-5796871_1280.jpg', alt: 'Man standing on a viewpoint looking at landscape', dataAiHint: 'man landscape viewpoint', category: 'People' },
  { id: 'img12', src: 'https://cdn.pixabay.com/photo/2017/03/20/08/40/monkey-2158511_1280.jpg', alt: 'Monkey sitting on a branch', dataAiHint: 'monkey animal wildlife', category: 'Wildlife' },
  { id: 'img13', src: 'https://cdn.pixabay.com/photo/2019/12/13/07/45/landscape-4692446_1280.jpg', alt: 'Serene landscape with hills and water', dataAiHint: 'landscape hills water nature', category: 'Nature' },
];

// Basic filtering/tab functionality could be added later

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
          <GalleryHorizontalEnd className="h-8 w-8 text-primary" /> Visual Gallery
        </h1>
        <p className="text-muted-foreground mt-2">
          A glimpse into the beauty, culture, and life of Giridih District.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden group relative shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Wrap image in a container to control aspect ratio */}
            <div className="aspect-video w-full relative">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.dataAiHint}
                 sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Optimize image loading
              />
               {/* Optional: Overlay with image category or title on hover */}
               <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm truncate">{image.alt}</p>
                   {/* <span className="text-xs text-white/80 bg-black/50 px-1.5 py-0.5 rounded">{image.category}</span> */}
               </div>
            </div>
             {/* Could add a simple CardContent below if needed, e.g., for captions */}
             {/* <CardContent className="p-2">
                 <p className="text-sm text-muted-foreground truncate">{image.alt}</p>
             </CardContent> */}
          </Card>
        ))}
      </div>

      {/* Placeholder for Load More or Pagination */}
      {/* <div className="text-center mt-8">
        <Button variant="outline">Load More</Button>
      </div> */}
    </div>
  );
}
