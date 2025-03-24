"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

export function DeviceSetup() {
  const { toast } = useToast()
  const [deviceName, setDeviceName] = useState("")
  const [deviceType, setDeviceType] = useState("")
  const [connectionMethod, setConnectionMethod] = useState("bluetooth")
  const [deviceCode, setDeviceCode] = useState("")

  const handleAddDevice = () => {
    if (!deviceName || !deviceType) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Device setup initiated",
      description: "Follow the instructions to complete the setup process",
    })

    // Reset form
    setDeviceName("")
    setDeviceType("")
    setDeviceCode("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Device</CardTitle>
        <CardDescription>Set up a new health monitoring device</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="manual" className="space-y-4">
          <TabsList>
            <TabsTrigger value="manual">Manual Setup</TabsTrigger>
            <TabsTrigger value="qr">QR Code</TabsTrigger>
          </TabsList>

          <TabsContent value="manual" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="device-name" className="text-right">
                  Device Name
                </Label>
                <Input
                  id="device-name"
                  placeholder="Enter device name"
                  className="col-span-3"
                  value={deviceName}
                  onChange={(e) => setDeviceName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="device-type" className="text-right">
                  Device Type
                </Label>
                <Select value={deviceType} onValueChange={setDeviceType}>
                  <SelectTrigger id="device-type" className="col-span-3">
                    <SelectValue placeholder="Select device type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="temperature">Temperature Sensor</SelectItem>
                    <SelectItem value="heart-rate">Heart Rate Monitor</SelectItem>
                    <SelectItem value="multi">Multi-parameter Device</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="connection-method" className="text-right">
                  Connection
                </Label>
                <Select value={connectionMethod} onValueChange={setConnectionMethod}>
                  <SelectTrigger id="connection-method" className="col-span-3">
                    <SelectValue placeholder="Select connection method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bluetooth">Bluetooth</SelectItem>
                    <SelectItem value="wifi">Wi-Fi</SelectItem>
                    <SelectItem value="usb">USB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="device-code" className="text-right">
                  Device Code
                </Label>
                <Input
                  id="device-code"
                  placeholder="Enter device code (optional)"
                  className="col-span-3"
                  value={deviceCode}
                  onChange={(e) => setDeviceCode(e.target.value)}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="qr" className="space-y-4">
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg">
              <div className="w-48 h-48 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Camera access required
                  <br />
                  Point camera at device QR code
                </p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Scan the QR code on your device to automatically configure it
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddDevice} className="w-full">
          Add Device
        </Button>
      </CardFooter>
    </Card>
  )
}

