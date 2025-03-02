"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, MessageSquare, Settings, Bell, Home, ChevronDown, ChevronRight, X, Menu } from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    hobbies: true,
  })

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false)
  }, [])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:sticky top-[3.5rem] z-40 md:z-0
        w-64 md:w-64 shrink-0
        h-[calc(100vh-3.5rem)] md:h-[calc(100vh-3.5rem)]
        border-r border-border
        bg-background
        overflow-y-auto
        transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="p-4 space-y-4">
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                isActive("/dashboard") ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary/80"
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>

            <Link
              href="/dashboard/events"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                isActive("/dashboard/events") ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary/80"
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </Link>

            <Link
              href="/dashboard/threads"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                isActive("/dashboard/threads") ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary/80"
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Threads</span>
            </Link>

            <Link
              href="/dashboard/notifications"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                isActive("/dashboard/notifications")
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-secondary/80"
              }`}
            >
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
              <span className="ml-auto bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">3</span>
            </Link>

            <Link
              href="/dashboard/profile"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                isActive("/dashboard/profile") ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary/80"
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Profile Settings</span>
            </Link>
          </nav>

          <div className="pt-4 border-t border-border">
            <button
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary/80"
              onClick={() => toggleCategory("hobbies")}
            >
              <span>My Hobbies</span>
              {expandedCategories.hobbies ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>

            {expandedCategories.hobbies && (
              <div className="mt-1 ml-4 space-y-1">
                <Link
                  href="/dashboard/hobbies/gaming"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-secondary/80"
                >
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span>Gaming</span>
                </Link>
                <Link
                  href="/dashboard/hobbies/music"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-secondary/80"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  <span>Music</span>
                </Link>
                <Link
                  href="/dashboard/hobbies/running"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-secondary/80"
                >
                  <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                  <span>Running</span>
                </Link>
                <Link
                  href="/dashboard/hobbies/gym"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-secondary/80"
                >
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  <span>Gym</span>
                </Link>
                <Link
                  href="/dashboard/hobbies/esports"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-secondary/80"
                >
                  <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                  <span>Esports</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        className="fixed bottom-4 right-4 md:hidden z-50 bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </>
  )
}

