import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const languages = [
    { code: 'ca', label: 'CA' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ]

  return (
    <div className="flex gap-1">
      {languages.map((lang) => (
        <button key={lang.code} onClick={() => setLanguage(lang.code as any)} className={`px-2 py-1 text-xs rounded ${language === lang.code ? 'bg-[#e94560] text-white' : 'text-[#6c757d] dark:text-white/60 hover:text-[#e94560]'}`}>
          {lang.label}
        </button>
      ))}
    </div>
  )
}
