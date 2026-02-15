import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Language = 'ca' | 'es' | 'en' | 'fr'

interface Translations {
  nav: {
    home: string
    about: string
    contact: string
    license: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    mechanical: string
    mechanicalDesc: string
    blog: string
    blogDesc: string
    license: string
    licenseDesc: string
  }
  blog: {
    title: string
    subtitle: string
    readMore: string
    rssFeed: string
    all: string
    lathe: string
    milling: string
    welding: string
    showMore: string
    showLess: string
  }
  about: {
    badge: string
    badgeLevel: string
    title: string
    subtitle: string
    p1: string
    p2: string
    p3: string
    tabs: {
      mechanical: string
      digital: string
    }
    devTitle: string
    devSubtitle: string
    digitalTitle: string
    digitalP1: string
    digitalP2: string
    courseYear: string
    skills: string
    tools: string
    cta: string
  }
  contact: {
    title: string
    subtitle: string
    infoTitle: string
    directEmail: string
    name: string
    firstName: string
    lastName: string
    email: string
    location: string
    phone: string
    followMe: string
    subject: string
    message: string
    comments: string
    required: string
    submit: string
    sending: string
    success: string
    messageSent: string
    messageSentDesc: string
  }
  license: {
    title: string
    subtitle: string
    text: string
    type: string
    desc1: string
    desc2: string
    desc3: string
    byTitle: string
    byText: string
    ncTitle: string
    ncText: string
    moreInfo: string
    download: string
    verify: string
  }
}

