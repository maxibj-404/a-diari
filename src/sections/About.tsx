import { useState } from 'react'
import { Wrench, Cpu, MapPin, GraduationCap, Calendar, PenTool, Ruler, Cog, Code, Palette, Film, Github, Figma, Image, Video, Terminal } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { ClickableImage } from '../components/ImageLightbox'
import { useLightbox } from '../components/LightboxProvider'
import { useTheme } from '../components/ThemeProvider'

export function About() {
  const { t } = useLanguage()
  const { openLightbox } = useLightbox()
  const { isDark } = useTheme()
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
    <section className={`py-20 ${isDark ? 'bg-[#0f1221]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-[#ff4d6d] text-white text-xs font-label font-medium rounded-full tracking-wider">
            ESTUDIANT
          </span>
        </div>

        {/* Title */}
        <h2 className={`text-5xl md:text-6xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center`}>
          {t('about.title')}
        </h2>

        <div className="flex justify-center mb-10">
          <div className={`inline-flex p-1 rounded-full ${isDark ? 'bg-[#141a2e]' : 'bg-white'} border ${isDark ? 'border-[#1e2438]' : 'border-gray-200'}`}>
            <button 
              onClick={() => setActiveTab('mechanical')} 
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'mechanical' 
                  ? 'bg-[#ff4d6d] text-white shadow-lg shadow-[#ff4d6d]/30' 
                  : isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Wrench size={18} /> {t('about.tabs.mechanical')}
            </button>
            <button 
              onClick={() => setActiveTab('digital')} 
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'digital' 
                  ? 'bg-[#ff4d6d] text-white shadow-lg shadow-[#ff4d6d]/30' 
                  : isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Cpu size={18} /> {t('about.tabs.digital')}
            </button>
          </div>
        </div>

        {activeTab === 'mechanical' && (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className={`rounded-2xl p-8 shadow-xl border ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-gray-200/50'}`}>
                <h3 className={`text-2xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('about.devTitle')}</h3>
                <div className={`space-y-4 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
                  <p>{t('about.p1')}</p>
                  <p>{t('about.p2')}</p>
                  <p className="pt-2">Estic aprenent a treballar amb diferents màquines i eines del taller, des del torno i la fresadora fins al croquis i el control numèric CNC. M'apassiona crear peces amb precisió i qualitat, sempre buscant la millora contínua en cada projecte.</p>
                </div>
                <blockquote className={`mt-6 pl-4 border-l-2 border-[#ff4d6d] ${isDark ? 'text-white/60 italic' : 'text-gray-400 italic'}`}>
                  "La precision és la clau de tot bon mecanitzat"
                </blockquote>
                <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/20' : 'border-gray-200'}`}>
                  <div className={`flex items-center gap-3 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
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
              <h3 className={`text-3xl md:text-4xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Disseny & Programació</h3>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`rounded-2xl p-8 shadow-xl border ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-gray-200/50'}`}>
                <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Code size={24} className="text-[#ff4d6d]" />
                </div>
                <h4 className={`text-xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Desenvolupament Web</h4>
                <p className={`mb-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Creació de llocs web moderns i responsives</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Tailwind</span>
                </div>
              </div>

              <div className={`rounded-2xl p-8 shadow-xl border ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-gray-200/50'}`}>
                <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Palette size={24} className="text-[#ff4d6d]" />
                </div>
                <h4 className={`text-xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Disseny Gràfic</h4>
                <p className={`mb-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Disseny visual i identitat de marca</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Figma</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Canva</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Adobe</span>
                </div>
              </div>

              <div className={`rounded-2xl p-8 shadow-xl border ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-gray-200/50'}`}>
                <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Video size={24} className="text-[#ff4d6d]" />
                </div>
                <h4 className={`text-xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Edició de Vídeo</h4>
                <p className={`mb-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Edició i producció de contingut audiovisual</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Premiere</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">CapCut</span>
                </div>
              </div>

              <div className={`rounded-2xl p-8 shadow-xl border ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-gray-200/50'}`}>
                <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-xl flex items-center justify-center mb-4">
                  <Terminal size={24} className="text-[#ff4d6d]" />
                </div>
                <h4 className={`text-xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Control de Versions</h4>
                <p className={`mb-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Gestió de codi i col·laboració</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">GitHub</span>
                  <span className="px-3 py-1 bg-[#ff4d6d]/10 text-[#ff4d6d] text-xs rounded-full">Git</span>
                </div>
              </div>
            </div>

            {/* Tools Tag Cloud */}
            <div className={`rounded-2xl p-8 shadow-xl border ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-gray-200/50'}`}>
              <h4 className={`text-lg font-display font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Eines que faig servir</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {digitalTools.map((tool) => (
                  <div 
                    key={tool.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors ${isDark ? 'bg-[#0f1221] border-[#1e2438] hover:border-[#ff4d6d]/50 text-white/80' : 'bg-gray-50 border-gray-200 hover:border-[#ff4d6d]/50 text-gray-700'}`}
                  >
                    <tool.icon size={18} style={{ color: tool.color }} />
                    <span className="text-sm">{tool.name}</span>
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
