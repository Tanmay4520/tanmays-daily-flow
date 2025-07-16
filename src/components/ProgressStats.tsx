import { TrendingUp, Target, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressStatsProps {
  totalHabits: number;
  completedHabits: number;
  currentStreak: number;
  weeklyCompletion: number;
}

export function ProgressStats({ 
  totalHabits, 
  completedHabits, 
  currentStreak, 
  weeklyCompletion 
}: ProgressStatsProps) {
  const completionPercentage = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;
  
  const stats = [
    {
      title: "Today's Progress",
      value: `${completedHabits}/${totalHabits}`,
      percentage: `${Math.round(completionPercentage)}%`,
      icon: CheckCircle,
      color: "text-success"
    },
    {
      title: "Current Streak",
      value: currentStreak.toString(),
      percentage: "days",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      title: "Weekly Average",
      value: `${Math.round(weeklyCompletion)}%`,
      percentage: "completion",
      icon: Target,
      color: "text-accent"
    },
    {
      title: "Time Saved",
      value: "2.5",
      percentage: "hours",
      icon: Clock,
      color: "text-muted-foreground"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.percentage}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}