import { useState } from 'react'
import { Calendar, Tag, ChevronDown, ChevronUp, Rss, User } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useLightbox } from '../components/LightboxProvider'
import { ClickableImage } from '../components/ImageLightbox'
import { Comments } from '../components/Comments'
import { useTheme } from '../components/ThemeProvider'

interface Piece {
  id: number
  title: string
  titleES: string
  titleEN: string
  titleFR: string
  description: string
  descriptionES: string
  descriptionEN: string
  descriptionFR: string
  date: string
  tags: string[]
  images: string[]
}

const pieces: Piece[] = [
  { id: 1, title: 'Pràctica 1', titleES: 'Práctica 1', titleEN: 'Practice 1', titleFR: 'Pratique 1', description: 'Primera pràctica de torn. Operacions bàsiques: cares, arranjat i trepat.', descriptionES: 'Primera práctica de torno. Operaciones básicas: caras,aje y barrenado.', descriptionEN: 'First lathe practice. Basic operations: facing, turning and drilling.', descriptionFR: 'Première pratique de tour. Opérations de base: faces, dressage et perçage.', date: '2025-10-02', tags: ['Torno'], images: ['/pieza1.jpg'] },
  { id: 2, title: 'Pràctica 2', titleES: 'Práctica 2', titleEN: 'Practice 2', titleFR: 'Pratique 2', description: 'Segona pràctica de torn. Conos i rosques.', descriptionES: 'Segunda práctica de torno. Conos y roscas.', descriptionEN: 'Second lathe practice. Tapers and threads.', descriptionFR: 'Deuxième pratique de tour. cônes et filets.', date: '2025-10-09', tags: ['Torno'], images: ['/pieza2.jpg'] },
  { id: 3, title: 'Pràctica 3', titleES: 'Práctica 3', titleEN: 'Practice 3', titleFR: 'Pratique 3', description: 'Tercera pràctica de torn. Peça amb toleràncies ajustades.', descriptionES: 'Tercera práctica de torno. Pieza con tolerancias ajustadas.', descriptionEN: 'Third lathe practice. Part with tight tolerances.', descriptionFR: 'Troisième pratique de tour. Pièce avec tolérances serrées.', date: '2025-10-16', tags: ['Torno'], images: ['/pieza3.jpg'] },
  { id: 4, title: 'Pràctica 4', titleES: 'Práctica 4', titleEN: 'Practice 4', titleFR: 'Pratique 4', description: 'Primera pràctica de fresadora. Plans i caixers.', descriptionES: 'Primera práctica de fresadora. Planos y cajeras.', descriptionEN: 'First milling practice. Flat surfaces and pockets.', descriptionFR: 'Première pratique de fraiseuse. Surfaces planes et poches.', date: '2025-10-23', tags: ['Fresadora'], images: ['/pieza4.jpg'] },
  { id: 5, title: 'Pràctica 5', titleES: 'Práctica 5', titleEN: 'Practice 5', titleFR: 'Pratique 5', description: 'Segona pràctica de fresadora. Geometries complexes.', descriptionES: 'Segunda práctica de fresadora. Geometrías complejas.', descriptionEN: 'Second milling practice. Complex geometries.', descriptionFR: 'Deuxième pratique de fraiseuse. Géométries complexes.', date: '2025-10-30', tags: ['Fresadora'], images: ['/pieza5.jpg'] },
  { id: 6, title: 'Pràctica 6', titleES: 'Práctica 6', titleEN: 'Practice 6', titleFR: 'Pratique 6', description: 'Tercera pràctica de fresadora. Acabats i toleràncies.', descriptionES: 'Tercera práctica de fresadora. Acabados y tolerancias.', descriptionEN: 'Third milling practice. Finishes and tolerances.', descriptionFR: 'Troisième pratique de fraiseuse. Finitions et tolérances.', date: '2025-11-06', tags: ['Fresadora'], images: ['/pieza6.jpg'] },
  { id: 7, title: 'Pràctica 7', titleES: 'Práctica 7', titleEN: 'Practice 7', titleFR: 'Pratique 7', description: 'Primera pràctica de soldadura TIG. Cordons直线.', descriptionES: 'Primera práctica de soldadura TIG. Cordones lineales.', descriptionEN: 'First TIG welding practice. Linear welds.', descriptionFR: 'Première pratique de soudage TIG. Cordons linéaires.', date: '2025-11-13', tags: ['Soldadura'], images: ['/blog-tig.jpg'] },
]

const tagsList = ['Tots', 'Torno', 'Fresadora', 'Soldadura']

