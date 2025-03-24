"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function ProfileSettings() {
  const { toast } = useToast()
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+62 812 3456 7890",
    age: "35",
    height: "175",
    weight: "70",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  const handleSaveProfile = () => {
    toast({
      title: "Profil diperbarui",
      description: "Informasi profil Anda telah disimpan",
    })
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-sm">Profil</CardTitle>
        <CardDescription className="text-xs">Kelola informasi pribadi Anda</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
            <AvatarFallback className="text-base">JD</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
            <Camera className="h-3.5 w-3.5" />
            Ubah Foto
          </Button>
        </div>

        <div className="space-y-3">
          <div className="grid gap-1.5">
            <Label htmlFor="name" className="text-xs">
              Nama Lengkap
            </Label>
            <Input id="name" name="name" value={profile.name} onChange={handleChange} className="h-9 text-sm" />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="email" className="text-xs">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              className="h-9 text-sm"
            />
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="phone" className="text-xs">
              Telepon
            </Label>
            <Input id="phone" name="phone" value={profile.phone} onChange={handleChange} className="h-9 text-sm" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="grid gap-1.5">
              <Label htmlFor="age" className="text-xs">
                Usia
              </Label>
              <Input id="age" name="age" value={profile.age} onChange={handleChange} className="h-9 text-sm" />
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="height" className="text-xs">
                Tinggi (cm)
              </Label>
              <Input id="height" name="height" value={profile.height} onChange={handleChange} className="h-9 text-sm" />
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="weight" className="text-xs">
                Berat (kg)
              </Label>
              <Input id="weight" name="weight" value={profile.weight} onChange={handleChange} className="h-9 text-sm" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleSaveProfile} className="w-full h-9 text-sm mx-auto max-w-[95%]">
          Simpan Profil
        </Button>
      </CardFooter>
    </Card>
  )
}

