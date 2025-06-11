"use client"

import { TrendingUp, Phone, Clock, CheckCircle, Users, PhoneCall, Timer } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, Area, AreaChart, ResponsiveContainer } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data that changes based on business
const businessData = {
  "acme-corp": {
    calls: [
      { month: "Jan", calls: 186 },
      { month: "Feb", calls: 305 },
      { month: "Mar", calls: 237 },
      { month: "Apr", calls: 173 },
      { month: "May", calls: 209 },
      { month: "Jun", calls: 214 },
    ],
    duration: [
      { month: "Jan", duration: 4.2 },
      { month: "Feb", duration: 3.8 },
      { month: "Mar", duration: 4.5 },
      { month: "Apr", duration: 3.9 },
      { month: "May", duration: 4.1 },
      { month: "Jun", duration: 4.3 },
    ],
    acceptance: [
      { month: "Jan", rate: 85 },
      { month: "Feb", rate: 88 },
      { month: "Mar", rate: 82 },
      { month: "Apr", rate: 90 },
      { month: "May", rate: 87 },
      { month: "Jun", rate: 92 },
    ],
  },
  "global-solutions": {
    calls: [
      { month: "Jan", calls: 145 },
      { month: "Feb", calls: 267 },
      { month: "Mar", calls: 198 },
      { month: "Apr", calls: 234 },
      { month: "May", calls: 289 },
      { month: "Jun", calls: 312 },
    ],
    duration: [
      { month: "Jan", duration: 3.8 },
      { month: "Feb", duration: 4.1 },
      { month: "Mar", duration: 3.9 },
      { month: "Apr", duration: 4.4 },
      { month: "May", duration: 4.0 },
      { month: "Jun", duration: 4.2 },
    ],
    acceptance: [
      { month: "Jan", rate: 78 },
      { month: "Feb", rate: 82 },
      { month: "Mar", rate: 85 },
      { month: "Apr", rate: 88 },
      { month: "May", rate: 91 },
      { month: "Jun", rate: 89 },
    ],
  },
  "tech-innovations": {
    calls: [
      { month: "Jan", calls: 98 },
      { month: "Feb", calls: 156 },
      { month: "Mar", calls: 189 },
      { month: "Apr", calls: 167 },
      { month: "May", calls: 203 },
      { month: "Jun", calls: 245 },
    ],
    duration: [
      { month: "Jan", duration: 5.2 },
      { month: "Feb", duration: 4.9 },
      { month: "Mar", duration: 5.1 },
      { month: "Apr", duration: 4.8 },
      { month: "May", duration: 5.3 },
      { month: "Jun", duration: 5.0 },
    ],
    acceptance: [
      { month: "Jan", rate: 94 },
      { month: "Feb", rate: 96 },
      { month: "Mar", rate: 93 },
      { month: "Apr", rate: 95 },
      { month: "May", rate: 97 },
      { month: "Jun", rate: 98 },
    ],
  },
}

const callsConfig = {
  calls: {
    label: "Calls",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const durationConfig = {
  duration: {
    label: "Duration (min)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const acceptanceConfig = {
  rate: {
    label: "Acceptance Rate (%)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

interface DashboardChartsProps {
  selectedBusiness: string
}

export function DashboardCharts({ selectedBusiness }: DashboardChartsProps) {
  const data = businessData[selectedBusiness as keyof typeof businessData] || businessData["acme-corp"]

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
      {/* Total Calls Chart - Larger */}
      <Card className="col-span-full lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Total Calls
          </CardTitle>
          <CardDescription>Number of calls made per month</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={callsConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart accessibilityLayer data={data.calls}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="calls" fill="var(--color-calls)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 12.5% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">Showing total calls for the last 6 months</div>
        </CardFooter>
      </Card>

      {/* Average Call Duration Chart - Larger */}
      <Card className="col-span-full lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Average Call Duration
          </CardTitle>
          <CardDescription>Average duration in minutes</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={durationConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                accessibilityLayer
                data={data.duration}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line dataKey="duration" type="monotone" stroke="var(--color-duration)" strokeWidth={3} dot={true} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">Average 4.2 minutes per call</div>
          <div className="leading-none text-muted-foreground">Consistent call duration across months</div>
        </CardFooter>
      </Card>

      {/* Call Acceptance Rate Chart - Full Width */}
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Call Acceptance Rate
          </CardTitle>
          <CardDescription>Percentage of accepted calls over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={acceptanceConfig} className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                accessibilityLayer
                data={data.acceptance}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                  dataKey="rate"
                  type="natural"
                  fill="var(--color-rate)"
                  fillOpacity={0.4}
                  stroke="var(--color-rate)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 8.1% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">92% acceptance rate in June</div>
        </CardFooter>
      </Card>

      {/* Additional Metrics Cards */}
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
            <PhoneCall className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2-4 PM</div>
            <p className="text-xs text-muted-foreground">Highest call volume</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2s</div>
            <p className="text-xs text-muted-foreground">-0.3s from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-muted-foreground">+0.2 from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
