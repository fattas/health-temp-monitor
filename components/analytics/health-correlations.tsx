import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"

export function HealthCorrelations() {
  const correlations = [
    {
      factor: "Aktivitas Fisik",
      impact: "Detak Jantung",
      description: "Peningkatan aktivitas berkorelasi dengan detak jantung lebih tinggi",
      strength: 85,
      direction: "positive",
    },
    {
      factor: "Durasi Tidur",
      impact: "Stabilitas Suhu",
      description: "Lebih banyak jam tidur berkorelasi dengan suhu yang lebih stabil",
      strength: 72,
      direction: "positive",
    },
    {
      factor: "Waktu Layar Malam",
      impact: "Variabilitas Detak Jantung",
      description: "Lebih banyak waktu layar berkorelasi dengan variabilitas detak jantung lebih rendah",
      strength: 68,
      direction: "negative",
    },
    {
      factor: "Asupan Kafein",
      impact: "Detak Jantung",
      description: "Asupan kafein lebih tinggi berkorelasi dengan detak jantung meningkat",
      strength: 76,
      direction: "positive",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Korelasi Kesehatan</CardTitle>
        <CardDescription className="text-sm">Hubungan antara faktor dan metrik kesehatan</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-4">
          {correlations.map((correlation, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">{correlation.factor}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{correlation.impact}</span>
              </div>
              <p className="text-sm text-muted-foreground">{correlation.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm min-w-[4rem]">
                  {correlation.direction === "positive" ? "Positif" : "Negatif"}
                </span>
                <Progress
                  value={correlation.strength}
                  className="h-2"
                  className={correlation.direction === "positive" ? "bg-green-500" : "bg-red-500"}
                />
                <span className="text-sm min-w-[2rem] text-right">{correlation.strength}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

