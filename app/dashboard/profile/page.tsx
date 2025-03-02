"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, MapPin, Calendar, Globe, Instagram, Twitter, Facebook, Save } from "lucide-react"

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    location: "",
    bio: "",
    birthdate: "",
    website: "",
    instagram: "",
    twitter: "",
    facebook: "",
  })

  useEffect(() => {
    // Simulate fetching user data
    setProfileData({
      name: "Test User",
      email: "test@gmail.com",
      location: "Test City, Test Country",
      bio: "This is a test account for the Hobby Hunt platform.",
      birthdate: "2000-01-01",
      website: "https://testhobby.com",
      instagram: "testhobby",
      twitter: "testhobby",
      facebook: "testhobby",
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the profile data here
    alert("Profile updated successfully!")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input id="name" name="name" value={profileData.name} onChange={handleChange} className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="pl-10"
                    readOnly
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="location"
                    name="location"
                    value={profileData.location}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="birthdate" className="text-sm font-medium">
                  Birth Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="birthdate"
                    name="birthdate"
                    type="date"
                    value={profileData.birthdate}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="bio" className="text-sm font-medium">
                  Bio
                </label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about yourself..."
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </form>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Social Profiles</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium">
                  Website
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="website"
                    name="website"
                    value={profileData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="instagram" className="text-sm font-medium">
                  Instagram
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Instagram className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="instagram"
                    name="instagram"
                    value={profileData.instagram}
                    onChange={handleChange}
                    placeholder="username"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="twitter" className="text-sm font-medium">
                  Twitter
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Twitter className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="twitter"
                    name="twitter"
                    value={profileData.twitter}
                    onChange={handleChange}
                    placeholder="username"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="facebook" className="text-sm font-medium">
                  Facebook
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Facebook className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="facebook"
                    name="facebook"
                    value={profileData.facebook}
                    onChange={handleChange}
                    placeholder="username"
                    className="pl-10"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                <Save className="h-4 w-4 mr-2" />
                Save Social Profiles
              </Button>
            </form>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="h-32 w-32 rounded-full bg-secondary/50 flex items-center justify-center overflow-hidden">
                <User className="h-16 w-16 text-muted-foreground" />
              </div>
              <div className="space-y-2 w-full">
                <Button variant="outline" className="w-full">
                  Upload New Picture
                </Button>
                <Button variant="ghost" className="w-full text-destructive hover:text-destructive">
                  Remove Picture
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notify-events"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="notify-events" className="text-sm text-muted-foreground">
                    Notify me about new events
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notify-messages"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="notify-messages" className="text-sm text-muted-foreground">
                    Notify me about new messages
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Privacy</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="profile-public"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="profile-public" className="text-sm text-muted-foreground">
                    Make my profile public
                  </label>
                </div>
              </div>
              <Button className="w-full sm:w-auto">Save Account Settings</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

