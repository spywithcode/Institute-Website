import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users } from "lucide-react"

const courses = [
  {
    title: "Class 10 Foundation",
    subjects: "Mathematics, Science, English, Social Studies",
    duration: "1 Year",
    students: "25/batch",
    image: "/students-studying-mathematics-and-science.jpg",
  },
  {
    title: "Class 12 Science",
    subjects: "Physics, Chemistry, Mathematics, Biology",
    duration: "2 Years",
    students: "20/batch",
    image: "/science-lab-students-with-equipment.jpg",
  },
  {
    title: "JEE/NEET Preparation",
    subjects: "Advanced Physics, Chemistry, Mathematics/Biology",
    duration: "1-2 Years",
    students: "15/batch",
    image: "/competitive-exam-preparation-classroom.jpg",
  },
]

export function CoursesPreview() {
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Our Programs</p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Popular Courses</h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group overflow-hidden rounded-xl bg-card border border-border transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-lg text-foreground">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.subjects}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </span>
                </div>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/courses">Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
