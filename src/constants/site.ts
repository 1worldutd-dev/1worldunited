import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import pressureTestingImage from '../assets/images/high_pressure_system_page_1_img_2.jpeg'
import raisedFlooringImage from '../assets/images/raised_floor_systems__page_2_img_1.jpeg'
import radiantClimateImage from '../assets/images/rdiant_heta_and_cool_page_3_img_1.jpeg'
import smartGlassImage from '../assets/images/smart_glass__page_1_img_1.jpeg'
import controlConsolesImage from '../assets/images/control_consoles.png'
import batteryStorageImage from '../assets/images/battery_storage.png'
import heatExchangersImage from '../assets/images/heat_exchangers.png'
import electricalInstrumentationImage from '../assets/images/electrical_instrumentation.png'
import specializedServicesImage from '../assets/images/specialized_services.png'
import type { FooterColumn, NavItem, PortfolioItem, Service, Stat } from '../types/site'

export const brand = {
  name: 'One World United',
  legal: 'General Trading & Contracting Co. W.L.L',
}

export const navItems: NavItem[] = [
  { label: 'Homepage', href: '#/' },
  { label: 'About Us', href: '#/#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#/#contact' },
]

export const dropdownServices = [
  { 
    id: '01', 
    title: 'High-Pressure Testing Systems', 
    href: '#/services/pressure-testing',
    description: 'Elite-performance hydrostatic & pneumatic testing infrastructure up to 30,000+ PSI.',
    category: 'Mechanical & Fluid Systems'
  },
  { 
    id: '02', 
    title: 'Specialized Raised Access Flooring', 
    href: '#/services/raised-flooring',
    description: 'Precision raised-floor and modular pedestal panels for critical facilities and control rooms.',
    category: 'Technical Environments'
  },
  { 
    id: '03', 
    title: 'Hydronic Radiant Climate Solutions', 
    href: '#/services/radiant-climate',
    description: 'Invisible, silent floor, ceiling, and wall systems for optimal climate performance.',
    category: 'Advanced Building Tech'
  },
  { 
    id: '04', 
    title: 'Smart Glass Technologies', 
    href: '#/services/smart-glass',
    description: 'Advanced switchable privacy and dynamic shading glazing systems.',
    category: 'Advanced Building Tech'
  },
  { 
    id: '05', 
    title: 'Control Consoles & Furniture', 
    href: '#/services/control-consoles',
    description: 'ISO 11064 ergonomic dispatch consoles and command center technical furniture.',
    category: 'Technical Environments'
  },
  { 
    id: '06', 
    title: 'Battery Energy Storage Systems (BESS)', 
    href: '#/services/battery-storage',
    description: 'Utility-scale containerized energy storage for grid stabilization and peak shaving.',
    category: 'Power & Electrical Systems'
  },
  { 
    id: '07', 
    title: 'Heat Exchangers', 
    href: '#/services/heat-exchangers',
    description: 'ASME-stamped heat transfer design, shell & tube bundle fabrication, and maintenance.',
    category: 'Mechanical & Fluid Systems'
  },
  { 
    id: '08', 
    title: 'Electrical & Instrumentation', 
    href: '#/services/electrical-instrumentation',
    description: 'ATEX installations, transmitter calibrations, PLC loop checks, and HV/LV works.',
    category: 'Power & Electrical Systems'
  },
  { 
    id: '09', 
    title: 'Specialized Industrial Services', 
    href: '#/services/specialized-services',
    description: 'Intumescent fireproofing, dry ice blasting, MICC cabling, and architectural fit-outs.',
    category: 'Industrial Services'
  },
  { 
    id: '10', 
    title: 'Visual Merchandising Services', 
    href: '#/services/visual-merchandising',
    description: 'Retail printing, brand experiences, custom fixtures, and shop-in-shop execution.',
    category: 'Retail & Marketing'
  },
]

export const stats: Stat[] = [
  { value: '19+', label: 'Years in Market' }, // Founded 2007, current time 2026
  { value: '500+', label: 'Successful Projects', accent: 'red' },
  { value: '100+', label: 'Technical Experts' },
]

