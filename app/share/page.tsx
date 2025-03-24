import { ShareHeader } from "@/components/share/share-header"
import { ShareLinks } from "@/components/share/share-links"
import { ShareSettings } from "@/components/share/share-settings"
import { SharedUsers } from "@/components/share/shared-users"

export default function SharePage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <ShareHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ShareLinks />
          <SharedUsers />
        </div>
        <div>
          <ShareSettings />
        </div>
      </div>
    </div>
  )
}

