import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL_HERE', {
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
    <section className="py-20 bg-gray-50 dark:bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a1a2e] dark:text-white mb-4 text-center">{t('contact.title')}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">{t('contact.subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#1e1e2e] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-[#1a1a2e] dark:text-white mb-6">{t('contact.infoTitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e94560]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#e94560]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.email')}</p>
                    <p className="text-[#1a1a2e] dark:text-white font-medium">alumne@emtgranollers.cat</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e94560]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#e94560]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.location')}</p>
                    <p className="text-[#1a1a2e] dark:text-white font-medium">Carrer de Sant Oleguer, 1<br />08401 Granollers, Barcelona</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e94560]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#e94560]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.phone')}</p>
                    <p className="text-[#1a1a2e] dark:text-white font-medium">+34 938 70 40 40</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e1e2e] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-[#1a1a2e] dark:text-white mb-6">{t('contact.followMe')}</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#1a1a2e] dark:bg-[#2a2a3e] rounded-xl flex items-center justify-center text-white hover:bg-[#e94560] transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-[#1a1a2e] dark:bg-[#2a2a3e] rounded-xl flex items-center justify-center text-white hover:bg-[#e94560] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1e1e2e] rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] dark:text-white mb-2">{t('contact.messageSent')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('contact.messageSentDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="Nou missatge - Diari d'Aprenentatge" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.name')}</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#2a2a3e] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#e94560] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#2a2a3e] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#e94560] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.subject')}</label>
                  <input type="text" name="subject" required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#2a2a3e] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#e94560] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.message')}</label>
                  <textarea name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#2a2a3e] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#e94560] focus:border-transparent resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#e94560] to-[#0f3460] text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50">
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
