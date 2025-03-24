"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"

// Generate sample data for the charts
const generateTimeData = (hours = 24) => {
  const data = []
  const now = new Date()

  for (let i = hours; i >= 0; i--) {
    const time = new Date(now)
    time.setHours(now.getHours() - i)

    // Generate random temperature between 36.1 and 37.2
    const temp = (36.1 + Math.random() * 1.1).toFixed(1)

    // Generate random heart rate between 60 and 100
    const heartRate = Math.floor(60 + Math.random() * 40)

    data.push({
      time: time.toISOString(),
      formattedTime: `${time.getHours()}:${time.getMinutes().toString().padStart(2, "0")}`,
      temperature: Number.parseFloat(temp),
      heartRate: heartRate,
    })
  }

  return data
}

export function RealtimeCharts() {
  const [timeRange, setTimeRange] = useState("24h")
  const hourRanges = { "6h": 6, "12h": 12, "24h": 24, "48h": 48 }
  const data = generateTimeData(hourRanges[timeRange as keyof typeof hourRanges])

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex flex-col gap-1.5">
          <div>
            <CardTitle className="text-sm">Metrik Kesehatan Real-time</CardTitle>
            <CardDescription className="text-xs">Suhu dan detak jantung</CardDescription>
          </div>
          <Tabs value={timeRange} onValueChange={setTimeRange} className="w-full">
            <TabsList className="w-full grid grid-cols-4 h-8">
              <TabsTrigger value="6h" className="text-xs">
                6j
              </TabsTrigger>
              <TabsTrigger value="12h" className="text-xs">
                12j
              </TabsTrigger>
              <TabsTrigger value="24h" className="text-xs">
                24j
              </TabsTrigger>
              <TabsTrigger value="48h" className="text-xs">
                48j
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="h-[180px]">
          <ChartContainer data={data}>
            <ChartLegend className="mb-2 justify-center">
              <ChartLegendItem name="Suhu" color="#4A90E2" />
              <ChartLegendItem name="Detak Jantung" color="#FF6B6B" />
            </ChartLegend>
            <Chart>
              <ChartGrid horizontal vertical />
              <ChartXAxis dataKey="formattedTime" />
              <ChartYAxis yAxisId="temperature" domain={[36, 38]} tickCount={5} />
              <ChartYAxis yAxisId="heartRate" orientation="right" domain={[40, 120]} tickCount={5} />
              <ChartLine
                dataKey="temperature"
                stroke="#4A90E2"
                strokeWidth={2}
                yAxisId="temperature"
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0 }}
              />
              <ChartLine
                dataKey="heartRate"
                stroke="#FF6B6B"
                strokeWidth={2}
                yAxisId="heartRate"
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0 }}
              />
              <ChartArea dataKey="temperature" fill="#4A90E2" fillOpacity={0.1} yAxisId="temperature" />
              <ChartTooltip content={<CustomTooltip />} />
            </Chart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) {
    return null
  }

  const temperature = payload.find((p: any) => p.dataKey === "temperature")
  const heartRate = payload.find((p: any) => p.dataKey === "heartRate")
  const time = payload[0].payload.formattedTime

  return (
    <ChartTooltipContent>
      <div className="text-xs font-medium">{time}</div>
      <div className="flex flex-col gap-0.5 mt-1">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-[#4A90E2]" />
          <span className="text-[10px] text-muted-foreground">Suhu:</span>
          <span className="text-[10px] font-medium">{temperature?.value}°C</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
          <span className="text-[10px] text-muted-foreground">Detak Jantung:</span>
          <span className="text-[10px] font-medium">{heartRate?.value} BPM</span>
        </div>
      </div>
    </ChartTooltipContent>
  )
}

