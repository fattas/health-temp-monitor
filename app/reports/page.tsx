import { ReportsHeader } from "@/components/reports/reports-header"
import { HealthSummary } from "@/components/reports/health-summary"
import { HealthInsights } from "@/components/reports/health-insights"
import { HealthRecommendations } from "@/components/reports/health-recommendations"
import { HealthTrends } from "@/components/reports/health-trends"

export default function ReportsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <ReportsHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <HealthSummary />
          <HealthTrends />
        </div>
        <div className="space-y-6">
          <HealthInsights />
          <HealthRecommendations />
        </div>
      </div>
    </div>
  )
}

