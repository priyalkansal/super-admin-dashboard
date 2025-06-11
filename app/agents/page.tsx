import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Customer Support Agent",
    languages: ["English", "Spanish", "French"],
    status: "Active",
    callsHandled: 1247,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Sales Agent",
    languages: ["English", "Mandarin", "Cantonese"],
    status: "Active",
    callsHandled: 892,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Technical Support Agent",
    languages: ["English", "Spanish", "Portuguese"],
    status: "Offline",
    callsHandled: 634,
    rating: 4.7,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Customer Success Agent",
    languages: ["English", "Korean", "Japanese"],
    status: "Active",
    callsHandled: 1156,
    rating: 4.9,
  },
]

export default function Agents() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Agents</h2>
        <p className="text-muted-foreground">Manage your AI agents and their capabilities</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>
                    {agent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{agent.name}</CardTitle>
                  <CardDescription>{agent.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status</span>
                <Badge variant={agent.status === "Active" ? "default" : "secondary"}>{agent.status}</Badge>
              </div>

              <div>
                <span className="text-sm font-medium">Languages</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {agent.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Calls Handled</span>
                  <p className="font-medium">{agent.callsHandled.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Rating</span>
                  <p className="font-medium">{agent.rating}/5.0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
