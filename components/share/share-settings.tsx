"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"

export function ShareSettings() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    temperature: true,
    heartRate: true,
    activity: false,
    alerts: true,
    reports: false,
    realtime: true,
    history: true,
    notifications: false,
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    })
  }

  const handleSaveSettings = () => {
    toast({
      title: "Share settings saved",
      description: "Your sharing preferences have been updated",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Settings</CardTitle>
        <CardDescription>Control what data is shared</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Shared Data Types</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="temperature"
                checked={settings.temperature}
                onCheckedChange={() => handleToggle("temperature")}
              />
              <Label htmlFor="temperature">Temperature Data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="heartRate" checked={settings.heartRate} onCheckedChange={() => handleToggle("heartRate")} />
              <Label htmlFor="heartRate">Heart Rate Data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="activity" checked={settings.activity} onCheckedChange={() => handleToggle("activity")} />
              <Label htmlFor="activity">Activity Data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="alerts" checked={settings.alerts} onCheckedChange={() => handleToggle("alerts")} />
              <Label htmlFor="alerts">Health Alerts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="reports" checked={settings.reports} onCheckedChange={() => handleToggle("reports")} />
              <Label htmlFor="reports">Health Reports</Label>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Access Options</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="realtime-toggle">Real-time Data</Label>
              <Switch
                id="realtime-toggle"
                checked={settings.realtime}
                onCheckedChange={() => handleToggle("realtime")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="history-toggle">Historical Data</Label>
              <Switch id="history-toggle" checked={settings.history} onCheckedChange={() => handleToggle("history")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications-toggle">Allow Notifications</Label>
              <Switch
                id="notifications-toggle"
                checked={settings.notifications}
                onCheckedChange={() => handleToggle("notifications")}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <h4 className="text-sm font-medium mb-2">Privacy Note</h4>
          <p className="text-xs text-muted-foreground">
            Shared data is encrypted and can only be accessed by people with the link. You can revoke access at any time
            by deleting the share link.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveSettings} className="w-full">
          Save Share Settings
        </Button>
      </CardFooter>
    </Card>
  )
}

