import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Calendar, MessageSquare, Award } from "lucide-react";
import { PublicNavbar } from "@/components/public-navbar";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PublicNavbar />
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Hobby Hunt
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're on a mission to connect people through their shared
                  interests and hobbies.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg">Join Our Community</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="About Hobby Hunt"
                className="aspect-square overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Story
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hobby Hunt was founded in 2023 with a simple idea: to create a
                platform where people could easily discover events related to
                their hobbies and connect with others who share their interests.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Our Story"
                className="aspect-square overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-muted-foreground">
                What started as a small community of enthusiasts has grown into
                a vibrant platform with thousands of users across the globe. We
                believe that hobbies are more than just pastimes—they're
                opportunities for connection, growth, and joy.
              </p>
              <p className="text-muted-foreground">
                Our team is made up of passionate individuals who are dedicated
                to creating a space where hobby enthusiasts can thrive. We're
                constantly working to improve the platform and add new features
                that make it easier for you to discover events and connect with
                others.
              </p>
              <p className="text-muted-foreground">
                Whether you're into gaming, music, sports, art, or any other
                hobby, we're here to help you find your community and make the
                most of your interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Values
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do at Hobby Hunt.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-center text-muted-foreground">
                We believe in the power of community and the connections that
                form when people share their interests.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-2">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-center text-muted-foreground">
                We strive to make events and discussions accessible to everyone,
                regardless of their background or experience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-2">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Engagement</h3>
              <p className="text-center text-muted-foreground">
                We encourage active participation and meaningful interactions
                between our users.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-2">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-center text-muted-foreground">
                We're committed to providing a high-quality platform with
                valuable content and experiences.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm md:col-span-2 lg:col-span-1">
              <div className="rounded-full bg-primary/10 p-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Diversity</h3>
              <p className="text-center text-muted-foreground">
                We celebrate the diversity of hobbies and the people who enjoy
                them, creating an inclusive environment for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Team
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the passionate individuals behind Hobby Hunt.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=160&width=160`}
                    alt={`Team Member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Team Member {i}</h3>
                  <p className="text-muted-foreground">Position</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join Our Community
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover events, connect with others, and pursue your passions
                with Hobby Hunt.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
