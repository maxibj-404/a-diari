import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface HeaderProps {
  currentPage: string
  onPageChange: (page: string) => void
}

const languages = [
  { code: 'ca', label: 'Català' },
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
]

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const navItems = [
    { id: 'home', label: 'DIARI D\'APRENENTATGE' },
    { id: 'about', label: t('nav.about').toUpperCase() },
    { id: 'contact', label: t('nav.contact').toUpperCase() },
    { id: 'license', label: t('nav.license').toUpperCase() },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentLang = languages.find(l => l.code === language)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0f1221]/98 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="font-display text-xl md:text-2xl font-medium text-white hover:opacity-80 transition-opacity">
            Diari d'aprenentatge.
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className={`font-label text-sm font-medium tracking-wide transition-all duration-300 relative ${
                  currentPage === item.id 
                    ? 'text-[#ff4d6d]' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff4d6d] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Globe size={18} className="text-white" />
                <span className="text-white text-sm font-medium">{currentLang?.code?.toUpperCase()}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'ca' | 'es' | 'en' | 'fr')
                        setIsLangOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        language === lang.code ? 'text-[#ff4d6d] font-medium' : 'text-gray-700'
                      }`}
                    >
                      {lang.label}
                      {language === lang.code && ' ✓'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0f1221]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className={`block w-full text-left font-medium py-3 ${
                  currentPage === item.id ? 'text-[#ff4d6d]' : 'text-white/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
