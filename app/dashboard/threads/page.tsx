"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Mock data for threads
const initialThreads = [
  {
    id: 1,
    title: "Best gaming mice for FPS games?",
    author: "GamerPro",
    content: "I'm looking for recommendations on the best gaming mice for FPS games. What are your favorites?",
    replies: [
      {
        id: 1,
        author: "MouseMaster",
        content: "I highly recommend the Logitech G Pro X Superlight. It's incredibly light and accurate.",
      },
      {
        id: 2,
        author: "FPSEnthusiast",
        content: "The Razer DeathAdder V2 Pro is also a great choice. It has a comfortable ergonomic design.",
      },
    ],
  },
  {
    id: 2,
    title: "Favorite board games for game nights?",
    author: "BoardGameLover",
    content: "What are your go-to board games for game nights with friends? Looking for some new recommendations!",
    replies: [
      {
        id: 1,
        author: "StrategyGamer",
        content: "Catan is always a classic choice. It's easy to learn but has a lot of depth.",
      },
      {
        id: 2,
        author: "PartyGameFan",
        content: "For a more casual and fun experience, I love Codenames. It's great for larger groups.",
      },
    ],
  },
]

export default function ThreadsPage() {
  const [threads, setThreads] = useState(initialThreads)
  const [newThreadTitle, setNewThreadTitle] = useState("")
  const [newThreadContent, setNewThreadContent] = useState("")
  const [replyContents, setReplyContents] = useState({})
  const [threadLikes, setThreadLikes] = useState({})
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateThread = () => {
    if (newThreadTitle && newThreadContent) {
      const newThread = {
        id: threads.length + 1,
        title: newThreadTitle,
        author: "TestUser", // We're using the test account
        content: newThreadContent,
        replies: [],
      }
      setThreads([newThread, ...threads])
      setNewThreadTitle("")
      setNewThreadContent("")
    }
  }

  const handleReply = (threadId) => {
    const replyContent = replyContents[threadId]
    if (replyContent) {
      const updatedThreads = threads.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            replies: [...thread.replies, { id: thread.replies.length + 1, author: "TestUser", content: replyContent }],
          }
        }
        return thread
      })
      setThreads(updatedThreads)
      setReplyContents({ ...replyContents, [threadId]: "" })
    }
  }

  const handleLikeThread = (threadId) => {
    setThreadLikes({
      ...threadLikes,
      [threadId]: (threadLikes[threadId] || 0) + 1,
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Threads</h1>

      {/* Create new thread */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Create New Thread</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Thread Title"
            value={newThreadTitle}
            onChange={(e) => setNewThreadTitle(e.target.value)}
            className="mb-2"
          />
          <Textarea
            placeholder="Thread Content"
            value={newThreadContent}
            onChange={(e) => setNewThreadContent(e.target.value)}
            className="mb-2"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreateThread}>Create Thread</Button>
        </CardFooter>
      </Card>

      {/* Thread list */}
      {threads.map((thread) => (
        <Card key={thread.id} className="mb-4">
          <CardHeader>
            <CardTitle>{thread.title}</CardTitle>
            <div className="text-sm text-muted-foreground">Posted by {thread.author}</div>
          </CardHeader>
          <CardContent>
            <p>{thread.content}</p>
            {/* Replies */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Replies:</h3>
              {thread.replies.map((reply) => (
                <div key={reply.id} className="bg-muted p-2 rounded mb-2">
                  <div className="flex items-center mb-1">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>{reply.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{reply.author}</span>
                  </div>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
            {/* Reply input */}
            <div className="mt-4">
              <Textarea
                placeholder="Write a reply..."
                value={replyContents[thread.id] || ""}
                onChange={(e) => setReplyContents({ ...replyContents, [thread.id]: e.target.value })}
                className="mb-2"
              />
              <Button onClick={() => handleReply(thread.id)}>Reply</Button>
            </div>
            <div className="mt-4 flex justify-between">
              <Button variant="outline" onClick={() => handleLikeThread(thread.id)}>
                Like Thread ({threadLikes[thread.id] || 0})
              </Button>
              <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
                Share Thread
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      {/* Share Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Thread</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Share this thread with your friends:</p>
            <Input value={`https://hobbyhunt.com/threads/${threads[0]?.id || 1}`} readOnly />
            <div className="flex space-x-2">
              <Button className="flex-1">Copy Link</Button>
              <Button variant="outline" className="flex-1" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

