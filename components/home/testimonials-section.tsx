import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "JEE Advanced 2024 - AIR 1250",
    content:
      "Shree Academy's structured approach and dedicated faculty helped me crack JEE Advanced. The personalized attention made all the difference in my preparation.",
    image: "/indian-female-student-portrait-professional.jpg",
  },
  {
    name: "Rahul Verma",
    role: "NEET 2024 - Score 680",
    content:
      "The biology and chemistry faculty at Shree Academy are exceptional. Their teaching methodology and regular tests prepared me thoroughly for NEET.",
    image: "/indian-male-student-portrait-professional.jpg",
  },
  {
    name: "Ananya Gupta",
    role: "Class 12 Topper - 98.6%",
    content:
      "Best decision my parents made was enrolling me here. The teachers go above and beyond to ensure every student understands the concepts clearly.",
    image: "/indian-female-teenager-student-portrait.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Success Stories</p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            What Our Students Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-xl border border-border bg-card p-6 space-y-4">
              <Quote className="h-8 w-8 text-accent/50" />
              <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-accent">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
