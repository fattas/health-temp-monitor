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
      month: date.toLocaleString("default", { month: "short" }),
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
    <Card>
      <CardHeader>
        <CardTitle>Health Trends</CardTitle>
        <CardDescription>Long-term health patterns and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="health-score">
          <TabsList className="mb-4">
            <TabsTrigger value="health-score">Health Score</TabsTrigger>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="heart-rate">Heart Rate</TabsTrigger>
          </TabsList>

          <TabsContent value="health-score" className="h-[300px]">
            <ChartContainer data={data}>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="month" />
                <ChartYAxis
                  domain={[50, 100]}
                  tickCount={6}
                  label={{ value: "Health Score", position: "insideLeft", angle: -90, style: { textAnchor: "middle" } }}
                />
                <ChartLine
                  dataKey="healthScore"
                  stroke="#4A90E2"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <ChartArea dataKey="healthScore" fill="#4A90E2" fillOpacity={0.1} />
                <ChartTooltip content={<HealthScoreTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="temperature" className="h-[300px]">
            <ChartContainer data={data}>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="month" />
                <ChartYAxis
                  domain={[36, 38]}
                  tickCount={5}
                  label={{
                    value: "Avg. Temperature (°C)",
                    position: "insideLeft",
                    angle: -90,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartLine
                  dataKey="avgTemperature"
                  stroke="#FF6B6B"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <ChartArea dataKey="avgTemperature" fill="#FF6B6B" fillOpacity={0.1} />
                <ChartTooltip content={<TemperatureTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="heart-rate" className="h-[300px]">
            <ChartContainer data={data}>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="month" />
                <ChartYAxis
                  domain={[50, 110]}
                  tickCount={6}
                  label={{
                    value: "Avg. Heart Rate (BPM)",
                    position: "insideLeft",
                    angle: -90,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartLine
                  dataKey="avgHeartRate"
                  stroke="#5CB85C"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <ChartArea dataKey="avgHeartRate" fill="#5CB85C" fillOpacity={0.1} />
                <ChartTooltip content={<HeartRateTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>
        </Tabs>

        <div className="mt-4 rounded-lg bg-muted p-4">
          <h4 className="text-sm font-medium mb-2">Trend Analysis</h4>
          <p className="text-sm text-muted-foreground">
            Your health score has shown steady improvement over the past 6 months, with temperature and heart rate
            remaining within normal ranges. Continue your current health practices for optimal results.
          </p>
        </div>
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
      <div className="text-sm font-medium">{data.month}</div>
      <div className="flex items-center gap-1 mt-1.5">
        <div className="h-2 w-2 rounded-full bg-[#4A90E2]" />
        <span className="text-xs text-muted-foreground">Health Score:</span>
        <span className="text-xs font-medium">{data.healthScore}</span>
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
      <div className="text-sm font-medium">{data.month}</div>
      <div className="flex items-center gap-1 mt-1.5">
        <div className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
        <span className="text-xs text-muted-foreground">Avg. Temperature:</span>
        <span className="text-xs font-medium">{data.avgTemperature}°C</span>
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
      <div className="text-sm font-medium">{data.month}</div>
      <div className="flex items-center gap-1 mt-1.5">
        <div className="h-2 w-2 rounded-full bg-[#5CB85C]" />
        <span className="text-xs text-muted-foreground">Avg. Heart Rate:</span>
        <span className="text-xs font-medium">{data.avgHeartRate} BPM</span>
      </div>
    </ChartTooltipContent>
  )
}

