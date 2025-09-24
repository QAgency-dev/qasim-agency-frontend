"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { Flex, Splitter, Typography } from 'antd';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);

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
        <SiteHeader />

        <Splitter className="flex-1" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Splitter.Panel defaultSize="20%" min="15%" max="30%">
            <aside className="w-full border-r p-4 space-y-2 overflow-hidden">
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
          </Splitter.Panel>
          <Splitter.Panel>
            <main className="flex-1 p-4 overflow-y-auto">
              {children}
            </main>
          </Splitter.Panel>
        </Splitter>
      </SidebarInset>
    </SidebarProvider>
  )
}