import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { DesignGallery } from '@/components/design-gallery'
import { TechnicalArsenal } from '@/components/technical-arsenal'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { SmoothScroll } from '@/components/smooth-scroll'
import { getPortfolioContent } from '@/lib/portfolio-content'

export default function Page() {
  const content = getPortfolioContent()

  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <SiteNav site={content.site} links={content.nav} />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Projects content={content.projects} />
      <DesignGallery content={content.design} />
      <TechnicalArsenal content={content.arsenal} />
      <Experience content={content.experience} />
      <Contact content={content.contact} />
      <SiteFooter site={content.site} />
    </main>
  )
}
