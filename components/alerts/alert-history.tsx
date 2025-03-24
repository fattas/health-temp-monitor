"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThermometerIcon, HeartIcon, ActivityIcon, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

type Alert = {
  id: string
  type: "temperature" | "heart-rate" | "activity"
  message: string
  value: string
  timestamp: string
  formattedTime: string
  severity: "low" | "medium" | "high"
}

// Generate sample data for alerts
const generateAlerts = (count = 20) => {
  const alerts: Alert[] = []
  const now = new Date()
  const types = ["temperature", "heart-rate", "activity"] as const
  const severities = ["low", "medium", "high"] as const

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(now)
    timestamp.setHours(now.getHours() - i)

    const type = types[Math.floor(Math.random() * types.length)]
    const severity = severities[Math.floor(Math.random() * severities.length)]

    let message = ""
    let value = ""

    if (type === "temperature") {
      const temp = (36 + Math.random() * 3).toFixed(1)
      value = `${temp}°C`
      message =
        Number.parseFloat(temp) > 37.5
          ? "Suhu di atas normal"
          : Number.parseFloat(temp) < 36
            ? "Suhu di bawah normal"
            : "Suhu kembali normal"
    } else if (type === "heart-rate") {
      const hr = Math.floor(50 + Math.random() * 100)
      value = `${hr} BPM`
      message =
        hr > 100
          ? "Detak jantung meningkat"
          : hr < 60
            ? "Detak jantung di bawah normal"
            : "Detak jantung kembali normal"
    } else {
      const activity = Math.floor(Math.random() * 100)
      value = `${activity}%`
      message =
        activity < 10
          ? "Aktivitas rendah terdeteksi"
          : activity > 80
            ? "Aktivitas tinggi terdeteksi"
            : "Tingkat aktivitas normal"
    }

    alerts.push({
      id: i.toString(),
      type,
      message,
      value,
      timestamp: timestamp.toISOString(),
      formattedTime: timestamp.toLocaleString("id-ID"),
      severity,
    })
  }

  return alerts
}

export function AlertHistory() {
  const [filter, setFilter] = useState<string>("all")
  const allAlerts = generateAlerts(20)

  const filteredAlerts = filter === "all" ? allAlerts : allAlerts.filter((alert) => alert.type === filter)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle className="text-base">Riwayat Notifikasi</CardTitle>
            <CardDescription className="text-sm">Notifikasi kesehatan terbaru</CardDescription>
          </div>
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList>
              <TabsTrigger value="all" className="text-xs">
                Semua
              </TabsTrigger>
              <TabsTrigger value="temperature" className="text-xs">
                Suhu
              </TabsTrigger>
              <TabsTrigger value="heart-rate" className="text-xs">
                Detak Jantung
              </TabsTrigger>
              <TabsTrigger value="activity" className="text-xs">
                Aktivitas
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-4">
          {filteredAlerts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Tidak ada notifikasi ditemukan</p>
            </div>
          ) : (
            filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className={cn(
                  "flex items-start gap-4 rounded-lg border p-4",
                  alert.severity === "high" && "border-red-200 bg-red-50",
                  alert.severity === "medium" && "border-amber-200 bg-amber-50",
                  alert.severity === "low" && "border-green-200 bg-green-50",
                )}
              >
                <div
                  className={cn(
                    "mt-0.5 rounded-full p-1.5",
                    alert.severity === "high" && "bg-red-100 text-red-600",
                    alert.severity === "medium" && "bg-amber-100 text-amber-600",
                    alert.severity === "low" && "bg-green-100 text-green-600",
                  )}
                >
                  {alert.type === "temperature" && <ThermometerIcon className="h-4 w-4" />}
                  {alert.type === "heart-rate" && <HeartIcon className="h-4 w-4" />}
                  {alert.type === "activity" && <ActivityIcon className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="font-medium text-sm">{alert.message}</div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs whitespace-nowrap",
                        alert.severity === "high" && "bg-red-50 text-red-600 border-red-200",
                        alert.severity === "medium" && "bg-amber-50 text-amber-600 border-amber-200",
                        alert.severity === "low" && "bg-green-50 text-green-600 border-green-200",
                      )}
                    >
                      {alert.severity === "high" && "Prioritas Tinggi"}
                      {alert.severity === "medium" && "Prioritas Sedang"}
                      {alert.severity === "low" && "Prioritas Rendah"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{alert.value}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{alert.formattedTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {filteredAlerts.length > 0 && (
          <Button variant="outline" className="w-full mt-4">
            Muat Lebih Banyak Notifikasi
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

