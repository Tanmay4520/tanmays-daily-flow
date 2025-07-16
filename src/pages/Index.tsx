import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ProgressStats } from "@/components/ProgressStats";
import { HabitCard } from "@/components/HabitCard";
import { QuickActions } from "@/components/QuickActions";
import { MotivationalQuote } from "@/components/MotivationalQuote";
import { useToast } from "@/hooks/use-toast";

// Sample data - in a real app this would come from a database
const initialHabits = [
  {
    id: "1",
    title: "Morning Meditation",
    description: "10 minutes of mindfulness to start the day",
    completed: true,
    streak: 7,
    target: 1,
    current: 1,
    category: "Wellness",
    time: "7:00 AM"
  },
  {
    id: "2",
    title: "Exercise",
    description: "30 minutes of physical activity",
    completed: false,
    streak: 5,
    target: 1,
    current: 0,
    category: "Fitness",
    time: "8:00 AM"
  },
  {
    id: "3",
    title: "Read for Learning",
    description: "Read 20 pages of a professional development book",
    completed: false,
    streak: 3,
    target: 20,
    current: 12,
    category: "Learning",
    time: "9:00 PM"
  },
  {
    id: "4",
    title: "Drink Water",
    description: "Stay hydrated throughout the day",
    completed: false,
    streak: 12,
    target: 8,
    current: 5,
    category: "Health",
  },
  {
    id: "5",
    title: "Gratitude Journal",
    description: "Write 3 things you're grateful for",
    completed: true,
    streak: 4,
    target: 3,
    current: 3,
    category: "Mindfulness",
    time: "10:00 PM"
  }
];

const Index = () => {
  const [habits, setHabits] = useState(initialHabits);
  const { toast } = useToast();

  const toggleHabit = (habitId: string) => {
    setHabits(prevHabits => 
      prevHabits.map(habit => {
        if (habit.id === habitId) {
          const newCompleted = !habit.completed;
          
          // Show toast notification
          toast({
            title: newCompleted ? "Great job! 🎉" : "Habit unmarked",
            description: newCompleted 
              ? `You completed "${habit.title}"! Keep up the momentum.`
              : `"${habit.title}" has been unmarked.`,
            duration: 3000,
          });

          return {
            ...habit,
            completed: newCompleted,
            current: newCompleted ? habit.target : Math.max(0, habit.current - 1)
          };
        }
        return habit;
      })
    );
  };

  const completedHabits = habits.filter(habit => habit.completed).length;
  const currentStreak = Math.max(...habits.map(habit => habit.streak));
  const weeklyCompletion = 78; // This would be calculated from historical data

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName="Tanmay Nalawade" />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Progress Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Today's Overview</h2>
          <ProgressStats
            totalHabits={habits.length}
            completedHabits={completedHabits}
            currentStreak={currentStreak}
            weeklyCompletion={weeklyCompletion}
          />
        </section>

        {/* Motivational Quote */}
        <section>
          <MotivationalQuote />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Habits List */}
          <section className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">Today's Habits</h2>
            <div className="space-y-4">
              {habits.map(habit => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  onToggle={toggleHabit}
                />
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            <QuickActions />
            
            {/* Daily Reflection */}
            <div className="bg-muted/30 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-foreground">Daily Reflection</h3>
              <p className="text-sm text-muted-foreground">
                "Today I focused on building consistent habits. Small steps lead to big changes!"
              </p>
              <div className="text-xs text-muted-foreground">
                💡 Tip: Consistency beats intensity. Keep showing up!
              </div>
            </div>
          </aside>
        </div>

        {/* Footer Message */}
        <section className="text-center py-8">
          <p className="text-muted-foreground">
            Remember, progress is progress, no matter how small. You've got this! 💪
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;