"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Campus", "Events", "Achievements", "Classroom", "Labs"]

const galleryImages = [
  {
    src: "/gallery-campus-entrance-building.jpg",
    alt: "Shree Academy Main Campus",
    category: "Campus",
    title: "Main Campus Building",
  },
  {
    src: "/gallery-classroom-students-learning.jpg",
    alt: "Students in classroom",
    category: "Classroom",
    title: "Interactive Learning Session",
  },
  {
    src: "/gallery-science-lab-practical.jpg",
    alt: "Science laboratory",
    category: "Labs",
    title: "Modern Science Laboratory",
  },
  {
    src: "/gallery-annual-day-stage-performance.jpg",
    alt: "Annual day celebration",
    category: "Events",
    title: "Annual Day 2024",
  },
  {
    src: "/gallery-jee-toppers-felicitation.jpg",
    alt: "JEE toppers felicitation",
    category: "Achievements",
    title: "JEE Toppers Felicitation",
  },
  {
    src: "/gallery-computer-lab-students.jpg",
    alt: "Computer lab",
    category: "Labs",
    title: "Computer Lab",
  },
  {
    src: "/gallery-sports-day-event.jpg",
    alt: "Sports day",
    category: "Events",
    title: "Annual Sports Day",
  },
  {
    src: "/gallery-library-reading-room.jpg",
    alt: "Library",
    category: "Campus",
    title: "Library & Reading Room",
  },
  {
    src: "/gallery-neet-achievers-ceremony.jpg",
    alt: "NEET achievers",
    category: "Achievements",
    title: "NEET Achievers 2024",
  },
  {
    src: "/gallery-seminar-hall-workshop.jpg",
    alt: "Seminar hall",
    category: "Events",
    title: "Career Guidance Seminar",
  },
  {
    src: "/gallery-chemistry-lab-experiment.jpg",
    alt: "Chemistry lab",
    category: "Labs",
    title: "Chemistry Lab Practical",
  },
  {
    src: "/gallery-teacher-student-interaction.jpg",
    alt: "Teacher interaction",
    category: "Classroom",
    title: "Doubt Clearing Session",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-card py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Gallery</p>
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Glimpses of Shree Academy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our campus, events, achievements, and the vibrant learning environment at Shree Academy.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.src}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-primary-foreground/80 block">{image.category}</span>
                      <h3 className="text-sm font-semibold text-primary-foreground">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-primary-foreground p-2">
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground p-2"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground p-2"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
            <div className="max-w-4xl max-h-[80vh] p-4">
              <img
                src={filteredImages[currentImageIndex]?.src || "/placeholder.svg"}
                alt={filteredImages[currentImageIndex]?.alt}
                className="max-h-[70vh] w-auto mx-auto rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-primary-foreground font-semibold">{filteredImages[currentImageIndex]?.title}</p>
                <p className="text-primary-foreground/70 text-sm">{filteredImages[currentImageIndex]?.category}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
