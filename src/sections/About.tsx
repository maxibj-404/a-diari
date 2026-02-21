import { useState } from 'react'
import { Wrench, Cpu, MapPin, GraduationCap, Calendar, PenTool, Ruler, Cog, Code, Palette, Film, Github, Figma, Image, Video, Terminal } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { ClickableImage } from '../components/ImageLightbox'
import { useLightbox } from '../components/LightboxProvider'

export function About() {
  const { t } = useLanguage()
  const { openLightbox } = useLightbox()
  const [activeTab, setActiveTab] = useState<'mechanical' | 'digital'>('mechanical')

  const mechanicalSkills = ['Torno', 'Fresadora', 'Croquis', 'CNC', 'Metrologia']

  const digitalTools = [
    { name: 'VS Code', icon: Code, color: '#007ACC' },
    { name: 'Figma', icon: Figma, color: '#F24E1E' },
    { name: 'Canva', icon: Image, color: '#00C4CC' },
    { name: 'Adobe CC', icon: Palette, color: '#FF0000' },
    { name: 'Premiere', icon: Film, color: '#9999FF' },
    { name: 'CapCut', icon: Video, color: '#00CED1' },
    { name: 'GitHub', icon: Github, color: '#333333' },
  ]

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
          <div className="inline-flex bg-[#141a2e] p-1 rounded-full border border-[#1e2438]">
            <button 
              onClick={() => setActiveTab('mechanical')} 
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'mechanical' 
                  ? 'bg-[#ff4d6d] text-white shadow-lg shadow-[#ff4d6d]/30' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Wrench size={18} /> {t('about.tabs.mechanical')}
            </button>
            <button 
              onClick={() => setActiveTab('digital')} 
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'digital' 
                  ? 'bg-[#ff4d6d] text-white shadow-lg shadow-[#ff4d6d]/30' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
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
          <div className="space-y-8">
            {/* Digital Section Label */}
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs font-label font-medium rounded-full tracking-wider mb-4">
                DIGITAL
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Developer & Designer</h3>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] rounded-2xl p-8 shadow-xl border border-[#1e2438]">
                <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Code size={24} className="text-[#ff4d6d]" />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">Desenvolupament Web</h4>
                <p className="text-white/60 mb-4">Creació de llocs web moderns i responsives</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Tailwind</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] rounded-2xl p-8 shadow-xl border border-[#1e2438]">
                <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Palette size={24} className="text-[#ff4d6d]" />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">Disseny Gràfic</h4>
                <p className="text-white/60 mb-4">Disseny visual i identitat de marca</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Figma</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Canva</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Adobe</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] rounded-2xl p-8 shadow-xl border border-[#1e2438]">
                <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Video size={24} className="text-[#ff4d6d]" />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">Edició de Vídeo</h4>
                <p className="text-white/60 mb-4">Edició i producció de contingut audiovisual</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Premiere</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">CapCut</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] rounded-2xl p-8 shadow-xl border border-[#1e2438]">
                <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Terminal size={24} className="text-[#ff4d6d]" />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">Control de Versions</h4>
                <p className="text-white/60 mb-4">Gestió de codi i col·laboració</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">GitHub</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Git</span>
                </div>
              </div>
            </div>

            {/* Tools Tag Cloud */}
            <div className="bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] rounded-2xl p-8 shadow-xl border border-[#1e2438]">
              <h4 className="text-lg font-display font-bold text-white mb-6 text-center">Eines que faig servir</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {digitalTools.map((tool) => (
                  <div 
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0f1221] rounded-xl border border-[#1e2438] hover:border-[#ff4d6d]/50 transition-colors"
                  >
                    <tool.icon size={18} style={{ color: tool.color }} />
                    <span className="text-white/80 text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
