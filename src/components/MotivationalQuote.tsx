import { Quote, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const quotes = [
  {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Motivation is what gets you started. Habit is what keeps you going.",
    author: "Jim Ryun"
  },
  {
    text: "Your future is created by what you do today, not tomorrow.",
    author: "Unknown"
  }
];

export function MotivationalQuote() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  const getNewQuote = () => {
    const newIndex = (currentQuoteIndex + 1) % quotes.length;
    setCurrentQuoteIndex(newIndex);
  };
  
  const currentQuote = quotes[currentQuoteIndex];

  return (
    <Card className="bg-gradient-to-br from-primary-soft to-accent-soft border-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <CardContent className="p-6 relative">
        <div className="flex items-start gap-4">
          <Quote className="h-8 w-8 text-primary mt-1 shrink-0" />
          <div className="space-y-3 flex-1">
            <blockquote className="text-lg font-medium leading-relaxed text-foreground">
              "{currentQuote.text}"
            </blockquote>
            <div className="flex items-center justify-between">
              <cite className="text-sm text-muted-foreground font-medium">
                — {currentQuote.author}
              </cite>
              <Button
                variant="ghost"
                size="sm"
                onClick={getNewQuote}
                className="gap-2 text-muted-foreground hover:text-primary"
              >
                <RefreshCw className="h-3 w-3" />
                New Quote
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}