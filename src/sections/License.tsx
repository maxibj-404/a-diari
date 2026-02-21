import { Award, Download, ExternalLink, Bike, Shield, Clock, Info } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { ClickableImage } from '../components/ImageLightbox'
import { useLightbox } from '../components/LightboxProvider'

export function License() {
  const { t } = useLanguage()
  const { openLightbox } = useLightbox()

  return (
    <section className="py-20 bg-[#0f1221]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 text-center">
          {t('license.title')}
        </h2>
        <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">{t('license.subtitle')}</p>

        {/* Big License Photo at Top */}
        <div className="mb-10">
          <div 
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl" 
            onClick={() => openLightbox('/licencia.jpg', t('license.title'))}
          >
            <ClickableImage 
              src="/licencia.jpg" 
              alt={t('license.title')} 
              className="w-full h-[400px] md:h-[500px] object-cover" 
              onOpen={openLightbox} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1221]/60 to-transparent" />
          </div>
        </div>

        {/* Creative Commons Card */}
        <div className="bg-gradient-to-br from-[#ff4d6d] to-[#ff6b7a] rounded-2xl p-8 shadow-xl mb-10">
          <div className="flex items-center justify-center gap-8">
            <div className="text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl font-bold">BY</span>
              </div>
              <p className="text-sm font-medium">Atribució</p>
            </div>
            <div className="text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl font-bold">NC</span>
              </div>
              <p className="text-sm font-medium">No Comercial</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-white/90 text-lg">Creative Commons BY-NC 4.0</p>
            <a 
              href="https://creativecommons.org/licenses/by-nc/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-white hover:underline"
            >
              <Info size={16} />
              Més informació
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* License Info Card */}
        <div className="bg-[#141a2e] rounded-2xl p-8 shadow-xl border border-[#1e2438]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-[#ff4d6d] rounded-xl flex items-center justify-center">
              <Award size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white">{t('license.type')}</h3>
              <p className="text-white/60">B - Cotxe</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-white/80">
              <Shield size={18} className="text-[#ff4d6d] mt-1 flex-shrink-0" />
              <p>{t('license.desc1')}</p>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <Clock size={18} className="text-[#ff4d6d] mt-1 flex-shrink-0" />
              <p>{t('license.desc2')}</p>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <Bike size={18} className="text-[#ff4d6d] mt-1 flex-shrink-0" />
              <p>{t('license.desc3')}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#ff4d6d] text-white rounded-lg font-medium hover:bg-[#ff5a6e] transition-colors">
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
    </section>
  )
}
