import { Layout } from "@/components/layout/Layout";
import { QuestionList } from "@/components/questions/QuestionList";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Calendar } from "lucide-react";

const topQuestions = [
  {
    id: "1",
    title: "How to implement efficient state management in React?",
    content: "I'm building a large React application and struggling with state management. Should I use Redux, Zustand, or stick with Context API?",
    author: "ReactDev",
    createdAt: "2024-01-15T10:30:00Z",
    votes: 42,
    answers: 8,
    tags: ["React", "State Management", "Redux"],
    isAccepted: true,
    views: 1250
  },
  {
    id: "2", 
    title: "Best practices for TypeScript in Node.js applications",
    content: "What are the recommended patterns and configurations for using TypeScript in production Node.js applications?",
    author: "BackendMaster",
    createdAt: "2024-01-14T14:20:00Z",
    votes: 38,
    answers: 12,
    tags: ["TypeScript", "Node.js", "Backend"],
    isAccepted: false,
    views: 980
  },
  {
    id: "3",
    title: "Database indexing strategies for high-traffic applications",
    content: "I need advice on optimizing database performance for an application with millions of users.",
    author: "DBExpert",
    createdAt: "2024-01-13T16:45:00Z",
    votes: 35,
    answers: 6,
    tags: ["Database", "MongoDB", "Performance"],
    isAccepted: true,
    views: 756
  }
];

export default function TopQuestions() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary" />
              Top Questions
            </h1>
            <p className="text-muted-foreground mt-2">
              Most voted and popular questions in the community
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Trending
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              This Week
            </Badge>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-card rounded-lg border p-4">
            <div className="text-2xl font-bold text-primary">156</div>
            <div className="text-sm text-muted-foreground">Total Questions</div>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <div className="text-2xl font-bold text-primary">89</div>
            <div className="text-sm text-muted-foreground">Answered</div>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <div className="text-2xl font-bold text-primary">4.2k</div>
            <div className="text-sm text-muted-foreground">Total Votes</div>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <div className="text-2xl font-bold text-primary">2.1k</div>
            <div className="text-sm text-muted-foreground">Views Today</div>
          </div>
        </div>

        <QuestionList questions={topQuestions} />
      </div>
    </Layout>
  );
}