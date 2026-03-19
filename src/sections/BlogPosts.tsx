import { useState } from 'react'
import { Tag, ChevronDown, ChevronUp, Rss, User } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useLightbox } from '../components/LightboxProvider'
import { ClickableImage } from '../components/ImageLightbox'
import { Comments } from '../components/Comments'
import { useTheme } from '../components/ThemeProvider'
import { ScrollAnimation } from '../components/ScrollAnimation'

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
  { id: 1, title: 'Pràctica 1', titleES: 'Práctica 1', titleEN: 'Practice 1', titleFR: 'Pratique 1', description: 'Primera pràctica de fresadora. Operacions bàsiques: plans i caixers.', descriptionES: 'Primera práctica de fresadora. Operaciones básicas: planos y cajeras.', descriptionEN: 'First milling practice. Basic operations: flat surfaces and pockets.', descriptionFR: 'Première pratique de fraiseuse. Opérations de base: surfaces planes et poches.', date: '2025-10-02', tags: ['Fresadora'], images: ['/pieza1.jpg'] },
  { id: 2, title: 'Pràctica 2', titleES: 'Práctica 2', titleEN: 'Practice 2', titleFR: 'Pratique 2', description: 'Primera pràctica de torn. Operacions bàsiques: cares, arranjat i trepat.', descriptionES: 'Primera práctica de torno. Operaciones básicas: caras,aje y barrenado.', descriptionEN: 'First lathe practice. Basic operations: facing, turning and drilling.', descriptionFR: 'Première pratique de tour. Opérations de base: faces, dressage et perçage.', date: '2025-10-09', tags: ['Torno'], images: ['/pieza2.jpg'] },
  { id: 3, title: 'Pràctica 3', titleES: 'Práctica 3', titleEN: 'Practice 3', titleFR: 'Pratique 3', description: 'Segona pràctica de torn. Conos i rosques.', descriptionES: 'Segunda práctica de torno. Conos y roscas.', descriptionEN: 'Second lathe practice. Tapers and threads.', descriptionFR: 'Deuxième pratique de tour. cônes et filets.', date: '2025-10-16', tags: ['Torno'], images: ['/pieza3.jpg'] },
  { id: 4, title: 'Pràctica 4', titleES: 'Práctica 4', titleEN: 'Practice 4', titleFR: 'Pratique 4', description: 'Segona pràctica de torn. Peça amb toleràncies ajustades.', descriptionES: 'Segunda práctica de torno. Pieza con tolerancias ajustadas.', descriptionEN: 'Second lathe practice. Part with tight tolerances.', descriptionFR: 'Deuxième pratique de tour. Pièce avec tolérances serrées.', date: '2025-10-23', tags: ['Torno'], images: ['/pieza4.jpg'] },
  { id: 5, title: 'Pràctica 5', titleES: 'Práctica 5', titleEN: 'Practice 5', titleFR: 'Pratique 5', description: 'Tercera pràctica de torn. Operacions avançades.', descriptionES: 'Tercera práctica de torno. Operaciones avanzadas.', descriptionEN: 'Third lathe practice. Advanced operations.', descriptionFR: 'Troisième pratique de tour. Opérations avancées.', date: '2025-10-30', tags: ['Torno'], images: ['/pieza5.jpg'] },
  { id: 6, title: 'Pràctica 6', titleES: 'Práctica 6', titleEN: 'Practice 6', titleFR: 'Pratique 6', description: 'Segona pràctica de fresadora. Geometries complexes.', descriptionES: 'Segunda práctica de fresadora. Geometrías complejas.', descriptionEN: 'Second milling practice. Complex geometries.', descriptionFR: 'Deuxième pratique de fraiseuse. Géométries complexes.', date: '2025-11-06', tags: ['Fresadora'], images: ['/pieza6.jpg'] },
  { id: 7, title: 'Pràctica 7', titleES: 'Práctica 7', titleEN: 'Practice 7', titleFR: 'Pratique 7', description: 'Tercera pràctica de fresadora. Acabats i toleràncies.', descriptionES: 'Tercera práctica de fresadora. Acabados y tolerancias.', descriptionEN: 'Third milling practice. Finishes and tolerances.', descriptionFR: 'Troisième pratique de fraiseuse. Finitions et tolérances.', date: '2025-11-13', tags: ['Fresadora'], images: ['/pieza7.jpg'] },
  { id: 8, title: 'Pràctica 8', titleES: 'Práctica 8', titleEN: 'Practice 8', titleFR: 'Pratique 8', description: 'Tercera pràctica de fresadora. Acabats i toleràncies.', descriptionES: 'Tercera práctica de fresadora. Acabados y tolerancias.', descriptionEN: 'Third milling practice. Finishes and tolerances.', descriptionFR: 'Troisième pratique de fraiseuse. Finitions et tolérances.', date: '2025-11-13', tags: ['Manual'], images: ['/pieza8.jpg'] },
  { id: 9, title: 'Pràctica 9', titleES: 'Práctica 9', titleEN: 'Practice 9', titleFR: 'Pratique 9', description: 'Tercera pràctica de fresadora. Acabats i toleràncies.', descriptionES: 'Tercera práctica de fresadora. Acabados y tolerancias.', descriptionEN: 'Third milling practice. Finishes and tolerances.', descriptionFR: 'Troisième pratique de fraiseuse. Finitions et tolérances.', date: '2025-11-13', tags: ['manual'], images: ['/pieza9.jpg'] },
  { id: 10, title: 'Pràctica 10', titleES: 'Práctica 10', titleEN: 'Practice 10', titleFR: 'Pratique 10', description: 'Tercera pràctica de fresadora. Acabats i toleràncies.', descriptionES: 'Tercera práctica de fresadora. Acabados y tolerancias.', descriptionEN: 'Third milling practice. Finishes and tolerances.', descriptionFR: 'Troisième pratique de fraiseuse. Finitions et tolérances.', date: '2025-11-13', tags: ['Fresadora'], images: ['/pieza10.jpg'] },
  { id: 11, title: 'Activitat de croquitzat 1', titleES: 'Actividad croquis 1', titleEN: 'Sketching activity 1', titleFR: 'Activité de croquis 1', description: 'Avui hem fet un treball de completar un passador i un conjunt d\'una politja. Aquesta activitat ha estat més divertida, ja que no només es tracta de figures rodones, com passava amb l\'activitat número dos. Encara em falta millorar el meu traç a llapis.', descriptionES: 'Hoy hemos hecho un trabajo de completar un pasador y un conjunto de una polea. Esta actividad ha sido más divertida.', descriptionEN: 'Today we did work to complete a pin and a pulley set. This activity was more fun.', descriptionFR: 'Aujourd\'hui nous avons fait un travail pour compléter une goupille et un ensemble de poulie.', date: '2025-10-23', tags: ['Croquis'], images: ['/croquis1.jpg'] },
  { id: 12, title: 'Activitat de croquitzat 2', titleES: 'Actividad croquis 2', titleEN: 'Sketching activity 2', titleFR: 'Activité de croquis 2', description: 'En aquesta ocasió, a la classe de projecte hem fet una activitat de fer cercles. El motiu pel qual es realitza aquesta activitat és avaluar el nostre nivell de dibuix, la qualitat, la nitidesa i el traç de les línies que tenim sobre el paper. L\'activitat consistia a fer un dibuix d\'un pla simplificat d\'un rosquejat: un cercle petit i, al mig, un cercle més gran.', descriptionES: 'En esta ocasión, en clase de proyecto hemos hecho una actividad de hacer círculos. El motivo por el cual se realiza esta actividad es evaluar nuestro nivel de dibujo, la calidad, la nitidez y el trazo de las líneas que tenemos sobre el papel.', descriptionEN: 'On this occasion, in the project class we did an activity of drawing circles. The reason for this activity is to evaluate our drawing level, quality, clarity and line stroke.', descriptionFR: 'Cette fois, en cours de projet, nous avons fait une activité de dessin de cercles.', date: '2025-11-13', tags: ['Croquis'], images: ['/croquis2.jpg'] },
  { id: 13, title: 'Soldadura TIG', titleES: 'Soldadura TIG', titleEN: 'TIG Welding', titleFR: 'Soudage TIG', description: 'Avui hem treballat en soldadura TIG, que consisteix a afilar un elèctrode de tungstè i fer cordons per unir dues xapes. Com es veu a la imatge, un company m\'ha ajudat durant el procés de soldadura de les xapes. Aquesta activitat combina diversió i aprenentatge, tot i que pot ser una mica complicada perquè cal afilar diverses vegades la punta de tungstè per obtenir un bon resultat.', descriptionES: 'Hoy hemos trabajado en soldadura TIG, que consiste en afilar un electrodo de tungsteno y hacer cordones para unir dos chapas.', descriptionEN: 'Today we worked on TIG welding, which involves sharpening a tungsten electrode and making welds to join two sheets.', descriptionFR: 'Aujourd\'hui nous avons travaillé sur le soudage TIG, qui consiste à affiler une électrode de tungstène et à faire des cordons.', date: '2025-11-20', tags: ['Soldadura'], images: ['/blog-tig.jpg'] },
]

