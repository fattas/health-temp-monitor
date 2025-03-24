"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function NotificationChannels() {
  const { toast } = useToast()
  const [emailEnabled, setEmailEnabled] = useState(true)
  const [smsEnabled, setSmsEnabled] = useState(false)
  const [pushEnabled, setPushEnabled] = useState(true)
  const [telegramEnabled, setTelegramEnabled] = useState(false)

  const [email, setEmail] = useState("john@example.com")
  const [phone, setPhone] = useState("")
  const [telegramId, setTelegramId] = useState("")

  const handleSaveChannels = () => {
    toast({
      title: "Saluran notifikasi disimpan",
      description: "Preferensi notifikasi Anda telah diperbarui",
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-base">Saluran Notifikasi</CardTitle>
        <CardDescription className="text-sm">Pilih cara Anda menerima notifikasi</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 mt-0.5 text-primary" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="text-sm">
                  Notifikasi Email
                </Label>
                <Switch id="email-notifications" checked={emailEnabled} onCheckedChange={setEmailEnabled} />
              </div>
              <Input
                placeholder="Alamat email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!emailEnabled}
                className="text-sm"
              />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MessageSquare className="h-5 w-5 mt-0.5 text-primary" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications" className="text-sm">
                  Notifikasi SMS
                </Label>
                <Switch id="sms-notifications" checked={smsEnabled} onCheckedChange={setSmsEnabled} />
              </div>
              <Input
                placeholder="Nomor telepon"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={!smsEnabled}
                className="text-sm"
              />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Smartphone className="h-5 w-5 mt-0.5 text-primary" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications" className="text-sm">
                  Notifikasi Push
                </Label>
                <Switch id="push-notifications" checked={pushEnabled} onCheckedChange={setPushEnabled} />
              </div>
              <p className="text-sm text-muted-foreground">Terima notifikasi di perangkat ini</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Bell className="h-5 w-5 mt-0.5 text-primary" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="telegram-notifications" className="text-sm">
                  Notifikasi Telegram
                </Label>
                <Switch id="telegram-notifications" checked={telegramEnabled} onCheckedChange={setTelegramEnabled} />
              </div>
              <Input
                placeholder="ID Telegram atau username"
                value={telegramId}
                onChange={(e) => setTelegramId(e.target.value)}
                disabled={!telegramEnabled}
                className="text-sm"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <h4 className="text-sm font-medium mb-2">Prioritas Notifikasi</h4>
          <p className="text-sm text-muted-foreground">
            Notifikasi kritis akan dikirim ke semua saluran yang diaktifkan. Notifikasi non-kritis hanya akan dikirim
            melalui notifikasi push.
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleSaveChannels} className="w-full">
          Simpan Pengaturan Notifikasi
        </Button>
      </CardFooter>
    </Card>
  )
}

