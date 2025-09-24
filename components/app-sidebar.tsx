"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconHome
} from "@tabler/icons-react"
import { IconHeartHandshake } from '@tabler/icons-react';
import { IconTransform } from '@tabler/icons-react';
import { IconUserPlus } from '@tabler/icons-react';
import { IconMoodSpark } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconInfoTriangle } from '@tabler/icons-react';
import { IconShield } from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconHome,
    },
    {
      title: "Creators",
      url: "/creators",
      icon: IconUsers,
    },
    {
      title: "Recruitment",
      url: "/recruitment",
      icon: IconUserPlus,
    },
    {
      title: "Training",
      url: "/training",
      icon: IconTransform,
    },
    {
      title: "Operations",
      url: "/operations",
      icon: IconMoodSpark,
    },
    {
      title: "Escalation",
      url: "/escalation",
      icon: IconInfoTriangle,
    },
    {
      title: "Finance",
      url: "/finance",
      icon: IconCash,
    },
    {
      title: "Compliance",
      url: "/compliance",
      icon: IconShield,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: IconFileDescription,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Support",
      url: "/support",
      icon: IconHeartHandshake,
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <span className="text-base font-semibold">Qasim Agency</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
