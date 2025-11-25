'use client'; 

import Link from 'next/link';
import Image from 'next/image'; // 🚨 Composant Image optimisé
import { 
    Target, Eye, Handshake, TrendingUp, Cpu, Smartphone, Microscope, 
    Server, BookOpen, Zap, CheckCircle, Users, Menu, X 
} from 'lucide-react';
import { useState } from 'react'; // 🚨 Pour le menu mobile

// --- Définitions de couleurs (Dark Mode Brutaliste) ---
const BG_DARK = '#111111'; 
const BG_CARD = '#1e1e1e'; 
const GREEN_PRIMARY = '#38a169'; 
const TEXT_LIGHT = '#ffffff'; 
const TEXT_ACCENT = '#cccccc';

// --- COMPOSANT NAVBAR (Amélioré et Réactif avec Logo) ---
const ResponsiveNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Accueil", style: {} },
        { href: "/solution", label: "Nos solutions", style: {} },
        { href: "/about", label: "À propos", style: { color: GREEN_PRIMARY, borderBottom: `2px solid ${GREEN_PRIMARY}` } },
        { href: "/blog", label: "Blog", style: {} },
    ];
    
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-700 shadow-lg" style={{ backgroundColor: BG_DARK }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center text-sm">
                
                {/* 🎯 Logo et Nom de l'entreprise */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative w-10 h-10 flex-shrink-0"> 
                        <Image
                            src="/assets/logo-esrud.png" // 👈 Chemin de votre logo
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
                
                {/* Navigation Desktop */}
                <nav className="hidden md:flex space-x-6 text-white text-base font-medium items-center">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.label} 
                            href={link.href} 
                            style={link.style} 
                            className="hover:text-gray-400 transition-colors pb-1"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link 
                        href="/contact" 
                        style={{ backgroundColor: GREEN_PRIMARY, color: 'black' }} 
                        className="px-4 py-2 font-bold hover:bg-green-700 transition-colors duration-300 border-2 border-black"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Bouton Mobile Menu */}
                <button 
                    className="md:hidden text-white p-2" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Menu Mobile Déroulant */}
            {isMenuOpen && (
                <div className="md:hidden absolute w-full top-full left-0 border-t border-green-700 shadow-xl" style={{ backgroundColor: BG_DARK }}>
                    <nav className="flex flex-col space-y-3 p-4 text-lg font-medium">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.label} 
                                href={link.href} 
                                style={link.style} 
                                className="text-white hover:text-gray-400 transition-colors py-2 block border-b border-gray-800"
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link 
                            href="/contact" 
                            style={{ backgroundColor: GREEN_PRIMARY, color: 'black' }} 
                            className="text-center mt-3 px-4 py-3 font-bold hover:bg-green-700 transition-colors duration-300 border-2 border-black"
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- COMPOSANT FOOTER (Simplifié) ---
const Footer = () => {
    return (
        <footer className="py-12 px-8 border-t border-green-700" style={{ backgroundColor: BG_DARK, color: TEXT_ACCENT }}>
            <div className="max-w-7xl mx-auto text-center text-xs text-gray-600">
                <p>ESRUD Agritech © {new Date().getFullYear()}. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

// --- COMPOSANT DE LA PAGE À PROPOS ---

export default function AboutPage() {
    
    // Données pour les sections
    const valuesData = [
        { icon: <Zap className="w-8 h-8"/>, title: "Innovation Utile", description: "La technologie n’a de valeur que si elle résout un vrai problème agricole." },
        { icon: <CheckCircle className="w-8 h-8"/>, title: "Accessibilité", description: "Outils simples à utiliser, même dans des zones à faible connectivité." },
        { icon: <TrendingUp className="w-8 h-8"/>, title: "Durabilité", description: "Préservation des sols, des ressources et de la biodiversité." },
        { icon: <Handshake className="w-8 h-8"/>, title: "Impact Social", description: "Renforcer les communautés agricoles et sécuriser leur avenir." },
    ];
    
    const whatWeDoData = [
        { icon: <Microscope className='w-6 h-6'/>, title: "Analyse intelligente du sol", description: "Développement d’ESRUD-TOUCH, le robot pour analyser la fertilité et identifier les risques biologiques." },
        { icon: <Smartphone className='w-6 h-6'/>, title: "Agriculture numérique", description: "Application mobile/web pour le suivi des parcelles, conseils, visualisation et planification." },
        { icon: <Cpu className='w-6 h-6'/>, title: "Capteurs & IoT", description: "Capteurs environnementaux pour surveiller en continu l’humidité, la température et les polluants." },
        { icon: <Server className='w-6 h-6'/>, title: "Plateforme de données", description: "Système centralisé pour regrouper, traiter et analyser les données (Big Data agricole)." },
        { icon: <BookOpen className='w-6 h-6'/>, title: "Accompagnement & formations", description: "Accompagnement des agriculteurs dans la transition vers l’agriculture moderne et numérique." },
    ];

    const teamData = [
        { name: "Nom du Fondateur", role: "CEO & Visionnaire", image: "/assets/team-member-1.jpg" },
        { name: "Nom du Technologue", role: "Directeur Technique (CTO)", image: "/assets/team-member-2.jpg" },
        { name: "Nom de l'Agronome", role: "Chef Agronome", image: "/assets/team-member-3.jpg" },
    ];


    return (
        <div style={{ backgroundColor: BG_DARK }} className="flex flex-col min-h-screen font-sans overflow-x-hidden pt-[68px] text-white"> 
            
            <ResponsiveNavbar /> {/* Utilisation de la Navbar améliorée */}

            {/* Section 1 : Hero - Titre principal & Introduction */}
            <section 
                className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-b-4" 
                style={{ backgroundColor: '#000000', borderColor: GREEN_PRIMARY }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 animate-slide-up-slow">
                        <span style={{ color: GREEN_PRIMARY, borderBottom: '4px solid' }}>Qui sommes-nous</span> ?
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 mb-4 animate-slide-up-delay-1">
                        ESRUD Agritech est une startup technologique créée pour moderniser l’agriculture en Afrique.
                    </p>
                </div>
            </section>
            
            {/* Section 2 : Mission, Vision et Objectif AVEC IMAGE INTRODUCTIVE */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_CARD }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
                    
                    {/* Colonne Gauche : Image optimisée avec Next/Image */}
                    <div className="animate-fade-in order-last lg:order-first">
                        <div className="relative w-full h-64 sm:h-80 lg:h-96" style={{ borderColor: GREEN_PRIMARY, boxShadow: `0 0 20px ${GREEN_PRIMARY}50` }}>
                            <Image 
                                src="/assets/esrud-touch-product.jpg" 
                                alt="Robot ESRUD-TOUCH sur un champ" 
                                fill 
                                style={{ objectFit: 'cover' }}
                                className="border-4 transition-transform duration-500 hover:scale-[1.03]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority 
                            />
                        </div>
                    </div>
                    
                    {/* Colonne Droite : Texte Mission / Vision */}
                    <div className="space-y-6 sm:space-y-8 animate-slide-up order-first lg:order-last">
                        <p className="text-base sm:text-lg text-gray-300">
                           Nous combinons robotique, intelligence artificielle, IoT et analyse de données afin d’offrir aux agriculteurs des outils fiables, simples et réellement efficaces.
                        </p>
                        
                        <div className="space-y-4 border-l-4 pl-4" style={{ borderColor: GREEN_PRIMARY }}>
                            <h3 className="text-xl sm:text-2xl font-bold" style={{ color: GREEN_PRIMARY }}>NOTRE MISSION</h3>
                            <p className="text-gray-400">
                                Apporter aux agriculteurs des solutions intelligentes qui transforment leurs données en décisions concrètes, afin d’augmenter les rendements, réduire les pertes et garantir une gestion durable des terres.
                            </p>
                        </div>
                        
                        <div className="space-y-4 border-l-4 pl-4" style={{ borderColor: TEXT_ACCENT }}>
                            <h3 className="text-xl sm:text-2xl font-bold">NOTRE VISION</h3>
                            <p className="text-gray-400">
                                Construire l’avenir de l’agriculture africaine en donnant à chaque agriculteur, même isolé, l’accès à une technologie de pointe capable d’optimiser les sols, les cultures et les ressources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 : Nos Valeurs Fondamentales */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_DARK }}>
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 animate-slide-up">
                        Nos <span style={{ color: GREEN_PRIMARY }}>Valeurs</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {valuesData.map((val, index) => (
                            <div 
                                key={index} 
                                className="p-6 border border-gray-700 bg-gray-900 transition-all duration-300 hover:border-green-500 hover:bg-gray-800 animate-slide-up"
                                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                            >
                                <div className='mx-auto mb-4 w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-lg' style={{ color: BG_DARK, backgroundColor: GREEN_PRIMARY }}>
                                    {val.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2">{val.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-400">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4 : Ce que nous faisons (Grille Moderne) */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_CARD }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 border-b-4 pb-2" style={{ borderColor: GREEN_PRIMARY }}>
                        Ce que nous faisons
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {whatWeDoData.map((item, index) => (
                             <div 
                                key={index} 
                                className="p-6 border-2 border-gray-700 transition-all duration-300 hover:border-green-500 hover:shadow-2xl animate-slide-up"
                                style={{ animationDelay: `${0.6 + index * 0.1}s`, backgroundColor: BG_DARK }}
                            >
                                <div className='flex items-start space-x-4 mb-3'>
                                    <div className="p-3 rounded-md flex-shrink-0" style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                                </div>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Section 5 : Notre Histoire */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_DARK }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
                    
                    {/* Bloc Histoire */}
                    <div className="space-y-4 sm:space-y-6 animate-slide-up order-last lg:order-first">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 border-b-4 pb-2" style={{ borderColor: GREEN_PRIMARY }}>Notre Histoire</h2>
                        <p className="text-base sm:text-lg text-gray-300">
                            ESRUD Agritech est née d’un constat simple : la majorité des agriculteurs africains cultivent encore à l’aveugle, sans informations scientifiques sur l’état réel de leurs sols.
                        </p>
                        <p className="text-base sm:text-lg text-gray-300 font-semibold">
                            Le résultat : pertes, faibles rendements, pollution des terres et manque d’efficacité. Nous avons décidé de créer une technologie adaptée au terrain, capable de fournir des données fiables, même dans des contextes difficiles.
                        </p>
                        <p className="text-lg font-bold pt-4" style={{ color: GREEN_PRIMARY }}>
                            Aujourd’hui, nous bâtissons une agriculture durable, moderne et rentable.
                        </p>
                    </div>
                    
                    {/* Bloc Image Impact optimisée */}
                    <div className="animate-fade-in order-first lg:order-last">
                         <div className="relative w-full h-64 sm:h-80 lg:h-96">
                            <Image 
                                src="/assets/agricultural-impact-ruler.jpg" 
                                alt="Image montrant l'augmentation des rendements" 
                                fill
                                style={{ objectFit: 'cover' }}
                                className="border-4 transition-transform duration-500 hover:scale-[1.03]" 
                                style={{ borderColor: GREEN_PRIMARY }}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6 : Équipe et Engagement */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-green-700" style={{ backgroundColor: BG_CARD }}>
                 <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 animate-slide-up">
                        Rencontrez notre <span style={{ color: GREEN_PRIMARY }}>Équipe</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamData.map((member, index) => (
                            <div 
                                key={index} 
                                className="p-6 bg-gray-900 border-b-4 transition-all duration-300 hover:border-green-500 hover:shadow-green-500/20 shadow-xl animate-slide-up"
                                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                            >
                                {/* Image optimisée de membre de l'équipe */}
                                <div className='relative w-36 h-36 mx-auto mb-4 overflow-hidden border-2' style={{ borderColor: GREEN_PRIMARY }}>
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-500 hover:scale-110" 
                                        sizes="30vw"
                                    />
                                </div>
                                
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider pt-1">{member.role}</p>
                                <p className="text-xs text-gray-600 mt-2">Ingénieurs, Agronomes & Spécialistes IA</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 sm:mt-12 space-y-4">
                        <p className="text-base sm:text-lg text-gray-300 font-semibold animate-slide-up" style={{ animationDelay: '1.0s' }}>
                            Notre engagement : Nous restons proches des agriculteurs, disponibles pour les accompagner, former et améliorer nos solutions grâce à leurs retours du terrain. Notre ambition est de devenir un acteur panafricain majeur.
                        </p>
                        <p className="text-lg sm:text-xl font-bold pt-4 animate-slide-up" style={{ color: GREEN_PRIMARY, animationDelay: '1.1s' }}>
                            ESRUD Agritech, c’est une vision : celle d’une agriculture capable de nourrir durablement les générations futures grâce à l’innovation.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        style={{ backgroundColor: GREEN_PRIMARY, color: 'black' }}
                        className="inline-block mt-10 sm:mt-12 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 animate-slide-up"
                        style={{ animationDelay: '1.2s' }}
                    >
                        Contactez notre équipe
                    </Link>
                </div>
            </section>
            
            {/* Section 7 : Partenaires */}
            <section className="py-10 sm:py-12 px-4 sm:px-8 border-t border-gray-700" style={{ backgroundColor: BG_DARK }}>
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-500">
                        Ils nous font confiance
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-70">
                        <p className="text-2xl sm:text-4xl font-extrabold hover:text-white transition-colors duration-300" style={{ color: GREEN_PRIMARY }}>ONG Partenaire</p>
                        <p className="text-2xl sm:text-4xl font-extrabold hover:text-white transition-colors duration-300" style={{ color: TEXT_ACCENT }}>MINAGRI</p>
                        <p className="text-2xl sm:text-4xl font-extrabold hover:text-white transition-colors duration-300" style={{ color: GREEN_PRIMARY }}>Fonds Invest</p>
                        <p className="text-2xl sm:text-4xl font-extrabold hover:text-white transition-colors duration-300" style={{ color: TEXT_ACCENT }}>Coop Agricole</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}