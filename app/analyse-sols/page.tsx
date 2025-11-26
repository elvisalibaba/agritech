// ./app/analyse-sols/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
    Target, Cpu, Clock, DollarSign, TrendingUp, FlaskConical, Droplet, 
    Leaf, Bug, AlertTriangle, Map, BarChart3, LocateFixed, Zap, CheckCircle, 
    Handshake, Smartphone, BookOpen, ArrowRight, 
    // Toutes les icônes nécessaires. LocateFixed est présent une seule fois ici.
    Menu, X, Heart, Users 
} from 'lucide-react'; 
import { useState } from 'react';

// --- Définitions de couleurs cohérentes ---
const BG_DARK = '#1e1e1e';
const BG_CARD_LIGHT = '#292929';
const GREEN_PRIMARY = '#38a169'; 
const TEXT_LIGHT = '#ffffff';
const TEXT_ACCENT = '#cccccc';
const NAV_BG_DARK = '#111111'; 

// --- COMPOSANT 1 : NAVBAR (Inclus dans le fichier) ---
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
    
    // Détection de l'URL actuelle (simplifiée)
    const isSolutionsActive = true; 

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-700 shadow-lg" style={{ backgroundColor: NAV_BG_DARK }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center text-sm">
                
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative w-10 h-10 flex-shrink-0"> 
                        <Image
                            src="/images/logo-esrud.png" 
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
                
                <nav className="hidden md:flex space-x-6 text-white text-base font-medium">
                    {navLinks.map((link) => (
                         <Link 
                             key={link.href} 
                             href={link.href} 
                             className={`hover:text-gray-400 transition-colors ${link.href === '/solutions' || isSolutionsActive ? 'border-b-2 border-green-500 text-green-500' : ''}`}
                         >
                             {link.label}
                         </Link>
                    ))}
                    <Link href="/contact" style={{ backgroundColor: GREEN_PRIMARY, color: 'black' }} className="px-4 py-2 font-bold hover:bg-green-700 transition-colors duration-300">Contact</Link>
                </nav>

                <button 
                    onClick={toggleMenu} 
                    className="md:hidden text-white p-2 border border-gray-700 rounded-md"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            
            {isOpen && (
                <div className="md:hidden absolute w-full bg-dark/95 backdrop-blur-sm shadow-xl pb-4" style={{ backgroundColor: NAV_BG_DARK }}>
                    <nav className="flex flex-col space-y-3 px-8 pt-2 pb-4 text-lg font-medium border-t border-gray-700">
                        {navLinks.map((link) => (
                             <Link key={link.href} href={link.href} className="text-white hover:text-gray-400 transition-colors" onClick={toggleMenu}>{link.label}</Link>
                        ))}
                        <Link href="/contact" style={{ backgroundColor: GREEN_PRIMARY, color: 'black' }} className="mt-4 px-4 py-2 text-center font-semibold hover:bg-green-700 transition-colors duration-300" onClick={toggleMenu}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- COMPOSANT 2 : FOOTER (Inclus dans le fichier) ---
const Footer = () => { 
    return (
        <footer className="py-12 px-8 border-t border-green-700" style={{ backgroundColor: NAV_BG_DARK, color: TEXT_ACCENT }}>
            <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-gray-600">
                <p>ESRUD Agritech © {new Date().getFullYear()}. Tous droits réservés.</p>
            </div>
        </footer>
    );
};
// --- Fin des Composants de Base ---


// --- Données pour la Page ---
const featuresData = [
    { icon: <Clock className="w-6 h-6"/>, title: "Données en temps réel", description: "Mesures et diagnostics instantanés, éliminant les longs délais des laboratoires." },
    { icon: <FlaskConical className="w-6 h-6"/>, title: "Analyse complète de la fertilité", description: "Évaluation du pH, nutriments, et structure pour des recommandations précises." },
    { icon: <Map className="w-6 h-6"/>, title: "Cartographie précise", description: "Visualisation des zones du champ nécessitant un renforcement ou une correction spécifique." },
    { icon: <Cpu className="w-6 h-6"/>, title: "Zéro erreur humaine", description: "L'automatisation garantit une collecte de données objective et une interprétation par IA." },
    { icon: <TrendingUp className="w-6 h-6"/>, title: "Suivi régulier de l'évolution", description: "Capacité d'analyser le sol de manière continue pour suivre l'efficacité des traitements." },
    { icon: <DollarSign className="w-6 h-6"/>, title: "Optimisation des coûts", description: "Arrêtez de gaspiller les engrais et les ressources en ciblant précisément les besoins." },
];

const measuresData = [
    { icon: <FlaskConical className="w-6 h-6"/>, title: "1. pH du sol", description: "Détermination de l'acidité (acide, neutre ou basique) sans devinettes." },
    { icon: <Droplet className="w-6 h-6"/>, title: "2. Humidité en profondeur", description: "Indispensable pour l'irrigation intelligente et la gestion de l'eau." },
    { icon: <Leaf className="w-6 h-6"/>, title: "3. Azote & nutriments essentiels", description: "Identification rapide des carences qui freinent vos rendements." },
    { icon: <Heart className="w-6 h-6"/>, title: "4. Bactéries et micro-organismes", description: "Évaluation de la santé microbienne : un sol vivant produit mieux." },
    { icon: <AlertTriangle className="w-6 h-6"/>, title: "5. Polluants et anomalies chimiques", description: "Détection des contaminants qui pourraient impacter la culture ou la santé." },
    { icon: <Bug className="w-6 h-6"/>, title: "6. Risques biologiques", description: "Détection d’agents pathogènes, moisissures, et autres dangers invisibles." },
];
    
// --- COMPOSANT PAGE : Analyse du Sol par Robotique ---
export default function AnalyseSolsPage() {

    return (
        <div style={{ backgroundColor: BG_DARK }} className="flex flex-col min-h-screen font-sans overflow-x-hidden pt-[68px] text-white"> 
            
            <ResponsiveNavbar />

            {/* Section 1 : Hero / Introduction */}
            <section 
                className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-b-4" 
                style={{ backgroundColor: '#000000', borderColor: GREEN_PRIMARY }}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 animate-slide-up-slow">
                        Analyse du sol par <span style={{ color: GREEN_PRIMARY, borderBottom: '4px solid' }}>Robotique Intelligente</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-3xl mx-auto animate-slide-up-delay-1">
                        La plupart des agriculteurs travaillent sans connaître l’état réel de leur sol. ESRUD Agritech a décidé de régler ce problème avec une technologie qui ne devine rien : elle mesure, analyse et cartographie.
                    </p>
                    <Link
                        href="/contact"
                        style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}
                        className="inline-block px-8 py-3 font-bold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 animate-slide-up-delay-2"
                    >
                        Demander une démonstration d'ESRUD-TOUCH
                    </Link>
                </div>
            </section>
            
            {/* Section 2 : Présentation du Robot / Image & Promesse */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_DARK }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
                    
                    {/* Image du robot (Placeholder) */}
                    <div className="relative w-full h-80 lg:h-96">
                        
                        <Image 
                            src="/assets/esrud-touch-robot.jpg" 
                            alt="Robot ESRUD-TOUCH analysant le sol" 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="border-4" 
                            style={{ 
                                    objectFit: 'cover', 
                                    borderColor: GREEN_PRIMARY 
                                }}
                        />
                    </div>
                    
                    {/* Texte du Robot */}
                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-bold border-l-4 pl-4" style={{ borderColor: GREEN_PRIMARY }}>
                            Notre robot ESRUD-TOUCH
                        </h2>
                        <p className="text-lg text-gray-300">
                            ESRUD-TOUCH fournit un **diagnostic complet du sol en quelques minutes**, directement sur le terrain, **sans laboratoire et sans délai**.
                        </p>
                        <p className="text-xl font-bold" style={{ color: TEXT_LIGHT }}>
                            Tu veux optimiser tes semis ? Tu veux arrêter de gaspiller des engrais ? Tout commence ici.
                        </p>
                        <Link href="#fonctionnement" className="inline-flex items-center text-lg font-semibold transition-colors duration-300 hover:text-gray-400" style={{ color: GREEN_PRIMARY }}>
                            Voir comment ça marche <ArrowRight className="w-5 h-5 ml-2"/>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 3 : Pourquoi l'analyse par robot ? (Avantages) */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 animate-slide-up">
                        Pourquoi analyser le sol avec un robot ?
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData.map((item, index) => (
                            <div 
                                key={index} 
                                className="p-6 border-b-4 border-green-700 hover:border-green-500 transition-all duration-300"
                                style={{ backgroundColor: BG_DARK }}
                            >
                                <div className='mb-4' style={{ color: GREEN_PRIMARY }}>{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Section 4 : Que mesure ESRUD-TOUCH ? (Détails Techniques) */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_DARK }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 border-b-4 pb-2 mx-auto max-w-md" style={{ borderColor: GREEN_PRIMARY }}>
                        Que mesure ESRUD-TOUCH ?
                    </h2>
                    
                    <p className="text-center text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
                        Notre robot scanne le sol ligne par ligne, point par point, pour des données complètes et fiables.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {measuresData.map((item, index) => (
                            <div 
                                key={index} 
                                className="p-6 border border-gray-700 space-y-3 transition-shadow duration-300 hover:shadow-green-500/30 hover:shadow-2xl"
                                style={{ backgroundColor: BG_CARD_LIGHT }}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                                <p className="text-gray-400 pl-11">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Cartographie de fertilité (Point Clé) */}
                    <div className="mt-12 p-8 border-4 border-dashed mx-auto text-center" style={{ borderColor: GREEN_PRIMARY }}>
                         <Map className="w-10 h-10 mx-auto mb-4" style={{ color: GREEN_PRIMARY }}/>
                         <h3 className="text-2xl font-bold mb-3">Cartographie de fertilité</h3>
                         <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                             Le robot génère une **carte thermique précise des zones** (fertiles, moyennement fertiles, appauvries). C’est la base pour planifier efficacement et cibler vos interventions.
                         </p>
                    </div>
                </div>
            </section>
            
            {/* Section 5 : Les bénéfices */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        Les bénéfices pour les agriculteurs
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <BarChart3 className="w-8 h-8"/>, title: "Décisions scientifiques", description: "Tu sais précisément quoi faire, où, quand et comment. Plus de 'au hasard'." },
                            { icon: <Clock className="w-8 h-8"/>, title: "Gain de temps colossal", description: "Analyse en quelques minutes au lieu d’attendre plusieurs jours un labo." },
                            { icon: <DollarSign className="w-8 h-8"/>, title: "Réduction des coûts", description: "Moins d’engrais inutiles, moins d’erreurs, moins de pertes de récoltes." },
                            { icon: <TrendingUp className="w-8 h-8"/>, title: "Rendements améliorés", description: "Un sol compris est un sol qui produit plus et mieux." },
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="p-6 space-y-3 text-center border-t-4 border-green-500 bg-gray-900 shadow-xl transition-transform hover:scale-[1.03]"
                            >
                                <div className='mx-auto w-10 h-10 p-2 rounded-full' style={{ color: GREEN_PRIMARY }}>{item.icon}</div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6 : Comment ça fonctionne (Processus) */}
            <section id="fonctionnement" className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_DARK }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                        Comment fonctionne notre système ?
                    </h2>
                    
                    <div className="relative">
                        {/* Ligne de Processus (cachée sur petit écran, visible sur md+) */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden md:block z-0"></div>

                        {[
                            { num: 1, icon: <LocateFixed className="w-8 h-8"/>, title: "Le robot scanne le terrain", description: "Il avance automatiquement et prélève les données du sol en continu sur les zones ciblées." },
                            { num: 2, icon: <Cpu className="w-8 h-8"/>, title: "Les données sont traitées via IA", description: "Notre algorithme corrige, compare et interprète les mesures collectées avec une précision scientifique." },
                            { num: 3, icon: <Smartphone className="w-8 h-8"/>, title: "Résultats instantanés dans ESRUD App", description: "Tu reçois : le diagnostic complet, la carte de fertilité et des recommandations agricoles personnalisées." },
                            { num: 4, icon: <BookOpen className="w-8 h-8"/>, title: "Suivi et historique", description: "Tu peux comparer l’évolution du sol sur plusieurs semaines ou mois pour ajuster ta stratégie." },
                        ].map((step, index) => (
                            <div key={index} className="flex items-center mb-12 md:mb-16">
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:order-2'}`}>
                                    <div className="p-6 border-2 border-gray-700 transition-all duration-300 hover:border-green-500" style={{ backgroundColor: BG_CARD_LIGHT }}>
                                        <div className="flex items-center space-x-4 mb-3">
                                            <div className="w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold" style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}>{step.num}</div>
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
            
            {/* Section 7 : Cas d'usage */}
            <section className="py-16 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: BG_CARD_LIGHT }}>
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                        Cas d’usage et Qui peut en bénéficier
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Ajoutez un tag d'image pour illustrer l'impact ou la portée. */}
                        
                        {measuresData.map((item, index) => (
                            <div key={index} className="p-6 bg-gray-900 border-2 border-gray-700 transition-shadow hover:shadow-lg hover:shadow-green-500/20">
                                <div className='mx-auto mb-4 w-10 h-10 p-2 rounded-full' style={{ color: GREEN_PRIMARY }}>{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8 : Conclusion / CTA */}
            <section className="py-16 sm:py-20 px-4 sm:px-8 text-center" style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-4">Pourquoi choisir ESRUD ?</h2>
                    <ul className="list-disc list-inside text-lg font-semibold mb-8 text-left inline-block">
                        <li>Robot conçu pour les environnements africains</li>
                        <li>Analyse fiable, rapide et opérationnelle</li>
                        <li>Expertise mixte en robotique, IA et agronomie</li>
                        <li>Support et accompagnement continu</li>
                    </ul>
                    <p className="text-xl font-bold mb-8">
                        **L’analyse du sol n’est plus un luxe. C’est la base de toute agriculture rentable et durable.** Avec ESRUD-TOUCH, chaque agriculteur peut prendre des décisions intelligentes.
                    </p>
                    <Link
                        href="/contact"
                        style={{ backgroundColor: BG_DARK, color: GREEN_PRIMARY, border: `2px solid ${BG_DARK}` }}
                        className="inline-block px-10 py-4 text-lg font-bold hover:bg-gray-800 hover:text-white transition-colors duration-300 transform hover:scale-105"
                    >
                        Commencer l'analyse de mon sol
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
