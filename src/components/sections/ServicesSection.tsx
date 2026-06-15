import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { services } from '../../constants/site'
import { Container } from '../layout/Container'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const serviceLinks: Record<string, string> = {
  '01': '#/services/pressure-testing',
  '02': '#/services/raised-flooring',
  '03': '#/services/radiant-climate',
  '04': '#/services/smart-glass',
  '05': '#/services/control-consoles',
  '06': '#/services/battery-storage',
  '07': '#/services/heat-exchangers',
  '08': '#/services/electrical-instrumentation',
  '09': '#/services/specialized-services',
}

export function ServicesSection() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null)

  return (
    <section aria-labelledby="services-heading" className="bg-white py-section-sm sm:py-section" id="services">
      <Container>
        <Reveal>
          <SectionEyebrow>Core Services</SectionEyebrow>
          <SectionHeading id="services-heading">Core Engineering & Technical Services</SectionHeading>
        </Reveal>
        <div className="mt-14 border-t border-line">
          {services.map((service) => {
            const isOpen = openServiceId === service.id
            const panelId = `service-panel-${service.id}`

            return (
              <Reveal delay={Number(service.id) * 0.04} key={service.id}>
                <article className="border-b border-line">
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[3rem_1fr_auto] items-center py-7 text-left focus:outline-none"
                  onClick={() => setOpenServiceId(isOpen ? null : service.id)}
                  type="button"
                >
                  <span className="font-mono text-sm font-bold text-brand-blue">{service.id}</span>
                  <span className="font-display text-2xl uppercase leading-none text-ink sm:text-3xl">{service.title}</span>
                  <ChevronDown
                    aria-hidden
                    className={`text-brand-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={16}
                    strokeWidth={1.75}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                  id={panelId}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-12 pr-8 font-body text-sm leading-7 text-ink-soft sm:pl-16">
                      <p>{service.description}</p>
                      <a
                        href={serviceLinks[service.id]}
                        className="inline-flex items-center gap-1.5 font-mono text-sm font-bold uppercase tracking-widest text-brand-blue hover:text-brand-red transition-colors mt-4"
                      >
                        Explore Technology Specifications →
                      </a>
                    </div>
                  </div>
                </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

