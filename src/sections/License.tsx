import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../components/ThemeProvider'
import { Shield, User, Euro, Sparkles } from 'lucide-react'

export function License() {
  const { t } = useLanguage()
  const { isDark } = useTheme()

  return (
    <section className={`py-20 ${isDark ? 'bg-[#0f1221]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 text-center`}>
          {t('license.title')}
        </h2>
        <p className={`${isDark ? 'text-white/60' : 'text-gray-500'} text-center mb-12 max-w-2xl mx-auto`}>{t('license.subtitle')}</p>

        {/* License Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* CC - Creative Commons */}
          <div className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-lg'}`}>
            <div className="w-14 h-14 bg-[#ff4d6d]/20 rounded-2xl flex items-center justify-center mb-4">
              <Shield size={28} className="text-[#ff4d6d]" />
            </div>
            <h3 className={`text-xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>CC</h3>
            <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Creative Commons: indica que la obra está bajo una licencia abierta.
            </p>
          </div>

          {/* BY - Attribution */}
          <div className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-lg'}`}>
            <div className="w-14 h-14 bg-[#ff4d6d]/20 rounded-2xl flex items-center justify-center mb-4">
              <User size={28} className="text-[#ff4d6d]" />
            </div>
            <h3 className={`text-xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>BY</h3>
            <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Atribución: puedes usar la obra, pero debes dar crédito al autor original.
            </p>
          </div>

          {/* NC - Non Commercial */}
          <div className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-lg'}`}>
            <div className="w-14 h-14 bg-[#ff4d6d]/20 rounded-2xl flex items-center justify-center mb-4">
              <Euro size={28} className="text-[#ff4d6d]" />
            </div>
            <h3 className={`text-xl font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>NC</h3>
            <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              No Comercial: puedes usarla, pero no para fines comerciales (no puedes ganar dinero con ella).
            </p>
          </div>
        </div>

        {/* Big License Photo - Fixed, no zoom */}
        <div className="mb-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#ff4d6d]/20 transition-shadow duration-300">
            <img 
              src="/licencia.jpg" 
              alt={t('license.title')} 
              className="w-full h-[500px] md:h-[600px] object-contain bg-black"
            />
          </div>
        </div>

        {/* Decorative Note */}
        <div className={`text-center ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
          <p className="flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-[#ff4d6d]" />
            Esta obra está protegida bajo los términos de Creative Commons
            <Sparkles size={16} className="text-[#ff4d6d]" />
          </p>
        </div>
      </div>
    </section>
  )
}
