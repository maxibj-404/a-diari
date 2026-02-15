import { Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
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
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e94560] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e94560] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e94560] transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          <div>
            <p className="text-white/40 text-sm">© 2024 Amine Al Fajjari</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
