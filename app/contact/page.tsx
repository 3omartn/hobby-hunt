import { PublicNavbar } from "@/components/public-navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PublicNavbar />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Contact Us
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="Enter the subject" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  You can also reach out to us using the information below.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">info@hobbyhunt.com</p>
                    <p className="text-muted-foreground">
                      support@hobbyhunt.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-muted-foreground">123 Hobby Street</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-muted p-6">
                <h3 className="font-bold">Office Hours</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>Monday - Friday: 9am - 5pm EST</li>
                  <li>Saturday: 10am - 2pm EST</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about Hobby Hunt.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                question: "How do I create an account?",
                answer:
                  "You can create an account by clicking the 'Sign Up' button in the top right corner of the page. Fill out the required information and you'll be ready to go!",
              },
              {
                question: "Is Hobby Hunt free to use?",
                answer:
                  "Yes, Hobby Hunt is completely free to use. You can create an account, browse events, and join discussions without any cost.",
              },
              {
                question: "How do I find events related to my hobbies?",
                answer:
                  "Once you're logged in, you can browse events on the Home page. Use the filters to narrow down events by category, location, or date.",
              },
              {
                question: "Can I create my own events?",
                answer:
                  "Yes! After signing in, you can create your own events by clicking the 'Create Event' button on the Home page.",
              },
              {
                question: "How do I join a discussion thread?",
                answer:
                  "Navigate to the Threads page, browse the available threads, and click on one that interests you. You can then read the discussion and add your own comments.",
              },
              {
                question:
                  "What if I need help with something not covered here?",
                answer:
                  "Feel free to contact us using the form on this page or by emailing support@hobbyhunt.com. We're here to help!",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border bg-background p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
