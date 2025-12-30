import { Target, Users, Clock, Award, BookOpen, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Result-Oriented Teaching",
    description: "Our focused approach ensures students achieve their academic goals with excellent results.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Limited students per batch for personalized attention and better learning outcomes.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Multiple batch timings to accommodate students with varying schedules and needs.",
  },
  {
    icon: Award,
    title: "Experienced Faculty",
    description: "Learn from highly qualified and experienced teachers dedicated to your success.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Study Material",
    description: "Well-researched study material, notes, and practice tests for thorough preparation.",
  },
  {
    icon: HeartHandshake,
    title: "Individual Attention",
    description: "Regular doubt sessions and one-on-one guidance for every student's unique needs.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Why Choose Us</p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            What Makes Shree Academy Different
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            We combine traditional teaching values with modern methods to deliver an exceptional learning experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
