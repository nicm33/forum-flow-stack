import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, Users, Trophy, Tag, Heart } from "lucide-react";

const helpSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: MessageSquare,
    items: [
      {
        question: "How do I ask my first question?",
        answer: "Click the 'Ask Question' button in the header, provide a clear title, detailed description using our rich text editor, and add relevant tags to help others find and answer your question."
      },
      {
        question: "What makes a good question?",
        answer: "A good question has a clear, specific title, includes relevant code or examples, explains what you've tried, and uses appropriate tags. Be specific about your problem and the expected outcome."
      },
      {
        question: "How do I format my question properly?",
        answer: "Use our rich text editor to format your question. You can add bold/italic text, lists, code blocks, images, and links. Good formatting makes your question easier to read and understand."
      }
    ]
  },
  {
    id: "answering",
    title: "Answering Questions", 
    icon: Users,
    items: [
      {
        question: "How do I provide a good answer?",
        answer: "Provide clear, detailed explanations with examples when possible. Include code snippets, explain your reasoning, and test your solution before posting. Focus on helping the questioner understand the concept."
      },
      {
        question: "Can I edit my answer after posting?",
        answer: "Yes, you can edit your answers at any time to improve clarity, fix errors, or add additional information. Edits help maintain the quality of the community knowledge base."
      },
      {
        question: "What happens when my answer is accepted?",
        answer: "When a question owner marks your answer as accepted, it means they found it most helpful. Accepted answers appear with a green checkmark and give you reputation points."
      }
    ]
  },
  {
    id: "voting",
    title: "Voting & Reputation",
    icon: Trophy,
    items: [
      {
        question: "How does the voting system work?",
        answer: "Users can upvote or downvote questions and answers based on their quality and helpfulness. Upvotes increase reputation, while downvotes decrease it. This helps surface the best content."
      },
      {
        question: "What is reputation and how do I earn it?",
        answer: "Reputation reflects your contributions to the community. You earn it by asking good questions, providing helpful answers, and having your content upvoted by other users."
      },
      {
        question: "When should I upvote or downvote?",
        answer: "Upvote content that is helpful, well-researched, and clearly written. Downvote content that is unclear, unhelpful, or doesn't follow community guidelines. Always be constructive."
      }
    ]
  },
  {
    id: "tags",
    title: "Tags & Organization",
    icon: Tag,
    items: [
      {
        question: "How do I choose the right tags?",
        answer: "Select tags that accurately describe the technologies, concepts, or topics your question covers. Use specific tags (like 'react-hooks') rather than general ones when possible."
      },
      {
        question: "Can I follow specific tags?",
        answer: "Yes, you can follow tags to get notifications about new questions in topics that interest you. This helps you discover questions you can answer and stay updated on technologies you care about."
      },
      {
        question: "How many tags can I use?",
        answer: "You can use multiple tags per question, but it's best to use 3-5 relevant tags. Too many tags can dilute the focus, while too few might make your question harder to discover."
      }
    ]
  }
];

export default function Help() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
            <HelpCircle className="h-8 w-8 text-primary" />
            Help Center
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn how to make the most of StackIt. Find answers to common questions and discover best practices for our Q&A community.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {helpSections.map((section) => (
            <Card key={section.id} className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <section.icon className="h-6 w-6 text-primary" />
                  {section.title}
                </CardTitle>
                <CardDescription>
                  Common questions and guidance for {section.title.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, index) => (
                    <AccordionItem key={index} value={`${section.id}-${index}`}>
                      <AccordionTrigger className="text-left text-sm">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-primary" />
              Community Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">Be Respectful</h4>
                <p className="text-sm text-muted-foreground">
                  Treat all community members with respect. Be constructive in your feedback and avoid personal attacks or offensive language.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Stay On Topic</h4>
                <p className="text-sm text-muted-foreground">
                  Keep questions and answers focused on programming and technology topics. Off-topic discussions should be moved to appropriate channels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Search Before Asking</h4>
                <p className="text-sm text-muted-foreground">
                  Before posting a new question, search existing questions to avoid duplicates. If you find a similar question, consider adding to the discussion there.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Provide Context</h4>
                <p className="text-sm text-muted-foreground">
                  Include relevant code, error messages, and explain what you've already tried. This helps others provide better, more targeted assistance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}