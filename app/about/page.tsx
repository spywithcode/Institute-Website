import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Target, Eye, BookOpen, Award, Users, GraduationCap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards for our students and faculty.",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "Embracing modern teaching methods while preserving traditional educational values.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Creating a welcoming environment where every student can thrive and succeed.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Maintaining honesty and ethical practices in all our academic endeavors.",
  },
]

const faculty = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Director & Physics Faculty",
    experience: "20+ years",
    qualification: "Ph.D. Physics, IIT Delhi",
    image: "/indian-male-professor-physics-portrait.jpg",
  },
  {
    name: "Prof. Sunita Sharma",
    role: "Head - Mathematics",
    experience: "15+ years",
    qualification: "M.Sc. Mathematics, Gold Medalist",
    image: "/indian-female-professor-mathematics-portrait.jpg",
  },
  {
    name: "Dr. Amit Verma",
    role: "Head - Chemistry",
    experience: "18+ years",
    qualification: "Ph.D. Chemistry, BHU",
    image: "/indian-male-professor-chemistry-portrait.jpg",
  },
  {
    name: "Dr. Priya Singh",
    role: "Head - Biology",
    experience: "12+ years",
    qualification: "Ph.D. Botany, AIIMS Faculty",
    image: "/indian-female-professor-biology-portrait.jpg",
  },
]

const milestones = [
  {
    year: "2010",
    title: "Foundation",
    description: "Shree Academy was established with a vision to transform education.",
  },
  { year: "2013", title: "First 1000 Students", description: "Crossed the milestone of 1000 enrolled students." },
  {
    year: "2016",
    title: "New Campus",
    description: "Inaugurated our state-of-the-art new campus with modern facilities.",
  },
  { year: "2020", title: "Digital Learning", description: "Launched online learning platform during the pandemic." },
  {
    year: "2024",
    title: "15 Years of Excellence",
    description: "Celebrating 15 years of academic excellence and success.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase tracking-wider text-accent">About Us</p>
                <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Shaping Tomorrow's Leaders Today
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Established in 2010, Shree Academy has been at the forefront of quality education, nurturing young
                  minds and helping them achieve their dreams. Our commitment to excellence and personalized learning
                  has made us a trusted name in education.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 15 years of experience, we have successfully guided thousands of students to excel in board
                  examinations and competitive entrance tests. Our holistic approach combines academic rigor with
                  character development.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="/coaching-institute-building-modern-exterior.jpg"
                    alt="Shree Academy Campus"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-card p-8 border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-6">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted educational institution that empowers students to achieve academic excellence
                  while developing into responsible, innovative, and compassionate individuals who contribute positively
                  to society.
                </p>
              </div>
              <div className="rounded-xl bg-card p-8 border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education through innovative teaching methods, personalized attention, and a
                  supportive learning environment. We aim to nurture curiosity, critical thinking, and a lifelong love
                  for learning in every student.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">What We Believe In</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Core Values</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <value.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Meet Our Team</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Expert Faculty</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Our experienced faculty members are dedicated to providing the best education and guidance.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {faculty.map((member) => (
                <div key={member.name} className="group rounded-xl bg-card border border-border overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-accent font-medium">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-2">{member.qualification}</p>
                    <p className="text-xs text-muted-foreground">{member.experience} experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Our Journey</p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Milestones</h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className="bg-card rounded-xl p-6 border border-border inline-block">
                        <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                        <h3 className="font-semibold text-foreground mt-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:block">
                      <div className="h-4 w-4 rounded-full bg-accent border-4 border-background" />
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <div>
                <GraduationCap className="h-10 w-10 mx-auto mb-4 text-primary-foreground/80" />
                <p className="text-4xl font-bold">5000+</p>
                <p className="text-primary-foreground/80">Students Enrolled</p>
              </div>
              <div>
                <Users className="h-10 w-10 mx-auto mb-4 text-primary-foreground/80" />
                <p className="text-4xl font-bold">50+</p>
                <p className="text-primary-foreground/80">Expert Faculty</p>
              </div>
              <div>
                <Award className="h-10 w-10 mx-auto mb-4 text-primary-foreground/80" />
                <p className="text-4xl font-bold">98%</p>
                <p className="text-primary-foreground/80">Success Rate</p>
              </div>
              <div>
                <BookOpen className="h-10 w-10 mx-auto mb-4 text-primary-foreground/80" />
                <p className="text-4xl font-bold">15+</p>
                <p className="text-primary-foreground/80">Years Experience</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
