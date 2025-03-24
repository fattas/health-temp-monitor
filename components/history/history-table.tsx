"use client"

import { useState } from "react"
import { Download, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Generate sample data for the table
const generateTableData = (count = 50) => {
  const data = []
  const now = new Date()

  for (let i = 0; i < count; i++) {
    const date = new Date(now)
    date.setHours(now.getHours() - i)

    // Generate random temperature between 36.1 and 37.5
    const temp = (36.1 + Math.random() * 1.4).toFixed(1)
    const tempStatus = Number.parseFloat(temp) > 37.2 ? "high" : "normal"

    // Generate random heart rate between 60 and 110
    const heartRate = Math.floor(60 + Math.random() * 50)
    const hrStatus = heartRate > 100 ? "high" : heartRate < 60 ? "low" : "normal"

    // Generate random activity level between 0 and 100
    const activity = Math.floor(Math.random() * 100)

    data.push({
      id: i.toString(),
      timestamp: date.toISOString(),
      formattedDate: date.toLocaleDateString(),
      formattedTime: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      temperature: Number.parseFloat(temp),
      temperatureStatus: tempStatus,
      heartRate: heartRate,
      heartRateStatus: hrStatus,
      activity: activity,
    })
  }

  return data
}

export function HistoryTable() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 10
  const allData = generateTableData(50)
  const data = allData.slice((page - 1) * itemsPerPage, page * itemsPerPage)
  const totalPages = Math.ceil(allData.length / itemsPerPage)

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle>Health Data Log</CardTitle>
            <CardDescription>Detailed record of your health measurements</CardDescription>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Temperature</TableHead>
              <TableHead>Heart Rate</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.formattedDate}</TableCell>
                <TableCell>{row.formattedTime}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{row.temperature}°C</span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        row.temperatureStatus === "high" && "bg-red-50 text-red-600 border-red-200",
                        row.temperatureStatus === "normal" && "bg-green-50 text-green-600 border-green-200",
                        row.temperatureStatus === "low" && "bg-blue-50 text-blue-600 border-blue-200",
                      )}
                    >
                      {row.temperatureStatus === "high" && "High"}
                      {row.temperatureStatus === "normal" && "Normal"}
                      {row.temperatureStatus === "low" && "Low"}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{row.heartRate} BPM</span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        row.heartRateStatus === "high" && "bg-red-50 text-red-600 border-red-200",
                        row.heartRateStatus === "normal" && "bg-green-50 text-green-600 border-green-200",
                        row.heartRateStatus === "low" && "bg-blue-50 text-blue-600 border-blue-200",
                      )}
                    >
                      {row.heartRateStatus === "high" && "High"}
                      {row.heartRateStatus === "normal" && "Normal"}
                      {row.heartRateStatus === "low" && "Low"}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{row.activity}%</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Export Entry</DropdownMenuItem>
                      <DropdownMenuItem>Add Note</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage(Math.max(1, page - 1))}
                  className={page === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                let pageNum = i + 1

                // Adjust page numbers for pagination with ellipsis
                if (totalPages > 5) {
                  if (page > 3 && page < totalPages - 1) {
                    pageNum = page - 2 + i
                  } else if (page >= totalPages - 1) {
                    pageNum = totalPages - 4 + i
                  }
                }

                return (
                  <PaginationItem key={i}>
                    <PaginationLink onClick={() => setPage(pageNum)} isActive={page === pageNum}>
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}

              {totalPages > 5 && page < totalPages - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {totalPages > 5 && page < totalPages - 1 && (
                <PaginationItem>
                  <PaginationLink onClick={() => setPage(totalPages)}>{totalPages}</PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  )
}

