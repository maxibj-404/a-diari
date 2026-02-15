import { Award, Download, ExternalLink, Bike, Shield, Clock } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { ClickableImage } from '../components/ImageLightbox'
import { useLightbox } from '../components/LightboxProvider'

export function License() {
  const { t } = useLanguage()
  const { openLightbox } = useLightbox()

  return (
    <section className="py-20 bg-white dark:bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a1a2e] dark:text-white mb-4 text-center">{t('license.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">{t('license.subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-[#e94560] rounded-xl flex items-center justify-center">
                  <Award size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{t('license.type')}</h3>
                  <p className="text-white/60">B - Cotxe</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-white/80">
                  <Shield size={18} className="text-[#e94560] mt-1 flex-shrink-0" />
                  <p>{t('license.desc1')}</p>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <Clock size={18} className="text-[#e94560] mt-1 flex-shrink-0" />
                  <p>{t('license.desc2')}</p>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <Bike size={18} className="text-[#e94560] mt-1 flex-shrink-0" />
                  <p>{t('license.desc3')}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#e94560] text-white rounded-lg font-medium hover:bg-[#d13a54] transition-colors">
                    <Download size={18} />
                    {t('license.download')}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
                    <ExternalLink size={18} />
                    {t('license.verify')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl" onClick={() => openLightbox('/licencia.jpg', t('license.title'))}>
              <ClickableImage src="/licencia.jpg" alt={t('license.title')} className="w-full h-80 object-cover" onOpen={openLightbox} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
