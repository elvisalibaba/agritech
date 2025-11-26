// ./app/ia/page.tsx
'use client'; 

import { Phone, Mail, MapPin, Target, Zap, Leaf, Shield, Heart, Menu, X, Users, Cpu, BarChart3, TrendingUp, DollarSign, Lightbulb, LocateFixed, Smartphone, Brain, ArrowRight, Clock } from 'lucide-react'; 
import Link from 'next/link'; 
import Image from 'next/image';
import { useEffect, useRef, useState, RefObject } from 'react'; 

// --- Définitions de couleurs et chemins d'images ---
const BG_DARK = '#1e1e1e';
const BG_CARD_LIGHT = '#292929'; 
const BG_GREEN_LIGHT = '#f2f8f2';
const GREEN_PRIMARY = '#38a169'; 
const TEXT_DARK = '#333333';
const TEXT_LIGHT = '#ffffff'; 
const TEXT_ACCENT = '#cccccc';
const ACCENT_COLOR_BLUE = '#3b82f6'; 

// --- HOOK POUR ANIMATION AU SCROLL (CORRIGÉ ET TYPÉ) ---
// Correction de type pour inclure T | null dans la RefObject de retour.
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


// --- COMPOSANT NAVBAR (Inchangé) ---
const ResponsiveNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/solutions", label: "Nos solutions", active: true }, 
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
                            src="/assets/logo-esrud.png" 
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

// --- COMPOSANT FOOTER (Inchangé) ---
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12 px-8 border-t border-gray-700" style={{ backgroundColor: BG_DARK }}>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
                {/* Col 1 : Logo et Description */}
                <div>
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                        <div className="relative w-10 h-10 flex-shrink-0"> 
                            <Image
                                src="/assets/logo-esrud.png" 
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
// --- Fin des Composants de Base ---


// --- Données pour la Page IA (Inchangées) ---
const iaFeatures = [
    { icon: <Brain className="w-8 h-8"/>, title: "Diagnostic précis du sol", description: "Interprétation immédiate des données (pH, humidité, nutriments) pour une compréhension claire de l'état de la parcelle." },
    { icon: <MapPin className="w-8 h-8"/>, title: "Cartographie ciblée", description: "Génération de cartes de fertilité et de besoins qui délimitent précisément les zones à traiter (Zonage de Précision)." },
    { icon: <TrendingUp className="w-8 h-8"/>, title: "Prévisions de rendement", description: "Simulation de l'impact des carences et des corrections suggérées sur le rendement final de la culture." },
    { icon: <Lightbulb className="w-8 h-8"/>, title: "Recommandations Agronomiques", description: "Conseils étape par étape sur la quantité, le type et le moment idéal d'application des engrais ou des traitements." },
];

const iaBenefits = [
    { icon: <DollarSign className="w-6 h-6"/>, title: "Économie de ressources", description: "Réduction des dépenses en engrais et en eau grâce au ciblage précis des besoins réels du sol." },
    { icon: <BarChart3 className="w-6 h-6"/>, title: "Augmentation de la productivité", description: "Optimisation de la santé des cultures se traduisant par des rendements plus élevés." },
    { icon: <Shield className="w-6 h-6"/>, title: "Agriculture durable", description: "Meilleure gestion des sols et réduction de la pollution en évitant l'excès de produits chimiques." },
    { icon: <Clock className="w-6 h-6"/>, title: "Prise de décision rapide", description: "Les recommandations sont disponibles immédiatement, permettant une intervention sans délai." },
];


