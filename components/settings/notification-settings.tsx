"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Mail, MessageSquare, Smartphone } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function NotificationSettings() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    pushEnabled: true,
    emailEnabled: true,
    smsEnabled: false,
    telegramEnabled: false,
    criticalAlertsEnabled: true,
    healthReportsEnabled: true,
    deviceAlertsEnabled: true,
    email: "john@example.com",
    phone: "",
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    })
  }

  const handleSaveSettings = () => {
    toast({
      title: "Pengaturan notifikasi disimpan",
      description: "Preferensi notifikasi Anda telah diperbarui",
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-sm">Notifikasi</CardTitle>
        <CardDescription className="text-xs">Kelola preferensi notifikasi Anda</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Saluran Notifikasi</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-primary" />
              <Label htmlFor="push-notifications" className="text-sm">
                Notifikasi Push
              </Label>
            </div>
            <Switch
              id="push-notifications"
              checked={settings.pushEnabled}
              onCheckedChange={() => handleToggle("pushEnabled")}
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-primary" />
                <Label htmlFor="email-notifications" className="text-sm">
                  Notifikasi Email
                </Label>
              </div>
              <Switch
                id="email-notifications"
                checked={settings.emailEnabled}
                onCheckedChange={() => handleToggle("emailEnabled")}
              />
            </div>
            {settings.emailEnabled && (
              <Input
                placeholder="Alamat email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="h-9 text-sm"
              />
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4 text-primary" />
                <Label htmlFor="sms-notifications" className="text-sm">
                  Notifikasi SMS
                </Label>
              </div>
              <Switch
                id="sms-notifications"
                checked={settings.smsEnabled}
                onCheckedChange={() => handleToggle("smsEnabled")}
              />
            </div>
            {settings.smsEnabled && (
              <Input
                placeholder="Nomor telepon"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="h-9 text-sm"
              />
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Jenis Notifikasi</h3>

          <div className="flex items-center justify-between">
            <Label htmlFor="critical-alerts" className="text-sm">
              Notifikasi Kesehatan Kritis
            </Label>
            <Switch
              id="critical-alerts"
              checked={settings.criticalAlertsEnabled}
              onCheckedChange={() => handleToggle("criticalAlertsEnabled")}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="health-reports" className="text-sm">
              Laporan Kesehatan
            </Label>
            <Switch
              id="health-reports"
              checked={settings.healthReportsEnabled}
              onCheckedChange={() => handleToggle("healthReportsEnabled")}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="device-alerts" className="text-sm">
              Notifikasi Perangkat
            </Label>
            <Switch
              id="device-alerts"
              checked={settings.deviceAlertsEnabled}
              onCheckedChange={() => handleToggle("deviceAlertsEnabled")}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleSaveSettings} className="w-full h-9 text-sm mx-auto max-w-[95%]">
          Simpan Pengaturan Notifikasi
        </Button>
      </CardFooter>
    </Card>
  )
}

