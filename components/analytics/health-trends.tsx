"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"

// Generate sample data for the charts
const generateMonthlyData = (months = 12) => {
  const data = []
  const now = new Date()

  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(now)
    date.setMonth(now.getMonth() - i)

    // Generate random average temperature between 36.1 and 37.2
    const avgTemp = (36.1 + Math.random() * 1.1).toFixed(1)

    // Generate random average heart rate between 60 and 100
    const avgHeartRate = Math.floor(60 + Math.random() * 40)

    // Generate random health score between 60 and 100
    const healthScore = Math.floor(60 + Math.random() * 40)

    data.push({
      date: date.toISOString(),
      month: date.toLocaleString("id-ID", { month: "short" }),
      avgTemperature: Number.parseFloat(avgTemp),
      avgHeartRate: avgHeartRate,
      healthScore: healthScore,
    })
  }

  return data
}

export function HealthTrends() {
  const data = generateMonthlyData(12)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Tren Kesehatan</CardTitle>
        <CardDescription className="text-xs">Pola kesehatan jangka panjang</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <Tabs defaultValue="health-score">
          <TabsList className="w-full grid grid-cols-3 mb-3 h-7">
            <TabsTrigger value="health-score" className="text-[10px]">
              Skor Kesehatan
            </TabsTrigger>
            <TabsTrigger value="temperature" className="text-[10px]">
              Suhu
            </TabsTrigger>
            <TabsTrigger value="heart-rate" className="text-[10px]">
              Detak Jantung
            </TabsTrigger>
          </TabsList>

          <TabsContent value="health-score" className="h-[180px]">
            <ChartContainer data={data}>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="month" />
                <ChartYAxis domain={[50, 100]} tickCount={6} />
                <ChartLine
                  dataKey="healthScore"
                  stroke="#4A90E2"
                  strokeWidth={2}
                  yAxisId="temperature"
                  dot={{ r: 2, strokeWidth: 0 }}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
                <ChartArea dataKey="healthScore" fill="#4A90E2" fillOpacity={0.1} yAxisId="temperature" />
                <ChartTooltip content={<HealthScoreTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="temperature" className="h-[180px]">
            <ChartContainer data={data}>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="month" />
                <ChartYAxis domain={[36, 38]} tickCount={5} />
                <ChartLine
                  dataKey="avgTemperature"
                  stroke="#FF6B6B"
                  strokeWidth={2}
                  yAxisId="temperature"
                  dot={{ r: 2, strokeWidth: 0 }}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
                <ChartArea dataKey="avgTemperature" fill="#FF6B6B" fillOpacity={0.1} yAxisId="temperature" />
                <ChartTooltip content={<TemperatureTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="heart-rate" className="h-[180px]">
            <ChartContainer data={data}>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="month" />
                <ChartYAxis domain={[50, 110]} tickCount={6} />
                <ChartLine
                  dataKey="avgHeartRate"
                  stroke="#5CB85C"
                  strokeWidth={2}
                  yAxisId="temperature"
                  dot={{ r: 2, strokeWidth: 0 }}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
                <ChartArea dataKey="avgHeartRate" fill="#5CB85C" fillOpacity={0.1} yAxisId="temperature" />
                <ChartTooltip content={<HeartRateTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function HealthScoreTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) {
    return null
  }

  const data = payload[0].payload

  return (
    <ChartTooltipContent>
      <div className="text-xs font-medium">{data.month}</div>
      <div className="flex items-center gap-1 mt-1">
        <div className="h-2 w-2 rounded-full bg-[#4A90E2]" />
        <span className="text-[10px] text-muted-foreground">Skor Kesehatan:</span>
        <span className="text-[10px] font-medium">{data.healthScore}</span>
      </div>
    </ChartTooltipContent>
  )
}

function TemperatureTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) {
    return null
  }

  const data = payload[0].payload

  return (
    <ChartTooltipContent>
      <div className="text-xs font-medium">{data.month}</div>
      <div className="flex items-center gap-1 mt-1">
        <div className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
        <span className="text-[10px] text-muted-foreground">Rata-rata Suhu:</span>
        <span className="text-[10px] font-medium">{data.avgTemperature}°C</span>
      </div>
    </ChartTooltipContent>
  )
}

function HeartRateTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) {
    return null
  }

  const data = payload[0].payload

  return (
    <ChartTooltipContent>
      <div className="text-xs font-medium">{data.month}</div>
      <div className="flex items-center gap-1 mt-1">
        <div className="h-2 w-2 rounded-full bg-[#5CB85C]" />
        <span className="text-[10px] text-muted-foreground">Rata-rata Detak Jantung:</span>
        <span className="text-[10px] font-medium">{data.avgHeartRate} BPM</span>
      </div>
    </ChartTooltipContent>
  )
}

