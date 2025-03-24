import { Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ShareHeader() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <Share2 className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Share Health Data</h1>
              <p className="text-muted-foreground">
                Share your health data with family members or healthcare providers
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

