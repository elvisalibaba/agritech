'use client'; 

import Link from 'next/link';
// IMPORT CRUCIAL : J'ajoute LucideIcon pour le typage TypeScript
import { BookOpen, CheckCircle, Cpu, Lightbulb, Microscope, Server, Smartphone, Zap, LucideIcon } from 'lucide-react'; 
import React from 'react'; // Importez React

// --- Définitions de couleurs mises à jour pour le Dark Mode moderne ---
// ... (Les définitions BG_DARK, BG_CARD, GREEN_PRIMARY, etc., restent inchangées)

// --- COMPOSANT NAVBAR (Adapté au fond sombre) ---
// ... (Reste inchangé)
const Navbar = () => { /* ... */ };

// --- COMPOSANT FOOTER (Adapté au fond sombre) ---
// ... (Reste inchangé)
const Footer = () => { /* ... */ };


// --- TYPAGE : Interface pour SolutionCard (Ajoutée pour corriger l'erreur TS) ---
interface SolutionCardProps {
    title: string;
    description: string;
    benefits: string[]; 
    // Type corrigé : on passe la référence de l'icône Lucide, pas un élément JSX
    icon: LucideIcon; 
    isHighlighted?: boolean;
    delay?: number;
}


// --- COMPOSANT INDIVIDUEL DE CARTE SOLUTION (Design brutaliste/néon) ---
// Application de l'interface et renommage d'icon en Icon
const SolutionCard: React.FC<SolutionCardProps> = ({ 
    title, 
    description, 
    benefits, 
    icon: Icon, // Destructuration : on prend 'icon' de props et on le nomme 'Icon'
    isHighlighted = false, 
    delay = 0 
}) => {
    // La carte est maintenant sombre avec une bordure verte marquée.
    const borderStyle = isHighlighted 
        ? `border-l-4 border-green-500 shadow-green-500/30` 
        : `border-l border-gray-700`; 

    // Simplification des styles pour un meilleur contrôle dans Tailwind
    const cardStyles = { 
        backgroundColor: BG_CARD, 
        color: TEXT_LIGHT, 
        animationDelay: `${delay}s`, 
        // Style corrigé : on utilise une ombre "néon" via shadow-lg et le style CSS direct si highlight
        boxShadow: isHighlighted ? `0 0 10px ${GREEN_PRIMARY}` : 'none' 
    };

    return (
        <div 
            className={`p-6 md:p-8 space-y-4 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl ${borderStyle}
                        animate-slide-up`}
            style={cardStyles} // Application des styles dans l'objet
        >
            <div className='flex items-center space-x-4 border-b border-gray-700 pb-4'>
                <div className="p-3 rounded-md" style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}>
                    {/* CORRECTION DU BUG : Rendu de l'icône comme un composant (Icon) */}
                    <Icon className='w-6 h-6' />
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
    
    // Données structurées pour les cartes (MODIFIÉES pour passer la référence de l'icône)
    const solutionsData = [
        {
            title: "ESRUD-TOUCH : Robot autonome d’analyse du sol",
            description: "Un robot intelligent capable de scanner un champ et d’analyser en quelques minutes la santé et la fertilité du sol directement sur le terrain.",
            benefits: [ /* ... */ ],
            icon: Microscope, // <--- CORRIGÉ : On passe la référence
            isHighlighted: true,
            delay: 0.1,
        },
        {
            title: "ESRUD App : Application d’agriculture intelligente",
            description: "Une application mobile et web conçue pour accompagner les agriculteurs dans la gestion quotidienne de leurs activités grâce aux données collectées sur le terrain.",
            benefits: [ /* ... */ ],
            icon: Smartphone, // <--- CORRIGÉ
            delay: 0.2,
        },
        {
            title: "Plateforme de données agricoles",
            description: "Un système centralisé qui regroupe les données collectées par nos robots, nos capteurs et nos utilisateurs pour créer une base de connaissance au service des agriculteurs.",
            benefits: [ /* ... */ ],
            icon: Server, // <--- CORRIGÉ
            delay: 0.3,
        },
        {
            title: "Capteurs & IoT agricoles",
            description: "Des capteurs intelligents déployés directement dans les exploitations pour surveiller en continu les conditions du sol et de l’environnement (humidité, température, qualité de l’air).",
            benefits: [ /* ... */ ],
            icon: Cpu, // <--- CORRIGÉ
            delay: 0.4,
        },
        {
            title: "Formations & accompagnement technique",
            description: "Nous assurons l’accompagnement des agriculteurs, des coopératives et des entreprises agricoles souhaitant utiliser la technologie pour améliorer leurs performances.",
            benefits: [ /* ... */ ],
            icon: BookOpen, // <--- CORRIGÉ
            delay: 0.5,
        },
    ];

    return (
        // ... (Le reste du rendu de SolutionPage reste inchangé)
        <div style={{ backgroundColor: BG_DARK }} className="flex flex-col min-h-screen font-sans overflow-x-hidden pt-16"> 
            
            <Navbar />

            {/* Section Hero / Titre principal (Dark Mode) */}
            <section 
                className="py-24 px-8 text-white relative z-10 border-b-4" 
                style={{ backgroundColor: '#000000', borderColor: GREEN_PRIMARY }} // Fond Noir pour le Hero
            >
                {/* ... */}
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
                                icon={solution.icon} // Ici, il passe la référence du composant
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
            {/* ... (Reste inchangé) */}
            <Footer />
        </div>
    );
}
