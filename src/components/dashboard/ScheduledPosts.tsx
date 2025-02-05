import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const scheduledPosts = [
  {
    id: 1,
    platform: "Twitter",
    content: "Exciting news coming soon! Stay tuned...",
    date: "2024-04-20 14:30",
  },
  {
    id: 2,
    platform: "Instagram",
    content: "Behind the scenes look at our latest project",
    date: "2024-04-21 10:00",
  },
  {
    id: 3,
    platform: "LinkedIn",
    content: "Join us for an exclusive webinar on social media strategy",
    date: "2024-04-22 15:00",
  },
];

export function ScheduledPosts() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Scheduled Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scheduledPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-primary">{post.platform}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <p className="text-sm text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}