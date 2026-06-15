import { ChevronDown, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { navItems, dropdownServices } from '../../constants/site'
import { Container } from './Container'
import { LogoLockup } from './LogoLockup'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Desktop smooth scroll click interceptor
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = !window.location.hash.startsWith('#/services/')

    if (href === '#/') {
      if (isHomePage) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '#/')
      }
    } else if (href.startsWith('#/#')) {
      const sectionId = href.split('#/#')[1]
      if (isHomePage) {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.history.pushState(null, '', `#/#${sectionId}`)
        }
      }
    }
  }

  // Mobile smooth scroll click interceptor (closes drawer)
  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false)
    const isHomePage = !window.location.hash.startsWith('#/services/')

    if (href === '#/') {
      if (isHomePage) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '#/')
      }
    } else if (href.startsWith('#/#')) {
      const sectionId = href.split('#/#')[1]
      if (isHomePage) {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 150)
          window.history.pushState(null, '', `#/#${sectionId}`)
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md" id="home">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <LogoLockup />
        
        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            if (item.label === 'Services') {
              return (
                <div 
                  className="" 
                  key={item.label}
                  ref={dropdownRef}
                >
                  <button
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-1.5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:text-brand-blue focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    type="button"
                  >
                    Services
                    <ChevronDown 
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                      size={12} 
                    />
                  </button>

                  {/* Dropdown Mega Menu Card */}
                  {dropdownOpen && (
                    <div 
                      className="absolute left-1/2 top-full mt-2 w-[calc(100vw-3rem)] max-w-[920px] -translate-x-1/2 border border-line bg-white p-6 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-2 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto"
                      role="menu"
                    >
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Column 1: Mechanical & Fluid */}
                        <div>
                          <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-brand-red border-b border-line pb-2 mb-3">
                            Mechanical & Fluid
                          </h4>
                          <div className="grid gap-3">
                            {dropdownServices
                              .filter((s) => s.category === 'Mechanical & Fluid Systems')
                              .map((service) => (
                                <a
                                  className="group flex flex-col gap-0.5 p-1.5 transition hover:bg-surface-muted focus:outline-none focus:bg-surface-muted rounded"
                                  href={service.href}
                                  key={service.id}
                                  role="menuitem"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <span className="font-display text-base uppercase tracking-wide text-ink group-hover:text-brand-blue transition-colors">
                                    {service.title}
                                  </span>
                                  <span className="font-body text-sm text-ink-muted leading-tight">
                                    {service.description}
                                  </span>
                                </a>
                              ))}
                          </div>
                        </div>

                        {/* Column 2: Technical Environments */}
                        <div>
                          <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-brand-red border-b border-line pb-2 mb-3">
                            Technical Rooms
                          </h4>
                          <div className="grid gap-3">
                            {dropdownServices
                              .filter((s) => s.category === 'Technical Environments')
                              .map((service) => (
                                <a
                                  className="group flex flex-col gap-0.5 p-1.5 transition hover:bg-surface-muted focus:outline-none focus:bg-surface-muted rounded"
                                  href={service.href}
                                  key={service.id}
                                  role="menuitem"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <span className="font-display text-base uppercase tracking-wide text-ink group-hover:text-brand-blue transition-colors">
                                    {service.title}
                                  </span>
                                  <span className="font-body text-sm text-ink-muted leading-tight">
                                    {service.description}
                                  </span>
                                </a>
                              ))}
                          </div>
                        </div>

                        {/* Column 3: Advanced Building Tech */}
                        <div>
                          <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-brand-red border-b border-line pb-2 mb-3">
                            Advanced Building
                          </h4>
                          <div className="grid gap-3">
                            {dropdownServices
                              .filter((s) => s.category === 'Advanced Building Tech')
                              .map((service) => (
                                <a
                                  className="group flex flex-col gap-0.5 p-1.5 transition hover:bg-surface-muted focus:outline-none focus:bg-surface-muted rounded"
                                  href={service.href}
                                  key={service.id}
                                  role="menuitem"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <span className="font-display text-base uppercase tracking-wide text-ink group-hover:text-brand-blue transition-colors">
                                    {service.title}
                                  </span>
                                  <span className="font-body text-sm text-ink-muted leading-tight">
                                    {service.description}
                                  </span>
                                </a>
                              ))}
                          </div>
                        </div>

                        {/* Column 4: Power & Industrial Services */}
                        <div>
                          <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-brand-red border-b border-line pb-2 mb-3">
                            Power & Services
                          </h4>
                          <div className="grid gap-3">
                            {dropdownServices
                              .filter((s) => s.category === 'Power & Electrical Systems' || s.category === 'Industrial Services')
                              .map((service) => (
                                <a
                                  className="group flex flex-col gap-0.5 p-1.5 transition hover:bg-surface-muted focus:outline-none focus:bg-surface-muted rounded"
                                  href={service.href}
                                  key={service.id}
                                  role="menuitem"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <span className="font-display text-base uppercase tracking-wide text-ink group-hover:text-brand-blue transition-colors">
                                    {service.title}
                                  </span>
                                  <span className="font-body text-sm text-ink-muted leading-tight">
                                    {service.description}
                                  </span>
                                </a>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <a
                className="relative font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:text-brand-blue focus:outline-none"
                href={item.href}
                key={item.label}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          className="grid size-10 place-items-center border border-line text-ink focus:outline-none md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          {mobileOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <nav 
          aria-label="Mobile navigation" 
          className="border-t border-line bg-white md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto" 
          id="mobile-menu"
        >
          <Container className="grid gap-1 py-4">
            {navItems.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div className="grid border-b border-line/50 pb-2" key={item.label}>
                    <button
                      className="flex w-full items-center justify-between py-3.5 text-left font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink"
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      type="button"
                    >
                      Services
                      <ChevronDown 
                        className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
                        size={14} 
                      />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="pl-4 grid gap-4 border-l-2 border-brand-blue/30 bg-surface-muted/30 mt-1 py-2">
                        {/* Group 1: Mechanical & Fluid */}
                        <div>
                          <h5 className="font-mono text-sm font-bold uppercase tracking-widest text-brand-red mb-1 border-b border-line/20 pb-0.5">
                            Mechanical & Fluid
                          </h5>
                          {dropdownServices
                            .filter((s) => s.category === 'Mechanical & Fluid Systems')
                            .map((service) => (
                              <a
                                className="flex flex-col py-2"
                                href={service.href}
                                key={service.id}
                                onClick={() => {
                                  setMobileOpen(false)
                                  setMobileDropdownOpen(false)
                                }}
                              >
                                <span className="font-display text-sm uppercase tracking-wide text-ink">
                                  {service.title}
                                </span>
                              </a>
                            ))}
                        </div>

                        {/* Group 2: Technical Rooms */}
                        <div>
                          <h5 className="font-mono text-sm font-bold uppercase tracking-widest text-brand-red mb-1 border-b border-line/20 pb-0.5">
                            Technical Rooms
                          </h5>
                          {dropdownServices
                            .filter((s) => s.category === 'Technical Environments')
                            .map((service) => (
                              <a
                                className="flex flex-col py-2"
                                href={service.href}
                                key={service.id}
                                onClick={() => {
                                  setMobileOpen(false)
                                  setMobileDropdownOpen(false)
                                }}
                              >
                                <span className="font-display text-sm uppercase tracking-wide text-ink">
                                  {service.title}
                                </span>
                              </a>
                            ))}
                        </div>

                        {/* Group 3: Advanced Building */}
                        <div>
                          <h5 className="font-mono text-sm font-bold uppercase tracking-widest text-brand-red mb-1 border-b border-line/20 pb-0.5">
                            Advanced Building
                          </h5>
                          {dropdownServices
                            .filter((s) => s.category === 'Advanced Building Tech')
                            .map((service) => (
                              <a
                                className="flex flex-col py-2"
                                href={service.href}
                                key={service.id}
                                onClick={() => {
                                  setMobileOpen(false)
                                  setMobileDropdownOpen(false)
                                }}
                              >
                                <span className="font-display text-sm uppercase tracking-wide text-ink">
                                  {service.title}
                                </span>
                              </a>
                            ))}
                        </div>

                        {/* Group 4: Power & Industrial Services */}
                        <div>
                          <h5 className="font-mono text-sm font-bold uppercase tracking-widest text-brand-red mb-1 border-b border-line/20 pb-0.5">
                            Power & Services
                          </h5>
                          {dropdownServices
                            .filter((s) => s.category === 'Power & Electrical Systems' || s.category === 'Industrial Services')
                            .map((service) => (
                              <a
                                className="flex flex-col py-2"
                                href={service.href}
                                key={service.id}
                                onClick={() => {
                                  setMobileOpen(false)
                                  setMobileDropdownOpen(false)
                                }}
                              >
                                <span className="font-display text-sm uppercase tracking-wide text-ink">
                                  {service.title}
                                </span>
                              </a>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  className="border-b border-line/50 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink"
                  href={item.href}
                  key={item.label}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              )
            })}
          </Container>
        </nav>
      )}
    </header>
  )
}
