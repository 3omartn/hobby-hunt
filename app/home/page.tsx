"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [rsvpStatus, setRsvpStatus] = useState({});

  const events = [
    {
      id: 1,
      title: "Gaming Tournament: League of Legends",
      date: "March 15, 2025",
      location: "Online",
      image: "/placeholder.jpg?height=400&width=600",
      category: "Gaming",
      attendees: 128,
      interested: 256,
      description:
        "Join our exciting League of Legends tournament! Players of all skill levels are welcome. Compete for prizes and glory in this online gaming event. Form teams or join as a solo player and we'll match you with teammates.",
      organizer: "Gaming Guild",
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
      description:
        "Experience the best electronic music at our annual festival. Featuring top DJs and producers from around the world, this event will have you dancing all day and night. Food vendors and refreshments will be available.",
      organizer: "Beat Productions",
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
      description:
        "Learn how to capture stunning urban landscapes in this hands-on workshop. Bring your camera and join our professional photographers as they guide you through techniques for composition, lighting, and post-processing.",
      organizer: "Focus Photography Club",
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
      description:
        "Join our monthly book club meeting where we'll be discussing classic and contemporary science fiction novels. This month's selection is 'Dune' by Frank Herbert. Refreshments will be provided.",
      organizer: "Literary Minds",
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
      description:
        "Learn to cook authentic Italian dishes in this hands-on cooking class. Our chef will guide you through preparing a complete meal from appetizers to dessert. All ingredients and equipment will be provided.",
      organizer: "Gourmet Gatherings",
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
      description:
        "Get fit with our high-intensity interval training bootcamp. This challenging workout is designed for all fitness levels and will help you build strength and endurance. Bring water and a towel!",
      organizer: "Active Life Fitness",
    },
  ];

  // Type for Event
  type Event = (typeof events)[0];

  const openEventDialog = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const filteredEvents = categoryFilter
    ? events.filter((event) => event.category === categoryFilter)
    : events;

  const handleRSVP = (eventId, e) => {
    e.stopPropagation(); // Prevent the card click event from firing
    setRsvpStatus({
      ...rsvpStatus,
      [eventId]: !rsvpStatus[eventId],
    });
  };

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome to Hobby Hunt
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Discover upcoming events based on your interests and connect
                with others.
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="relative md:col-span-2">
              <Input placeholder="Search events..." className="w-full" />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button
                variant={categoryFilter === "" ? "default" : "outline"}
                onClick={() => setCategoryFilter("")}
              >
                All
              </Button>
              <Button
                variant={categoryFilter === "Gaming" ? "default" : "outline"}
                onClick={() => setCategoryFilter("Gaming")}
              >
                Gaming
              </Button>
              <Button
                variant={categoryFilter === "Music" ? "default" : "outline"}
                onClick={() => setCategoryFilter("Music")}
              >
                Music
              </Button>
              <Button
                variant={
                  categoryFilter === "Photography" ? "default" : "outline"
                }
                onClick={() => setCategoryFilter("Photography")}
              >
                Photography
              </Button>
              <Button
                variant={categoryFilter === "Reading" ? "default" : "outline"}
                onClick={() => setCategoryFilter("Reading")}
              >
                Reading
              </Button>
              <Button
                variant={categoryFilter === "Cooking" ? "default" : "outline"}
                onClick={() => setCategoryFilter("Cooking")}
              >
                Cooking
              </Button>
              <Button
                variant={categoryFilter === "Fitness" ? "default" : "outline"}
                onClick={() => setCategoryFilter("Fitness")}
              >
                Fitness
              </Button>
            </div>
            <div className="md:col-span-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="reading">Reading</SelectItem>
                  <SelectItem value="cooking">Cooking</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Events */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card key={event.id} onClick={() => openEventDialog(event)}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.location}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <p className="text-sm text-muted-foreground">
                        {event.attendees} Attendees
                      </p>
                    </div>
                    <Button
                      variant={rsvpStatus[event.id] ? "default" : "outline"}
                      size="sm"
                      onClick={(e) => handleRSVP(event.id, e)}
                    >
                      {rsvpStatus[event.id] ? "Going" : "RSVP"}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogHeader>
          <DialogTitle>{selectedEvent?.title}</DialogTitle>
          <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <DialogContent>
          <Image
            src={
              selectedEvent?.image || "/placeholder.svg?height=400&width=600"
            }
            alt={selectedEvent?.title || ""}
            width={600}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            {selectedEvent?.description}
          </p>
          <div className="mt-4 flex justify-end">
            <Button
              onClick={() => {
                if (selectedEvent) {
                  handleRSVP(selectedEvent.id, { stopPropagation: () => {} });
                }
                setIsDialogOpen(false);
              }}
            >
              {selectedEvent && rsvpStatus[selectedEvent.id]
                ? "Cancel RSVP"
                : "RSVP to Event"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
