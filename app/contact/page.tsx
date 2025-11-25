// ./app/contact/page.tsx
'use client'; 

import { Phone, Mail, MapPin, Target, Zap, Leaf, Shield, Heart, Menu, X, Users, MessageSquare, Send } from 'lucide-react'; 
import Link from 'next/link'; 
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// --- Définitions de couleurs et chemins d'images (COPIÉES DE VOTRE EXEMPLE) ---
const BG_DARK = '#1e1e1e';
const BG_GREEN_LIGHT = '#f2f8f2';
const GREEN_PRIMARY = '#38a169'; 
const TEXT_DARK = '#333333';
const TEXT_LIGHT = '#ffffff'; 
const TEXT_ACCENT = '#cccccc';

// --- HOOK POUR ANIMATION AU SCROLL (inchangé) ---
const useAnimateOnScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); 
                }
            },
            { threshold: 0.2 } 
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isVisible];
};


// --- COMPOSANT NAVBAR (COPIÉ DE VOTRE EXEMPLE) ---
const ResponsiveNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const navLinks = [
        { href: "/", label: "Accueil" },
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
                            className={`hover:text-gray-400 transition-colors`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link 
                        href="/contact" 
                        style={{ backgroundColor: GREEN_PRIMARY, color: 'white' }} 
                        className="px-4 py-2 font-semibold hover:bg-green-700 transition-colors duration-300 border-b-2 border-white/0" // CONTACT actif
                    >
                        Contact
                    </Link>
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

// --- COMPOSANT FOOTER (COPIÉ DE VOTRE EXEMPLE AVEC CHEMIN D'IMAGE CORRIGÉ) ---
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12 px-8 border-t border-gray-700" style={{ backgroundColor: BG_DARK }}>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
                {/* Col 1 : Logo et Description */}
                <div>
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                        <div className="relative w-10 h-10 flex-shrink-0"> 
                            <Image
                                src="/assets/logo-esrud.png" // 🚀 CORRECTION: Assure la cohérence des chemins.
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


// --- COMPOSANT PAGE : Contact ---
export default function ContactPage() {
    // Refs pour l'animation
    const [heroRef, isHeroVisible] = useAnimateOnScroll();
    const [infoRef, isInfoVisible] = useAnimateOnScroll();
    const [formRef, isFormVisible] = useAnimateOnScroll();

    return (
        <div style={{ backgroundColor: BG_DARK }} className="flex flex-col min-h-screen font-sans overflow-x-hidden pt-[68px] text-white"> 
            
            <ResponsiveNavbar />

            {/* Section 1 : Hero / Titre de la page */}
            <section 
                ref={heroRef}
                className={`relative pt-24 pb-16 px-8 text-center border-b-4 ${isHeroVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                style={{ backgroundColor: BG_DARK, borderColor: GREEN_PRIMARY }}
            >
                <div className="relative max-w-4xl mx-auto space-y-4 z-20 animate-slide-up-slow">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4"> 
                        Nous Contacter
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 animate-slide-up-delay-1"> 
                        Parlons de votre prochain projet agricole. Nos experts sont prêts à vous écouter et à vous conseiller.
                    </p>
                </div>
            </section>
            
            {/* Section 2 : Informations de contact (Réutilisé du footer/accueil mais en grand) */}
            <section ref={infoRef} style={{ backgroundColor: BG_DARK }} className={`py-16 sm:py-20 px-4 sm:px-8 ${isInfoVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    
                    {[
                        { icon: <MapPin className="w-8 h-8"/>, title: "Notre Siège", details: ["Kinshasa, RDC"], style: { color: GREEN_PRIMARY } },
                        { icon: <Mail className="w-8 h-8"/>, title: "Email Commercial", details: ["contact@esrudagritech.com"], style: { color: GREEN_PRIMARY } },
                        { icon: <Phone className="w-8 h-8"/>, title: "Téléphone", details: ["+243 820 34 20 19", "+243 899 46 55 72"], style: { color: GREEN_PRIMARY } },
                    ].map((item, index) => (
                        <div key={index} className={`p-8 space-y-4 bg-gray-800 shadow-xl border-t-4 border-green-500 transform hover:scale-[1.03] transition-transform duration-300 animate-slide-up`} style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className='mx-auto w-10 h-10 flex items-center justify-center' style={item.style}>{item.icon}</div>
                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            {item.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-400">{detail}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Section 3 : Formulaire et Localisation */}
            <section ref={formRef} id="contact-form" style={{ backgroundColor: BG_GREEN_LIGHT, color: TEXT_DARK }} className={`py-20 px-8 ${isFormVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    {/* Colonne 1 : Formulaire de Contact */}
                    <div className="animate-slide-up">
                        <h2 className="text-4xl font-bold mb-4 flex items-center space-x-3">
                            <MessageSquare className="w-8 h-8" style={{ color: GREEN_PRIMARY }}/> <span>Envoyez-nous un message</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Remplissez les champs ci-dessous pour démarrer la discussion. Nous répondons généralement en 24h ouvrées.
                        </p>
                        
                        <form className="space-y-4">
                            <input type="text" placeholder="Votre Nom Complet *" required className="w-full p-3 border border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-300" />
                            <input type="email" placeholder="Votre Email Professionnel *" required className="w-full p-3 border border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-300" />
                            <input type="text" placeholder="Sujet" className="w-full p-3 border border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-300" />
                            <textarea placeholder="Votre Message" rows={5} className="w-full p-3 border border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-300"></textarea>
                            <button 
                                type="submit" 
                                style={{ backgroundColor: GREEN_PRIMARY, color: 'white' }}
                                className="w-full p-3 font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5"/> <span>Envoyer le Message</span>
                            </button>
                        </form>
                    </div>

                    {/* Colonne 2 : Carte / Localisation */}
                    <div className="pt-6 md:pt-0 animate-slide-up md:order-last" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-4xl font-bold mb-6">Où nous trouver</h2>
                        <div className="relative w-full h-96 shadow-lg">
                            

[Image of Kinshasa Map Placeholder]

                            <Image 
                                src="/assets/kinshasa-map-placeholder.jpg" 
                                alt="Localisation Kinshasa, RDC" 
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                                className="border border-gray-300"
                            />
                        </div>
                        <p className="mt-4 text-sm text-gray-500 text-center">
                            Notre équipe opère depuis Kinshasa et sert les agriculteurs à travers toute la RDC.
                        </p>
                    </div>
                </div>
            </section>


            {/* Section 4 : CTA Final (réutilise la couleur primaire) */}
            <section className="py-16 px-4 sm:px-8 text-center" style={{ backgroundColor: GREEN_PRIMARY, color: TEXT_DARK }}>
                <div className="max-w-4xl mx-auto text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Prêt à démarrer l'ère AgriTech ?</h2>
                    <p className="text-lg mb-6">
                        Contactez-nous aujourd'hui pour une consultation sans engagement.
                    </p>
                    <Link
                        href="/solutions"
                        className="inline-block mt-4 border border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105"
                    >
                        Découvrir nos solutions
                    </Link>
                </div>
            </section>


            <Footer />
        </div>
    );
}