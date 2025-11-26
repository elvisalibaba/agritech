// ./app/page.tsx
'use client'; 

import { Phone, Mail, MapPin, Target, Zap, Leaf, Shield, Heart, Menu, X, Users, TrendingUp } from 'lucide-react'; 
import Link from 'next/link'; 
import Image from 'next/image';
// CORRECTION : Ajout de RefObject pour le typage
import { useEffect, useRef, useState, RefObject } from 'react'; 

// --- Définitions de couleurs et chemins d'images ---
const BG_DARK = '#1e1e1e';
const BG_GREEN_LIGHT = '#f2f8f2';
const GREEN_PRIMARY = '#38a169'; 
const TEXT_DARK = '#333333';
const TEXT_LIGHT = '#cccccc';

// --- COMPOSANT NAVBAR (Avec Logo Optimisé) ---
const ResponsiveNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    // Ajout du statut actif pour l'accueil
    const navLinks = [
        { href: "/", label: "Accueil", active: true }, 
        { href: "/solutions", label: "Nos solutions" },
        { href: "/about", label: "À propos" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ backgroundColor: BG_DARK }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center text-sm">
                
                {/* 🎯 LOGO ESRUD AGRITECH (optimisé) */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative w-10 h-10 flex-shrink-0"> 
                        <Image
                            src="/assets/logo-esrud.png" // Chemin du logo dans /public
                            alt="Logo ESRUD Agritech"
                            fill 
                            priority 
                            sizes="40px"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <span className="text-xl font-bold tracking-widest text-white hidden sm:block">
                        ESRUD<span style={{ color: GREEN_PRIMARY }}>AGRI</span>TECH
                    </span>
                </Link>
                
                {/* Liens de Navigation (Desktop) */}
                <nav className="hidden md:flex space-x-6 text-white text-base font-medium">
                    {navLinks.map((link) => (
                           <Link 
                            key={link.href} 
                            href={link.href} 
                            className={`hover:text-gray-400 transition-colors ${link.active ? 'border-b-2 border-green-500 text-green-500' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" style={{ backgroundColor: GREEN_PRIMARY, color: 'white' }} className="px-4 py-2 font-semibold hover:bg-green-700 transition-colors duration-300">Contact</Link>
                </nav>

                {/* Bouton Menu (Mobile) */}
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden text-white p-2 border border-gray-700 rounded-md"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            
            {/* Menu Mobile Déroulant */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-dark/95 backdrop-blur-sm shadow-xl pb-4" style={{ backgroundColor: BG_DARK }}>
                    <nav className="flex flex-col space-y-3 px-8 pt-2 pb-4 text-lg font-medium border-t border-gray-700">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-white hover:text-gray-400 transition-colors" onClick={toggleMenu}>{link.label}</Link>
                        ))}
                        <Link href="/contact" style={{ backgroundColor: GREEN_PRIMARY, color: 'white' }} className="mt-4 px-4 py-2 text-center font-semibold hover:bg-green-700 transition-colors duration-300" onClick={toggleMenu}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- COMPOSANT FOOTER (Avec Logo Optimisé) ---
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12 px-8 border-t border-gray-700" style={{ backgroundColor: BG_DARK }}>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
                {/* Col 1 : Logo et Description */}
                <div>
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                        <div className="relative w-10 h-10 flex-shrink-0"> 
                            <Image
                                src="/assets/logo-esrud.png" // CORRECTION : chemin corrigé en /assets/
                                alt="Logo ESRUD Agritech"
                                fill 
                                sizes="40px"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span className="text-xl font-bold tracking-widest text-white">
                            ESRUD<span style={{ color: GREEN_PRIMARY }}>AGRI</span>TECH
                        </span>
                    </Link>
                    <p className="text-sm text-gray-400">
                        Révolutionner l'agriculture en RDC par l'innovation et la durabilité.
                    </p>
                </div>
                
                {/* Col 2-5 : Liens */}
                <div className="space-y-3">
                    <h4 className="font-bold mb-3" style={{ color: GREEN_PRIMARY }}>Navigation</h4>
                    <Link href="#about" className="block text-sm text-gray-400 hover:text-white transition-colors">À Propos</Link>
                    <Link href="#solutions" className="block text-sm text-gray-400 hover:text-white transition-colors">Solutions</Link>
                    <Link href="#impact" className="block text-sm text-gray-400 hover:text-white transition-colors">Impact</Link>
                </div>
                <div className="space-y-3">
                    <h4 className="font-bold mb-3" style={{ color: GREEN_PRIMARY }}>Ressources</h4>
                    <Link href="/blog" className="block text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
                    <Link href="/faq" className="block text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link>
                </div>
                <div className="space-y-3 col-span-2">
                    <h4 className="font-bold mb-3" style={{ color: GREEN_PRIMARY }}>Contact</h4>
                    <p className="text-sm text-gray-400">Kinshasa, RDC</p>
                    <p className="text-sm text-gray-400">+243 820 34 20 19</p>
                    <p className="text-sm text-gray-400">contact@esrudagritech.com</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-gray-600">
                <p>ESRUD Agritech © {new Date().getFullYear()}. Tous droits réservés.</p>
            </div>
        </footer>
    );
};


// --- HOOK POUR ANIMATION AU SCROLL (CORRIGÉ ET TYPÉ) ---
const useAnimateOnScroll = <T extends HTMLElement = HTMLElement>(): [RefObject<T | null>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return; 

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); 
                }
            },
            { threshold: 0.2 } 
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return [ref, isVisible];
};


// --- PAGE D'ACCUEIL PRINCIPALE (page.tsx) ---

export default function Home() {
    // Refs pour l'animation. 
    // Utiliser HTMLDivElement pour les refs sur des <div>
    // Utiliser HTMLElement pour les refs sur des <section> (qui sont des éléments génériques)
    
    // La section <section> est un HTMLElement, pas de problème ici
    const [heroRef, isHeroVisible] = useAnimateOnScroll<HTMLElement>(); 
    
    // 💥 CORRECTION DE TYPE : L'élément est un <div>, le type doit être HTMLDivElement.
    const [numbersRef, isNumbersVisible] = useAnimateOnScroll<HTMLDivElement>(); 
    
    // Reste des sections :
    const [aboutRef, isAboutVisible] = useAnimateOnScroll<HTMLElement>();
    const [solutionsRef, isSolutionsVisible] = useAnimateOnScroll<HTMLElement>();
    const [missionRef, isMissionVisible] = useAnimateOnScroll<HTMLElement>();
    const [testimonialsRef, isTestimonialsVisible] = useAnimateOnScroll<HTMLElement>();
    const [contactRef, isContactVisible] = useAnimateOnScroll<HTMLElement>();
    const [impactRef, isImpactVisible] = useAnimateOnScroll<HTMLElement>(); // Gardé pour cohérence


  return (
    <div style={{ backgroundColor: BG_DARK }} className="flex flex-col min-h-screen text-white font-sans overflow-x-hidden pt-[68px]"> 
      
      <ResponsiveNavbar /> 

      {/* 1. Hero / Accroche principale (Optimisation Image) */}
      <section 
          ref={heroRef}
          className={`relative pt-32 pb-20 md:pt-48 md:pb-48 text-center min-h-[50vh] flex items-center ${isHeroVisible ? 'animate-fade-in' : 'opacity-0'}`} 
      >
          {/* Utilisation de Next/Image pour le background */}
          <div className="absolute inset-0 z-0">
              <Image
                src='/assets/hero-background-image.jpg'
                alt="Champ agricole moderne en RDC"
                fill
                priority
                sizes="100vw"
                style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          <div className="relative max-w-4xl mx-auto px-8 z-20 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slide-up-slow"> 
                  Innovation et Excellence pour l’Agriculture <span style={{ color: GREEN_PRIMARY }}>Durable en RDC</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 animate-slide-up-delay-1"> 
                  ESRUD Agritech révolutionne l’agriculture grâce à la robotique, aux capteurs et aux données intelligentes.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-slide-up-delay-2"> 
                  <a
                      href="#contact"
                      style={{ backgroundColor: GREEN_PRIMARY, color: 'white' }}
                      className="px-8 py-3 font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105" 
                  >
                      Contactez-nous
                  </a>
                  <a
                      href="#solutions"
                      className="border border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105" 
                  >
                      Découvrez nos solutions
                  </a>
              </div>
          </div>
      </section>

      {/* 2. Bande de chiffres clés */}
      <div 
          ref={numbersRef} // CORRIGÉ : numbersRef est maintenant de type HTMLDivElement | null
          style={{ backgroundColor: BG_DARK, color: TEXT_LIGHT }} 
          className={`max-w-5xl mx-auto -mt-16 relative z-30 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 shadow-2xl ${isNumbersVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
          {[
              { value: "25+", label: "Ans d'Expertise" },
              { value: "500+", label: "Hectares Optimisés" },
              { value: "62", label: "Projets RDC" },
              { value: "3K+", label: "Producteurs Formés" },
          ].map((item, idx) => (
              <div key={idx} className="text-center p-4 border-r border-gray-700 last:border-r-0 md:last:border-r transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-3xl font-extrabold" style={{ color: GREEN_PRIMARY }}>{item.value}</h3>
                  <p className="text-xs sm:text-sm uppercase text-gray-400 mt-1">{item.label}</p>
              </div>
          ))}
      </div>

      {/* 3. Qui sommes-nous / Piliers (Optimisation Image) */}
      <section ref={aboutRef} id="about" style={{ backgroundColor: BG_DARK }} className={`py-20 px-8 ${isAboutVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6 text-gray-300 animate-slide-up">
                  <h2 className="text-4xl font-bold mb-4" style={{ color: 'white' }}>Qui sommes-nous ?</h2>
                  <p className="text-lg">
                      ESRUD Agritech est une entreprise technologique congolaise dédiée à transformer l’agriculture traditionnelle par l’innovation. Nous combinons robotique, capteurs et plateformes de données pour offrir aux agriculteurs des outils puissants d’analyse et d’optimisation.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                      <p className="flex items-start text-lg">
                          <Leaf className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: GREEN_PRIMARY }}/>
                          <span className="font-semibold">ESRUD‑TOUCH :</span> robot autonome pour scanner la fertilité et la santé du sol.
                      </p>
                      <p className="flex items-start text-lg">
                          <Target className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: GREEN_PRIMARY }}/>
                          <span className="font-semibold">Application connectée :</span> collecte et analyse les données pour un suivi en temps réel.
                      </p>
                      <p className="flex items-start text-lg">
                          <Shield className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: GREEN_PRIMARY }}/>
                          <span className="font-semibold">Plateforme de contenu :</span> partage de ressources, analyses et conseils pour accompagner les agriculteurs.
                      </p>
                  </div>
              </div>
              
              <div className="md:order-last animate-fade-in">
                  <div className="relative w-full h-80">
                      <Image 
                          src="/assets/qui-sommes-nous-image.jpg" 
                          alt="Agriculteur utilisant la technologie" 
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: 'cover' }}
                          className="transform hover:scale-105 transition-transform duration-500" 
                      /> 
                  </div>
              </div>

          </div>
      </section>

      {/* 4. Section de services / solutions (Optimisation Images Icônes) */}
      <section ref={solutionsRef} id="solutions" style={{ backgroundColor: BG_GREEN_LIGHT, color: TEXT_DARK }} className={`py-20 px-8 ${isSolutionsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">Découvrez nos solutions</h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Carte 1 */}
              <div className="bg-white p-6 shadow-lg flex space-x-6 transform hover:-translate-y-2 transition-transform duration-300 animate-slide-up-delay-1">
                  <div className="relative w-16 h-16 flex-shrink-0">
                      {/* Utilisation d'une icône Lucide au lieu d'une image pour simplifier */}
                      <Zap className="w-16 h-16" style={{ color: GREEN_PRIMARY }} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold mb-2">Analyse des Sols par Robotique</h3>
                      <p className="text-gray-600 mb-4">
                          Évaluation en temps réel de la fertilité, de l'humidité et de la santé microbienne de vos parcelles par ESRUD-TOUCH.
                      </p>
                      <Link href="/solutions/robotique" style={{ color: GREEN_PRIMARY }} className="font-semibold flex items-center group">
                          En savoir plus <span className="ml-2 text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </Link>
                  </div>
              </div>

              {/* Carte 2 */}
              <div className="bg-white p-6 shadow-lg flex space-x-6 transform hover:-translate-y-2 transition-transform duration-300 animate-slide-up-delay-2">
                  <div className="relative w-16 h-16 flex-shrink-0">
                      {/* Utilisation d'une icône Lucide au lieu d'une image pour simplifier */}
                      <TrendingUp className="w-16 h-16" style={{ color: GREEN_PRIMARY }} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold mb-2">Plateforme d'Intelligence IA</h3>
                      <p className="text-gray-600 mb-4">
                          Accédez à des tableaux de bord unifiés pour la prédiction de rendement et la prise de décision éclairée.
                      </p>
                      <Link href="/ia" style={{ color: GREEN_PRIMARY }} className="font-semibold flex items-center group">
                          En savoir plus <span className="ml-2 text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </Link>
                  </div>
              </div>
          </div>
      </section>
      
      
      <section 
          ref={missionRef}
          className={`py-20 px-8 text-white ${isMissionVisible ? 'animate-fade-in' : 'opacity-0'}`} 
          style={{ backgroundColor: GREEN_PRIMARY }}
      >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6 animate-slide-up">
                  <h3 className="text-3xl font-bold">Notre Mission</h3>
                  <p className="text-lg">
                      Augmenter la productivité agricole et la durabilité en RDC grâce à des solutions accessibles et innovantes. Fournir aux cultivateurs des informations précises et rapides pour maximiser rendement et qualité.
                  </p>

                  <h3 className="text-3xl font-bold pt-6">Notre Vision</h3>
                  <p className="text-lg">
                      Faire de l'Afrique un pôle d'excellence agricole technologique, capable de nourrir le monde grâce à l’innovation, la durabilité et la production locale de qualité.
                  </p>
                  
                  <Link
                      href="/about"
                      className="inline-block mt-4 border border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105"
                  >
                      En savoir plus sur nos valeurs
                  </Link>
              </div>
              
              <div className="md:order-last animate-fade-in">
                  <div className="relative w-full h-80">
                      <Image 
                          src="/assets/mission-vision-image.jpg" 
                          alt="Image de l'agriculture durable" 
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: 'cover' }}
                          className="transform hover:scale-105 transition-transform duration-500" 
                      />
                  </div>
              </div>
          </div>
      </section>


      {/* 7. Témoignages (Correction de l'erreur Users) */}
      <section ref={testimonialsRef} style={{ backgroundColor: BG_DARK }} className={`py-20 px-8 ${isTestimonialsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 animate-slide-up">
                  Nos Clients <span style={{ color: GREEN_PRIMARY }}>Témoignent</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Array(3).fill(0).map((_, idx) => (
                      <div key={idx} className="bg-gray-800 p-6 space-y-4 shadow-xl transform hover:-translate-y-2 transition-transform duration-300 animate-slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                          <p className="text-gray-300 italic">"Grâce à ESRUD Agritech, nos rendements ont augmenté de 25%. Le diagnostic sol est d'une précision incroyable."</p>
                          <div className="flex items-center space-x-3 border-t border-gray-700 pt-4">
                              {/* L'icône Users fonctionne maintenant grâce à l'import */}
                              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                                  <Users className="w-6 h-6 text-gray-400" /> 
                              </div> 
                              <div>
                                  <p className="font-semibold text-white">Nom du Producteur {idx + 1}</p>
                                  <p className="text-sm text-gray-500">Kinshasa, RDC</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>


      {/* 8. Contact */}
      <section ref={contactRef} id="contact" style={{ backgroundColor: BG_GREEN_LIGHT, color: TEXT_DARK }} className={`py-20 px-8 ${isContactVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="animate-slide-up">
                  <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
                  <p className="text-lg text-gray-600 mb-8">
                      Prêt à révolutionner votre agriculture ? Remplissez ce formulaire et un expert ESRUD vous contactera rapidement.
                  </p>
                  
                  <form className="space-y-4">
                      <input type="text" placeholder="Votre Nom" className="w-full p-3 border border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-300" />
                      <input type="email" placeholder="Votre Email" className="w-full p-3 border border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-300" />
                      <textarea placeholder="Votre Message" rows={4} className="w-full p-3 border border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-300"></textarea>
                      <button 
                          type="submit" 
                          style={{ backgroundColor: GREEN_PRIMARY, color: 'white' }}
                          className="w-full p-3 font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
                      >
                          Envoyer le Message
                      </button>
                  </form>
              </div>

              <div className="space-y-6 pt-6 md:pt-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center space-x-4">
                      <Mail className="w-8 h-8 flex-shrink-0" style={{ color: GREEN_PRIMARY }}/>
                      <div>
                          <p className="font-semibold text-xl">Email</p>
                          <p className="text-gray-600">contact@esrudagritech.com</p>
                      </div>
                  </div>
                  <div className="flex items-center space-x-4">
                      <Phone className="w-8 h-8 flex-shrink-0" style={{ color: GREEN_PRIMARY }}/>
                      <div>
                          <p className="font-semibold text-xl">Téléphone</p>
                          <p className="text-gray-600">+243 820 34 20 19 / +243 899 46 55 72</p>
                      </div>
                  </div>
                  <div className="flex items-center space-x-4">
                      <MapPin className="w-8 h-8 flex-shrink-0" style={{ color: GREEN_PRIMARY }}/>
                      <div>
                          <p className="font-semibold text-xl">Adresse</p>
                          <p className="text-gray-600">Kinshasa, RDC</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      <Footer />
    </div>
  );
}
