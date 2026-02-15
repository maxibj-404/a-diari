import { useState, useEffect } from 'react'
import './App.css'
import { LanguageProvider } from './i18n/LanguageContext'
import { LightboxProvider } from './components/LightboxProvider'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import { Hero } from './sections/Hero'
import { BlogPosts } from './sections/BlogPosts'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { License } from './sections/License'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <div id="blog">
              <BlogPosts />
            </div>
          </>
        )
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      case 'license':
        return <License />
      default:
        return (
          <>
            <Hero />
            <div id="blog">
              <BlogPosts />
            </div>
          </>
        )
    }
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0f1221] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-[#ff4d6d]/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-[#ff4d6d] rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-[#ff4d6d] rounded-full animate-pulse" />
            </div>
          </div>
          <p className="font-display text-xl text-white mb-2">Diari d'aprenentatge</p>
          <p className="font-label text-xs tracking-[0.3em] text-white/40 uppercase">Carregant...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LightboxProvider>
          <AppContent />
        </LightboxProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
