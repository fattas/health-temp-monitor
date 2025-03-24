import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, HelpCircle, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

export function HealthPredictions() {
  const predictions = [
    {
      title: "Risiko Demam Potensial",
      description: "Berdasarkan pola suhu Anda, ada sedikit risiko mengalami demam dalam 24-48 jam ke depan.",
      probability: 35,
      impact: "medium",
      action: "Pantau suhu lebih sering dan pastikan hidrasi yang cukup.",
    },
    {
      title: "Peningkatan Kualitas Tidur",
      description: "Variabilitas detak jantung Anda menunjukkan kualitas tidur Anda akan membaik dalam minggu depan.",
      probability: 78,
      impact: "positive",
      action: "Pertahankan jadwal tidur Anda saat ini untuk memaksimalkan manfaat.",
    },
    {
      title: "Plateau Aktivitas",
      description: "Tingkat aktivitas Anda diprediksi akan mendatar berdasarkan pola terbaru.",
      probability: 82,
      impact: "neutral",
      action: "Pertimbangkan untuk memvariasikan rutinitas olahraga Anda untuk melanjutkan kemajuan.",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Prediksi Kesehatan</CardTitle>
            <CardDescription className="text-sm">Perkiraan kesehatan berbasis AI</CardDescription>
          </div>
          <Lightbulb className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-4">
          {predictions.map((prediction, index) => (
            <div key={index} className="rounded-lg border p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  {prediction.impact === "positive" && <CheckCircle className="h-4 w-4 text-green-500" />}
                  {prediction.impact === "medium" && <AlertTriangle className="h-4 w-4 text-amber-500" />}
                  {prediction.impact === "neutral" && <HelpCircle className="h-4 w-4 text-blue-500" />}
                  <h3 className="font-medium text-sm">{prediction.title}</h3>
                </div>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs px-2 py-0.5",
                    prediction.probability > 75
                      ? "bg-green-50 text-green-600 border-green-200"
                      : prediction.probability > 50
                        ? "bg-amber-50 text-amber-600 border-amber-200"
                        : "bg-blue-50 text-blue-600 border-blue-200",
                  )}
                >
                  Probabilitas {prediction.probability}%
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{prediction.description}</p>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-medium">Tindakan yang Direkomendasikan:</p>
                <p className="text-sm text-muted-foreground">{prediction.action}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

