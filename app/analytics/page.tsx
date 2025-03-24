import { AnalyticsHeader } from "@/components/analytics/analytics-header"
import { HealthTrends } from "@/components/analytics/health-trends"
import { HealthPatterns } from "@/components/analytics/health-patterns"
import { HealthCorrelations } from "@/components/analytics/health-correlations"
import { HealthPredictions } from "@/components/analytics/health-predictions"

export default function AnalyticsPage() {
  return (
    <div className="p-3 space-y-3">
      <AnalyticsHeader />
      <HealthTrends />
      <HealthPatterns />
      <HealthCorrelations />
      <HealthPredictions />
    </div>
  )
}

