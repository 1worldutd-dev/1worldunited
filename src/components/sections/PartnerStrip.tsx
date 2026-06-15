import { Container } from '../layout/Container'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

// Import the 12 partner logo images
import logo1 from '../../assets/images/partners/1.png'
import logo2 from '../../assets/images/partners/2.png'
import logo3 from '../../assets/images/partners/3.png'
import logo4 from '../../assets/images/partners/4.png'
import logo5 from '../../assets/images/partners/5.png'
import logo6 from '../../assets/images/partners/6.png'
import logo7 from '../../assets/images/partners/7.png'
import logo8 from '../../assets/images/partners/8.png'
import logo9 from '../../assets/images/partners/9.png'
import logo10 from '../../assets/images/partners/10.png'
import logo11 from '../../assets/images/partners/11.png'
import logo12 from '../../assets/images/partners/12.png'

const partnerLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12
]

export function PartnerStrip() {
  // Duplicate the list of logos to make a seamless infinite loop scrolling effect
  const doubleLogos = [...partnerLogos, ...partnerLogos]

  return (
    <section className="bg-surface-muted py-12 sm:py-16 overflow-hidden" aria-label="Trusted by leaders">
      <Container>
        <Reveal>
          <SectionEyebrow align="center">Trusted By Leaders</SectionEyebrow>
        </Reveal>
      </Container>
      
      {/* Infinite Horizontal Carousel Container */}
      <div className="relative mt-10 w-full">
        {/* Soft edge blur overlays to blend logos on edges */}
        <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-muted to-transparent pointer-events-none sm:w-24" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-muted to-transparent pointer-events-none sm:w-24" />

        {/* Scroll Track */}
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-logo-scroll gap-16 sm:gap-24 items-center px-4">
            {doubleLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center shrink-0"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index % partnerLogos.length + 1}`}
                  className="h-9 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
