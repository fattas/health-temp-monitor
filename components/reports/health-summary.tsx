import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Thermometer, Heart, Activity, Brain } from "lucide-react"

export function HealthSummary() {
  const healthMetrics = [
    {
      name: "Skor Kesehatan Keseluruhan",
      score: 85,
      status: "Baik",
      description: "Berdasarkan semua metrik kesehatan",
      color: "bg-primary",
    },
    {
      name: "Stabilitas Suhu",
      score: 92,
      status: "Sangat Baik",
      description: "Berdasarkan variasi suhu",
      color: "bg-green-500",
    },
    {
      name: "Kesehatan Kardiovaskular",
      score: 78,
      status: "Baik",
      description: "Berdasarkan pola detak jantung",
      color: "bg-blue-500",
    },
    {
      name: "Tingkat Aktivitas",
      score: 65,
      status: "Sedang",
      description: "Berdasarkan gerakan dan olahraga",
      color: "bg-amber-500",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Ringkasan Kesehatan</CardTitle>
        <CardDescription className="text-sm">Ikhtisar penilaian kesehatan bulanan</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthMetrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {metric.name === "Skor Kesehatan Keseluruhan" && <Brain className="h-4 w-4 text-primary" />}
                  {metric.name === "Stabilitas Suhu" && <Thermometer className="h-4 w-4 text-green-500" />}
                  {metric.name === "Kesehatan Kardiovaskular" && <Heart className="h-4 w-4 text-blue-500" />}
                  {metric.name === "Tingkat Aktivitas" && <Activity className="h-4 w-4 text-amber-500" />}
                  <span className="font-medium text-sm">{metric.name}</span>
                </div>
                <span className="text-sm font-medium">{metric.score}%</span>
              </div>
              <Progress value={metric.score} className={`h-2 ${metric.color}`} />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{metric.description}</span>
                <span className="font-medium">{metric.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-muted p-4">
          <h4 className="text-sm font-medium mb-2">Ringkasan Bulanan</h4>
          <p className="text-sm text-muted-foreground">
            Kesehatan Anda secara keseluruhan telah stabil bulan ini dengan pembacaan suhu dan detak jantung yang baik.
            Pertimbangkan untuk meningkatkan tingkat aktivitas Anda untuk hasil kesehatan yang lebih baik.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

