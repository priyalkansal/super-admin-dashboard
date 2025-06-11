"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Building2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const businesses = [
  {
    value: "acme-corp",
    label: "Acme Corporation",
    industry: "Technology",
  },
  {
    value: "global-solutions",
    label: "Global Solutions Inc",
    industry: "Consulting",
  },
  {
    value: "tech-innovations",
    label: "Tech Innovations Ltd",
    industry: "Software",
  },
  {
    value: "customer-first",
    label: "Customer First Services",
    industry: "Support",
  },
  {
    value: "enterprise-systems",
    label: "Enterprise Systems Co",
    industry: "Enterprise",
  },
]

interface BusinessSelectorProps {
  onBusinessChange: (business: string) => void
}

export function BusinessSelector({ onBusinessChange }: BusinessSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("acme-corp")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[300px] justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            {value ? businesses.find((business) => business.value === value)?.label : "Select business..."}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search business..." />
          <CommandList>
            <CommandEmpty>No business found.</CommandEmpty>
            <CommandGroup>
              {businesses.map((business) => (
                <CommandItem
                  key={business.value}
                  value={business.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    onBusinessChange(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === business.value ? "opacity-100" : "opacity-0")} />
                  <div className="flex flex-col">
                    <span>{business.label}</span>
                    <span className="text-sm text-muted-foreground">{business.industry}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
