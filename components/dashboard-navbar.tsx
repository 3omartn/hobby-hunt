"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Compass, Bell, User, Menu, X, Search, LogOut } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DashboardNavbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/")
  }

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/login")
  }

  return (
    <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/dashboard" className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Hobby Hunt</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input type="search" placeholder="Search events, threads, hobbies..." className="pl-10 w-full" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/dashboard/notifications" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
          </Link>

          <div className="relative">
            <button className="flex items-center gap-2" onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border overflow-hidden">
                <div className="py-2">
                  <div className="px-4 py-2 text-sm font-medium border-b border-border">
                    John Doe
                    <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                  </div>
                  <Link
                    href="/dashboard/profile"
                    className="block px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <Link
                    href="/dashboard/notifications"
                    className="block px-4 py-2 text-sm hover:bg-accent"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Notifications
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-destructive hover:bg-accent"
                    onClick={handleLogout}
                  >
                    <div className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      <span>Sign out</span>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
          <Button onClick={handleSignOut} variant="ghost">
            Sign Out
          </Button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input type="search" placeholder="Search events, threads, hobbies..." className="pl-10 w-full" />
        </div>
      </div>
    </header>
  )
}