const translations: Record<Language, Translations> = {
  ca: {
    nav: { home: 'Inici', about: 'Qui sóc?', contact: 'Contacte', license: 'Llicència' },
    hero: { title: 'Diari d\'Aprenentatge', subtitle: 'Mecanització a l\'Escola Municipal de Treball de Granollers', cta: 'Veure pràctiques', mechanical: 'Mecanització', mechanicalDesc: 'Projectes i pràctiques del taller de mecanització', blog: 'Blog', blogDesc: 'Les meves pràctiques i projectes', license: 'Llicència', licenseDesc: 'Creative Commons' },
    blog: { title: 'Les meves pràctiques', subtitle: 'Projectes i treballs del taller', readMore: 'Llegir més', rssFeed: 'RSS', all: 'Tots', lathe: 'Torno', milling: 'Fresadora', welding: 'Soldadura', showMore: 'Veure més', showLess: 'Veure menys' },
    about: { badge: 'Formació Professional', badgeLevel: 'Grau Mitjà', title: 'Sobre mi', subtitle: 'Estudiant de Mecanització', p1: 'Soc l\'Amine Al Fajjari, estudiant de Mecanització a l\'Escola Municipal de Treball de Granollers.', p2: 'En aquest diari recullo totes les pràctiques que faig al taller, des de treballs bàsics fins a projectes mes complexos.', p3: 'Aprendre és créixer, i cada peça manufactured és una passa cap al futur.', tabs: { mechanical: 'Mecanització', digital: 'Digital' }, devTitle: 'Desenvolupador & Dissenyador', devSubtitle: 'Disseny gràfic, desenvolupament web, edició de vídeo i gestió de xarxes socials.', digitalTitle: 'Desenvolupament Digital', digitalP1: 'Disseny gràfic i desenvolupament web', digitalP2: 'Creació de continguts digitals', courseYear: 'Curs 2024-2025', skills: 'Habilitats', tools: 'Eines que uso', cta: 'Veure els meus projectes' },
    contact: { title: 'Contacte', subtitle: 'Estic disponible per a preguntes o comentaris', infoTitle: 'Informació de contacte', directEmail: 'Enviar email', name: 'Nom', firstName: 'Nom', lastName: 'Cognom', email: 'Email', location: 'Ubicació', phone: 'Telèfon', followMe: 'Segueix-me', subject: 'Assumpte', message: 'Missatge', comments: 'Missatge', required: 'Camp obligatori', submit: 'Enviar', sending: 'Enviant...', success: 'Missatge enviat correctament!', messageSent: 'Missatge enviat!', messageSentDesc: 'Gràcies per posar-te\'n en contacte. Et respondré així com pugui.' },
    license: { title: 'Llicència Creative Commons', subtitle: 'Tots els drets reservats', text: 'Tot el contingut d\'aquest diari d\'aprenentatge està sota llicència Creative Commons Attribution-NonCommercial 4.0 International.', type: 'B - Cotxe', desc1: 'Atribució - Has de creditar l\'autor', desc2: 'No Comercial - No pots fer ús comercial', desc3: 'Igualtat - Has de compartir sota la mateixa llicència', byTitle: 'Atribució', byText: 'Podeu compartir i adaptar el contingut sempre que esmentin l\'autor original.', ncTitle: 'No Comercial', ncText: 'No podeu utilitzar el contingut per a fins comercials sense permís.', moreInfo: 'Més informació', download: 'Descarregar', verify: 'Verificar' }
  },
  es: {
    nav: { home: 'Inicio', about: 'Quién soy?', contact: 'Contacto', license: 'Licencia' },
    hero: { title: 'Diario de Aprendizaje', subtitle: 'Mecanización en la Escola Municipal de Treball de Granollers', cta: 'Ver prácticas', mechanical: 'Mecanización', mechanicalDesc: 'Proyectos y prácticas del taller de mecanización', blog: 'Blog', blogDesc: 'Mis prácticas y proyectos', license: 'Licencia', licenseDesc: 'Creative Commons' },
    blog: { title: 'Mis prácticas', subtitle: 'Proyectos y trabajos del taller', readMore: 'Leer más', rssFeed: 'RSS', all: 'Todos', lathe: 'Torno', milling: 'Fresadora', welding: 'Soldadura', showMore: 'Ver más', showLess: 'Ver menos' },
    about: { badge: 'Formación Profesional', badgeLevel: 'Grado Medio', title: 'Sobre mí', subtitle: 'Estudiante de Mecanización', p1: 'Soy Amine Al Fajjari, estudiante de Mecanización en la Escola Municipal de Treball de Granollers.', p2: 'En este diario recojo todas las prácticas que hago en el taller, desde trabajos básicos hasta proyectos más complejos.', p3: 'Aprender es crecer, y cada pieza manufacturada es un paso hacia el futuro.', tabs: { mechanical: 'Mecanización', digital: 'Digital' }, devTitle: 'Desarrollador & Diseñador', devSubtitle: 'Diseño gráfico, desarrollo web, edición de vídeo y gestión de redes sociales.', digitalTitle: 'Desarrollo Digital', digitalP1: 'Diseño gráfico y desarrollo web', digitalP2: 'Creación de contenidos digitales', courseYear: 'Curso 2024-2025', skills: 'Habilidades', tools: 'Herramientas que uso', cta: 'Ver mis proyectos' },
    contact: { title: 'Contacto', subtitle: 'Estoy disponible para preguntas o comentarios', infoTitle: 'Información de contacto', directEmail: 'Enviar email', name: 'Nombre', firstName: 'Nombre', lastName: 'Apellido', email: 'Email', location: 'Ubicación', phone: 'Teléfono', followMe: 'Sígueme', subject: 'Asunto', message: 'Mensaje', comments: 'Mensaje', required: 'Campo obligatorio', submit: 'Enviar', sending: 'Enviando...', success: 'Mensaje enviado correctamente!', messageSent: 'Mensaje enviado!', messageSentDesc: 'Gracias por contactar. Te responderé lo antes posible.' },
    license: { title: 'Licencia Creative Commons', subtitle: 'Todos los derechos reservados', text: 'Todo el contenido de este diario de aprendizaje está bajo licencia Creative Commons Attribution-NonCommercial 4.0 International.', type: 'B - Coche', desc1: 'Atribución - Debes acreditar al autor', desc2: 'No Comercial - No puedes usar comercialmente', desc3: 'Igualdad - Debes compartir bajo la misma licencia', byTitle: 'Atribución', byText: 'Podeu compartir i adaptar el contingut sempre que esmentin l\'autor original.', ncTitle: 'No Comercial', ncText: 'No podeu utilitzar el contingut per a fins comercials sense permís.', moreInfo: 'Más información', download: 'Descargar', verify: 'Verificar' }
  },
  en: {
    nav: { home: 'Home', about: 'About', contact: 'Contact', license: 'License' },
    hero: { title: 'Learning Diary', subtitle: 'Machining at Escola Municipal de Treball de Granollers', cta: 'View practices', mechanical: 'Machining', mechanicalDesc: 'Projects and practices from the machining workshop', blog: 'Blog', blogDesc: 'My practices and projects', license: 'License', licenseDesc: 'Creative Commons' },
    blog: { title: 'My practices', subtitle: 'Projects and workshop work', readMore: 'Read more', rssFeed: 'RSS', all: 'All', lathe: 'Lathe', milling: 'Milling', welding: 'Welding', showMore: 'Show more', showLess: 'Show less' },
    about: { badge: 'Vocational Training', badgeLevel: 'Intermediate Level', title: 'About me', subtitle: 'Machining Student', p1: 'I am Amine Al Fajjari, a Machining student at Escola Municipal de Treball de Granollers.', p2: 'In this diary I collect all the practices I do in the workshop, from basic work to more complex projects.', p3: 'Learning is growing, and every manufactured piece is a step towards the future.', tabs: { mechanical: 'Machining', digital: 'Digital' }, devTitle: 'Developer & Designer', devSubtitle: 'Graphic design, web development, video editing and social media management.', digitalTitle: 'Digital Development', digitalP1: 'Graphic design and web development', digitalP2: 'Digital content creation', courseYear: 'Year 2024-2025', skills: 'Skills', tools: 'Tools I use', cta: 'View my projects' },
    contact: { title: 'Contact', subtitle: 'I am available for questions or comments', infoTitle: 'Contact information', directEmail: 'Send email', name: 'Name', firstName: 'First name', lastName: 'Last name', email: 'Email', location: 'Location', phone: 'Phone', followMe: 'Follow me', subject: 'Subject', message: 'Message', comments: 'Message', required: 'Required field', submit: 'Send', sending: 'Sending...', success: 'Message sent successfully!', messageSent: 'Message sent!', messageSentDesc: 'Thanks for reaching out. I\'ll get back to you soon.' },
    license: { title: 'Creative Commons License', subtitle: 'All rights reserved', text: 'All content in this learning diary is licensed under Creative Commons Attribution-NonCommercial 4.0 International.', type: 'B - Car', desc1: 'Attribution - You must credit the author', desc2: 'Non-Commercial - No commercial use allowed', desc3: 'ShareAlike - You must share under the same license', byTitle: 'Attribution', byText: 'You can share and adapt the content as long as you credit the original author.', ncTitle: 'Non-Commercial', ncText: 'You cannot use the content for commercial purposes without permission.', moreInfo: 'More information', download: 'Download', verify: 'Verify' }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', contact: 'Contact', license: 'Licence' },
    hero: { title: 'Journal d\'Apprentissage', subtitle: 'Usinage à l\'Escola Municipal de Treball de Granollers', cta: 'Voir les pratiques', mechanical: 'Usinage', mechanicalDesc: 'Projets et pratiques de l\'atelier d\'usinage', blog: 'Blog', blogDesc: 'Mes pratiques et projets', license: 'Licence', licenseDesc: 'Creative Commons' },
    blog: { title: 'Mes pratiques', subtitle: 'Projets et travaux d\'atelier', readMore: 'Lire la suite', rssFeed: 'RSS', all: 'Tous', lathe: 'Tour', milling: 'Fraiseuse', welding: 'Souduer', showMore: 'Voir plus', showLess: 'Voir moins' },
    about: { badge: 'Formation Professionnelle', badgeLevel: 'Niveau Intermédiaire', title: 'À propos', subtitle: 'Étudiant en Usinage', p1: 'Je suis Amine Al Fajjari, étudiant en Usinage à l\'Escola Municipal de Treball de Granollers.', p2: 'Dans ce journal, je recueille toutes les pratiques que je fais à l\'atelier, des travaux de base aux projets plus complexes.', p3: 'Apprendre c\'est grandir, et chaque pièce manufacturée est un pas vers le futur.', tabs: { mechanical: 'Usinage', digital: 'Digital' }, devTitle: 'Développeur & Designer', devSubtitle: 'Design graphique, développement web, édition vidéo et gestion des réseaux sociaux.', digitalTitle: 'Développement Digital', digitalP1: 'Design graphique et développement web', digitalP2: 'Création de contenus numériques', courseYear: 'Année 2024-2025', skills: 'Compétences', tools: 'Outils que j\'utilise', cta: 'Voir mes projets' },
    contact: { title: 'Contact', subtitle: 'Je suis disponible pour des questions ou commentaires', infoTitle: 'Informations de contact', directEmail: 'Envoyer un email', name: 'Nom', firstName: 'Prénom', lastName: 'Nom', email: 'Email', location: 'Localisation', phone: 'Téléphone', followMe: 'Suivez-moi', subject: 'Sujet', message: 'Message', comments: 'Message', required: 'Champ obligatoire', submit: 'Envoyer', sending: 'Envoi en cours...', success: 'Message envoyé avec succès!', messageSent: 'Message envoyé!', messageSentDesc: 'Merci de m\'avoir contacté. Je vous répondrai bientôt.' },
    license: { title: 'Licence Creative Commons', subtitle: 'Tous droits réservés', text: 'Tout le contenu de ce journal d\'apprentissage est sous licence Creative Commons Attribution-NonCommercial 4.0 International.', type: 'B - Voiture', desc1: 'Attribution - Vous devez créditer l\'auteur', desc2: 'Non Commercial - Pas d\'usage commercial', desc3: 'PartageIgual - Vous devez partager sous la même licence', byTitle: 'Attribution', byText: 'Vous pouvez partager et adapter le contenu tant que vous créditez l\'auteur original.', ncTitle: 'Non Commercial', ncText: 'Vous ne pouvez pas utiliser le contenu à des fins commerciales sans permission.', moreInfo: 'Plus d\'informations', download: 'Télécharger', verify: 'Vérifier' }
  }
}

// Helper function to get nested translation value
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let result: unknown = obj
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key]
    } else {
      return path // Return the key if not found
    }
  }
  return typeof result === 'string' ? result : path
}

type TranslationFunction = (key: string) => string

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationFunction
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ca',
  setLanguage: () => {},
  t: (key: string) => key
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    if (saved && (saved === 'ca' || saved === 'es' || saved === 'en' || saved === 'fr')) {
      return saved as Language
    }
    return 'ca'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: (key: string) => getNestedValue(translations[language] as unknown as Record<string, unknown>, key) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
