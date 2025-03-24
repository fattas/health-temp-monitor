import { Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SettingsHeader() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-3">
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4 text-primary" />
          <div>
            <h1 className="text-lg font-bold">Pengaturan</h1>
            <p className="text-xs text-muted-foreground">Sesuaikan pengalaman pemantauan kesehatan Anda</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

