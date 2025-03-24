import { HistoryHeader } from "@/components/history/history-header"
import { HistoryCharts } from "@/components/history/history-charts"
import { HistoryTable } from "@/components/history/history-table"
import { HistoryFilters } from "@/components/history/history-filters"

export default function HistoryPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <HistoryHeader />

      <div className="grid grid-cols-1 gap-6">
        <HistoryFilters />
        <HistoryCharts />
        <HistoryTable />
      </div>
    </div>
  )
}

