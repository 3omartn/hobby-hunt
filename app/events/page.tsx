import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, MapPin, Users } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventsPage() {
  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Gaming Tournament: League of Legends",
      date: "March 15, 2025",
      location: "Online",
      image: "/placeholder.svg?height=400&width=600",
      category: "Gaming",
      attendees: 128,
      interested: 256,
    },
    {
      id: 2,
      title: "Music Festival: Electronic Beats",
      date: "April 5, 2025",
      location: "Central Park, New York",
      image: "/placeholder.svg?height=400&width=600",
      category: "Music",
      attendees: 350,
      interested: 720,
    },
    {
      id: 3,
      title: "Photography Workshop: Urban Landscapes",
      date: "March 22, 2025",
      location: "Downtown Gallery, Chicago",
      image: "/placeholder.svg?height=400&width=600",
      category: "Photography",
      attendees: 45,
      interested: 112,
    },
    {
      id: 4,
      title: "Book Club: Science Fiction Novels",
      date: "March 18, 2025",
      location: "City Library, Boston",
      image: "/placeholder.svg?height=400&width=600",
      category: "Reading",
      attendees: 28,
      interested: 64,
    },
    {
      id: 5,
      title: "Cooking Class: Italian Cuisine",
      date: "April 10, 2025",
      location: "Culinary Institute, San Francisco",
      image: "/placeholder.svg?height=400&width=600",
      category: "Cooking",
      attendees: 75,
      interested: 180,
    },
    {
      id: 6,
      title: "Fitness Bootcamp: HIIT Training",
      date: "March 25, 2025",
      location: "Central Gym, Los Angeles",
      image: "/placeholder.svg?height=400&width=600",
      category: "Fitness",
      attendees: 60,
      interested: 150,
    },
  ]

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Discover and join events related to your favorite hobbies and interests.
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events..." className="w-full bg-background pl-8" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="art">Art & Crafts</SelectItem>
                <SelectItem value="cooking">Cooking</SelectItem>
                <SelectItem value="photography">Photography</SelectItem>
                <SelectItem value="reading">Reading</SelectItem>
                <SelectItem value="fitness">Fitness</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="newyork">New York</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="boston">Boston</SelectItem>
                <SelectItem value="sanfrancisco">San Francisco</SelectItem>
                <SelectItem value="losangeles">Los Angeles</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Events Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Link href={`/events/${event.id}`} key={event.id} className="group">
                <div className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all duration-200 event-card-hover">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 right-2">{event.category}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{event.title}</h3>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span>{event.attendees} going</span>
                        <span className="mx-1">•</span>
                        <span>{event.interested} interested</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Events
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

