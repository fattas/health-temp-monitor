"use client"

import { useState } from "react"
import { Bell, Calendar, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

export function DashboardHeader() {
  const { toast } = useToast()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)

    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false)
      toast({
        title: "Dashboard diperbarui",
        description: "Data kesehatan terbaru telah dimuat",
      })
    }, 1000)
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-lg font-bold">Dashboard Kesehatan</h1>
            <p className="text-sm text-muted-foreground">Pantau metrik kesehatan Anda secara real-time</p>
          </div>

          <div className="flex flex-col gap-2">
            <Tabs defaultValue="today" className="w-full">
              <TabsList className="w-full grid grid-cols-3 h-9">
                <TabsTrigger value="today" className="text-xs">
                  Hari Ini
                </TabsTrigger>
                <TabsTrigger value="week" className="text-xs">
                  Minggu Ini
                </TabsTrigger>
                <TabsTrigger value="month" className="text-xs">
                  Bulan Ini
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handleRefresh} className="h-9 w-9">
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              </Button>

              <Button variant="outline" size="icon" className="h-9 w-9">
                <Bell className="h-4 w-4" />
              </Button>

              <Button variant="outline" size="icon" className="h-9 w-9">
                <Calendar className="h-4 w-4" />
              </Button>

              <Button variant="outline" className="h-9 text-xs gap-2 flex-1">
                <Download className="h-4 w-4" />
                Ekspor
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

