import { useState, type FormEvent } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function Comments() {
  const { t } = useLanguage()
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

  if (submitted) {
    return (
      <div className="bg-[#141a2e] border border-[#1e2438] rounded-2xl p-8 text-center">
        <MessageCircle size={48} className="text-[#ff4d6d] mx-auto mb-4" />
        <h3 className="text-white font-display font-bold text-xl mb-2">{t('contact.messageSent')}</h3>
        <p className="text-[#9aa0b3]">{t('contact.messageSentDesc')}</p>
      </div>
    )
  }

  return (
    <div className="bg-[#141a2e] rounded-2xl p-8 border border-[#1e2438]">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle size={24} className="text-[#ff4d6d]" />
        <h3 className="text-2xl font-display font-bold text-white">Comentaris</h3>
      </div>
      
      <p className="text-[#9aa0b3] mb-6">
        Deixa un comentari - et respondré al teu email
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="_subject" value="Nuevo comentario - Diari d'Aprenentatge" />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_captcha" value="false" />
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#cfd3e0] mb-2">{t('contact.name')} *</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-3 border border-[#1e2438] rounded-xl bg-[#0f1221] text-white placeholder-[#9aa0b3] focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent transition-all"
              placeholder="El teu nom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#cfd3e0] mb-2">Email *</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 border border-[#1e2438] rounded-xl bg-[#0f1221] text-white placeholder-[#9aa0b3] focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent transition-all"
              placeholder="el teu@email.cat"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#cfd3e0] mb-2">{t('contact.message')} *</label>
          <textarea 
            name="message" 
            rows={5} 
            required 
            className="w-full px-4 py-3 border border-[#1e2438] rounded-xl bg-[#0f1221] text-white placeholder-[#9aa0b3] focus:ring-2 focus:ring-[#ff4d6d] focus:border-transparent transition-all resize-none"
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
