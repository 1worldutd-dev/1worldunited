import { portfolioItems } from '../../constants/site'
import { Container } from '../layout/Container'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { SectionHeading } from '../ui/SectionHeading'

const portfolioLinks: Record<string, string> = {
  'High-Pressure Systems': '#/services/pressure-testing',
  'Access Floor Systems': '#/services/raised-flooring',
  'Radiant HVAC Solutions': '#/services/radiant-climate',
  'Smart Glass Glazing': '#/services/smart-glass',
  'Control Consoles': '#/services/control-consoles',
  'Battery Storage (BESS)': '#/services/battery-storage',
  'Heat Exchangers': '#/services/heat-exchangers',
  'Electrical & Instrumentation': '#/services/electrical-instrumentation',
  'Specialized Services': '#/services/specialized-services',
}

export function PortfolioSection() {
  return (
    <section aria-labelledby="portfolio-heading" className="bg-white pb-section-sm pt-12 sm:pb-section">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <SectionEyebrow color="red">Services Showcase</SectionEyebrow>
            <SectionHeading id="portfolio-heading">Core Industrial Systems</SectionHeading>
          </Reveal>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal delay={index * 0.08} key={item.title}>
              <a
                href={portfolioLinks[item.title] || '#/'}
                className="group block relative overflow-hidden bg-brand-black focus:outline-none border border-line"
              >
                <article aria-label={`${item.title}: ${item.description}`}>
                  <img
                    alt={item.alt}
                    className="aspect-[4/5] w-full object-cover opacity-40 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20"
                    height="650"
                    loading="lazy"
                    src={item.image}
                    width="520"
                  />
                  {/* Default Flat Black Overlay matching Hero Background */}
                  <div className="absolute inset-0 bg-brand-black/75 transition-opacity duration-300 group-hover:opacity-0 z-10" />

                  {/* Default Title (Always visible, fades out on hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-white transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                    <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-wider block mb-1">
                      Service {`0${index + 1}`}
                    </span>
                    <h3 className="font-display text-2xl uppercase leading-none">{item.title}</h3>
                    <span className="inline-block mt-3 font-mono text-sm font-bold uppercase tracking-wider text-brand-blue">
                      View Specs →
                    </span>
                  </div>

                  {/* Hover Panel (Slides up with solid high-contrast dark background) */}
                  <div className="absolute inset-0 bg-brand-black/95 p-6 text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0 z-30 flex flex-col justify-end">
                    <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-wider block mb-2">
                      Service {`0${index + 1}`}
                    </span>
                    <h3 className="font-display text-2xl uppercase leading-none text-white mb-2">{item.title}</h3>
                    <p className="font-body text-sm leading-5 text-white/85 mb-4">{item.description}</p>
                    <span className="inline-block font-mono text-sm font-bold uppercase tracking-wider text-brand-blue transition-colors group-hover:text-white">
                      Learn More & Specs →
                    </span>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

