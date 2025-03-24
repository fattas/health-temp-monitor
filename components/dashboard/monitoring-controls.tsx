"use client"

import { useState } from "react"
import { AlertCircle, Play, Power, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function MonitoringControls() {
  const { toast } = useToast()
  const [isMonitoring, setIsMonitoring] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)

    toast({
      title: isMonitoring ? "Pemantauan dihentikan" : "Pemantauan dimulai",
      description: isMonitoring ? "Pemantauan kesehatan telah dijeda" : "Pemantauan kesehatan real-time sekarang aktif",
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Kontrol Pemantauan</CardTitle>
        <CardDescription className="text-xs">Kontrol perangkat pemantauan kesehatan Anda</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Power className={`h-3.5 w-3.5 ${isMonitoring ? "text-green-500" : "text-muted-foreground"}`} />
            <span className="text-xs">Status Pemantauan</span>
          </div>
          <span className={`text-xs font-medium ${isMonitoring ? "text-green-500" : "text-muted-foreground"}`}>
            {isMonitoring ? "Aktif" : "Tidak Aktif"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="h-3.5 w-3.5" />
            <span className="text-xs">Notifikasi</span>
          </div>
          <Switch
            checked={notificationsEnabled}
            onCheckedChange={setNotificationsEnabled}
            className="h-3.5 w-6 data-[state=checked]:bg-primary"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Settings className="h-3.5 w-3.5" />
            <span className="text-xs">Pengaturan Perangkat</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 text-[10px]">
                Konfigurasi
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-base">Pengaturan Perangkat</DialogTitle>
                <DialogDescription className="text-xs">
                  Konfigurasi pengaturan perangkat pemantauan kesehatan Anda
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 py-3">
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="sampling-rate" className="col-span-2 text-xs">
                    Tingkat Sampling
                  </Label>
                  <Select defaultValue="5">
                    <SelectTrigger className="col-span-2 h-8 text-xs">
                      <SelectValue placeholder="Pilih" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1" className="text-xs">
                        Setiap 1 detik
                      </SelectItem>
                      <SelectItem value="5" className="text-xs">
                        Setiap 5 detik
                      </SelectItem>
                      <SelectItem value="10" className="text-xs">
                        Setiap 10 detik
                      </SelectItem>
                      <SelectItem value="30" className="text-xs">
                        Setiap 30 detik
                      </SelectItem>
                      <SelectItem value="60" className="text-xs">
                        Setiap menit
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="temp-threshold" className="col-span-2 text-xs">
                    Ambang Suhu (°C)
                  </Label>
                  <Input id="temp-threshold" defaultValue="37.5" className="col-span-2 h-8 text-xs" />
                </div>
                <div className="grid grid-cols-4 items-center gap-2">
                  <Label htmlFor="hr-threshold" className="col-span-2 text-xs">
                    Ambang Detak Jantung (BPM)
                  </Label>
                  <Input id="hr-threshold" defaultValue="100" className="col-span-2 h-8 text-xs" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="text-xs">
                  Simpan perubahan
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button
          className="w-full h-8 text-xs"
          variant={isMonitoring ? "destructive" : "default"}
          onClick={toggleMonitoring}
        >
          {isMonitoring ? "Hentikan Pemantauan" : "Mulai Pemantauan"}
          {isMonitoring ? null : <Play className="ml-1.5 h-3.5 w-3.5" />}
        </Button>
      </CardFooter>
    </Card>
  )
}

