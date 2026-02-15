import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-gradient text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Diari d'Aprenentatge</h3>
            <p className="text-white/60 text-sm">Mecanització a l'Escola Municipal de Treball de Granollers</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Xarxes socials</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff4d6d] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff4d6d] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff4d6d] transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          <div>
            <p className="text-white/40 text-sm">© 2024 Amine Al Fajjari</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">Fet amb ❤️ a EMT Granollers</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#ff4d6d] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#ff4d6d]/30 hover:bg-[#ff5a6e] transition-all hover:scale-110 z-50"
        aria-label="Tornar a dalt"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
