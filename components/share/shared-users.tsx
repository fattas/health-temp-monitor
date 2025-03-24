"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MoreHorizontal, Plus, Trash2, User, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

type SharedUser = {
  id: string
  name: string
  email: string
  role: "family" | "doctor" | "caregiver"
  accessLevel: "view" | "full"
  lastAccess: string
}

export function SharedUsers() {
  const { toast } = useToast()
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "family",
    accessLevel: "view",
  })

  const [sharedUsers, setSharedUsers] = useState<SharedUser[]>([
    {
      id: "user-1",
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "doctor",
      accessLevel: "full",
      lastAccess: "Today, 10:23 AM",
    },
    {
      id: "user-2",
      name: "Michael Smith",
      email: "michael.smith@example.com",
      role: "family",
      accessLevel: "view",
      lastAccess: "Yesterday",
    },
  ])

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const newSharedUser: SharedUser = {
      id: `user-${Date.now()}`,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role as "family" | "doctor" | "caregiver",
      accessLevel: newUser.accessLevel as "view" | "full",
      lastAccess: "Never",
    }

    setSharedUsers([...sharedUsers, newSharedUser])
    setShowAddDialog(false)

    toast({
      title: "User added",
      description: `${newUser.name} has been added to your shared users`,
    })

    // Reset form
    setNewUser({
      name: "",
      email: "",
      role: "family",
      accessLevel: "view",
    })
  }

  const handleRemoveUser = (id: string) => {
    const user = sharedUsers.find((u) => u.id === id)
    setSharedUsers(sharedUsers.filter((user) => user.id !== id))

    toast({
      title: "User removed",
      description: `${user?.name} has been removed from your shared users`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle>Shared With</CardTitle>
            <CardDescription>People who can access your health data</CardDescription>
          </div>
          <Button onClick={() => setShowAddDialog(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Person
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sharedUsers.length === 0 ? (
            <div className="text-center py-8">
              <User className="mx-auto h-8 w-8 text-muted-foreground" />
              <h3 className="mt-2 text-sm font-medium">No shared users</h3>
              <p className="mt-1 text-sm text-muted-foreground">Add people to share your health data with</p>
              <Button variant="outline" className="mt-4" onClick={() => setShowAddDialog(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Person
              </Button>
            </div>
          ) : (
            sharedUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between gap-4 rounded-lg border p-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{user.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {user.role === "doctor" && "Doctor"}
                        {user.role === "family" && "Family"}
                        {user.role === "caregiver" && "Caregiver"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Access: {user.accessLevel === "full" ? "Full" : "View Only"}</span>
                      <span>Last access: {user.lastAccess}</span>
                    </div>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Access</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive" onClick={() => handleRemoveUser(user.id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Remove Access</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))
          )}
        </div>

        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Person</DialogTitle>
              <DialogDescription>Add someone to share your health data with</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="role">Relationship</Label>
                  <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="caregiver">Caregiver</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="access-level">Access Level</Label>
                  <Select
                    value={newUser.accessLevel}
                    onValueChange={(value) => setNewUser({ ...newUser, accessLevel: value })}
                  >
                    <SelectTrigger id="access-level">
                      <SelectValue placeholder="Select access" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="view">View Only</SelectItem>
                      <SelectItem value="full">Full Access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddUser}>Add Person</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

