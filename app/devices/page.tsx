import { DevicesHeader } from "@/components/devices/devices-header"
import { DevicesList } from "@/components/devices/devices-list"
import { DeviceSetup } from "@/components/devices/device-setup"
import { DeviceStatus } from "@/components/devices/device-status"

export default function DevicesPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <DevicesHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DevicesList />
          <DeviceSetup />
        </div>
        <div>
          <DeviceStatus />
        </div>
      </div>
    </div>
  )
}

