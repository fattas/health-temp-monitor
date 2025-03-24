import { Bell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AlertsHeader() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 text-primary" />
          <div>
            <h1 className="text-lg font-bold">Notifikasi & Peringatan</h1>
            <p className="text-sm text-muted-foreground">Konfigurasi notifikasi kesehatan dan preferensi peringatan</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

