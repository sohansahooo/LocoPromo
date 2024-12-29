'use client';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Store } from 'lucide-react';
import Link from 'next/link';
import { UserButton } from '@/components/auth/user-button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Store className="h-6 w-6" />
          <span className="font-bold">LocoPromo</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/discover" className="text-foreground/60 hover:text-foreground">
            Discover
          </Link>
          <Link href="/deals" className="text-foreground/60 hover:text-foreground">
            Deals
          </Link>
          <Link href="/events" className="text-foreground/60 hover:text-foreground">
            Events
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
}