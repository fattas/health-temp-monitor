"use client"

import type React from "react"

import { Activity, Thermometer, Heart, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type MetricCardProps = {
  title: string
  value: string
  unit: string
  description: string
  icon: React.ElementType
  trend: "up" | "down" | "stable"
  status: "normal" | "warning" | "critical"
}

function MetricCard({ title, value, unit, description, icon: Icon, trend, status }: MetricCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-3 pb-1">
        <CardTitle className="text-xs font-medium">{title}</CardTitle>
        <Icon
          className={cn(
            "h-4 w-4",
            status === "normal" && "text-green-500",
            status === "warning" && "text-amber-500",
            status === "critical" && "text-red-500",
          )}
        />
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="text-lg font-bold">
          {value}
          <span className="ml-1 text-xs font-normal text-muted-foreground">{unit}</span>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
        <div className="mt-1 flex items-center text-xs">
          <span
            className={cn(
              "mr-1",
              trend === "up" && "text-green-500",
              trend === "down" && "text-red-500",
              trend === "stable" && "text-blue-500",
            )}
          >
            {trend === "up" && "↑"}
            {trend === "down" && "↓"}
            {trend === "stable" && "→"}
          </span>
          <span>
            {trend === "up" && "Meningkat"}
            {trend === "down" && "Menurun"}
            {trend === "stable" && "Stabil"}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export function HealthMetrics() {
  const metrics: MetricCardProps[] = [
    {
      title: "Suhu Tubuh",
      value: "36.8",
      unit: "°C",
      description: "Normal: 36.1-37.2°C",
      icon: Thermometer,
      trend: "stable",
      status: "normal",
    },
    {
      title: "Detak Jantung",
      value: "78",
      unit: "BPM",
      description: "Normal: 60-100 BPM",
      icon: Heart,
      trend: "up",
      status: "normal",
    },
    {
      title: "Tingkat Aktivitas",
      value: "Sedang",
      unit: "",
      description: "Berdasarkan pola gerakan",
      icon: Activity,
      trend: "up",
      status: "normal",
    },
    {
      title: "Terakhir Diperbarui",
      value: "2 menit",
      unit: "lalu",
      description: "Pemantauan real-time aktif",
      icon: Clock,
      trend: "stable",
      status: "normal",
    },
  ]

  return (
    <>
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </>
  )
}

