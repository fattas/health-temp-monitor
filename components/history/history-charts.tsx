"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  ChartBar,
} from "@/components/ui/chart"

// Generate sample data for the charts
const generateDailyData = (days = 30) => {
  const data = []
  const now = new Date()

  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(now.getDate() - i)

    // Generate random temperature between 36.1 and 37.5
    const temp = (36.1 + Math.random() * 1.4).toFixed(1)

    // Generate random heart rate between 60 and 100
    const heartRate = Math.floor(60 + Math.random() * 40)

    // Generate random activity level between 0 and 100
    const activity = Math.floor(Math.random() * 100)

    data.push({
      date: date.toISOString(),
      formattedDate: `${date.getDate()}/${date.getMonth() + 1}`,
      temperature: Number.parseFloat(temp),
      heartRate: heartRate,
      activity: activity,
    })
  }

  return data
}

export function HistoryCharts() {
  const data = generateDailyData(30)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Metrics History</CardTitle>
        <CardDescription>Historical view of your health metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="line">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="line">Line Chart</TabsTrigger>
              <TabsTrigger value="bar">Bar Chart</TabsTrigger>
              <TabsTrigger value="area">Area Chart</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="line" className="h-[400px]">
            <ChartContainer data={data}>
              <ChartLegend className="mb-4">
                <ChartLegendItem name="Temperature" color="#4A90E2" />
                <ChartLegendItem name="Heart Rate" color="#FF6B6B" />
                <ChartLegendItem name="Activity" color="#5CB85C" />
              </ChartLegend>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="formattedDate" />
                <ChartYAxis
                  yAxisId="temperature"
                  domain={[36, 38]}
                  tickCount={5}
                  label={{
                    value: "Temperature (°C)",
                    position: "insideLeft",
                    angle: -90,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartYAxis
                  yAxisId="heartRate"
                  orientation="right"
                  domain={[40, 120]}
                  tickCount={5}
                  label={{
                    value: "Heart Rate (BPM)",
                    position: "insideRight",
                    angle: 90,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartLine
                  dataKey="temperature"
                  stroke="#4A90E2"
                  strokeWidth={2}
                  yAxisId="temperature"
                  dot={{ r: 2, strokeWidth: 0 }}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
                <ChartLine
                  dataKey="heartRate"
                  stroke="#FF6B6B"
                  strokeWidth={2}
                  yAxisId="heartRate"
                  dot={{ r: 2, strokeWidth: 0 }}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
                <ChartLine
                  dataKey="activity"
                  stroke="#5CB85C"
                  strokeWidth={2}
                  yAxisId="heartRate"
                  dot={{ r: 2, strokeWidth: 0 }}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
                <ChartTooltip content={<CustomTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="bar" className="h-[400px]">
            <ChartContainer data={data}>
              <ChartLegend className="mb-4">
                <ChartLegendItem name="Temperature" color="#4A90E2" />
                <ChartLegendItem name="Heart Rate" color="#FF6B6B" />
              </ChartLegend>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="formattedDate" />
                <ChartYAxis
                  yAxisId="temperature"
                  domain={[36, 38]}
                  tickCount={5}
                  label={{
                    value: "Temperature (°C)",
                    position: "insideLeft",
                    angle: -90,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartYAxis
                  yAxisId="heartRate"
                  orientation="right"
                  domain={[40, 120]}
                  tickCount={5}
                  label={{
                    value: "Heart Rate (BPM)",
                    position: "insideRight",
                    angle: 90,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartBar dataKey="temperature" fill="#4A90E2" yAxisId="temperature" barSize={10} />
                <ChartBar dataKey="heartRate" fill="#FF6B6B" yAxisId="heartRate" barSize={10} />
                <ChartTooltip content={<CustomTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="area" className="h-[400px]">
            <ChartContainer data={data}>
              <ChartLegend className="mb-4">
                <ChartLegendItem name="Temperature" color="#4A90E2" />
                <ChartLegendItem name="Heart Rate" color="#FF6B6B" />
              </ChartLegend>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis dataKey="formattedDate" />
                <ChartYAxis
                  yAxisId="temperature"
                  domain={[36, 38]}
                  tickCount={5}
                  label={{
                    value: "Temperature (°C)",
                    position: "insideLeft",
                    angle: -90,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartYAxis
                  yAxisId="heartRate"
                  orientation="right"
                  domain={[40, 120]}
                  tickCount={5}
                  label={{
                    value: "Heart Rate (BPM)",
                    position: "insideRight",
                    angle: 90,
                    style: { textAnchor: "middle" },
                  }}
                />
                <ChartArea
                  dataKey="temperature"
                  fill="#4A90E2"
                  stroke="#4A90E2"
                  fillOpacity={0.2}
                  yAxisId="temperature"
                />
                <ChartArea dataKey="heartRate" fill="#FF6B6B" stroke="#FF6B6B" fillOpacity={0.2} yAxisId="heartRate" />
                <ChartTooltip content={<CustomTooltip />} />
              </Chart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
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
  const activity = payload.find((p: any) => p.dataKey === "activity")
  const date = payload[0].payload.formattedDate

  return (
    <ChartTooltipContent>
      <div className="text-sm font-medium">{date}</div>
      <div className="flex flex-col gap-0.5 mt-1.5">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-[#4A90E2]" />
          <span className="text-xs text-muted-foreground">Temperature:</span>
          <span className="text-xs font-medium">{temperature?.value}°C</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
          <span className="text-xs text-muted-foreground">Heart Rate:</span>
          <span className="text-xs font-medium">{heartRate?.value} BPM</span>
        </div>
        {activity && (
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-[#5CB85C]" />
            <span className="text-xs text-muted-foreground">Activity:</span>
            <span className="text-xs font-medium">{activity?.value}%</span>
          </div>
        )}
      </div>
    </ChartTooltipContent>
  )
}

