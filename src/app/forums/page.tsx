
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, ListChecks, Edit, Users, Search } from 'lucide-react'; // Added Search icon

export default function ForumsPage() {
  return (
    <div className="space-y-8 flex flex-col items-center pt-10">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="items-center text-center">
          <MessageSquare className="h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-3xl font-bold">Community Forums</CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Connect, Share, and Discuss! (Coming Soon)
          </CardDescription>
        </CardHeader>
        <CardContent className="text-left space-y-6">
          <p className="text-muted-foreground text-center">
            We're building a space for the Giridih Explorer community to connect! Soon, you'll be able to join discussions, share your experiences, ask questions, and interact with fellow explorers and locals.
          </p>

          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="text-xl font-semibold text-center mb-3">Planned Features:</h3>

            {/* Organized Categories Feature */}
            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
              <ListChecks className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Organized Categories</h4>
                {/* Moved ul outside p tag */}
                <div className="text-sm text-muted-foreground">
                    <p className="mb-1">Browse topics organized into relevant categories like:</p>
                    <ul className="list-disc list-inside ml-4 text-xs">
                        <li>Travel Tips</li>
                        <li>Accommodation</li>
                        <li>Experiences & Stories</li>
                        <li>Places to Visit (Parasnath, Khandoli, etc.)</li>
                        <li>Culture & Festivals (Sohrai, Sarhul)</li>
                        <li>Food & Local Cuisine</li>
                        <li>General Discussion</li>
                    </ul>
                    <p className="mt-1">Easily find conversations related to your interests.</p>
                </div>
              </div>
            </div>

             {/* Create & Reply Feature */}
             <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
              <Edit className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Create & Reply to Topics</h4>
                <p className="text-sm text-muted-foreground">
                  Start new discussion threads within categories or reply to existing conversations. Share your insights, ask for advice, or recount your Giridih adventures.
                </p>
              </div>
            </div>

             {/* Community Interaction Feature */}
             <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
               <Users className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Community Interaction</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with others who share your interest in Giridih. See who's posting and engage in meaningful discussions. (User profiles and authentication will be required for posting).
                </p>
              </div>
            </div>

             {/* Search Functionality Feature */}
             <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-md">
               <Search className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Search Functionality</h4>
                <p className="text-sm text-muted-foreground">
                  Easily find topics or posts related to specific keywords or interests across all categories.
                </p>
              </div>
            </div>
          </div>

           <p className="text-center text-sm text-muted-foreground pt-4">
            Stay tuned for updates! We're excited to launch this community space soon.
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
