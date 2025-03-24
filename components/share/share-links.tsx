"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Copy, Link, QrCode } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function ShareLinks() {
  const { toast } = useToast()
  const [shareLink, setShareLink] = useState("https://health-monitor.app/share/u123456")
  const [expiryEnabled, setExpiryEnabled] = useState(false)
  const [passwordEnabled, setPasswordEnabled] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink)
    toast({
      title: "Link copied",
      description: "Share link has been copied to clipboard",
    })
  }

  const handleGenerateLink = () => {
    toast({
      title: "New link generated",
      description: "A new share link has been created",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Links</CardTitle>
        <CardDescription>Create and manage links to share your health data</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="link">
          <TabsList className="mb-4">
            <TabsTrigger value="link">Share Link</TabsTrigger>
            <TabsTrigger value="qr">QR Code</TabsTrigger>
          </TabsList>

          <TabsContent value="link" className="space-y-4">
            <div className="flex space-x-2">
              <Input value={shareLink} onChange={(e) => setShareLink(e.target.value)} readOnly />
              <Button variant="outline" size="icon" onClick={handleCopyLink}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="expiry-toggle">Link Expiry</Label>
                  <span className="text-xs text-muted-foreground">Set an expiration date for this link</span>
                </div>
                <Switch id="expiry-toggle" checked={expiryEnabled} onCheckedChange={setExpiryEnabled} />
              </div>

              {expiryEnabled && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input id="expiry-date" type="date" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="expiry-time">Expiry Time</Label>
                    <Input id="expiry-time" type="time" className="mt-1" />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="password-toggle">Password Protection</Label>
                  <span className="text-xs text-muted-foreground">Require a password to access shared data</span>
                </div>
                <Switch id="password-toggle" checked={passwordEnabled} onCheckedChange={setPasswordEnabled} />
              </div>

              {passwordEnabled && (
                <div>
                  <Label htmlFor="share-password">Password</Label>
                  <Input id="share-password" type="password" placeholder="Enter a password" className="mt-1" />
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="qr" className="space-y-4">
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg">
              <div className="w-48 h-48 bg-muted flex items-center justify-center">
                <QrCode className="h-32 w-32 text-primary/20" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Scan this QR code to access the shared health data</p>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="gap-2">
                <Link className="h-4 w-4" />
                Download QR Code
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button onClick={handleGenerateLink} className="w-full">
          Generate New Link
        </Button>
      </CardFooter>
    </Card>
  )
}

