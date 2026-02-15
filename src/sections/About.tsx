import { useState } from 'react'
import { Wrench, Cpu, MapPin, GraduationCap, Calendar, PenTool, Ruler, Cog } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { ClickableImage } from '../components/ImageLightbox'
import { useLightbox } from '../components/LightboxProvider'

export function About() {
  const { t } = useLanguage()
  const { openLightbox } = useLightbox()
  const [activeTab, setActiveTab] = useState<'mechanical' | 'digital'>('mechanical')

  const mechanicalSkills = ['Torno', 'Fresadora', 'Croquis', 'CNC', 'Metrologia']

  return (
    <section className="py-20 bg-[#0f1221]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#ff4d6d] text-white text-xs font-label font-medium rounded-full tracking-wider">
            ESTUDIANT
          </span>
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-12 text-center">
          {t('about.title')}
        </h2>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-[#1e1e2e] p-1 rounded-full">
            <button onClick={() => setActiveTab('mechanical')} className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'mechanical' ? 'bg-[#e94560] text-white shadow-lg shadow-[#e94560]/30' : 'text-gray-600 dark:text-gray-300 hover:text-[#e94560]'}`}>
              <Wrench size={18} /> {t('about.tabs.mechanical')}
            </button>
            <button onClick={() => setActiveTab('digital')} className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'digital' ? 'bg-[#e94560] text-white shadow-lg shadow-[#e94560]/30' : 'text-gray-600 dark:text-gray-300 hover:text-[#e94560]'}`}>
              <Cpu size={18} /> {t('about.tabs.digital')}
            </button>
          </div>
        </div>

        {activeTab === 'mechanical' && (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] rounded-2xl p-8 shadow-xl border border-[#1e2438]">
                <h3 className="text-2xl font-display font-bold text-white mb-6">{t('about.devTitle')}</h3>
                <div className="space-y-4 text-white/80">
                  <p>{t('about.p1')}</p>
                  <p>{t('about.p2')}</p>
                </div>
                <blockquote className="mt-6 pl-4 border-l-2 border-[#ff4d6d] text-white/60 italic">
                  "La precision és la clau de tot bon mecanitzat"
                </blockquote>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin size={18} className="text-[#ff4d6d]" />
                    <span>EMT Granollers - Carrer de Sant Oleguer, 1, 08401 Granollers, Barcelona</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl" onClick={() => openLightbox('/about-welding.jpg', t('about.title'))}>
                <ClickableImage src="/about-welding.jpg" alt={t('about.title')} className="w-full h-80 object-cover" onOpen={openLightbox} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'digital' && (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] rounded-2xl p-8 shadow-xl border border-[#1e2438]">
                <h3 className="text-2xl font-display font-bold text-white mb-6">{t('about.digitalTitle')}</h3>
                <div className="space-y-4 text-white/80">
                  <p>{t('about.digitalP1')}</p>
                  <p>{t('about.digitalP2')}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <Calendar size={18} className="text-[#ff4d6d]" />
                    <span>{t('about.courseYear')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <GraduationCap size={18} className="text-[#ff4d6d]" />
                    <span>CFGS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] rounded-2xl p-8 border border-[#1e2438]">
                <h4 className="text-xl font-display font-bold text-white mb-4">{t('about.skills')}</h4>
                <ul className="space-y-3">
                  {['CAD Design', 'CNC Programming', 'CAM Software', '3D Modeling'].map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-white/80">
                      <span className="w-2 h-2 bg-[#ff4d6d] rounded-full" /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
