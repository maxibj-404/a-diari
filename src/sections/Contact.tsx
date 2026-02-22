import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react'
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
      const response = await fetch('https://formsubmit.co/ajax/alumne@emtgranollers.cat', {
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
          <div className="space-y-6">
            <div className="bg-[#141a2e] rounded-2xl p-6 shadow-lg border border-[#1e2438]">
              <h3 className="text-xl font-display font-bold text-white mb-6">{t('contact.infoTitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff4d6d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#ff4d6d]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{t('contact.email')}</p>
                    <p className="text-white font-medium">alumne@emtgranollers.cat</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff4d6d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#ff4d6d]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{t('contact.location')}</p>
                    <p className="text-white font-medium">Carrer de Sant Oleguer, 1<br />08401 Granollers, Barcelona</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff4d6d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#ff4d6d]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{t('contact.phone')}</p>
                    <p className="text-white font-medium">+34 938 70 40 40</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Red Email Button */}
            <a 
              href="mailto:alumne@emtgranollers.cat"
              className="flex items-center justify-center gap-3 w-full bg-[#ff4d6d] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#ff5a6e] transition-all shadow-lg shadow-[#ff4d6d]/30"
            >
              <ExternalLink size={20} />
              Enviar email directe
            </a>

            <div className="bg-[#141a2e] rounded-2xl p-6 shadow-lg border border-[#1e2438]">
              <h3 className="text-xl font-display font-bold text-white mb-6">{t('contact.followMe')}</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#0f1221] rounded-xl flex items-center justify-center text-white hover:bg-[#ff4d6d] transition-colors border border-[#1e2438]">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-[#0f1221] rounded-xl flex items-center justify-center text-white hover:bg-[#ff4d6d] transition-colors border border-[#1e2438]">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#141a2e] rounded-2xl p-8 shadow-lg border border-[#1e2438]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{t('contact.messageSent')}</h3>
                <p className="text-white/60">{t('contact.messageSentDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="Nou missatge - Diari d'Aprenentatge" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">{t('contact.name')} *</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 border border-[#1e2438] rounded-xl bg-[#0f1221] text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Email *</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 border border-[#1e2438] rounded-xl bg-[#0f1221] text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">{t('contact.subject')} *</label>
                  <input type="text" name="subject" required className="w-full px-4 py-3 border border-[#1e2438] rounded-xl bg-[#0f1221] text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">{t('contact.message')} *</label>
                  <textarea name="message" rows={5} required className="w-full px-4 py-3 border border-[#1e2438] rounded-xl bg-[#0f1221] text-white placeholder-white/30 focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-[#ff4d6d] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#ff5a6e] transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-[#ff4d6d]/30">
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
