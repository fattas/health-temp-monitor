"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Download, Trash2 } from "lucide-react"
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

export function DataSettings() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    dataRetention: "90",
    autoBackup: true,
    backupFrequency: "weekly",
    dataSharing: false,
    anonymousAnalytics: true,
  })

  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

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
      title: "Pengaturan data disimpan",
      description: "Preferensi pengelolaan data Anda telah diperbarui",
    })
  }

  const handleExportData = () => {
    toast({
      title: "Ekspor data dimulai",
      description: "Data kesehatan Anda sedang disiapkan untuk diunduh",
    })
  }

  const handleDeleteData = () => {
    setShowDeleteDialog(false)

    toast({
      title: "Data dihapus",
      description: "Data kesehatan Anda telah dihapus secara permanen",
      variant: "destructive",
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-sm">Pengelolaan Data</CardTitle>
        <CardDescription className="text-xs">Kontrol data kesehatan Anda</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="data-retention" className="text-sm">
            Retensi Data
          </Label>
          <Select value={settings.dataRetention} onValueChange={(value) => handleChange("dataRetention", value)}>
            <SelectTrigger id="data-retention" className="w-[110px] h-9 text-sm">
              <SelectValue placeholder="Pilih periode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30" className="text-sm">
                30 hari
              </SelectItem>
              <SelectItem value="90" className="text-sm">
                90 hari
              </SelectItem>
              <SelectItem value="180" className="text-sm">
                6 bulan
              </SelectItem>
              <SelectItem value="365" className="text-sm">
                1 tahun
              </SelectItem>
              <SelectItem value="forever" className="text-sm">
                Selamanya
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-backup" className="text-sm">
            Cadangan Otomatis
          </Label>
          <Switch id="auto-backup" checked={settings.autoBackup} onCheckedChange={() => handleToggle("autoBackup")} />
        </div>

        {settings.autoBackup && (
          <div className="flex items-center justify-between">
            <Label htmlFor="backup-frequency" className="text-sm">
              Frekuensi Cadangan
            </Label>
            <Select value={settings.backupFrequency} onValueChange={(value) => handleChange("backupFrequency", value)}>
              <SelectTrigger id="backup-frequency" className="w-[110px] h-9 text-sm">
                <SelectValue placeholder="Pilih frekuensi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily" className="text-sm">
                  Harian
                </SelectItem>
                <SelectItem value="weekly" className="text-sm">
                  Mingguan
                </SelectItem>
                <SelectItem value="monthly" className="text-sm">
                  Bulanan
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="flex items-center justify-between">
          <Label htmlFor="data-sharing" className="text-sm">
            Berbagi Data
          </Label>
          <Switch
            id="data-sharing"
            checked={settings.dataSharing}
            onCheckedChange={() => handleToggle("dataSharing")}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="anonymous-analytics" className="text-sm">
            Analitik Anonim
          </Label>
          <Switch
            id="anonymous-analytics"
            checked={settings.anonymousAnalytics}
            onCheckedChange={() => handleToggle("anonymousAnalytics")}
          />
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button
            variant="outline"
            className="w-full gap-1.5 h-9 text-sm mx-auto max-w-[95%]"
            onClick={handleExportData}
          >
            <Download className="h-4 w-4" />
            Ekspor Semua Data Kesehatan
          </Button>

          <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full gap-1.5 h-9 text-sm mx-auto max-w-[95%] text-destructive border-destructive/30 hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4" />
                Hapus Semua Data Kesehatan
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] rounded-lg">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-base">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  Hapus Semua Data Kesehatan
                </DialogTitle>
                <DialogDescription className="text-sm">
                  Tindakan ini tidak dapat dibatalkan. Ini akan menghapus secara permanen semua data kesehatan Anda dan
                  menghapusnya dari server kami.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="gap-2 sm:gap-0">
                <Button variant="outline" onClick={() => setShowDeleteDialog(false)} className="text-sm">
                  Batal
                </Button>
                <Button variant="destructive" onClick={handleDeleteData} className="text-sm">
                  Hapus Semua Data
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleSaveSettings} className="w-full h-9 text-sm mx-auto max-w-[95%]">
          Simpan Pengaturan Data
        </Button>
      </CardFooter>
    </Card>
  )
}

