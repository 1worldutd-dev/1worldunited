import { useState } from 'react'
import { ArrowLeft, CheckCircle2, Lightbulb, Compass, ShoppingBag, Award } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { Navbar } from '../../components/layout/Navbar'
import { Footer } from '../../components/layout/Footer'
import { Reveal } from '../../components/ui/Reveal'

// Import campaign & divider images
import retailCampaignsImg from '../../assets/images/visual-merchandising/retail_campaigns.png'
import flexWallsImg from '../../assets/images/visual-merchandising/flex_walls.png'

// Import category images (premium replacements)
import retailIlluminationImg from '../../assets/images/visual-merchandising/retail_illumination.png'
import outdoorSignsImg from '../../assets/images/visual-merchandising/outdoor_signs.png'
import exhibitionDisplaysImg from '../../assets/images/visual-merchandising/exhibition_displays.png'
import menuSolutionsImg from '../../assets/images/visual-merchandising/menu_solutions.png'
import infoManagementImg from '../../assets/images/visual-merchandising/info_management.png'
import pedestalStandsImg from '../../assets/images/visual-merchandising/pedestal_stands.png'
import accessProtectionImg from '../../assets/images/visual-merchandising/access_protection.png'
import wayfindingSignsImg from '../../assets/images/visual-merchandising/wayfinding_signs.png'
import digitalSolutionsImg from '../../assets/images/visual-merchandising/digital_solutions.png'

// Import fabrication images
import boutiqueWindowImg from '../../assets/images/visual-merchandising/boutique_window.png'
import wellnessCounterImg from '../../assets/images/visual-merchandising/wellness_counter.png'
import woodenPlinthsImg from '../../assets/images/visual-merchandising/wooden_plinths.png'
import kidsDisplayImg from '../../assets/images/visual-merchandising/kids_display.png'
import sportsDisplayImg from '../../assets/images/visual-merchandising/sports_display.png'

type ProductCategory = {
  id: string
  title: string
  products: string[]
  images: string[]
}

const productCategories: ProductCategory[] = [
  {
    id: '01',
    title: 'Retail Frames & Illumination',
    products: ['Opti Frames', 'Snap/Poster Frames', 'Illuminated Products'],
    images: [retailIlluminationImg]
  },
  {
    id: '02',
    title: 'Outdoor Signs & Fabrication',
    products: ['Pavement Signs', 'Printable Solutions', 'Wood Displays'],
    images: [outdoorSignsImg]
  },
  {
    id: '03',
    title: 'Exhibition & Large Format',
    products: ['Exhibition Displays', 'Counter Displays', 'Banners'],
    images: [exhibitionDisplaysImg]
  },
  {
    id: '04',
    title: 'Signage & Menu Solutions',
    products: ['Poster Holders', 'Real Estate Signs', 'Menuboards'],
    images: [menuSolutionsImg]
  },
  {
    id: '05',
    title: 'Information Management',
    products: ['Noticeboards', 'Frameboards', 'Showboards'],
    images: [infoManagementImg]
  },
  {
    id: '06',
    title: 'Pedestals & Dispensers',
    products: ['Info Stands', 'Presentation Systems', 'Leaflet Dispensers'],
    images: [pedestalStandsImg]
  },
  {
    id: '07',
    title: 'Access & Protection',
    products: ['Brochure Sets', 'Que Control System', 'PPE'],
    images: [accessProtectionImg]
  },
  {
    id: '08',
    title: 'Wayfinding & Facility',
    products: ['Slide-in Frames', 'Door Signs', 'Office Facilities'],
    images: [wayfindingSignsImg]
  },
  {
    id: '09',
    title: 'Digital & Custom Shapes',
    products: ['Digital Solutions', 'Outdoor Display', 'Die Cut Solutions'],
    images: [digitalSolutionsImg]
  }
]

const fabricationShowcase = [
  { image: boutiqueWindowImg, title: 'Boutique Store Shop Windows', desc: 'Prestige window dressing layouts featuring customized metal support structures, boutique frames, and ambient illumination.' },
  { image: wellnessCounterImg, title: 'Carrefour Wellness Shop Counters', desc: 'Shop-in-shop custom fabrication display counters matching exact corporate specifications for retail health zones.' },
  { image: woodenPlinthsImg, title: 'Bespoke Wooden Plinths & Podiums', desc: 'Custom structural plinths and premium wood display blocks crafted for boutique jewelry and cosmetic installations.' },
  { image: kidsDisplayImg, title: 'Child-Themed Promotional Cutouts', desc: 'Whimsical high-resolution custom die-cut character solutions designed for family-centric retail experiences.' },
  { image: sportsDisplayImg, title: 'Sports Wall Display Fixtures', desc: 'Precision engineered metallic wall shelving brackets and athletic shoe display fixtures for modern sportswear environments.' },
  { image: exhibitionDisplaysImg, title: 'Creative Brand Exhibition Booths', desc: 'Large format structural frames, counter structures, and double-sided banners for retail showrooms.' },
  { image: menuSolutionsImg, title: 'Custom Fabricated Showboards', desc: 'Specialized menu solutions, real estate stands, and lockable noticeboard structures.' },
  { image: flexWallsImg, title: 'Promotional Brand Dividers', desc: 'High-impact seasonal marketing hoardings and display partitions designed for major shopping malls.' },
  { image: pedestalStandsImg, title: 'Delicate Custom Stands', desc: 'Tailored pedestals and presentation systems to optimize customer engagement.' }
]

function CardImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)

  if (images.length <= 1) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted border-b border-line">
        <img
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          src={images[0]}
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted border-b border-line group">
      <img
        alt={`${alt} - View ${index + 1}`}
        className="h-full w-full object-cover transition-opacity duration-300"
        src={images[index]}
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.preventDefault()
          setIndex((prev) => (prev - 1 + images.length) % images.length)
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-black/80 hover:bg-brand-blue text-white transition-colors focus:outline-none z-10 opacity-0 group-hover:opacity-100"
        type="button"
        aria-label="Previous image"
      >
        &#8592;
      </button>
      <button
        onClick={(e) => {
          e.preventDefault()
          setIndex((prev) => (prev + 1) % images.length)
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-black/80 hover:bg-brand-blue text-white transition-colors focus:outline-none z-10 opacity-0 group-hover:opacity-100"
        type="button"
        aria-label="Next image"
      >
        &#8594;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-brand-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault()
              setIndex(i)
            }}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-brand-blue scale-110' : 'bg-white/60'}`}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function VisualMerchandisingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-brand-black text-white relative py-24 border-b border-white/10">
          <Container>
            <a 
              className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-[0.15em] text-brand-blue hover:text-white transition-colors mb-8"
              href="#/services/specialized-services"
            >
              <ArrowLeft size={12} /> Back to Specialized Services
            </a>
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-[0.2em] block mb-3">Service 10</span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-none max-w-4xl">
                Visual Merchandising & Fixture Installation
              </h1>
              <p className="font-mono text-sm text-white/60 tracking-wider uppercase mt-4 max-w-2xl">
                The Art of Marketing: High-impact retail print and in-store execution that turns brand ideas into polished customer experiences.
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Vision Statement */}
        <section className="py-20 border-b border-line bg-surface-muted">
          <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <Reveal>
              <span className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-brand-red mb-3 block">Corporate Vision</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight text-ink mb-6">
                Bridging Creative Concepts and Real-World Execution
              </h2>
              <div className="font-body text-sm leading-relaxed text-ink-soft space-y-4">
                <p>
                  We transform ideas into impactful retail experiences. We bridge the gap between creative concepts and real-world execution by designing and delivering retail environments that are visually compelling, strategically planned, and built to drive results.
                </p>
                <p>
                  Our mission is to create immersive, customer-centric spaces that not only enhance brand presence but also influence purchasing decisions and improve the overall shopping experience.
                </p>
                <p>
                  By combining innovative design, quality craftsmanship, and deep retail expertise, we help brands connect with modern consumers, increase engagement, and maximize in-store conversions. From concept development to final installation, we ensure every retail space reflects the brand's identity while delivering measurable business outcomes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-brand-black text-white p-8 border border-line shadow-lg relative overflow-hidden">
                {/* Decorative border layout */}
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue" />
                <h3 className="font-display text-2xl uppercase tracking-wider mb-6 pl-2">Key Competencies</h3>
                <div className="space-y-6 pl-2">
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-blue uppercase tracking-wide flex items-center gap-2">
                      <ShoppingBag size={14} /> Visual Merchandising
                    </h4>
                    <p className="font-body text-sm text-white/70 mt-1 leading-relaxed">
                      Strategy-driven displays that maximize product visibility and captivate consumer attention.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-blue uppercase tracking-wide flex items-center gap-2">
                      <Compass size={14} /> Fixture Installation
                    </h4>
                    <p className="font-body text-sm text-white/70 mt-1 leading-relaxed">
                      Precision-engineered assembly and structural deployment conforming to design parameters.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-sm font-bold text-brand-blue uppercase tracking-wide flex items-center gap-2">
                      <Lightbulb size={14} /> Electrical & Lighting
                    </h4>
                    <p className="font-body text-sm text-white/70 mt-1 leading-relaxed">
                      Lighting is the soul of retail. We handle end-to-end electrical works, integrating accent lights and LED signage to guide shopper behavior and define the store atmosphere.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 9 Product Categories Grid */}
        <section className="py-20 border-b border-line bg-white">
          <Container>
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-brand-red mb-3 block">Product Lines</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-ink">
                Comprehensive Retail & Point-of-Sale Catalog
              </h2>
              <p className="font-body text-sm text-ink-soft mt-3">
                Explore our nine detailed product divisions supplying premium structural display frames, signage systems, wayfinding solutions, and custom shapes.
              </p>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {productCategories.map((category, index) => (
                <Reveal delay={index * 0.05} key={category.id}>
                  <article className="flex flex-col h-full border border-line bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardImageSlider 
                      images={category.images} 
                      alt={category.title} 
                    />
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-sm font-bold text-brand-blue">{category.id}</span>
                        <h3 className="font-display text-xl uppercase tracking-wide text-ink">
                          {category.title}
                        </h3>
                      </div>
                      
                      <div className="mt-auto border-t border-line/50 pt-4">
                        <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-brand-red mb-2">
                          Available Products:
                        </h4>
                        <ul className="space-y-2">
                          {category.products.map((prod, idx) => (
                            <li className="flex items-start gap-2 font-body text-sm text-ink-soft" key={idx}>
                              <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={14} />
                              <span>{prod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Campaigns & Flex Walls */}
        <section className="py-20 border-b border-line bg-surface-muted">
          <Container className="grid gap-16 lg:grid-cols-2">
            {/* Seasonal Campaigns */}
            <Reveal>
              <div className="border border-line bg-white shadow-sm overflow-hidden h-full flex flex-col">
                <img 
                  alt="Seasonal retail campaigns and hoarding structures" 
                  className="w-full object-cover aspect-[16/9] border-b border-line" 
                  src={retailCampaignsImg} 
                />
                <div className="p-8 flex-grow">
                  <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-wider block mb-2">Campaigns</span>
                  <h3 className="font-display text-2xl uppercase text-ink mb-4">Seasonal Campaigns</h3>
                  <p className="font-body text-sm text-ink-soft leading-relaxed mb-4">
                    Complete setup and deployment for major calendar promotions. We manufacture and assemble custom holiday arches, mall walkway installations, and high-impact retail hoarding boards to keep store transitions smooth and captivating.
                  </p>
                  <ul className="space-y-2 border-t border-line pt-4">
                    {['Promotional Arches & Walkways', 'High-Impact Store Hoarding Panels', 'Seasonal Window Graphic Assemblies'].map((item, idx) => (
                      <li className="flex items-center gap-2 font-body text-sm text-ink-soft" key={idx}>
                        <CheckCircle2 className="text-brand-blue shrink-0" size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Flex Walls */}
            <Reveal delay={0.1}>
              <div className="border border-line bg-white shadow-sm overflow-hidden h-full flex flex-col">
                <img 
                  alt="Flex walls modular presentation" 
                  className="w-full object-cover aspect-[16/9] border-b border-line" 
                  src={flexWallsImg} 
                />
                <div className="p-8 flex-grow">
                  <span className="font-mono text-sm font-bold uppercase text-brand-red tracking-wider block mb-2">Modular Dividers</span>
                  <h3 className="font-display text-2xl uppercase text-ink mb-4">Flex Walls</h3>
                  <p className="font-body text-sm text-ink-soft leading-relaxed mb-4">
                    Premium modular partitions and temporary architectural setups. Highly suitable for creating flexible store zones, pop-up structures, product pods, and dynamic space divisions inside showrooms and shopping centers.
                  </p>
                  <ul className="space-y-2 border-t border-line pt-4">
                    {['Modular Partition Walls', 'Pop-Up Retail Pod Structures', 'Flexible Shell Space Dividers'].map((item, idx) => (
                      <li className="flex items-center gap-2 font-body text-sm text-ink-soft" key={idx}>
                        <CheckCircle2 className="text-brand-blue shrink-0" size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Fabrication Excellence Gallery */}
        <section className="py-20 bg-brand-black text-white">
          <Container>
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-brand-red mb-3 block">Craftsmanship</span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase text-white">
                Fabrication Excellence Showcase
              </h2>
              <p className="font-body text-sm text-white/70 mt-3">
                Our specialized fabrication wing merges high-precision carpentry, metalwork, and graphics setup to deliver tailor-made retail environments.
              </p>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {fabricationShowcase.map((item, index) => (
                <Reveal delay={index * 0.05} key={index}>
                  <article 
                    className="border border-white/10 bg-white/5 overflow-hidden flex flex-col h-full group hover:border-brand-blue/30 transition-colors"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] border-b border-white/10">
                      <img
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={item.image}
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="font-display text-xl uppercase tracking-wide text-brand-blue mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-white/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Quality Commitment Callout */}
            <Reveal className="mt-16 bg-white/5 border border-white/10 p-8 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                <Award className="text-brand-blue" size={24} />
              </div>
              <div>
                <h4 className="font-mono text-base font-bold uppercase tracking-wider text-white">Professional Fixture Deployment</h4>
                <p className="font-body text-sm text-white/60 mt-1 leading-relaxed">
                  Every installation is executed by our certified deployment crew to ensure strict compliance with spatial, electrical, and structural design standards. We guarantee flawless in-store execution.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  )
}
