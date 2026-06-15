import logoImg from '../../assets/images/logo.jpg'
import { cn } from '../../utils/cn'

type LogoLockupProps = {
  inverted?: boolean
}

export function LogoLockup({ inverted = false }: LogoLockupProps) {
  return (
    <a
      aria-label="One World United home"
      className="flex items-center focus:outline-none"
      href="#/"
    >
      <img
        src={logoImg}
        alt="One World United Logo"
        className={cn(
          "h-10 md:h-[44px] w-auto object-contain transition-all",
          inverted 
            ? "bg-white/95 px-3 py-1.5 rounded-sm shadow-sm opacity-85 hover:opacity-100" 
            : "hover:opacity-90"
        )}
      />
    </a>
  )
}
