import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { DesignGallery } from '@/components/design-gallery'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { SmoothScroll } from '@/components/smooth-scroll'

export default function Page() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <SiteNav />
      <Hero />
      <About />
      <Projects />
      <DesignGallery />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  )
}
