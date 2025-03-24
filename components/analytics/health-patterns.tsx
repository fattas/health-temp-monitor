import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, TrendingUp, Clock, Sun, Moon, Calendar } from "lucide-react"

export function HealthPatterns() {
  const patterns = [
    {
      title: "Lonjakan Suhu Pagi",
      description: "Suhu Anda cenderung lebih tinggi di pagi hari antara jam 7-9 pagi",
      icon: Sun,
      confidence: "Tinggi",
      trend: "up",
    },
    {
      title: "Penurunan Detak Jantung Malam",
      description: "Detak jantung biasanya menurun 10-15 BPM di malam hari setelah jam 8 malam",
      icon: Moon,
      confidence: "Sedang",
      trend: "down",
    },
    {
      title: "Siklus Aktivitas Mingguan",
      description: "Tingkat aktivitas memuncak di akhir pekan dan terendah pada hari Senin",
      icon: Calendar,
      confidence: "Tinggi",
      trend: "up",
    },
    {
      title: "Pola Tidur Konsisten",
      description: "Tanda vital Anda menunjukkan jadwal tidur teratur antara jam 11 malam - 6 pagi",
      icon: Clock,
      confidence: "Sedang",
      trend: "stable",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Pola Kesehatan</CardTitle>
        <CardDescription className="text-sm">Pola berulang dalam data kesehatan Anda</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          {patterns.map((pattern, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
              <div className="rounded-full p-1.5 bg-primary/10 text-primary">
                <pattern.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-sm">{pattern.title}</h3>
                  <Badge variant="outline" className="text-xs h-5 px-2">
                    Keyakinan {pattern.confidence}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{pattern.description}</p>
                <div className="flex items-center mt-1 text-sm">
                  {pattern.trend === "up" && <TrendingUp className="h-3.5 w-3.5 text-green-500 mr-1" />}
                  {pattern.trend === "down" && <TrendingDown className="h-3.5 w-3.5 text-blue-500 mr-1" />}
                  {pattern.trend === "stable" && <span className="text-blue-500 mr-1">→</span>}
                  <span className="text-muted-foreground">
                    {pattern.trend === "up" && "Tren meningkat"}
                    {pattern.trend === "down" && "Tren menurun"}
                    {pattern.trend === "stable" && "Pola stabil"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

