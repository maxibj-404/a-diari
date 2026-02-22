import { useLanguage } from '../i18n/LanguageContext'
import { ClickableImage } from '../components/ImageLightbox'
import { useLightbox } from '../components/LightboxProvider'
import { useTheme } from '../components/ThemeProvider'

export function License() {
  const { t } = useLanguage()
  const { openLightbox } = useLightbox()
  const { isDark } = useTheme()

  return (
    <section className={`py-20 ${isDark ? 'bg-[#0f1221]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 text-center`}>
          {t('license.title')}
        </h2>
        <p className={`${isDark ? 'text-white/60' : 'text-gray-500'} text-center mb-12 max-w-2xl mx-auto`}>{t('license.subtitle')}</p>

        {/* Big License Photo - Full Width */}
        <div className="mb-10">
          <div 
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl" 
            onClick={() => openLightbox('/licencia.jpg', t('license.title'))}
          >
            <ClickableImage 
              src="/licencia.jpg" 
              alt={t('license.title')} 
              className="w-full h-[500px] md:h-[600px] object-contain bg-black" 
              onOpen={openLightbox} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
