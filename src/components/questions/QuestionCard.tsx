import { ArrowUp, ArrowDown, MessageSquare, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

interface QuestionCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  authorAvatar?: string;
  votes: number;
  answers: number;
  tags: string[];
  createdAt: Date;
  hasAcceptedAnswer?: boolean;
}

export function QuestionCard({
  id,
  title,
  description,
  author,
  votes,
  answers,
  tags,
  createdAt,
  hasAcceptedAnswer = false,
}: QuestionCardProps) {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <Link to={`/questions/${id}`} className="block">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </h3>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
          
          {/* Vote section */}
          <div className="flex flex-col items-center space-y-1 shrink-0">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ArrowUp className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{votes}</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Meta information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MessageSquare className="h-4 w-4" />
              <span>{answers} {answers === 1 ? 'answer' : 'answers'}</span>
              {hasAcceptedAnswer && (
                <Badge variant="default" className="ml-1 bg-success text-success-foreground">
                  ✓
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{formatDistanceToNow(createdAt, { addSuffix: true })}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}