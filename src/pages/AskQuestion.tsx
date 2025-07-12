import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AskQuestion() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim().toLowerCase();
    if (trimmedTag && !tags.includes(trimmedTag) && tags.length < 5) {
      setTags([...tags, trimmedTag]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(currentTag);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim() || tags.length === 0) {
      toast({
        title: "Please fill in all fields",
        description: "Title, description, and at least one tag are required.",
        variant: "destructive",
      });
      return;
    }

    // TODO: Submit to MongoDB
    toast({
      title: "Question posted successfully!",
      description: "Your question has been shared with the community.",
    });
    
    navigate("/");
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Ask a Question</h1>
          <p className="text-muted-foreground">
            Get help from the community by asking a clear, specific question.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Question Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="What's your programming question? Be specific."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-base"
                />
                <p className="text-sm text-muted-foreground">
                  Make your title clear and specific to get better answers.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your problem in detail. Include what you've tried, what you expected, and what actually happened."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[150px] text-base"
                />
                <p className="text-sm text-muted-foreground">
                  Provide code examples, error messages, and any relevant context.
                </p>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="space-y-3">
                  <Input
                    id="tags"
                    placeholder="Add tags (e.g., react, javascript, mongodb)"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyDown={handleTagKeyPress}
                    onBlur={() => addTag(currentTag)}
                  />
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0 hover:bg-transparent"
                            onClick={() => removeTag(tag)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Add up to 5 tags to help others find your question. Press Enter or comma to add a tag.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  Post Question
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}