export const services: Service[] = [
  {
    id: '01',
    title: 'High-Pressure Testing Systems',
    description:
      'Certified pressure testing, blast enclosures, containerized mobile labs, and field skids up to 30,000+ PSI. Designed to meet API, ASME, and ISO standards for industrial oilfield and process piping.',
  },
  {
    id: '02',
    title: 'Specialized Raised Access Flooring',
    description:
      'Precision structural raised floor panels with adjustable pedestal configurations. Custom solutions for data centers, control rooms, telecom switching centers, and clean labs.',
  },
  {
    id: '03',
    title: 'Hydronic Radiant Climate Solutions',
    description:
      'Advanced underfloor, wall, and ceiling radiant heating and cooling loops. Features smart dew-point monitors, zoning controls, and seamless BMS integration for luxury comfort.',
  },
  {
    id: '04',
    title: 'Smart Glass Technologies',
    description:
      'Switchable PDLC privacy glass, SPD dynamic solar shading, and electrochromic glass systems. Transforms instantly from transparent to opaque for office and residential spaces.',
  },
  {
    id: '05',
    title: 'Control Consoles & Furniture',
    description:
      'Custom technical furniture and command center consoles designed for 24/7 mission-critical operations. Ergonomically designed to ISO 11064 standards to maximize operator awareness and comfort.',
  },
  {
    id: '06',
    title: 'Battery Energy Storage Systems (BESS)',
    description:
      'Utility-scale and industrial containerized LFP energy storage systems. Engineered with liquid-cooled thermal management and advanced safety fire suppression systems compliant with NFPA 855.',
  },
  {
    id: '07',
    title: 'Heat Exchangers',
    description:
      'Thermal design and engineering of Shell & Tube, Plate, and Air-Cooled heat exchangers under ASME Section VIII and TEMA codes. Custom bundle fabrication and high-pressure cleaning.',
  },
  {
    id: '08',
    title: 'Electrical & Instrumentation',
    description:
      'End-to-end contracting for industrial instrumentation calibration, PLC loop testing, ATEX explosion-proof installations, and HV/LV power distribution layouts.',
  },
  {
    id: '09',
    title: 'Specialized Industrial Services',
    description:
      'Providing intumescent passive fire protection (PFP), non-abrasive CO2 dry ice blasting, high-reliability MICC cabling, turnaround maintenance, and control room civil fit-outs.',
  },
  {
    id: '10',
    title: 'Visual Merchandising Services',
    description:
      'Turnkey retail environments, large-format printing, brand experience pop-ups, custom display fixtures, shop-in-shop execution, and visual campaign installations.',
  },
]


export const portfolioItems: PortfolioItem[] = [
  {
    title: 'High-Pressure Systems',
    description: 'Precision high-pressure validation, blast bays, and mobile containerized field testing units.',
    image: pressureTestingImage,
    alt: 'Mobile containerized high-pressure test laboratory',
  },
  {
    title: 'Access Floor Systems',
    description: 'Cementitious and aluminum modular floor structures with HPL/vinyl finishes for high-load centers.',
    image: raisedFlooringImage,
    alt: 'Data center access flooring panel installation',
  },
  {
    title: 'Radiant HVAC Solutions',
    description: 'Integrated underfloor, ceiling, and wall hydronic heating/cooling piping layouts.',
    image: radiantClimateImage,
    alt: 'Living area radiant climate system schematic render',
  },
  {
    title: 'Smart Glass Glazing',
    description: 'Advanced switchable PDLC privacy glass divider partition walls in dynamic office space.',
    image: smartGlassImage,
    alt: 'Office glass wall showing translucent opaque privacy state',
  },
  {
    title: 'Control Consoles',
    description: 'Ergonomic command center desks and consoles optimized for 24/7 technical operations.',
    image: controlConsolesImage,
    alt: 'Ergonomic command control center console desk and displays',
  },
  {
    title: 'Battery Storage (BESS)',
    description: 'Containerized utility-scale energy storage battery packs for grid management.',
    image: batteryStorageImage,
    alt: 'Outdoor containerized BESS battery storage installation',
  },
  {
    title: 'Heat Exchangers',
    description: 'Industrial shell & tube and plate heat exchangers built to TEMA and ASME codes.',
    image: heatExchangersImage,
    alt: 'Industrial shell and tube heat exchanger unit',
  },
  {
    title: 'Electrical & Instrumentation',
    description: 'Technical calibration, ATEX loop check panels, and industrial wiring systems.',
    image: electricalInstrumentationImage,
    alt: 'Industrial electrical control panel wiring and instruments',
  },
  {
    title: 'Specialized Services',
    description: 'Turnkey industrial fireproofing, CO2 blasting, MICC wiring, and facility fit-outs.',
    image: specializedServicesImage,
    alt: 'Technician applying specialized fireproofing coating to industrial structure',
  },
]

export const partnerLogos = ['KOC', 'KNPC', 'EQUATE', 'AGILITY', 'KIPIC', 'EQUATE']

export const footerColumns: FooterColumn[] = [
  {
    title: 'Headquarters',
    lines: [
      'Farwaniya, Block-6',
      'Behind Crowne Plaza, Main Street',
      'Al Anas Tower, Floor #2',
      'Kuwait',
    ],
    icon: MapPin,
  },
  {
    title: 'Solutions',
    lines: [
      'High-Pressure Systems',
      'Raised Access Floors',
      'Radiant Climate Loops',
      'Battery Storage (BESS)',
      'Heat Exchangers',
      'MICC & Electrical Works',
    ],
  },
  {
    title: 'Working Hours',
    lines: ['07:00 AM - 05:00 PM', 'Saturday - Thursday'],
    icon: Clock,
  },
  {
    title: 'Direct Contact',
    lines: ['+965 4144 1798', 'projects@1worldunited.com'],
    icon: Phone,
  },
]

export const contactEmailIcon = Mail
