import { QuestionCard } from "./QuestionCard";

// Sample data - will be replaced with real data from MongoDB
const sampleQuestions = [
  {
    id: "1",
    title: "How to implement authentication in React with JWT?",
    description: "I'm trying to implement JWT authentication in my React application. I want to store the token securely and manage user sessions properly. What's the best approach?",
    author: "john_doe",
    votes: 15,
    answers: 3,
    tags: ["React", "JWT", "Authentication"],
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    hasAcceptedAnswer: true,
  },
  {
    id: "2",
    title: "MongoDB aggregation pipeline optimization",
    description: "My MongoDB aggregation query is running slowly on large datasets. Are there any best practices for optimizing complex aggregation pipelines?",
    author: "dev_sarah",
    votes: 8,
    answers: 1,
    tags: ["MongoDB", "Performance", "Database"],
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
  },
  {
    id: "3",
    title: "TypeScript generic constraints not working as expected",
    description: "I'm having trouble with TypeScript generic constraints. The compiler doesn't seem to understand my type constraints properly.",
    author: "ts_expert",
    votes: 12,
    answers: 2,
    tags: ["TypeScript", "Generics", "Types"],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    hasAcceptedAnswer: false,
  },
  {
    id: "4",
    title: "Best practices for React component composition",
    description: "What are the recommended patterns for composing complex React components? Should I use render props, compound components, or hooks?",
    author: "react_dev",
    votes: 23,
    answers: 5,
    tags: ["React", "Design Patterns", "Components"],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    hasAcceptedAnswer: true,
  },
];

interface QuestionListProps {
  questions?: any[];
}

export function QuestionList({ questions = sampleQuestions }: QuestionListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Recent Questions</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">{questions.length} questions</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
}