import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
