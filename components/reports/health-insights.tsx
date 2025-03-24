import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, TrendingDown, TrendingUp } from "lucide-react"

export function HealthInsights() {
  const insights = [
    {
      title: "Suhu Tubuh Stabil",
      description: "Suhu tubuh Anda tetap dalam kisaran normal (36,1-37,2°C) selama 95% waktu bulan ini.",
      trend: "stable",
      impact: "positive",
    },
    {
      title: "Variabilitas Detak Jantung",
      description:
        "Detak jantung Anda menunjukkan variabilitas yang sehat, menunjukkan kesehatan kardiovaskular dan pengelolaan stres yang baik.",
      trend: "up",
      impact: "positive",
    },
    {
      title: "Kenaikan Suhu di Malam Hari",
      description: "Suhu Anda cenderung sedikit meningkat di malam hari, yang normal tetapi perlu dipantau.",
      trend: "up",
      impact: "neutral",
    },
    {
      title: "Periode Aktivitas Berkurang",
      description:
        "Ada periode aktivitas rendah yang berkepanjangan selama hari kerja, yang dapat memengaruhi kesehatan secara keseluruhan.",
      trend: "down",
      impact: "negative",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Wawasan Kesehatan AI</CardTitle>
            <CardDescription className="text-sm">Pola yang terdeteksi dalam data kesehatan Anda</CardDescription>
          </div>
          <Lightbulb className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="rounded-lg border p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-sm">{insight.title}</h3>
                <Badge
                  variant="outline"
                  className={`
                    ${insight.impact === "positive" && "bg-green-50 text-green-600 border-green-200"}
                    ${insight.impact === "neutral" && "bg-blue-50 text-blue-600 border-blue-200"}
                    ${insight.impact === "negative" && "bg-red-50 text-red-600 border-red-200"}
                  `}
                >
                  {insight.trend === "up" && <TrendingUp className="mr-1 h-3 w-3" />}
                  {insight.trend === "down" && <TrendingDown className="mr-1 h-3 w-3" />}
                  <span className="text-xs">
                    {insight.impact === "positive" && "Positif"}
                    {insight.impact === "neutral" && "Netral"}
                    {insight.impact === "negative" && "Perlu Perhatian"}
                  </span>
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

