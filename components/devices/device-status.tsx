"use client"

import { useState } from "react"
import { Activity, Battery, RefreshCw, Wifi, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"

export function DeviceStatus() {
  const { toast } = useToast()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)

    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false)
      toast({
        title: "Device status updated",
        description: "Latest device information has been loaded",
      })
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Status</CardTitle>
        <CardDescription>Current status of your primary device</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Health Monitor Pro</h3>
          <Button variant="outline" size="icon" onClick={handleRefresh}>
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Battery className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Battery</span>
              </div>
              <span className="text-sm font-medium">85%</span>
            </div>
            <Progress value={85} className="h-2" />
            <p className="text-xs text-muted-foreground">Estimated 3 days remaining</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Signal Strength</span>
              </div>
              <span className="text-sm font-medium">Good</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Sensor Status</span>
              </div>
              <span className="text-sm font-medium">Active</span>
            </div>
            <Progress value={100} className="h-2 bg-muted" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Data Transmission</span>
              </div>
              <span className="text-sm font-medium">Normal</span>
            </div>
            <Progress value={90} className="h-2" />
            <p className="text-xs text-muted-foreground">Last data sync: 2 minutes ago</p>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <h4 className="text-sm font-medium mb-2">Device Information</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Model:</span>
              <span>HMP-2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Serial Number:</span>
              <span>SN-12345678</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Firmware:</span>
              <span>v2.1.4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Last Calibration:</span>
              <span>14 days ago</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full">Calibrate Device</Button>
        <Button variant="outline" className="w-full">
          Troubleshoot
        </Button>
      </CardFooter>
    </Card>
  )
}

