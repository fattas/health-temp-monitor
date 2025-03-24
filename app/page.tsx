import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { HealthMetrics } from "@/components/dashboard/health-metrics"
import { HealthStatus } from "@/components/dashboard/health-status"
import { RealtimeCharts } from "@/components/dashboard/realtime-charts"
import { MonitoringControls } from "@/components/dashboard/monitoring-controls"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentAlerts } from "@/components/dashboard/recent-alerts"

export default function DashboardPage() {
  return (
    <div className="p-3 space-y-3">
      <DashboardHeader />

      <div className="grid grid-cols-2 gap-3">
        <HealthMetrics />
      </div>

      <div className="space-y-3">
        <RealtimeCharts />
        <HealthStatus />
        <MonitoringControls />
      </div>

      <div className="space-y-3">
        <QuickActions />
        <RecentAlerts />
      </div>
    </div>
  )
}

