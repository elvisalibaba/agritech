'use client';

import Link from 'next/link';
import { 
    BookOpen, CheckCircle, Cpu, Lightbulb, Microscope, Server, Smartphone, Zap, LucideIcon 
} from 'lucide-react'; 
import React from 'react';


// =================================================
//  🔥 VARIABLES DE COULEURS (CORRECTION MAJEURE)
//  (Tu peux modifier selon ta charte graphique)
// =================================================

const BG_DARK = "#0a0d10";            
const BG_CARD = "#111418";            
const GREEN_PRIMARY = "#35ff8a";      
const TEXT_LIGHT = "#d5dbe0";         


// =================================================
//  🔷 NAVBAR PLACEHOLDER (évite erreur build)
// =================================================
const Navbar = () => (
    <div className="w-full p-6 border-b border-gray-800 text-white"
         style={{ backgroundColor: BG_DARK }}>
        <h1 className="text-2xl font-bold">ESRUD Agritech</h1>
    </div>
);


// =================================================
//  🔷 FOOTER PLACEHOLDER
// =================================================
const Footer = () => (
    <div className="w-full p-6 text-center text-sm text-gray-400 border-t border-gray-800"
         style={{ backgroundColor: BG_DARK }}>
        ESRUD AGRITECH © 2025 – Tous droits réservés
    </div>
);


// =================================================
//  📌 TYPAGE DES CARTES SOLUTIONS
// =================================================
interface SolutionCardProps {
    title: string;
    description: string;
    benefits: string[];
    icon: LucideIcon;
    isHighlighted?: boolean;
    delay?: number;
}


// =================================================
//  🟩 COMPONENT SOLUTION CARD (FONCTIONNEL)
// =================================================
const SolutionCard: React.FC<SolutionCardProps> = ({ 
    title, 
    description, 
    benefits, 
    icon: Icon, 
    isHighlighted = false, 
    delay = 0 
}) => {

    const borderStyle = isHighlighted 
        ? `border-l-4 border-green-500 shadow-green-500/30` 
        : `border-l border-gray-800`; 

    const cardStyles = { 
        backgroundColor: BG_CARD, 
        color: TEXT_LIGHT, 
        animationDelay: `${delay}s`, 
        boxShadow: isHighlighted ? `0 0 14px ${GREEN_PRIMARY}` : 'none' 
    };

    return (
        <div 
            className={`p-6 md:p-8 space-y-4 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl 
                        animate-slide-up rounded-lg ${borderStyle}`}
            style={cardStyles}
        >
            <div className='flex items-center space-x-4 border-b border-gray-700 pb-4'>
                <div className="p-3 rounded-md" style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK }}>
                    <Icon className='w-6 h-6'/>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
            </div>
            
            <p className="text-base text-gray-300">{description}</p>
            
            <h4 className="font-bold text-lg pt-2" style={{ color: GREEN_PRIMARY }}>
                Bénéfices clés :
            </h4>

            <ul className="text-sm space-y-2">
                {benefits.map((b, i) => (
                    <li key={i} className="flex items-start">
                        <Zap className='w-4 h-4 mr-2 mt-1' style={{ color: GREEN_PRIMARY }}/>
                        <span>{b}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


// =================================================
//  🚀 PAGE PRINCIPALE → FULL CLEAN BUILD
// =================================================
export default function SolutionPage() {

    const solutionsData = [
        {
            title: "ESRUD-TOUCH : Robot autonome d’analyse du sol",
            description: "Scanner la fertilité et la santé du sol en quelques minutes directement dans les champs.",
            benefits: ["Scan temps réel", "Analyse nutritionnelle", "Indicateurs de rendement"],
            icon: Microscope,
            isHighlighted: true,
            delay: 0.1,
        },
        {
            title: "ESRUD App : Agriculture intelligente",
            description: "Application mobile & web assistée par IA pour l’optimisation des cultures.",
            benefits: ["Dashboard météo", "Alertes irrigation", "Rapports automatisés"],
            icon: Smartphone,
            delay: 0.2,
        },
        {
            title: "Plateforme de données agricoles",
            description: "Agrégation et exploitation massive des données terrains IoT + robots.",
            benefits: ["Big Data farming", "Cartographie 3D", "Prédiction maladie des cultures"],
            icon: Server,
            delay: 0.3,
        },
        {
            title: "Capteurs & IoT agricoles",
            description: "Déploiement intelligent pour surveiller sol, humidité, climat en live.",
            benefits: ["Déploiement massif", "Faible énergie", "Monitoring permanent"],
            icon: Cpu,
            delay: 0.4,
        },
        {
            title: "Formations et accompagnement technique",
            description: "Montée en compétence des coopératives & exploitations connectées.",
            benefits: ["Ateliers terrain", "Support continu", "Certification ESRUD"],
            icon: BookOpen,
            delay: 0.5,
        },
    ];

    return (
        <div style={{ backgroundColor: BG_DARK }} 
             className="flex flex-col min-h-screen font-sans overflow-x-hidden pt-16">

            <Navbar />

            {/* SECTION SOLUTIONS */}
            <section className="py-20 px-8">
                <div className="max-w-7xl mx-auto text-white">

                    <h2 className="text-4xl font-bold mb-12 text-center">
                        Nos Solutions <span style={{ color: GREEN_PRIMARY }}>Agritech</span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {solutionsData.map((s, i) => (
                            <SolutionCard key={i} {...s}/>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
