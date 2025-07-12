import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tag, Search, TrendingUp, MessageSquare } from "lucide-react";

const tags = [
  {
    id: "1",
    name: "React",
    description: "A JavaScript library for building user interfaces",
    questions: 156,
    followers: 234,
    trending: true,
    color: "bg-blue-500"
  },
  {
    id: "2", 
    name: "JavaScript",
    description: "High-level, interpreted programming language",
    questions: 203,
    followers: 312,
    trending: true,
    color: "bg-yellow-500"
  },
  {
    id: "3",
    name: "TypeScript", 
    description: "Typed superset of JavaScript that compiles to plain JavaScript",
    questions: 98,
    followers: 189,
    trending: false,
    color: "bg-blue-600"
  },
  {
    id: "4",
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    questions: 142,
    followers: 198,
    trending: true,
    color: "bg-green-600"
  },
  {
    id: "5",
    name: "MongoDB",
    description: "Document-oriented NoSQL database",
    questions: 87,
    followers: 156,
    trending: false,
    color: "bg-green-500"
  },
  {
    id: "6",
    name: "Python",
    description: "High-level programming language with simple syntax",
    questions: 178,
    followers: 267,
    trending: false,
    color: "bg-blue-400"
  },
  {
    id: "7",
    name: "CSS",
    description: "Style sheet language for describing presentation of documents",
    questions: 134,
    followers: 201,
    trending: false,
    color: "bg-pink-500"
  },
  {
    id: "8",
    name: "Vue.js",
    description: "Progressive JavaScript framework for building user interfaces",
    questions: 76,
    followers: 143,
    trending: false,
    color: "bg-green-400"
  },
  {
    id: "9",
    name: "Express",
    description: "Fast, unopinionated web framework for Node.js",
    questions: 92,
    followers: 167,
    trending: false,
    color: "bg-gray-600"
  },
  {
    id: "10",
    name: "Database",
    description: "Organized collection of structured information",
    questions: 115,
    followers: 189,
    trending: false,
    color: "bg-purple-500"
  },
  {
    id: "11",
    name: "API",
    description: "Application Programming Interface for software communication",
    questions: 128,
    followers: 215,
    trending: true,
    color: "bg-indigo-500"
  },
  {
    id: "12",
    name: "Authentication",
    description: "Process of verifying user identity",
    questions: 69,
    followers: 134,
    trending: false,
    color: "bg-red-500"
  }
];

export default function Tags() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Tag className="h-8 w-8 text-primary" />
              Browse Tags
            </h1>
            <p className="text-muted-foreground mt-2">
              Explore topics and technologies discussed in our community
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tags..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tags.map((tag) => (
            <Card key={tag.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${tag.color}`} />
                    {tag.name}
                  </CardTitle>
                  {tag.trending && (
                    <Badge variant="default" className="text-xs flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Trending
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm">
                  {tag.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold flex items-center justify-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {tag.questions}
                    </div>
                    <div className="text-xs text-muted-foreground">Questions</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{tag.followers}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}