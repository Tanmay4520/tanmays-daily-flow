import { Plus, RefreshCw, BarChart3, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickActions() {
  const actions = [
    {
      title: "Add New Habit",
      description: "Create a new daily habit",
      icon: Plus,
      variant: "productive" as const,
      action: () => console.log("Add habit")
    },
    {
      title: "Reset Day",
      description: "Start fresh for today",
      icon: RefreshCw,
      variant: "outline" as const,
      action: () => console.log("Reset day")
    },
    {
      title: "View Analytics",
      description: "See your progress trends",
      icon: BarChart3,
      variant: "soft" as const,
      action: () => console.log("View analytics")
    },
    {
      title: "Schedule Review",
      description: "Plan tomorrow's routine",
      icon: Calendar,
      variant: "secondary" as const,
      action: () => console.log("Schedule review")
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="w-full justify-start h-auto p-4"
            onClick={action.action}
          >
            <action.icon className="h-5 w-5 mr-3 shrink-0" />
            <div className="text-left">
              <div className="font-medium">{action.title}</div>
              <div className="text-sm opacity-80">{action.description}</div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}