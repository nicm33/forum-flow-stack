import { Layout } from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users as UsersIcon, Search, Trophy, MessageSquare, ThumbsUp } from "lucide-react";

const users = [
  {
    id: "1",
    name: "Alex Johnson",
    username: "alexj",
    avatar: "/placeholder.svg",
    reputation: 2847,
    questionsAsked: 23,
    answersGiven: 45,
    votes: 156,
    topTags: ["React", "JavaScript", "TypeScript"],
    joinDate: "2023-06-15"
  },
  {
    id: "2",
    name: "Sarah Chen",
    username: "sarahc",
    avatar: "/placeholder.svg", 
    reputation: 1923,
    questionsAsked: 18,
    answersGiven: 67,
    votes: 234,
    topTags: ["Node.js", "MongoDB", "Express"],
    joinDate: "2023-08-20"
  },
  {
    id: "3",
    name: "Mike Rodriguez",
    username: "mikero",
    avatar: "/placeholder.svg",
    reputation: 3156,
    questionsAsked: 31,
    answersGiven: 89,
    votes: 312,
    topTags: ["Python", "Django", "PostgreSQL"],
    joinDate: "2023-03-10"
  },
  {
    id: "4",
    name: "Emma Wilson",
    username: "emmaw",
    avatar: "/placeholder.svg",
    reputation: 1654,
    questionsAsked: 15,
    answersGiven: 52,
    votes: 178,
    topTags: ["Vue.js", "CSS", "Design"],
    joinDate: "2023-09-05"
  },
  {
    id: "5",
    name: "David Kim",
    username: "davidk",
    avatar: "/placeholder.svg",
    reputation: 2234,
    questionsAsked: 27,
    answersGiven: 73,
    votes: 201,
    topTags: ["Java", "Spring", "Microservices"],
    joinDate: "2023-07-12"
  },
  {
    id: "6",
    name: "Lisa Anderson",
    username: "lisaa",
    avatar: "/placeholder.svg",
    reputation: 1876,
    questionsAsked: 19,
    answersGiven: 41,
    votes: 143,
    topTags: ["Flutter", "Dart", "Mobile"],
    joinDate: "2023-10-18"
  }
];

export default function Users() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <UsersIcon className="h-8 w-8 text-primary" />
              Community Users
            </h1>
            <p className="text-muted-foreground mt-2">
              Discover and connect with our active community members
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Card key={user.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg truncate">{user.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">@{user.username}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{user.reputation}</span>
                    <span className="text-xs text-muted-foreground">reputation</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-sm font-medium flex items-center justify-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      {user.questionsAsked}
                    </div>
                    <div className="text-xs text-muted-foreground">Questions</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{user.answersGiven}</div>
                    <div className="text-xs text-muted-foreground">Answers</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium flex items-center justify-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {user.votes}
                    </div>
                    <div className="text-xs text-muted-foreground">Votes</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-2">Top Tags</div>
                  <div className="flex flex-wrap gap-1">
                    {user.topTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  Joined {new Date(user.joinDate).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}