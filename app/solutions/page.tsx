'use client'; 

import Link from 'next/link';
import { BookOpen, CheckCircle, Cpu, Lightbulb, Microscope, Server, Smartphone, Zap } from 'lucide-react'; // Ajout de Zap (éclair)

// --- Définitions de couleurs mises à jour pour le Dark Mode moderne ---
const BG_DARK = '#111111'; // Noir/Gris très foncé pour le fond principal
const BG_CARD = '#1e1e1e'; // Gris foncé pour les cartes, contrastant avec le fond
const GREEN_PRIMARY = '#38a169'; // Vert vif pour les accents
const TEXT_LIGHT = '#ffffff'; // Texte blanc
const TEXT_ACCENT = '#cccccc'; // Gris clair pour les descriptions


// --- COMPOSANT NAVBAR (Adapté au fond sombre) ---
const Navbar = () => {
    // NOTE: Utilise le style Dark Mode/Brutaliste pour la barre de navigation
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-700 shadow-lg" style={{ backgroundColor: BG_DARK }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center text-sm">
                <Link href="/" className="text-xl font-bold tracking-widest text-white">
                    ESRUD<span style={{ color: GREEN_PRIMARY }}>AGRI</span>TECH
                </Link>
                <div className="hidden md:flex space-x-6 text-white text-base font-medium">
                    <Link href="/" className="hover:text-gray-400 transition-colors">Accueil</Link>
                    <Link href="/solution" style={{ color: GREEN_PRIMARY, borderBottom: `2px solid ${GREEN_PRIMARY}` }} className="transition-colors pb-1">Nos solutions</Link>
                    <Link href="/about" className="hover:text-gray-400 transition-colors">À propos</Link>
                    <Link href="/blog" className="hover:text-gray-400 transition-colors">Blog</Link>
                    <Link href="/contact" style={{ backgroundColor: GREEN_PRIMARY, color: 'black' }} className="px-4 py-2 font-bold hover:bg-green-700 transition-colors duration-300 border-2 border-black">Contact</Link>
                </div>
                {/* Menu Mobile Placeholder */}
                <div className="md:hidden text-white">Menu</div> 
            </div>
        </header>
    );
};

// --- COMPOSANT FOOTER (Adapté au fond sombre) ---
const Footer = () => {
    return (
        <footer className="py-12 px-8 border-t border-green-700" style={{ backgroundColor: BG_DARK, color: TEXT_ACCENT }}>
            <div className="max-w-7xl mx-auto text-center text-xs text-gray-600">
                <p>ESRUD Agritech © {new Date().getFullYear()}. Design Dark Mode Moderne. Tous droits réservés.</p>
            </div>
        </footer>
    );
};


// --- COMPOSANT INDIVIDUEL DE CARTE SOLUTION (Design brutaliste/néon) ---

const SolutionCard = ({ title, description, benefits, icon, isHighlighted = false, delay = 0 }) => {
    // La carte est maintenant sombre avec une bordure verte marquée.
    const borderStyle = isHighlighted 
        ? `border-l-4 border-green-500 shadow-green-500/30` 
        : `border-l border-gray-700`; 

    return (
        <div 
            className={`p-6 md:p-8 space-y-4 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl ${borderStyle}
                       animate-slide-up`}
            style={{ backgroundColor: BG_CARD, color: TEXT_LIGHT, animationDelay: `${delay}s`, boxShadow: isHighlighted ? `0 0 10px ${GREEN_PRIMARY}` : 'none' }}
        >
            <div className='flex items-center space-x-4 border-b border-gray-700 pb-4'>
                <div className="p-3 rounded-md" style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}>
                    {icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
            </div>
            
            <p className="text-base text-gray-400">{description}</p>
            
            <h4 className="font-bold text-lg pt-2" style={{ color: GREEN_PRIMARY }}>Bénéfices clés :</h4>
            <ul className="text-sm space-y-2 list-none p-0">
                {benefits.map((b, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                        <Zap className='w-4 h-4 mr-2 mt-1 flex-shrink-0' style={{ color: GREEN_PRIMARY }}/>
                        {b}
                    </li>
                ))}
            </ul>
        </div>
    );
};


// --- PAGE PRINCIPALE ---

