import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Heart, Dumbbell, Coffee, BedDouble } from "lucide-react"

export function HealthRecommendations() {
  const recommendations = [
    {
      title: "Increase Daily Activity",
      description: "Try to incorporate more movement throughout your day to improve your activity score.",
      icon: Dumbbell,
      completed: false,
    },
    {
      title: "Maintain Regular Sleep",
      description: "Your temperature patterns suggest irregular sleep. Aim for consistent sleep times.",
      icon: BedDouble,
      completed: false,
    },
    {
      title: "Monitor Caffeine Intake",
      description: "Consider reducing afternoon caffeine which may be affecting your heart rate.",
      icon: Coffee,
      completed: true,
    },
    {
      title: "Cardiovascular Exercise",
      description: "Add 20 minutes of cardio 3 times per week to improve heart health.",
      icon: Heart,
      completed: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
        <CardDescription>AI-suggested health improvements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`rounded-full p-1.5 ${recommendation.completed ? "bg-green-100 text-green-600" : "bg-primary/10 text-primary"}`}
              >
                {recommendation.completed ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <recommendation.icon className="h-4 w-4" />
                )}
              </div>
              <div>
                <h3
                  className={`text-sm font-medium ${recommendation.completed ? "line-through text-muted-foreground" : ""}`}
                >
                  {recommendation.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{recommendation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Detailed Health Plan
        </Button>
      </CardFooter>
    </Card>
  )
}

