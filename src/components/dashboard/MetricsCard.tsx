import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
}

export function MetricsCard({ title, value, change, icon }: MetricsCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${change.startsWith('+') ? 'text-secondary' : 'text-warning'}`}>
            {change} from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}