// --- COMPOSANT PAGE : Intelligence Artificielle et Recommandations ---
export default function IaPage() {
    // Refs pour l'animation
    const [heroRef, isHeroVisible] = useAnimateOnScroll<HTMLElement>();
    const [fundamentauxRef, isFundamentauxVisible] = useAnimateOnScroll<HTMLElement>();
    const [piliersRef, isPiliersVisible] = useAnimateOnScroll<HTMLElement>();
    const [processusRef, isProcessusVisible] = useAnimateOnScroll<HTMLElement>();
    const [beneficesRef, isBeneficesVisible] = useAnimateOnScroll<HTMLElement>();

    return (
        <div style={{ backgroundColor: BG_DARK }} className="flex flex-col min-h-screen font-sans overflow-x-hidden pt-[68px] text-white"> 
            
            <ResponsiveNavbar />

            {/* Section 1 : Hero / Introduction */}
            <section 
                ref={heroRef}
                className={`pt-24 pb-16 px-8 text-center border-b-4 ${isHeroVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                style={{ backgroundColor: BG_DARK, borderColor: ACCENT_COLOR_BLUE }}
            >
                <div className="relative max-w-6xl mx-auto space-y-4 z-20 animate-slide-up-slow">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">
                        L'Intelligence Artificielle <span style={{ color: ACCENT_COLOR_BLUE, borderBottom: '4px solid' }}>ESRUD-ANALYSIS</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up-delay-1">
                        Nous transformons des données brutes en **décisions agronomiques concrètes et rentables**. L'IA est le cerveau qui donne un sens à l'analyse robotique du sol.
                    </p>
                    <Link
                        href="/contact"
                        style={{ backgroundColor: GREEN_PRIMARY, color: 'white' }} 
                        className="inline-block px-8 py-3 font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 animate-slide-up-delay-2"
                    >
                        Accéder à la démo de la plateforme
                    </Link>
                </div>
            </section>
            
            {/* Section 2 : Les Fondamentaux de l'IA */}
            <section ref={fundamentauxRef} style={{ backgroundColor: BG_DARK }} className={`py-16 sm:py-20 px-4 sm:px-8 ${isFundamentauxVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
                    
                    {/* Texte du Fondamental */}
                    <div className="space-y-6 sm:space-y-8 lg:order-2 animate-slide-up">
                        <h2 className="text-3xl sm:text-4xl font-bold border-l-4 pl-4" style={{ borderColor: ACCENT_COLOR_BLUE }}>
                            Le Cerveau au Service de l'Agriculture
                        </h2>
                        <p className="text-lg text-gray-300">
                            Notre modèle d'IA a été entraîné sur des milliers d'échantillons de sols et de rendements africains. Il ne se contente pas de vous dire ce qui ne va pas; il vous dit **exactement comment le corriger**.
                        </p>
                        <p className="text-xl font-bold" style={{ color: TEXT_LIGHT }}>
                            Finies les hypothèses. Tu reçois des instructions sur mesure pour chaque mètre carré de ton champ.
                        </p>
                        <Link href="#processus" className="inline-flex items-center text-lg font-semibold transition-colors duration-300 hover:text-gray-400" style={{ color: ACCENT_COLOR_BLUE }}>
                            Voir le processus de transformation des données <ArrowRight className="w-5 h-5 ml-2"/>
                        </Link>
                    </div>

                    {/* Image du dashboard IA (Placeholder) */}
                    <div className="relative w-full h-80 lg:h-96 lg:order-1 animate-fade-in">
                        
                        <Image 
                            src="/assets/ia-dashboard-placeholder.jpg" 
                            alt="Interface de la plateforme d'Intelligence Artificielle ESRUD-ANALYSIS" 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="border-4" 
                            // CORRECTION APPLIQUÉE ICI : style fusionné
                            style={{ objectFit: 'cover', borderColor: ACCENT_COLOR_BLUE }} 
                        />
                    </div>
                </div>
            </section>

            {/* Section 3 : Les 4 Piliers de l'Analyse IA */}
            <section ref={piliersRef} style={{ backgroundColor: BG_CARD_LIGHT }} className={`py-16 sm:py-20 px-4 sm:px-8 ${isPiliersVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-slide-up">
                        Les 4 Piliers de l'Intelligence de Recommandation
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {iaFeatures.map((item, index) => (
                            <div 
                                key={index} 
                                className={`p-6 border-b-4 border-blue-700 hover:border-blue-500 transition-all duration-300 animate-slide-up`}
                                style={{ backgroundColor: BG_DARK, animationDelay: `${index * 0.15}s` }}
                            >
                                <div className='mb-4' style={{ color: ACCENT_COLOR_BLUE }}>{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4 : Processus de Transformation (Flux de données) */}
            <section ref={processusRef} id="processus" style={{ backgroundColor: BG_DARK }} className={`py-16 sm:py-20 px-4 sm:px-8 ${isProcessusVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 border-b-4 pb-2 mx-auto max-w-md" style={{ borderColor: GREEN_PRIMARY }}>
                        Le Cycle de la Décision : de la Terre à l'Action
                    </h2>
                    
                    <div className="relative">
                        {/* Flèches de Connexion (Desktop uniquement) */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden md:block z-0"></div>

                        {[
                            { num: 1, icon: <LocateFixed className="w-8 h-8"/>, title: "COLLECTE (Robotique)", description: "Le robot ESRUD-TOUCH mesure des millions de points de données sur le terrain (sol, météo, humidité)." },
                            { num: 2, icon: <Zap className="w-8 h-8"/>, title: "TRAITEMENT (Serveur)", description: "Les données sont transmises instantanément à notre plateforme cloud et vérifiées pour l'exactitude." },
                            { num: 3, icon: <Brain className="w-8 h-8"/>, title: "ANALYSE (IA)", description: "ESRUD-ANALYSIS croise les données avec son modèle agronomique pour identifier les problèmes et les potentiels." },
                            { num: 4, icon: <Smartphone className="w-8 h-8"/>, title: "RECOMMANDATION (Application)", description: "Le plan d'action optimisé (quelles zones, quels produits, quelle quantité) est envoyé à l'agriculteur." },
                        ].map((step, index) => (
                            <div key={index} className="flex items-center mb-12 md:mb-16 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:order-2'}`}>
                                    <div className="p-6 border-2 border-gray-700 transition-all duration-300 hover:border-blue-500" style={{ backgroundColor: BG_CARD_LIGHT }}>
                                        <div className="flex items-center space-x-4 mb-3">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold" style={{ backgroundColor: ACCENT_COLOR_BLUE, color: BG_DARK }}>{step.num}</div>
                                            <h3 className="text-2xl font-bold">{step.title}</h3>
                                        </div>
                                        <p className="text-gray-400">{step.description}</p>
                                    </div>
                                </div>
                                {/* Cercle de Connexion (Desktop uniquement) */}
                                <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-full flex-shrink-0 z-10" style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}>
                                    {step.icon}
                                </div>
                                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Section 5 : Les Avantages Clairs de l'IA */}
            <section ref={beneficesRef} style={{ backgroundColor: BG_CARD_LIGHT }} className={`py-16 sm:py-20 px-4 sm:px-8 ${isBeneficesVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        Des résultats concrets, garantis par l'IA
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {iaBenefits.map((item, index) => (
                            <div 
                                key={index} 
                                className={`p-6 space-y-3 text-center border-t-4 border-blue-500 bg-gray-900 shadow-xl transition-transform hover:scale-[1.03] animate-slide-up`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className='mx-auto w-10 h-10 p-2 rounded-full' style={{ color: ACCENT_COLOR_BLUE }}>{item.icon}</div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6 : Conclusion / CTA Spécifique à l'IA */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 text-center" style={{ backgroundColor: GREEN_PRIMARY, color: TEXT_DARK }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-4">Prêt à transformer vos données en profits ?</h2>
                    <p className="text-xl font-bold mb-8">
                        Ne laissez plus le hasard décider de vos rendements. Notre IA est votre meilleur conseiller agronomique, disponible 24/7, basé sur des données réelles.
                    </p>
                    <Link
                        href="/contact"
                        style={{ backgroundColor: BG_DARK, color: ACCENT_COLOR_BLUE, border: `2px solid ${BG_DARK}` }}
                        className="inline-block px-10 py-4 text-lg font-bold hover:bg-gray-800 hover:text-white transition-colors duration-300 transform hover:scale-105"
                    >
                        Planifier une session de démonstration IA
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
