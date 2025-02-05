import { TrendingUp, Users, MessageSquare, BarChart } from "lucide-react";
import { MetricsCard } from "./MetricsCard";
import { EngagementChart } from "./EngagementChart";
import { ScheduledPosts } from "./ScheduledPosts";
import { PlatformMetrics } from "./PlatformMetrics";

export function AnalyticsOverview() {
  return (
    <div className="space-y-6 p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricsCard
          title="Total Followers"
          value="45.6K"
          change="+2.5%"
          icon={<Users className="h-4 w-4 text-primary" />}
        />
        <MetricsCard
          title="Engagement Rate"
          value="3.6%"
          change="+0.8%"
          icon={<TrendingUp className="h-4 w-4 text-secondary" />}
        />
        <MetricsCard
          title="Total Posts"
          value="590"
          change="+12"
          icon={<MessageSquare className="h-4 w-4 text-primary" />}
        />
        <MetricsCard
          title="Avg. Reach"
          value="12.8K"
          change="-0.4%"
          icon={<BarChart className="h-4 w-4 text-warning" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <EngagementChart />
        <ScheduledPosts />
        <PlatformMetrics />
      </div>
    </div>
  );
}