const tagsList = ['Tots', 'Torno', 'Fresadora', 'Soldadura', 'Croquis', 'Manual']

export function BlogPosts() {
  const { t, language } = useLanguage()
  const { openLightbox } = useLightbox()
  const { isDark } = useTheme()
  const [selectedTag, setSelectedTag] = useState('Tots')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredPieces = selectedTag === 'Tots' ? pieces : pieces.filter(p => p.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase()))

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
                      : isDark ? 'bg-[#141a2e] text-[#9aa0b3] hover:bg-[#ff4d6d]/10 hover:text-[#ff4d6d] border border-[#1e2438]' : 'bg-gray-200 text-gray-600 hover:bg-[#ff4d6d]/10 hover:text-[#ff4d6d] border border-gray-300'
                  }`}
                >
                  {tag === 'Tots' ? t('blog.all') : tag === 'Torno' ? t('blog.lathe') : tag === 'Fresadora' ? t('blog.milling') : tag === 'Soldadura' ? t('blog.welding') : tag === 'Manual' ? t('blog.manual') : 'Croquis'}
                </button>
              ))}
            </div>

            {/* Blog Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPieces.map(piece => (
                <article 
                  key={piece.id} 
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 group card-glow ${isDark ? 'bg-[#141a2e] border-[#1e2438] hover:border-[#ff4d6d]/30' : 'bg-white border-gray-200 hover:border-[#ff4d6d]/30'}`}
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
                    
                    <h3 className={`text-xl font-display font-bold mb-3 group-hover:text-[#ff4d6d] transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {getTitle(piece)}
                    </h3>
                    
                    <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-[#9aa0b3]' : 'text-gray-600'}`}>
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
                      <div className={`mt-4 pt-4 animate-fadeIn ${isDark ? 'border-[#1e2438]' : 'border-gray-200'}`}>
                        <p className={isDark ? 'text-[#cfd3e0]' : 'text-gray-700'} text-sm>{getDesc(piece)}</p>
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
               <div className="text-center p-3 bg-[#0f1221] rounded-xl">
                  <span className="text-[#ff4d6d] text-2xl font-bold">{pieces.filter(p => p.tags.includes('Manual')).length}</span>
                  <p className="text-[#9aa0b3] text-xs mt-1">Manual</p>
                </div>
                <div className="text-center p-3 bg-[#0f1221] rounded-xl col-span-2">
                  <span className="text-[#ff4d6d] text-2xl font-bold">{pieces.filter(p => p.tags.includes('Croquis')).length}</span>
                  <p className="text-[#9aa0b3] text-xs mt-1">Croquis</p>
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
