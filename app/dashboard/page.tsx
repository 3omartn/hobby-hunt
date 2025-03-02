import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Filter, MapPin, Users, ThumbsUp, MessageSquare, Plus } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
  // Mock data for events
  const upcomingEvents = [
    {
      id: 1,
      title: "Gaming Tournament: League of Legends",
      date: "Mar 15, 2025",
      time: "2:00 PM",
      location: "Cyber Arena, New York",
      category: "Gaming",
      attendees: 128,
      interested: 256,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Music Festival: Electronic Beats",
      date: "Mar 20, 2025",
      time: "7:00 PM",
      location: "Central Park, New York",
      category: "Music",
      attendees: 512,
      interested: 1024,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Marathon Training Group",
      date: "Mar 18, 2025",
      time: "6:00 AM",
      location: "Riverside Park, New York",
      category: "Running",
      attendees: 45,
      interested: 72,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Esports Watch Party: Valorant Championship",
      date: "Mar 25, 2025",
      time: "3:00 PM",
      location: "Game Center, Brooklyn",
      category: "Esports",
      attendees: 86,
      interested: 134,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  // Mock data for threads
  const recentThreads = [
    {
      id: 1,
      title: "Best gaming keyboards for competitive play?",
      author: "GamerPro",
      category: "Gaming",
      replies: 24,
      likes: 47,
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Favorite running routes in the city?",
      author: "RunnerGirl",
      category: "Running",
      replies: 18,
      likes: 32,
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "New electronic music recommendations",
      author: "BeatMaster",
      category: "Music",
      replies: 36,
      likes: 89,
      time: "1 day ago",
    },
  ]

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Link href="/dashboard/events/create">
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {upcomingEvents.map((event) => (
                <Link key={event.id} href={`/dashboard/events/${event.id}`} className="group">
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded">
                          {event.category}
                        </div>
                      </div>
                      <div className="p-4 md:w-2/3 flex flex-col">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>
                              {event.date} at {event.time}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="mt-auto pt-4 flex items-center text-sm">
                          <div className="flex items-center mr-4">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{event.attendees} going</span>
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{event.interested} interested</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Button asChild className="mt-4">
              <Link href="/dashboard/events">View All Events</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Threads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentThreads.map((thread) => (
                <Link key={thread.id} href={`/dashboard/threads/${thread.id}`} className="block">
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium hover:text-primary transition-colors">{thread.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          by {thread.author} · {thread.time}
                        </p>
                      </div>
                      <div className="bg-secondary/50 text-xs px-2 py-1 rounded">{thread.category}</div>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <div className="flex items-center mr-4">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{thread.replies} replies</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{thread.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/dashboard/threads/create">
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Create New Thread
              </Button>
            </Link>
            <Button asChild className="mt-4">
              <Link href="/dashboard/threads">View All Threads</Link>
            </Button>
          </CardContent>
        </Card>

        <div>
          <div className="mt-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Your Hobbies</h2>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="space-y-2">
                <Link
                  href="/dashboard/hobbies/gaming"
                  className="flex items-center justify-between p-2 rounded-md hover:bg-secondary/50"
                >
                  <div className="flex items-center">
                    <span className="h-3 w-3 rounded-full bg-green-500 mr-3"></span>
                    <span>Gaming</span>
                  </div>
                  <span className="text-sm text-muted-foreground">24 events</span>
                </Link>
                <Link
                  href="/dashboard/hobbies/music"
                  className="flex items-center justify-between p-2 rounded-md hover:bg-secondary/50"
                >
                  <div className="flex items-center">
                    <span className="h-3 w-3 rounded-full bg-blue-500 mr-3"></span>
                    <span>Music</span>
                  </div>
                  <span className="text-sm text-muted-foreground">18 events</span>
                </Link>
                <Link
                  href="/dashboard/hobbies/running"
                  className="flex items-center justify-between p-2 rounded-md hover:bg-secondary/50"
                >
                  <div className="flex items-center">
                    <span className="h-3 w-3 rounded-full bg-yellow-500 mr-3"></span>
                    <span>Running</span>
                  </div>
                  <span className="text-sm text-muted-foreground">12 events</span>
                </Link>
                <Link
                  href="/dashboard/hobbies/esports"
                  className="flex items-center justify-between p-2 rounded-md hover:bg-secondary/50"
                >
                  <div className="flex items-center">
                    <span className="h-3 w-3 rounded-full bg-purple-500 mr-3"></span>
                    <span>Esports</span>
                  </div>
                  <span className="text-sm text-muted-foreground">9 events</span>
                </Link>
              </div>
              <div className="mt-4">
                <Button variant="ghost" size="sm" className="w-full text-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add More Hobbies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

