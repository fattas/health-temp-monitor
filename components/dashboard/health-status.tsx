import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function HealthStatus() {
  const healthScore = 85
  const healthStatus = "Baik"
  const healthItems = [
    { name: "Suhu", status: "Normal", checked: true },
    { name: "Detak Jantung", status: "Normal", checked: true },
    { name: "Kualitas Tidur", status: "Baik", checked: true },
    { name: "Tingkat Aktivitas", status: "Sedang", checked: true },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Status Kesehatan</CardTitle>
        <CardDescription className="text-xs">Penilaian kesehatan keseluruhan</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0 space-y-3">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="font-medium">Skor Kesehatan</span>
            <span className="font-medium">{healthScore}%</span>
          </div>
          <Progress value={healthScore} className="h-1.5" />
        </div>

        <div className="rounded-lg bg-primary/10 p-2">
          <div className="font-medium text-center text-primary text-sm">{healthStatus}</div>
        </div>

        <div className="space-y-1.5">
          {healthItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                <span className="text-xs">{item.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.status}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

