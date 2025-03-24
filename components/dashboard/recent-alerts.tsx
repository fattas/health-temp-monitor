"use client"

import { AlertCircle, ArrowRight, ThermometerIcon, HeartIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Alert = {
  id: string
  type: "temperature" | "heart-rate"
  message: string
  value: string
  time: string
  severity: "low" | "medium" | "high"
}

export function RecentAlerts() {
  const alerts: Alert[] = [
    {
      id: "1",
      type: "temperature",
      message: "Suhu di atas normal",
      value: "37.8°C",
      time: "10 menit lalu",
      severity: "medium",
    },
    {
      id: "2",
      type: "heart-rate",
      message: "Detak jantung meningkat",
      value: "110 BPM",
      time: "25 menit lalu",
      severity: "medium",
    },
    {
      id: "3",
      type: "temperature",
      message: "Suhu kembali normal",
      value: "36.9°C",
      time: "1 jam lalu",
      severity: "low",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div>
          <CardTitle className="text-sm">Notifikasi Terbaru</CardTitle>
          <CardDescription className="text-xs">Notifikasi kesehatan dari pemantauan Anda</CardDescription>
        </div>
        <Badge variant="outline" className="gap-1 text-xs h-6 px-2">
          <AlertCircle className="h-3.5 w-3.5" />
          {alerts.length} Notifikasi
        </Badge>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-3",
                alert.severity === "high" && "border-red-200 bg-red-50",
                alert.severity === "medium" && "border-amber-200 bg-amber-50",
                alert.severity === "low" && "border-green-200 bg-green-50",
              )}
            >
              <div
                className={cn(
                  "mt-0.5 rounded-full p-1",
                  alert.severity === "high" && "bg-red-100 text-red-600",
                  alert.severity === "medium" && "bg-amber-100 text-amber-600",
                  alert.severity === "low" && "bg-green-100 text-green-600",
                )}
              >
                {alert.type === "temperature" ? (
                  <ThermometerIcon className="h-4 w-4" />
                ) : (
                  <HeartIcon className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium text-xs">{alert.message}</div>
                <div className="text-xs text-muted-foreground">
                  {alert.value} • {alert.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="ghost" className="w-full h-8" size="sm">
          <span className="text-xs">Lihat Semua Notifikasi</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

