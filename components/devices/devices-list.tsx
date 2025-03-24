"use client"

import { useState } from "react"
import { Battery, Bluetooth, MoreHorizontal, Smartphone, Thermometer, Heart, Trash2, Pencil } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

type Device = {
  id: string
  name: string
  type: "temperature" | "heart-rate" | "multi"
  status: "connected" | "disconnected" | "pairing"
  battery: number
  lastSync: string
  active: boolean
}

export function DevicesList() {
  const { toast } = useToast()
  const [devices, setDevices] = useState<Device[]>([
    {
      id: "dev-1",
      name: "Health Monitor Pro",
      type: "multi",
      status: "connected",
      battery: 85,
      lastSync: "2 minutes ago",
      active: true,
    },
    {
      id: "dev-2",
      name: "TempSense Mini",
      type: "temperature",
      status: "disconnected",
      battery: 42,
      lastSync: "3 hours ago",
      active: false,
    },
    {
      id: "dev-3",
      name: "HeartTrack Wristband",
      type: "heart-rate",
      status: "connected",
      battery: 67,
      lastSync: "15 minutes ago",
      active: true,
    },
  ])

  const [deleteDeviceId, setDeleteDeviceId] = useState<string | null>(null)

  const toggleDeviceActive = (id: string) => {
    setDevices(devices.map((device) => (device.id === id ? { ...device, active: !device.active } : device)))

    const device = devices.find((d) => d.id === id)

    toast({
      title: device?.active ? "Device deactivated" : "Device activated",
      description: `${device?.name} has been ${device?.active ? "deactivated" : "activated"}`,
    })
  }

  const handleDeleteDevice = () => {
    if (!deleteDeviceId) return

    const deviceName = devices.find((d) => d.id === deleteDeviceId)?.name

    setDevices(devices.filter((device) => device.id !== deleteDeviceId))
    setDeleteDeviceId(null)

    toast({
      title: "Device removed",
      description: `${deviceName} has been removed from your devices`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle>Connected Devices</CardTitle>
            <CardDescription>Manage your health monitoring devices</CardDescription>
          </div>
          <Button>Add New Device</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {devices.map((device) => (
            <div
              key={device.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border p-4"
            >
              <div className="flex items-start gap-4">
                <div className={cn("rounded-full p-2", device.status === "connected" ? "bg-green-100" : "bg-muted")}>
                  {device.type === "temperature" && <Thermometer className="h-5 w-5 text-primary" />}
                  {device.type === "heart-rate" && <Heart className="h-5 w-5 text-primary" />}
                  {device.type === "multi" && <Smartphone className="h-5 w-5 text-primary" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{device.name}</h3>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        device.status === "connected" && "bg-green-50 text-green-600 border-green-200",
                        device.status === "disconnected" && "bg-red-50 text-red-600 border-red-200",
                        device.status === "pairing" && "bg-blue-50 text-blue-600 border-blue-200",
                      )}
                    >
                      {device.status === "connected" && "Connected"}
                      {device.status === "disconnected" && "Disconnected"}
                      {device.status === "pairing" && "Pairing"}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Battery className="h-3 w-3" />
                      <span>{device.battery}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bluetooth className="h-3 w-3" />
                      <span>Bluetooth</span>
                    </div>
                    <div>Last sync: {device.lastSync}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={device.active}
                    onCheckedChange={() => toggleDeviceActive(device.id)}
                    disabled={device.status === "disconnected"}
                  />
                  <span className="text-sm">{device.active ? "Active" : "Inactive"}</span>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Edit Device</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive" onClick={() => setDeleteDeviceId(device.id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Remove Device</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!deleteDeviceId} onOpenChange={(open) => !open && setDeleteDeviceId(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Remove Device</DialogTitle>
              <DialogDescription>
                Are you sure you want to remove this device? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteDeviceId(null)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteDevice}>
                Remove Device
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

