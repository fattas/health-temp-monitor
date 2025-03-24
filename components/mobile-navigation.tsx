"use client"

import { usePathname, useRouter } from "next/navigation"
import { Activity, Bell, Home, LineChart, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNavigation() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { icon: Home, label: "Beranda", path: "/" },
    { icon: Activity, label: "Laporan", path: "/reports" },
    { icon: LineChart, label: "Analitik", path: "/analytics" },
    { icon: Bell, label: "Notifikasi", path: "/alerts" },
    { icon: Settings, label: "Pengaturan", path: "/settings" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background z-50 max-w-md mx-auto">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.path

          return (
            <button
              key={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full",
                "text-xs space-y-1 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => router.push(item.path)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