export function BlogPosts() {
  const { t, language } = useLanguage()
  const { openLightbox } = useLightbox()
  const { isDark } = useTheme()
  const [selectedTag, setSelectedTag] = useState('Tots')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredPieces = selectedTag === 'Tots' ? pieces : pieces.filter(p => p.tags.includes(selectedTag))

  const getTitle = (p: Piece) => language === 'ca' ? p.title : language === 'es' ? p.titleES : language === 'en' ? p.titleEN : p.titleFR
  const getDesc = (p: Piece) => language === 'ca' ? p.description : language === 'es' ? p.descriptionES : language === 'en' ? p.descriptionEN : p.descriptionFR

  return (
    <section className={`py-20 ${isDark ? 'bg-[#0f1221]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-1.5 ${isDark ? 'bg-[#ff4d6d]/10' : 'bg-[#ff4d6d]/10'} text-[#ff4d6d] text-xs font-label font-medium rounded-full tracking-wider mb-4`}>
            ARXIU
          </span>
          <h2 className={`text-4xl md:text-5xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            {t('blog.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Blog Cards */}
          <div className="lg:col-span-2">
            {/* Filter Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tagsList.map(tag => (
                <button 
                  key={tag} 
                  onClick={() => setSelectedTag(tag)} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag 
                      ? 'bg-[#ff4d6d] text-white shadow-lg shadow-[#ff4d6d]/30' 
                      : 'bg-[#141a2e] text-[#9aa0b3] hover:bg-[#ff4d6d]/10 hover:text-[#ff4d6d] border border-[#1e2438]'
                  }`}
                >
                  {tag === 'Tots' ? t('blog.all') : tag === 'Torno' ? t('blog.lathe') : tag === 'Fresadora' ? t('blog.milling') : t('blog.welding')}
                </button>
              ))}
            </div>

            {/* Blog Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPieces.map(piece => (
                <article 
                  key={piece.id} 
                  className="bg-[#141a2e] rounded-2xl overflow-hidden border border-[#1e2438] hover:border-[#ff4d6d]/30 transition-all duration-300 group card-glow"
                >
                  {/* Image */}
                  <div 
                    className="relative h-48 overflow-hidden cursor-pointer" 
                    onClick={() => piece.images[0] && openLightbox(piece.images[0], getTitle(piece))}
                  >
                    {piece.images[0] ? (
                      <ClickableImage 
                        src={piece.images[0]} 
                        alt={getTitle(piece)} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        onOpen={openLightbox} 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] flex items-center justify-center">
                        <Tag size={48} className="text-white/30" />
                      </div>
                    )}
                    {/* Tag overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="flex items-center gap-1 px-2 py-1 bg-[#0f1221]/80 backdrop-blur-sm text-white text-xs rounded-full">
                        <Tag size={12} /> {piece.tags[0]}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-[#ff4d6d]" />
                      <span className="text-[#9aa0b3] text-sm">{piece.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#ff4d6d] transition-colors">
                      {getTitle(piece)}
                    </h3>
                    
                    <p className="text-[#9aa0b3] text-sm mb-4 line-clamp-2">
                      {getDesc(piece)}
                    </p>
                    
                    <button 
                      onClick={() => setExpandedId(expandedId === piece.id ? null : piece.id)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-[#ff4d6d] hover:bg-[#ff4d6d]/5 rounded-lg transition-colors text-sm font-medium"
                    >
                      {expandedId === piece.id ? (
                        <><ChevronUp size={18} /> {t('blog.showLess')}</>
                      ) : (
                        <><ChevronDown size={18} /> {t('blog.showMore')}</>
                      )}
                    </button>
                    
                    {expandedId === piece.id && (
                      <div className="mt-4 pt-4 border-t border-[#1e2438] animate-fadeIn">
                        <p className="text-[#cfd3e0] text-sm">{getDesc(piece)}</p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Card */}
            <div className="bg-gradient-to-br from-[#ff4d6d] to-[#ff5a6e] rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={40} className="text-white" />
              </div>
              <p className="text-white/80 text-sm mb-2">Creador:</p>
              <h4 className="text-white font-display font-bold text-lg mb-4">Amine Al Fajjari</h4>
              <div className="border-t border-white/20 pt-4">
                <span className="text-white/80 text-sm">EMT GRANOLLERS</span>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-[#141a2e] rounded-2xl p-6 border border-[#1e2438]">
              <h4 className="text-white font-display font-bold mb-4">Estadístiques</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-[#0f1221] rounded-xl">
                  <span className="text-[#ff4d6d] text-2xl font-bold">{pieces.length}</span>
                  <p className="text-[#9aa0b3] text-xs mt-1">Total</p>
                </div>
                <div className="text-center p-3 bg-[#0f1221] rounded-xl">
                  <span className="text-[#ff4d6d] text-2xl font-bold">{pieces.filter(p => p.tags.includes('Torno')).length}</span>
                  <p className="text-[#9aa0b3] text-xs mt-1">Torno</p>
                </div>
                <div className="text-center p-3 bg-[#0f1221] rounded-xl">
                  <span className="text-[#ff4d6d] text-2xl font-bold">{pieces.filter(p => p.tags.includes('Fresadora')).length}</span>
                  <p className="text-[#9aa0b3] text-xs mt-1">Fresadora</p>
                </div>
                <div className="text-center p-3 bg-[#0f1221] rounded-xl">
                  <span className="text-[#ff4d6d] text-2xl font-bold">{pieces.filter(p => p.tags.includes('Soldadura')).length}</span>
                  <p className="text-[#9aa0b3] text-xs mt-1">Soldadura</p>
                </div>
              </div>
            </div>

            {/* RSS Feed */}
            <div className="bg-[#141a2e] rounded-2xl p-6 border border-[#1e2438]">
              <div className="flex items-center gap-3 mb-4">
                <Rss size={20} className="text-[#ff4d6d]" />
                <h4 className="text-white font-display font-bold">RSS Feed</h4>
              </div>
              <p className="text-[#9aa0b3] text-sm mb-4">
                Segueix les meves actualitzacions
              </p>
              <button className="w-full py-2 bg-[#ff4d6d] text-white rounded-lg font-medium hover:bg-[#ff5a6e] transition-colors">
                Subscriu-te
              </button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-16">
          <Comments />
        </div>
      </div>
    </section>
  )
}