export default function SolutionPage() {
    
    // Données structurées pour les cartes (inchangées)
    const solutionsData = [
        {
            title: "ESRUD-TOUCH : Robot autonome d’analyse du sol",
            description: "Un robot intelligent capable de scanner un champ et d’analyser en quelques minutes la santé et la fertilité du sol directement sur le terrain.",
            benefits: [
                "Diagnostique rapide et précis (pH, Azote, Humidité).",
                "Réduction des coûts liés aux analyses traditionnelles.",
                "Cartographie des zones fertiles et des zones à renforcer.",
                "Optimisation immédiate des semis, engrais et irrigation.",
            ],
            icon: <Microscope className='w-6 h-6' />,
            isHighlighted: true,
            delay: 0.1,
        },
        {
            title: "ESRUD App : Application d’agriculture intelligente",
            description: "Une application mobile et web conçue pour accompagner les agriculteurs dans la gestion quotidienne de leurs activités grâce aux données collectées sur le terrain.",
            benefits: [
                "Tableau de bord intelligent et Recommandations IA.",
                "Suivi des parcelles en temps réel et historique des analyses.",
                "Conseils agronomiques personnalisés.",
                "Alertes sur les risques environnementaux.",
            ],
            icon: <Smartphone className='w-6 h-6' />,
            delay: 0.2,
        },
        {
            title: "Plateforme de données agricoles",
            description: "Un système centralisé qui regroupe les données collectées par nos robots, nos capteurs et nos utilisateurs pour créer une base de connaissance au service des agriculteurs.",
            benefits: [
                "Transparence et sécurité des données.",
                "Analyses à grande échelle et Prévisions agricoles.",
                "Monitoring des saisons et Statistiques régionales.",
                "Outil idéal pour projets agricoles nationaux et ONG.",
            ],
            icon: <Server className='w-6 h-6' />,
            delay: 0.3,
        },
        {
            title: "Capteurs & IoT agricoles",
            description: "Des capteurs intelligents déployés directement dans les exploitations pour surveiller en continu les conditions du sol et de l’environnement (humidité, température, qualité de l’air).",
            benefits: [
                "Production optimisée (irrigation intelligente).",
                "Minimisation des ressources perdues.",
                "Détection précoce des anomalies.",
                "Sécurité des parcelles (pression et mouvement).",
            ],
            icon: <Cpu className='w-6 h-6' />,
            delay: 0.4,
        },
        {
            title: "Formations & accompagnement technique",
            description: "Nous assurons l’accompagnement des agriculteurs, des coopératives et des entreprises agricoles souhaitant utiliser la technologie pour améliorer leurs performances.",
            benefits: [
                "Adoption rapide de la technologie (ESRUD-TOUCH).",
                "Initiation à l’agriculture numérique.",
                "Conseils agronomiques basés données.",
                "Meilleure productivité à court et long terme.",
            ],
            icon: <BookOpen className='w-6 h-6' />,
            delay: 0.5,
        },
    ];

    return (
        <div style={{ backgroundColor: BG_DARK }} className="flex flex-col min-h-screen font-sans overflow-x-hidden pt-16"> 
            
            <Navbar />

            {/* Section Hero / Titre principal (Dark Mode) */}
            <section 
                className="py-24 px-8 text-white relative z-10 border-b-4" 
                style={{ backgroundColor: '#000000', borderColor: GREEN_PRIMARY }} // Fond Noir pour le Hero
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-slide-up-slow">
                        Des solutions <span style={{ color: GREEN_PRIMARY, borderBottom: '4px solid' }}>intelligentes</span> pour l’agriculture en RDC
                    </h1>
                    <p className="text-xl text-gray-400 animate-slide-up-delay-1">
                        ESRUD Agritech développe des technologies conçues pour moderniser l’agriculture et offrir aux producteurs des outils fiables, précis et accessibles.
                    </p>
                </div>
            </section>

            {/* Section Grille des Solutions (Dark Mode avec cartes contrastées) */}
            <section className="py-20 px-8" style={{ backgroundColor: BG_DARK, color: TEXT_LIGHT }}>
                <div className="max-w-7xl mx-auto">
                    
                    {/* Les cartes de solutions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {solutionsData.map((solution, index) => (
                            <SolutionCard 
                                key={index} 
                                title={solution.title} 
                                description={solution.description} 
                                benefits={solution.benefits} 
                                icon={solution.icon} 
                                isHighlighted={solution.isHighlighted}
                                delay={solution.delay}
                            />
                        ))}
                    </div>

                    {/* Image de transition pour l'impact visuel */}
                    <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-4">
                            Visualisation des <span style={{ color: GREEN_PRIMARY }}>Données en Temps Réel</span>
                        </h2>
                        <img 
                            src="/assets/solutions-map-visualization.jpg" 
                            alt="Cartographie des données agricoles" 
                            className="w-full max-w-4xl mx-auto shadow-2xl transition-transform hover:scale-[1.01] duration-500" 
                            style={{ border: `3px solid ${GREEN_PRIMARY}` }}
                        />
                    </div>
                </div>
            </section>

            {/* Section finale : Pourquoi choisir ESRUD Agritech ? (Fond sombre) */}
            <section 
                className="py-20 px-8 text-white border-t border-green-700" 
                style={{ backgroundColor: BG_CARD }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10 animate-slide-up">
                        Pourquoi choisir <span style={{ color: GREEN_PRIMARY }}>ESRUD Agritech</span> ?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        {[
                            "Solutions 100% dédiées au contexte agricole africain.",
                            "Technologies robustes et testées sur le terrain.",
                            "Données précises pour une agriculture rentable.",
                            "Respect de l’environnement et gestion durable.",
                            "Support de proximité pour les agriculteurs.",
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="flex items-center space-x-3 p-4 border-2 border-gray-700 transition-colors hover:border-green-500 hover:bg-gray-800 animate-slide-up"
                                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                            >
                                <Lightbulb className='w-5 h-5 flex-shrink-0' style={{ color: GREEN_PRIMARY }}/>
                                <p className="text-md font-medium text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                    
                    <Link
                        href="/contact"
                        style={{ backgroundColor: GREEN_PRIMARY, color: 'black' }}
                        className="inline-block mt-12 px-10 py-4 text-lg font-bold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 animate-slide-up border-2 border-black"
                        style={{ animationDelay: '1.3s' }}
                    >
                        Démarrer votre transformation agricole
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}