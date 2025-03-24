import { LineChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AnalyticsHeader() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <LineChart className="h-5 w-5 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Analitik Kesehatan</h1>
              <p className="text-sm text-muted-foreground">Wawasan dan tren berbasis AI</p>
            </div>
          </div>

          <Tabs defaultValue="month" className="w-full">
            <TabsList className="w-full grid grid-cols-3 h-9">
              <TabsTrigger value="week" className="text-sm">
                Minggu
              </TabsTrigger>
              <TabsTrigger value="month" className="text-sm">
                Bulan
              </TabsTrigger>
              <TabsTrigger value="year" className="text-sm">
                Tahun
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}

