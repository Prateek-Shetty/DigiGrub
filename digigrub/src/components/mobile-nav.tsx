"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <span className="font-bold">DigiGrub</span>
        </Link>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <Link href="/menu" onClick={() => setOpen(false)} className="text-muted-foreground">
              Menu
            </Link>
            <Link href="/orders" onClick={() => setOpen(false)} className="text-muted-foreground">
              My Orders
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-muted-foreground">
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="text-muted-foreground">
              Contact
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

