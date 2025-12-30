import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight, Users } from "lucide-react"

const upcomingEvents = [
  {
    title: "Annual Science Exhibition 2025",
    date: "January 15, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Main Campus Hall",
    description:
      "Showcase your scientific projects and innovations. Open for all students from Class 6-12. Prizes worth ₹50,000.",
    category: "Exhibition",
    image: "/science-exhibition-students-projects.jpg",
  },
  {
    title: "JEE/NEET Motivation Seminar",
    date: "January 20, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Auditorium",
    description: "Special session by IIT and AIIMS alumni sharing success strategies and motivation tips.",
    category: "Seminar",
    image: "/motivation-seminar-auditorium.jpg",
  },
  {
    title: "Parent-Teacher Meeting",
    date: "January 25, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Respective Classrooms",
    description: "Quarterly PTM to discuss student progress and academic planning for the upcoming semester.",
    category: "Meeting",
    image: "/parent-teacher-meeting-school.jpg",
  },
  {
    title: "Mathematics Olympiad Workshop",
    date: "February 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Room 101-103",
    description: "Intensive workshop for students preparing for regional and national level Math Olympiads.",
    category: "Workshop",
    image: "/mathematics-olympiad-workshop.jpg",
  },
]

const pastEvents = [
  {
    title: "Annual Day Celebration 2024",
    date: "December 20, 2024",
    description: "A grand celebration featuring cultural performances, awards ceremony, and student achievements.",
    image: "/annual-day-celebration-school.jpg",
    attendees: "500+",
  },
  {
    title: "Career Guidance Workshop",
    date: "December 10, 2024",
    description: "Expert sessions on career options after Class 10 and 12, covering engineering, medical, and more.",
    image: "/career-guidance-workshop-students.jpg",
    attendees: "200+",
  },
  {
    title: "Inter-School Quiz Competition",
    date: "November 25, 2024",
    description: "Annual quiz competition featuring teams from 15 schools. Shree Academy won first place!",
    image: "/quiz-competition-students-stage.jpg",
    attendees: "300+",
  },
  {
    title: "Diwali Celebration",
    date: "November 1, 2024",
    description: "Festival celebration with rangoli competition, lamp lighting, and traditional performances.",
    image: "/diwali-celebration-school-students.jpg",
    attendees: "400+",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Events & Activities</p>
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Learning Beyond Classrooms
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay updated with our workshops, seminars, celebrations, and other exciting activities that enrich the
                learning experience.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-4 mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Mark Your Calendar</p>
              <h2 className="font-serif text-3xl font-bold text-foreground">Upcoming Events</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-xl text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href="/contact">Register Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-4 mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Look Back</p>
              <h2 className="font-serif text-3xl font-bold text-foreground">Past Events</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pastEvents.map((event) => (
                <div
                  key={event.title}
                  className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-accent font-medium">{event.date}</p>
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{event.description}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/gallery">
                  View All in Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
