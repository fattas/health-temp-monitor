import { Activity, Bell, Download, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  const actions = [
    {
      title: "Buat Laporan Kesehatan",
      description: "Buat analisis kesehatan komprehensif",
      icon: Activity,
      variant: "default" as const,
    },
    {
      title: "Atur Notifikasi",
      description: "Siapkan notifikasi kesehatan kustom",
      icon: Bell,
      variant: "outline" as const,
    },
    {
      title: "Ekspor Data",
      description: "Unduh data kesehatan Anda sebagai CSV",
      icon: Download,
      variant: "outline" as const,
    },
    {
      title: "Bagikan Data Kesehatan",
      description: "Bagikan dengan keluarga atau dokter",
      icon: Share2,
      variant: "outline" as const,
    },
  ]

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-3">
        <CardTitle className="text-sm">Tindakan Cepat</CardTitle>
        <CardDescription className="text-xs">Tugas dan tindakan umum</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="grid grid-cols-1 gap-2">
          {actions.map((action) => (
            <Button key={action.title} variant={action.variant} className="h-auto justify-start gap-2 p-2 text-xs">
              <action.icon className="h-4 w-4" />
              <div className="flex flex-col items-start">
                <span>{action.title}</span>
                <span className="text-[10px] text-muted-foreground">{action.description}</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

