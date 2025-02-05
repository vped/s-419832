import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const platforms = [
  {
    name: "Twitter",
    followers: "12.5K",
    engagement: "3.2%",
    posts: 245,
  },
  {
    name: "Instagram",
    followers: "24.8K",
    engagement: "4.7%",
    posts: 189,
  },
  {
    name: "LinkedIn",
    followers: "8.3K",
    engagement: "2.9%",
    posts: 156,
  },
];

export function PlatformMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
              <span className="font-medium">{platform.name}</span>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-600">{platform.followers} followers</span>
                <span className="text-secondary">{platform.engagement} eng.</span>
                <span className="text-gray-600">{platform.posts} posts</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}