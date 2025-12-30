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
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Education Street", "Knowledge Park, City - 123456", "State, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 8 AM - 8 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@shreeacademy.edu", "admissions@shreeacademy.edu", "support@shreeacademy.edu"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8 AM - 8 PM", "Saturday: 9 AM - 5 PM", "Sunday: Closed"],
  },
]

const faqs = [
  {
    question: "What is the admission process?",
    answer:
      "Submit an online application, appear for entrance test (for competitive exam courses), complete fee payment, and start your learning journey.",
  },
  {
    question: "Are there any scholarships available?",
    answer:
      "Yes, we offer merit-based scholarships up to 100% for deserving students based on entrance test performance and previous academic records.",
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batch sizes of 15-25 students to ensure personalized attention and effective learning.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes, comprehensive study materials, notes, and practice papers are included in the course fee for all programs.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
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
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Get In Touch</p>
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
                We'd Love to Hear From You
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about admissions, courses, or anything else? Our team is here to help you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <info.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <div className="bg-card rounded-xl border border-border p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. We'll respond to your inquiry within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
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
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select value={formData.subject} onValueChange={(v) => handleChange("subject", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admission">Admission Inquiry</SelectItem>
                            <SelectItem value="course">Course Information</SelectItem>
                            <SelectItem value="fee">Fee Structure</SelectItem>
                            <SelectItem value="scholarship">Scholarship</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Write your message here..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Map & Social Links */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Find Us</h2>
                  <p className="text-muted-foreground mb-6">
                    Visit our campus and experience the learning environment firsthand.
                  </p>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8623168881907!2d77.20902697545937!3d28.632099075664684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0x5e1e5a1c8e5d5b0!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703849283847!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Shree Academy Location"
                    />
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Follow us on social media for updates, tips, and success stories.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">FAQs</p>
              <h2 className="font-serif text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
