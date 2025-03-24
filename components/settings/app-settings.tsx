"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Moon, Sun } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function AppSettings() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    theme: "light",
    autoRefresh: true,
    refreshInterval: "30",
    offlineMode: false,
    dataCompression: true,
    animations: true,
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: typeof settings[setting] === "boolean" ? !settings[setting] : settings[setting],
    })
  }

  const handleChange = (setting: keyof typeof settings, value: string) => {
    setSettings({
      ...settings,
      [setting]: value,
    })
  }

  const handleSaveSettings = () => {
    toast({
      title: "Pengaturan disimpan",
      description: "Pengaturan aplikasi Anda telah diperbarui",
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-sm">Pengaturan Aplikasi</CardTitle>
        <CardDescription className="text-xs">Sesuaikan perilaku dan tampilan aplikasi</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {settings.theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <Label htmlFor="theme" className="text-sm">
              Tema
            </Label>
          </div>
          <Select value={settings.theme} onValueChange={(value) => handleChange("theme", value)}>
            <SelectTrigger id="theme" className="w-[110px] h-9 text-sm">
              <SelectValue placeholder="Pilih tema" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light" className="text-sm">
                Terang
              </SelectItem>
              <SelectItem value="dark" className="text-sm">
                Gelap
              </SelectItem>
              <SelectItem value="system" className="text-sm">
                Sistem
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-refresh" className="text-sm">
            Penyegaran Otomatis
          </Label>
          <Switch
            id="auto-refresh"
            checked={settings.autoRefresh}
            onCheckedChange={() => handleToggle("autoRefresh")}
          />
        </div>

        {settings.autoRefresh && (
          <div className="flex items-center justify-between">
            <Label htmlFor="refresh-interval" className="text-sm">
              Interval Penyegaran
            </Label>
            <Select value={settings.refreshInterval} onValueChange={(value) => handleChange("refreshInterval", value)}>
              <SelectTrigger id="refresh-interval" className="w-[110px] h-9 text-sm">
                <SelectValue placeholder="Pilih interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10" className="text-sm">
                  10 detik
                </SelectItem>
                <SelectItem value="30" className="text-sm">
                  30 detik
                </SelectItem>
                <SelectItem value="60" className="text-sm">
                  1 menit
                </SelectItem>
                <SelectItem value="300" className="text-sm">
                  5 menit
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="flex items-center justify-between">
          <Label htmlFor="offline-mode" className="text-sm">
            Mode Offline
          </Label>
          <Switch
            id="offline-mode"
            checked={settings.offlineMode}
            onCheckedChange={() => handleToggle("offlineMode")}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="data-compression" className="text-sm">
            Kompresi Data
          </Label>
          <Switch
            id="data-compression"
            checked={settings.dataCompression}
            onCheckedChange={() => handleToggle("dataCompression")}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="animations" className="text-sm">
            Animasi
          </Label>
          <Switch id="animations" checked={settings.animations} onCheckedChange={() => handleToggle("animations")} />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleSaveSettings} className="w-full h-9 text-sm mx-auto max-w-[95%]">
          Simpan Pengaturan
        </Button>
      </CardFooter>
    </Card>
  )
}

