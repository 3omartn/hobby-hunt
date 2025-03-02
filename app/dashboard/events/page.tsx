"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users } from "lucide-react"

// Mock data for events
const initialEvents = [
  {
    id: 1,
    title: "Gaming Tournament: League of Legends",
    date: "2025-03-15",
    location: "Online",
    category: "Gaming",
    attendees: 128,
    description: "Join our exciting League of Legends tournament! Players of all skill levels are welcome.",
  },
  {
    id: 2,
    title: "Music Festival: Electronic Beats",
    date: "2025-04-05",
    location: "Central Park, New York",
    category: "Music",
    attendees: 350,
    description: "Experience the best electronic music at our annual festival.",
  },
  {
    id: 3,
    title: "Photography Workshop: Urban Landscapes",
    date: "2025-03-22",
    location: "Downtown Gallery, Chicago",
    category: "Photography",
    attendees: 45,
    description: "Learn how to capture stunning urban landscapes in this hands-on workshop.",
  },
  {
    id: 4,
    title: "Book Club: Science Fiction Novels",
    date: "2025-03-18",
    location: "City Library, Boston",
    category: "Reading",
    attendees: 28,
    description:
      "Join our monthly book club meeting where we'll be discussing classic and contemporary science fiction novels.",
  },
  {
    id: 5,
    title: "Cooking Class: Italian Cuisine",
    date: "2025-04-10",
    location: "Culinary Institute, San Francisco",
    category: "Cooking",
    attendees: 75,
    description: "Learn to cook authentic Italian dishes in this hands-on cooking class.",
  },
  {
    id: 6,
    title: "Fitness Bootcamp: HIIT Training",
    date: "2025-03-25",
    location: "Central Gym, Los Angeles",
    category: "Fitness",
    attendees: 60,
    description: "Get fit with our high-intensity interval training bootcamp.",
  },
]

export default function EventsPage() {
  const [events, setEvents] = useState(initialEvents)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    category: "",
    description: "",
  })
  const [showCreateForm, setShowCreateForm] = useState(false)

  const filterEvents = () => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "" || event.category === categoryFilter
      const matchesLocation = locationFilter === "" || event.location.includes(locationFilter)
      return matchesSearch && matchesCategory && matchesLocation
    })
  }

  const handleCreateEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.category) {
      const createdEvent = {
        id: events.length + 1,
        title: newEvent.title,
        date: newEvent.date,
        location: newEvent.location,
        category: newEvent.category,
        description: newEvent.description || "No description provided.",
        attendees: 1, // Starting with the creator
      }
      setEvents([createdEvent, ...events])
      setNewEvent({
        title: "",
        date: "",
        location: "",
        category: "",
        description: "",
      })
      setShowCreateForm(false)
    }
  }

  const handleJoinEvent = (eventId) => {
    setEvents(
      events.map((event) => {
        if (event.id === eventId) {
          return { ...event, attendees: event.attendees + 1 }
        }
        return event
      }),
    )
    alert("You have successfully joined this event!")
  }

  const filteredEvents = filterEvents()

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Events</h1>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>{showCreateForm ? "Cancel" : "Create Event"}</Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input placeholder="Search events..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Gaming">Gaming</SelectItem>
            <SelectItem value="Music">Music</SelectItem>
            <SelectItem value="Photography">Photography</SelectItem>
            <SelectItem value="Reading">Reading</SelectItem>
            <SelectItem value="Cooking">Cooking</SelectItem>
            <SelectItem value="Fitness">Fitness</SelectItem>
          </SelectContent>
        </Select>
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="Online">Online</SelectItem>
            <SelectItem value="New York">New York</SelectItem>
            <SelectItem value="Chicago">Chicago</SelectItem>
            <SelectItem value="Boston">Boston</SelectItem>
            <SelectItem value="San Francisco">San Francisco</SelectItem>
            <SelectItem value="Los Angeles">Los Angeles</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {showCreateForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create New Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <Input
                placeholder="Location"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />
              <Select onValueChange={(value) => setNewEvent({ ...newEvent, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Gaming">Gaming</SelectItem>
                  <SelectItem value="Music">Music</SelectItem>
                  <SelectItem value="Photography">Photography</SelectItem>
                  <SelectItem value="Reading">Reading</SelectItem>
                  <SelectItem value="Cooking">Cooking</SelectItem>
                  <SelectItem value="Fitness">Fitness</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                className="md:col-span-2"
              />
            </div>
            <Button onClick={handleCreateEvent}>Create Event</Button>
          </CardContent>
        </Card>
      )}

      {/* Event list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <Badge>{event.category}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="mr-2 h-4 w-4" />
                {event.attendees} attendees
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View Details</Button>
              <Button onClick={() => handleJoinEvent(event.id)}>Join Event</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

