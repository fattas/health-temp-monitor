import { AlertsHeader } from "@/components/alerts/alerts-header"
import { AlertSettings } from "@/components/alerts/alert-settings"
import { NotificationChannels } from "@/components/alerts/notification-channels"
import { AlertHistory } from "@/components/alerts/alert-history"

export default function AlertsPage() {
  return (
    <div className="p-4 space-y-4">
      <AlertsHeader />

      <div className="space-y-4">
        <AlertSettings />
        <NotificationChannels />
        <AlertHistory />
      </div>
    </div>
  )
}

