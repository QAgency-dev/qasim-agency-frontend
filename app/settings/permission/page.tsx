"use client"

import { Tag } from 'antd';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"

const roles = [
  {
    name: "Administrator",
    description: "Full system access and management",
    permissions: ["Full system access"],
    tag: "admin",
  },
  {
    name: "Recruiter",
    description: "Manage creator recruitment and onboarding",
    permissions: ["Creators", "Recruitment"],
    tag: "recruiter",
  },
  {
    name: "Trainer",
    description: "Conduct training sessions and evaluations",
    permissions: ["Training", "Attendance"],
    tag: "trainer",
  },
  {
    name: "Operations",
    description: "Monitor performance and manage escalations",
    permissions: ["Operations", "Escalations"],
    tag: "ops",
  },
  {
    name: "Support",
    description: "Handle creator support tickets and inquiries",
    permissions: ["Support Tickets"],
    tag: "support",
  },
  {
    name: "Finance",
    description: "Manage payouts and financial operations",
    permissions: ["Payouts", "Financial Reports"],
    tag: "finance",
  },
  {
    name: "Compliance",
    description: "Monitor policy compliance and violations",
    permissions: ["Violations", "Policies"],
    tag: "compliance",
  },
  {
    name: "Viewer",
    description: "Read-only access to reports and data",
    permissions: ["Read-only access"],
    tag: "viewer",
  },
]

const ITEMS_PER_PAGE = 4

export default function PermissionSettingsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(roles.length / ITEMS_PER_PAGE)

  const currentRoles = roles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Permission Settings</h2>
      <div className="grid gap-4">
        {currentRoles.map((role) => (
          <Card key={role.tag}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{role.name}</span>
                <Tag bordered={false} color="purple">{role.tag}</Tag>
              </CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <Tag color="default" key={permission}>{permission}</Tag>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(Math.max(1, currentPage - 1))
              }}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(i + 1)
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}