import { Check, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Habit {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  streak: number;
  target: number;
  current: number;
  category: string;
  time?: string;
}

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: string) => void;
}

export function HabitCard({ habit, onToggle }: HabitCardProps) {
  const progressPercentage = (habit.current / habit.target) * 100;
  
  return (
    <Card className={`transition-all duration-200 ${habit.completed ? 'bg-success-soft border-success' : 'hover:shadow-md'}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{habit.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{habit.description}</p>
          </div>
          <Button
            variant={habit.completed ? "success" : "outline"}
            size="icon"
            onClick={() => onToggle(habit.id)}
            className="shrink-0"
          >
            <Check className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2 pt-2">
          <Badge variant="secondary" className="text-xs">
            {habit.category}
          </Badge>
          {habit.time && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {habit.time}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{habit.current}/{habit.target}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Target className="h-3 w-3" />
            <span>Streak: {habit.streak} days</span>
          </div>
          {habit.completed && (
            <Badge variant="outline" className="text-success bg-success-soft border-success">
              ✓ Done
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}