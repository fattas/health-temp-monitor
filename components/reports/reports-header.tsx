"use client"

import { Download, FileText, Printer, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ReportsHeader() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl font-bold">Laporan Kesehatan</h1>
            <p className="text-sm text-muted-foreground">Analisis kesehatan berbasis AI dan wawasan</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <Tabs defaultValue="month" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="week" className="text-sm">
                  Mingguan
                </TabsTrigger>
                <TabsTrigger value="month" className="text-sm">
                  Bulanan
                </TabsTrigger>
                <TabsTrigger value="year" className="text-sm">
                  Tahunan
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 h-9 text-sm">
                    <Download className="h-4 w-4" />
                    Ekspor
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-sm">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Ekspor sebagai PDF</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-sm">
                    <Printer className="mr-2 h-4 w-4" />
                    <span>Cetak Laporan</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" className="gap-2 h-9 text-sm">
                <Share2 className="h-4 w-4" />
                Bagikan
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

