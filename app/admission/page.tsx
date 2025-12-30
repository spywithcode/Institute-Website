"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, FileText, ClipboardCheck, CreditCard, GraduationCap, ArrowRight, Phone } from "lucide-react"

const eligibility = [
  {
    course: "Class 9-10 Foundation",
    requirements: [
      "Completed Class 8 or above from a recognized board",
      "Age between 13-16 years",
      "Basic proficiency in Mathematics and Science",
    ],
  },
  {
    course: "Class 11-12 Science",
    requirements: [
      "Completed Class 10 with minimum 60% marks",
      "Science stream preference",
      "For PCM: 60% in Mathematics; For PCB: 60% in Biology",
    ],
  },
  {
    course: "JEE Preparation",
    requirements: [
      "Class 11/12 Science students or Class 12 pass",
      "Minimum 70% in PCM subjects",
      "Clear entrance test conducted by academy",
    ],
  },
  {
    course: "NEET Preparation",
    requirements: [
      "Class 11/12 Science students or Class 12 pass",
      "Minimum 70% in PCB subjects",
      "Clear entrance test conducted by academy",
    ],
  },
]

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out the online application form with your details and preferred course.",
  },
  {
    icon: ClipboardCheck,
    title: "Entrance Test",
    description: "Appear for the entrance assessment test (for competitive exam courses).",
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    description: "Pay the admission fee through online or offline payment modes.",
  },
  {
    icon: GraduationCap,
    title: "Start Learning",
    description: "Collect your study materials and begin your academic journey with us.",
  },
]

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    currentClass: "",
    course: "",
    address: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Admissions Open 2025</p>
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Begin Your Success Story
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join thousands of successful students who have achieved their academic dreams with Shree Academy.
              </p>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Simple Steps</p>
              <h2 className="font-serif text-3xl font-bold text-foreground">Admission Process</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <step.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-border hidden lg:block last:hidden" />
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full mb-2">
                    Step {index + 1}
                  </span>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form & Eligibility */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Application Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Online Application Form</h2>
                {isSubmitted ? (
                  <div className="bg-card rounded-xl border border-border p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for applying to Shree Academy. Our team will contact you within 24-48 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student Name *</Label>
                        <Input
                          id="studentName"
                          value={formData.studentName}
                          onChange={(e) => handleChange("studentName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                        <Input
                          id="parentName"
                          value={formData.parentName}
                          onChange={(e) => handleChange("parentName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="currentClass">Current Class *</Label>
                        <Select value={formData.currentClass} onValueChange={(v) => handleChange("currentClass", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8">Class 8</SelectItem>
                            <SelectItem value="9">Class 9</SelectItem>
                            <SelectItem value="10">Class 10</SelectItem>
                            <SelectItem value="11">Class 11</SelectItem>
                            <SelectItem value="12">Class 12</SelectItem>
                            <SelectItem value="passed">Class 12 Passed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course">Course Interested *</Label>
                        <Select value={formData.course} onValueChange={(v) => handleChange("course", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="foundation">Class 9-10 Foundation</SelectItem>
                            <SelectItem value="science-11-12">Class 11-12 Science</SelectItem>
                            <SelectItem value="commerce">Commerce Stream</SelectItem>
                            <SelectItem value="jee">JEE Preparation</SelectItem>
                            <SelectItem value="neet">NEET Preparation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Any specific questions or requirements..."
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Eligibility */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
                <div className="space-y-6">
                  {eligibility.map((item) => (
                    <div key={item.course} className="bg-card rounded-xl border border-border p-6">
                      <h3 className="font-semibold text-foreground mb-4">{item.course}</h3>
                      <ul className="space-y-2">
                        {item.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Contact for Queries */}
                <div className="mt-8 bg-primary rounded-xl p-6 text-primary-foreground">
                  <h3 className="font-semibold mb-2">Have Questions?</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Our admission counselors are here to help you with any queries.
                  </p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
