import { useState, type FormEvent } from 'react'
import { Send, Github, Linkedin, Mail, MapPin, Phone, MessageCircle, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../components/ThemeProvider'

export function Contact() {
  const { t } = useLanguage()
  const { isDark } = useTheme()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/aalfajj@iesemt.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  return (
    <section className={`py-20 ${isDark ? 'bg-[#0f1221]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-5xl md:text-6xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 text-center`}>
          {t('contact.title')}
        </h2>
        <p className={`${isDark ? 'text-white/60' : 'text-gray-500'} text-center mb-12 max-w-2xl mx-auto`}>{t('contact.subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className={`rounded-2xl p-8 shadow-xl border ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-gray-200/50'}`}>
              <h3 className={`text-xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('contact.followMe')}</h3>
              
              <div className="space-y-4">
                <div className={`flex items-center gap-4 p-3 rounded-xl ${isDark ? 'bg-[#0f1221]/50 border border-[#1e2438]' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="w-10 h-10 bg-[#ff4d6d]/20 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-[#ff4d6d]" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Email</p>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>aalfajj@iesemt.net</p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-3 rounded-xl ${isDark ? 'bg-[#0f1221]/50 border border-[#1e2438]' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="w-10 h-10 bg-[#ff4d6d]/20 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-[#ff4d6d]" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Ubicació</p>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>EMT Granollers, Barcelona</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                <a href="#" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border ${isDark ? 'bg-[#0f1221] text-white border-[#1e2438] hover:bg-[#ff4d6d] hover:border-[#ff4d6d]' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-[#ff4d6d] hover:border-[#ff4d6d] hover:text-white'}`}>
                  <Github size={20} />
                </a>
                <a href="#" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border ${isDark ? 'bg-[#0f1221] text-white border-[#1e2438] hover:bg-[#ff4d6d] hover:border-[#ff4d6d]' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-[#ff4d6d] hover:border-[#ff4d6d] hover:text-white'}`}>
                  <Linkedin size={20} />
                </a>
                <a href="#" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all border ${isDark ? 'bg-[#0f1221] text-white border-[#1e2438] hover:bg-[#ff4d6d] hover:border-[#ff4d6d]' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-[#ff4d6d] hover:border-[#ff4d6d] hover:text-white'}`}>
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Decorative Card */}
            <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[#ff4d6d] to-[#ff6b8a] text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-display font-bold mb-2 flex items-center gap-2"><Sparkles size={24} />Xocam de mans?</h4>
                <p className="text-white/80">Si tens alguna pregunta o proposta, no dubtis a contactar-me. Respondré el més aviat possible!</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`rounded-2xl p-8 shadow-xl border ${isDark ? 'bg-gradient-to-br from-[#141a2e] to-[#1a1a2e] border-[#1e2438]' : 'bg-white border-gray-200 shadow-gray-200/50'}`}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-emerald-500" />
                </div>
                <h3 className={`text-xl font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('contact.messageSent')}</h3>
                <p className={isDark ? 'text-white/60' : 'text-gray-500'}>{t('contact.messageSentDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="Nou missatge - Diari d'Aprenentatge" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{t('contact.name')} *</label>
                    <input type="text" name="name" required className={`w-full px-4 py-3 border rounded-xl bg-[#0f1221] text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent ${isDark ? 'border-[#1e2438]' : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400'}`} placeholder="El teu nom" />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>Email *</label>
                    <input type="email" name="email" required className={`w-full px-4 py-3 border rounded-xl bg-[#0f1221] text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent ${isDark ? 'border-[#1e2438]' : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400'}`} placeholder="el teu@email.com" />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{t('contact.subject')} *</label>
                  <input type="text" name="subject" required className={`w-full px-4 py-3 border rounded-xl bg-[#0f1221] text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent ${isDark ? 'border-[#1e2438]' : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400'}`} placeholder="Assunt del missatge" />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{t('contact.message')} *</label>
                  <textarea name="message" rows={5} required className={`w-full px-4 py-3 border rounded-xl bg-[#0f1221] text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent resize-none ${isDark ? 'border-[#1e2438]' : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400'}`} placeholder="Escriu el teu missatge aquí..." />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-[#ff4d6d] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#ff5a6e] transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-[#ff4d6d]/30 hover:shadow-[#ff4d6d]/50">
                  <Send size={18} />
                  {loading ? t('contact.sending') : t('contact.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
