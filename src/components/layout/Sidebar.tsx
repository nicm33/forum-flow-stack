import { Home, Trophy, Users, Tag, HelpCircle, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Top Questions", href: "/top", icon: Trophy },
  { name: "Users", href: "/users", icon: Users },
  { name: "Tags", href: "/tags", icon: Tag },
];

const secondaryNavigation = [
  { name: "Help", href: "/help", icon: HelpCircle },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-muted/30 p-4">
      <nav className="space-y-6">
        {/* Primary Navigation */}
        <div>
          <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground">Navigation</h3>
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                    )
                  }
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary Navigation */}
        <div>
          <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground">Other</h3>
          <ul className="space-y-1">
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                    )
                  }
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Tags */}
        <div>
          <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground">Popular Tags</h3>
          <div className="space-y-2 px-3">
            {["React", "JavaScript", "TypeScript", "Node.js", "MongoDB"].map((tag) => (
              <div key={tag} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{tag}</span>
                <span className="text-xs text-muted-foreground">42</span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}