import { useState, type FormEvent } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from './ThemeProvider'

export function Comments() {
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

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center border ${isDark ? 'bg-[#141a2e] border-[#1e2438]' : 'bg-white border-gray-200'}`}>
        <MessageCircle size={48} className="text-[#ff4d6d] mx-auto mb-4" />
        <h3 className={`font-display font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('contact.messageSent')}</h3>
        <p className={isDark ? 'text-[#9aa0b3]' : 'text-gray-500'}>{t('contact.messageSentDesc')}</p>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl p-8 border ${isDark ? 'bg-[#141a2e] border-[#1e2438]' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle size={24} className="text-[#ff4d6d]" />
        <h3 className={`text-2xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Comentaris</h3>
      </div>
      
      <p className={`mb-6 ${isDark ? 'text-[#9aa0b3]' : 'text-gray-600'}`}>
        Deixa un comentari - et respondré al teu email
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="_subject" value="Nuevo comentario - Diari d'Aprenentatge" />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_captcha" value="false" />
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-[#cfd3e0]' : 'text-gray-700'}`}>{t('contact.name')} *</label>
            <input 
              type="text" 
              name="name" 
              required 
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent transition-all ${isDark ? 'bg-[#0f1221] border-[#1e2438] text-white placeholder-[#9aa0b3]' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'}`}
              placeholder="El teu nom"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-[#cfd3e0]' : 'text-gray-700'}`}>Email *</label>
            <input 
              type="email" 
              name="email" 
              required 
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent transition-all ${isDark ? 'bg-[#0f1221] border-[#1e2438] text-white placeholder-[#9aa0b3]' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'}`}
              placeholder="el teu@email.cat"
            />
          </div>
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-[#cfd3e0]' : 'text-gray-700'}`}>{t('contact.message')} *</label>
          <textarea 
            name="message" 
            rows={5} 
            required 
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent transition-all resize-none ${isDark ? 'bg-[#0f1221] border-[#1e2438] text-white placeholder-[#9aa0b3]' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'}`}
            placeholder="El teu missatge..."
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-[#ff4d6d] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#ff5a6e] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Send size={18} />
          {loading ? t('contact.sending') : 'Enviar comentari'}
        </button>
      </form>
    </div>
  )
}
