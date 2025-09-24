"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AppSidebar } from '@/components/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="flex h-full">
          <aside className="w-64 border-r p-4 space-y-2">
            <Button asChild variant="ghost" className={`w-full justify-start ${pathname === "/settings" ? "bg-accent text-accent-foreground" : ""}`}>
              <Link href="/settings">Organization</Link>
            </Button>
            <Button asChild variant="ghost" className={`w-full justify-start ${pathname === "/settings/employee" ? "bg-accent text-accent-foreground" : ""}`}>
              <Link href="/settings/employee">Employee</Link>
            </Button>
            <Button asChild variant="ghost" className={`w-full justify-start ${pathname === "/settings/permission" ? "bg-accent text-accent-foreground" : ""}`}>
              <Link href="/settings/permission">Permission</Link>
            </Button>
            <Button asChild variant="ghost" className={`w-full justify-start ${pathname === "/settings/notification" ? "bg-accent text-accent-foreground" : ""}`}>
              <Link href="/settings/notification">Notification</Link>
            </Button>
          </aside>
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}