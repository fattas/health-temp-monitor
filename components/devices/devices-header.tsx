import { Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function DevicesHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Device Management</h1>
              <p className="text-muted-foreground">Manage your connected health monitoring devices</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

