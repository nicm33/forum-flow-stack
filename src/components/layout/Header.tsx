import { Bell, Search, User, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-sm font-bold text-white">SI</span>
          </div>
          <span className="text-xl font-bold text-foreground">StackIt</span>
        </Link>

        {/* Search */}
        <div className="mx-6 flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              className="pl-10 bg-muted/50 border-none focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <Link to="/ask">
            <Button variant="default" size="sm" className="font-medium">
              <MessageSquarePlus className="mr-2 h-4 w-4" />
              Ask Question
            </Button>
          </Link>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
}