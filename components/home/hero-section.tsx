import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Welcome to Shree Academy</p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Nurturing Minds, Building Futures
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Empowering students with quality education, personalized attention, and holistic development to achieve
                academic excellence and life success.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/admission">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <p className="text-2xl font-bold text-foreground">5000+</p>
                <p className="text-xs text-muted-foreground">Students Enrolled</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-xs text-muted-foreground">Expert Faculty</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/students-studying-in-modern-classroom-with-teacher.jpg"
                alt="Students learning at Shree Academy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 shadow-xl">
              <p className="text-3xl font-bold text-primary-foreground">98%</p>
              <p className="text-sm text-primary-foreground/80">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
