import { useEffect } from 'react'
import { useHashLocation } from './hooks/useHashLocation'
import { HomePage } from './pages/HomePage'
import { PressureTestingPage } from './pages/services/PressureTestingPage'
import { RaisedFlooringPage } from './pages/services/RaisedFlooringPage'
import { RadiantClimatePage } from './pages/services/RadiantClimatePage'
import { SmartGlassPage } from './pages/services/SmartGlassPage'
import { ControlConsolesPage } from './pages/services/ControlConsolesPage'
import { BatteryStoragePage } from './pages/services/BatteryStoragePage'
import { HeatExchangersPage } from './pages/services/HeatExchangersPage'
import { ElectricalInstrumentationPage } from './pages/services/ElectricalInstrumentationPage'
import { SpecializedServicesPage } from './pages/services/SpecializedServicesPage'
import { VisualMerchandisingPage } from './pages/services/VisualMerchandisingPage'

export default function App() {
  const [hash] = useHashLocation()

  // Handle route change scrolling
  useEffect(() => {
    // If it's a sub-page, scroll directly to top
    if (hash.startsWith('#/services/')) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }

    // Handle internal section anchors on the home page
    const anchor = hash.split('#/').pop() || ''
    if (anchor && anchor.startsWith('#')) {
      const elementId = anchor.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [hash])

  // Routing Switch
  if (hash.startsWith('#/services/pressure-testing')) {
    return <PressureTestingPage />
  }
  if (hash.startsWith('#/services/raised-flooring')) {
    return <RaisedFlooringPage />
  }
  if (hash.startsWith('#/services/radiant-climate')) {
    return <RadiantClimatePage />
  }
  if (hash.startsWith('#/services/smart-glass')) {
    return <SmartGlassPage />
  }
  if (hash.startsWith('#/services/control-consoles')) {
    return <ControlConsolesPage />
  }
  if (hash.startsWith('#/services/battery-storage')) {
    return <BatteryStoragePage />
  }
  if (hash.startsWith('#/services/heat-exchangers')) {
    return <HeatExchangersPage />
  }
  if (hash.startsWith('#/services/electrical-instrumentation')) {
    return <ElectricalInstrumentationPage />
  }
  if (hash.startsWith('#/services/specialized-services')) {
    return <SpecializedServicesPage />
  }
  if (hash.startsWith('#/services/visual-merchandising')) {
    return <VisualMerchandisingPage />
  }

  // Default to Home page
  return <HomePage />
}
