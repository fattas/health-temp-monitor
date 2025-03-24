import { SettingsHeader } from "@/components/settings/settings-header"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { AppSettings } from "@/components/settings/app-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { DataSettings } from "@/components/settings/data-settings"

export default function SettingsPage() {
  return (
    <div className="p-3 space-y-3">
      <SettingsHeader />
      <ProfileSettings />
      <AppSettings />
      <NotificationSettings />
      <DataSettings />
    </div>
  )
}

