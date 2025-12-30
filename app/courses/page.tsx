import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, Users, CheckCircle, ArrowRight } from "lucide-react"

const courses = [
  {
    title: "Class 9-10 Foundation",
    category: "School Board",
    description:
      "Comprehensive preparation for board examinations with focus on conceptual clarity and application-based learning.",
    duration: "1-2 Years",
    batchSize: "25 students",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
    features: [
      "NCERT-aligned curriculum",
      "Regular chapter tests",
      "Board exam preparation",
      "Doubt clearing sessions",
      "Study material included",
    ],
    image: "/students-class-10-board-preparation.jpg",
  },
  {
    title: "Class 11-12 Science",
    category: "Higher Secondary",
    description: "In-depth preparation for Class 11-12 Science stream with PCM/PCB options for JEE/NEET foundation.",
    duration: "2 Years",
    batchSize: "20 students",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    features: [
      "Concept-based teaching",
      "Lab practical guidance",
      "Previous year papers",
      "Weekly assessments",
      "Career counseling",
    ],
    image: "/students-class-12-science-stream.jpg",
  },
  {
    title: "JEE Main & Advanced",
    category: "Competitive Exams",
    description:
      "Rigorous preparation program for JEE Main and Advanced with proven track record of selections in top IITs.",
    duration: "1-2 Years",
    batchSize: "15 students",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    features: [
      "IIT-focused curriculum",
      "Mock test series",
      "Problem solving sessions",
      "Rank improvement program",
      "Expert IITian faculty",
    ],
    image: "/jee-preparation-intensive-coaching.jpg",
  },
  {
    title: "NEET Preparation",
    category: "Competitive Exams",
    description:
      "Specialized coaching for NEET aspirants with comprehensive coverage of Physics, Chemistry, and Biology.",
    duration: "1-2 Years",
    batchSize: "15 students",
    subjects: ["Physics", "Chemistry", "Biology"],
    features: [
      "NCERT mastery program",
      "AIIMS/NEET mock tests",
      "Medical entrance focus",
      "Regular doubt sessions",
      "Performance analysis",
    ],
    image: "/neet-medical-entrance-preparation.jpg",
  },
  {
    title: "Commerce Stream",
    category: "Higher Secondary",
    description: "Complete coaching for Commerce students covering Accounts, Economics, and Business Studies.",
    duration: "2 Years",
    batchSize: "25 students",
    subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics"],
    features: [
      "Practical case studies",
      "CA/CS foundation",
      "Board exam preparation",
      "Project guidance",
      "Interview preparation",
    ],
    image: "/commerce-students-accounts-classroom.jpg",
  },
  {
    title: "Foundation Course",
    category: "Junior",
    description:
      "Early preparation program for Class 6-8 students to build strong fundamentals for future competitive exams.",
    duration: "1 Year",
    batchSize: "30 students",
    subjects: ["Mathematics", "Science", "Mental Ability", "English"],
    features: [
      "Olympiad preparation",
      "Logical reasoning",
      "Interactive learning",
      "Activity-based teaching",
      "Regular assessments",
    ],
    image: "/junior-foundation-course-students.jpg",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Our Programs</p>
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Courses Designed for Success
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From school board preparation to competitive exams, we offer comprehensive courses tailored to meet
                every student's academic needs.
              </p>
            </div>
          </div>
        </section>

        {/* Courses List */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-12">
              {courses.map((course, index) => (
                <div
                  key={course.title}
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">
                        {course.category}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{course.title}</h2>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{course.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-accent" />
                        <span>{course.batchSize}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject) => (
                        <span key={subject} className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button asChild>
                        <Link href="/admission">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Enquire</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance mb-4">
              Not Sure Which Course is Right for You?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Our counselors are here to help you choose the perfect course based on your academic goals and interests.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Free Counseling
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
