"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Menu,
  X,
  LogOut,
  User,
  Settings,
  MessageSquare,
  Calendar,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the current path is a signed-in page
  useEffect(() => {
    const signedInPaths = ["/home", "/threads", "/profile", "/notifications"];
    setIsLoggedIn(signedInPaths.some((path) => pathname.startsWith(path)));
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-xl">
              Hobby Hunt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/" ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/events"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  Our Events
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/about"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/contact"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  Contact Us
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/home"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/home"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/threads"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/threads"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  Threads
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Desktop Auth/User Menu */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        John Doe
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <Link href="/home">My Events</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <Link href="/threads">My Threads</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <Link href="/profile">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <Link href="/">Log out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden bg-background border-t">
          <div className="relative z-20 grid gap-6 rounded-md p-4">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {!isLoggedIn ? (
                <>
                  <Link
                    href="/"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/events"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={toggleMenu}
                  >
                    Our Events
                  </Link>
                  <Link
                    href="/about"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                  <div className="mt-4 flex flex-col gap-2">
                    <Link href="/login" onClick={toggleMenu}>
                      <Button variant="outline" className="w-full">
                        Log in
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={toggleMenu}>
                      <Button className="w-full">Sign up</Button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/home"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/threads"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={toggleMenu}
                  >
                    Threads
                  </Link>
                  <Link
                    href="/profile"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={toggleMenu}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/notifications"
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                    onClick={toggleMenu}
                  >
                    Notifications
                  </Link>
                  <div className="mt-4">
                    <Link href="/" onClick={toggleMenu}>
                      <Button variant="outline" className="w-full">
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
