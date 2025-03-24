"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function AlertSettings() {
  const { toast } = useToast()
  const [temperatureEnabled, setTemperatureEnabled] = useState(true)
  const [heartRateEnabled, setHeartRateEnabled] = useState(true)
  const [activityEnabled, setActivityEnabled] = useState(false)

  const [temperatureRange, setTemperatureRange] = useState([36.1, 37.5])
  const [heartRateRange, setHeartRateRange] = useState([50, 100])
  const [activityThreshold, setActivityThreshold] = useState([20])

  const handleSaveSettings = () => {
    toast({
      title: "Pengaturan notifikasi disimpan",
      description: "Ambang batas notifikasi Anda telah diperbarui",
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-base">Pengaturan Notifikasi</CardTitle>
        <CardDescription className="text-sm">Konfigurasi ambang batas untuk notifikasi kesehatan</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Tabs defaultValue="temperature">
          <TabsList className="mb-4">
            <TabsTrigger value="temperature" className="text-xs">
              Suhu
            </TabsTrigger>
            <TabsTrigger value="heart-rate" className="text-xs">
              Detak Jantung
            </TabsTrigger>
            <TabsTrigger value="activity" className="text-xs">
              Aktivitas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="temperature" className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="temperature-alerts" className="text-sm">
                Notifikasi Suhu
              </Label>
              <Switch id="temperature-alerts" checked={temperatureEnabled} onCheckedChange={setTemperatureEnabled} />
            </div>

            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <Label className="text-sm">Rentang Suhu (°C)</Label>
                  <span className="text-sm">
                    {temperatureRange[0]}°C - {temperatureRange[1]}°C
                  </span>
                </div>
                <Slider
                  defaultValue={temperatureRange}
                  min={35}
                  max={40}
                  step={0.1}
                  onValueChange={setTemperatureRange}
                  disabled={!temperatureEnabled}
                />
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="text-sm font-medium mb-2">Kondisi Notifikasi</h4>
                <ul className="text-sm space-y-1">
                  <li>• Di bawah {temperatureRange[0]}°C: Notifikasi suhu rendah</li>
                  <li>• Di atas {temperatureRange[1]}°C: Notifikasi suhu tinggi</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="heart-rate" className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="heart-rate-alerts" className="text-sm">
                Notifikasi Detak Jantung
              </Label>
              <Switch id="heart-rate-alerts" checked={heartRateEnabled} onCheckedChange={setHeartRateEnabled} />
            </div>

            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <Label className="text-sm">Rentang Detak Jantung (BPM)</Label>
                  <span className="text-sm">
                    {heartRateRange[0]} BPM - {heartRateRange[1]} BPM
                  </span>
                </div>
                <Slider
                  defaultValue={heartRateRange}
                  min={30}
                  max={200}
                  step={1}
                  onValueChange={setHeartRateRange}
                  disabled={!heartRateEnabled}
                />
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="text-sm font-medium mb-2">Kondisi Notifikasi</h4>
                <ul className="text-sm space-y-1">
                  <li>• Di bawah {heartRateRange[0]} BPM: Notifikasi detak jantung rendah</li>
                  <li>• Di atas {heartRateRange[1]} BPM: Notifikasi detak jantung tinggi</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="activity-alerts" className="text-sm">
                Notifikasi Ketidakaktifan
              </Label>
              <Switch id="activity-alerts" checked={activityEnabled} onCheckedChange={setActivityEnabled} />
            </div>

            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <Label className="text-sm">Ambang Ketidakaktifan (jam)</Label>
                  <span className="text-sm">{activityThreshold[0]} jam</span>
                </div>
                <Slider
                  defaultValue={activityThreshold}
                  min={1}
                  max={24}
                  step={1}
                  onValueChange={setActivityThreshold}
                  disabled={!activityEnabled}
                />
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h4 className="text-sm font-medium mb-2">Kondisi Notifikasi</h4>
                <ul className="text-sm space-y-1">
                  <li>• Tidak ada aktivitas terdeteksi selama {activityThreshold[0]} jam</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleSaveSettings} className="w-full">
          Simpan Pengaturan Notifikasi
        </Button>
      </CardFooter>
    </Card>
  )
}

