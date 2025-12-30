import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Download, Bell, BookOpen, FileText, Calendar, Video, ExternalLink, Clock } from "lucide-react"

const notices = [
  {
    title: "Fee Payment Deadline Extended",
    date: "December 28, 2024",
    priority: "high",
    content: "Last date for fee payment for Q4 has been extended to January 10, 2025.",
  },
  {
    title: "Winter Vacation Schedule",
    date: "December 25, 2024",
    priority: "normal",
    content: "Academy will remain closed from December 26, 2024 to January 2, 2025 for winter break.",
  },
  {
    title: "JEE Main Mock Test Schedule",
    date: "December 22, 2024",
    priority: "high",
    content: "Mock tests will be conducted every Sunday starting January 5, 2025. Timing: 9 AM - 12 PM.",
  },
  {
    title: "Library Timing Change",
    date: "December 20, 2024",
    priority: "normal",
    content: "Library will now be open from 8 AM to 8 PM on all working days effective January 2025.",
  },
]

const resources = [
  {
    title: "Class 10 Mathematics Notes",
    type: "PDF",
    size: "12.5 MB",
    downloads: "2.3k",
    icon: FileText,
  },
  {
    title: "Physics Formula Sheet",
    type: "PDF",
    size: "3.2 MB",
    downloads: "4.1k",
    icon: FileText,
  },
  {
    title: "Chemistry Organic Reactions",
    type: "PDF",
    size: "8.7 MB",
    downloads: "1.8k",
    icon: FileText,
  },
  {
    title: "Biology Diagrams Collection",
    type: "PDF",
    size: "15.3 MB",
    downloads: "2.1k",
    icon: FileText,
  },
  {
    title: "JEE Previous Year Papers",
    type: "ZIP",
    size: "45.2 MB",
    downloads: "5.6k",
    icon: FileText,
  },
  {
    title: "NEET Question Bank",
    type: "PDF",
    size: "22.8 MB",
    downloads: "3.9k",
    icon: FileText,
  },
]

const schedule = [
  { day: "Monday", batches: ["Class 10 - 7:00 AM", "Class 12 PCM - 2:00 PM", "JEE - 5:00 PM"] },
  { day: "Tuesday", batches: ["Class 11 - 7:00 AM", "Class 12 PCB - 2:00 PM", "NEET - 5:00 PM"] },
  { day: "Wednesday", batches: ["Class 10 - 7:00 AM", "Class 12 PCM - 2:00 PM", "JEE - 5:00 PM"] },
  { day: "Thursday", batches: ["Class 11 - 7:00 AM", "Class 12 PCB - 2:00 PM", "NEET - 5:00 PM"] },
  { day: "Friday", batches: ["Class 10 - 7:00 AM", "Doubt Session - 2:00 PM", "Test Series - 5:00 PM"] },
  { day: "Saturday", batches: ["Foundation - 9:00 AM", "Special Classes - 2:00 PM", "Mock Tests - 5:00 PM"] },
]

const onlineResources = [
  {
    title: "Video Lectures",
    description: "Access recorded lectures for all subjects",
    icon: Video,
    link: "#",
  },
  {
    title: "Online Test Portal",
    description: "Practice tests and mock exams",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Academic Calendar",
    description: "View important dates and schedules",
    icon: Calendar,
    link: "#",
  },
]

export default function StudentZonePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Student Zone</p>
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Your Learning Hub
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access study materials, important notices, class schedules, and everything you need for academic
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {onlineResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.link}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Notices Section */}
        <section id="notices" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Notices */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Bell className="h-5 w-5 text-accent" />
                  <h2 className="font-serif text-2xl font-bold text-foreground">Important Notices</h2>
                </div>
                <div className="space-y-4">
                  {notices.map((notice) => (
                    <div key={notice.title} className="p-4 bg-card rounded-xl border border-border">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {notice.priority === "high" && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-destructive/10 text-destructive rounded">
                                Important
                              </span>
                            )}
                            <span className="text-xs text-muted-foreground">{notice.date}</span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-1">{notice.title}</h3>
                          <p className="text-sm text-muted-foreground">{notice.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Class Schedule */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="h-5 w-5 text-accent" />
                  <h2 className="font-serif text-2xl font-bold text-foreground">Class Schedule</h2>
                </div>
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  {schedule.map((day, index) => (
                    <div
                      key={day.day}
                      className={`p-4 ${index !== schedule.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <h4 className="font-semibold text-foreground mb-2">{day.day}</h4>
                      <div className="space-y-1">
                        {day.batches.map((batch) => (
                          <p key={batch} className="text-sm text-muted-foreground">
                            {batch}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-16 sm:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Download className="h-5 w-5 text-accent" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Study Materials & Downloads</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                      <resource.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{resource.title}</h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>{resource.size}</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Login to access all study materials. Contact admin for login credentials.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
