import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/sections/Hero'
import Overview from '@/sections/Overview'
import Projects from '@/sections/Projects'
import Stats from '@/sections/Stats'
import Philosophy from '@/sections/Philosophy'
import CTA from '@/sections/CTA'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#cta' },
]

export default function Home() {
  return (
    <main className="bg-ink-950 text-white overflow-hidden">
      <Navbar
        brandName="HELIX"
        links={navLinks}
        cta={{ label: 'Explore Projects', href: '#projects' }}
      />
      <Hero />
      <Overview />
      <Projects />
      <Stats />
      <Philosophy />
      <CTA />
      <Footer
        brandName="HELIX"
        tagline="Premium digital ecosystem crafted for the modern era."
        columns={[
          {
            title: 'Ecosystem',
            links: [
              { label: 'ThreadForge', href: '/printing-brand' },
              { label: 'Aura', href: '/restaurant-brand' },
              { label: 'APEX', href: '/fitness-brand' },
              { label: 'Helix Digital', href: '/creative-agency' },
              { label: 'Form + Space', href: '/architecture-studio' },
            ],
          },
          {
            title: 'Capabilities',
            links: [
              { label: 'UI/UX Design', href: '#' },
              { label: 'Development', href: '#' },
              { label: 'Motion Design', href: '#' },
              { label: 'Brand Strategy', href: '#' },
            ],
          },
          {
            title: 'Contact',
            links: [
              { label: 'studio@helix.build', href: '#' },
              { label: 'San Francisco, CA', href: '#' },
            ],
          },
          {
            title: 'Social',
            links: [
              { label: 'GitHub', href: '#' },
              { label: 'Dribbble', href: '#' },
              { label: 'LinkedIn', href: '#' },
            ],
          },
        ]}
      />
    </main>
  )
}
