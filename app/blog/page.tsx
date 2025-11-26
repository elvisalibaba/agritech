'use client';

import Link from 'next/link';
import { Search, Tag, Clock, ArrowRight } from 'lucide-react';

// --- Définitions de couleurs (Dark Mode Brutaliste) ---
const BG_DARK = '#111111'; // Fond principal
const BG_CARD = '#1e1e1e'; // Cartes/Sections contrastées
const GREEN_PRIMARY = '#38a169'; // Accent Vert
const TEXT_LIGHT = '#ffffff'; 
const TEXT_ACCENT = '#cccccc';

// --- COMPOSANT NAVBAR (Simplifié) ---
const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-700 shadow-lg" style={{ backgroundColor: BG_DARK }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center text-sm">
                <Link href="/" className="text-xl font-bold tracking-widest text-white">
                    ESRUD<span style={{ color: GREEN_PRIMARY }}>AGRI</span>TECH
                </Link>
                <div className="hidden md:flex space-x-6 text-white text-base font-medium">
                    <Link href="/" className="hover:text-gray-400 transition-colors">Accueil</Link>
                    <Link href="/solution" className="hover:text-gray-400 transition-colors">Nos solutions</Link>
                    <Link href="/about" className="hover:text-gray-400 transition-colors">À propos</Link>
                    <Link href="/blog" style={{ color: GREEN_PRIMARY, borderBottom: `2px solid ${GREEN_PRIMARY}` }} className="transition-colors pb-1">Blog</Link>
                    <Link href="/contact" style={{ backgroundColor: GREEN_PRIMARY, color: 'black' }} className="px-4 py-2 font-bold hover:bg-green-700 transition-colors duration-300 border-2 border-black">Contact</Link>
                </div>
                <div className="md:hidden text-white">Menu</div> 
            </div>
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

// --- COMPOSANT CARTE ARTICLE DE BLOG ---
type BlogPostCardProps = {
    title: string;
    excerpt: string;
    date: string;
    tag: string;
    image: string;
    delay?: number;
};

const BlogPostCard = ({ title, excerpt, date, tag, image, delay = 0 }: BlogPostCardProps) => {
    return (
        <div 
            className="group block transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-green-500/20 animate-slide-up" 
            style={{ backgroundColor: BG_CARD, animationDelay: `${delay}s` }}
        >
            <Link href={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}> 
                
                <div className="overflow-hidden h-48">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 border-b-4"
                        style={{ borderColor: GREEN_PRIMARY }}
                    />
                </div>
                
                <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center text-xs uppercase font-medium text-gray-500">
                        <span className='flex items-center' style={{ color: GREEN_PRIMARY }}>
                            <Tag className='w-3 h-3 mr-1'/> {tag}
                        </span>
                        <span className='flex items-center'>
                            <Clock className='w-3 h-3 mr-1'/> {date}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-green-400" style={{ color: TEXT_LIGHT }}>
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {excerpt}
                    </p>
                    
                    <div className='pt-2 flex items-center font-bold text-sm' style={{ color: GREEN_PRIMARY }}>
                        Lire l'article <ArrowRight className='w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1'/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

// --- PAGE PRINCIPALE DU BLOG ---
export default function BlogPage() {
    const blogPosts: BlogPostCardProps[] = [
        {
            title: "ESRUD-TOUCH révolutionne l'analyse du sol en RDC",
            excerpt: "Découvrez comment notre robot autonome fournit des diagnostics ultra-rapides et précis, changeant la donne pour les petits exploitants...",
            date: "14 Nov 2025",
            tag: "Technologie & Robotique",
            image: "/assets/blog-esrud-touch.jpg",
            delay: 0.1
        },
        {
            title: "L'IA au service du rendement : les recommandations personnalisées",
            excerpt: "Comment l'Intelligence Artificielle de l'ESRUD App optimise l'utilisation des engrais et de l'irrigation, réduisant les coûts et les pertes...",
            date: "05 Nov 2025",
            tag: "Intelligence Artificielle",
            image: "/assets/blog-ai-yield.jpg",
            delay: 0.2
        },
        {
            title: "Durabilité et IoT : surveiller les sols pour préserver l'avenir",
            excerpt: "L'utilisation de capteurs IoT pour la surveillance environnementale garantit des pratiques agricoles plus durables en Afrique. Étude de cas...",
            date: "28 Oct 2025",
            tag: "Durabilité & IoT",
            image: "/assets/blog-sustainability-iot.jpg",
            delay: 0.3
        },
        {
            title: "Le défi de l'accessibilité technologique en milieu rural africain",
            excerpt: "Analyse des stratégies adoptées par ESRUD Agritech pour rendre ses solutions utilisables même dans les zones à faible connectivité...",
            date: "15 Oct 2025",
            tag: "Impact Social",
            image: "/assets/blog-rural-access.jpg",
            delay: 0.4
        },
    ];

    const tags = ["Toutes les catégories", "Technologie & Robotique", "Intelligence Artificielle", "Durabilité & IoT", "Impact Social", "Actualités ESRUD"];

    return (
        <div style={{ backgroundColor: BG_DARK }} className="flex flex-col min-h-screen font-sans overflow-x-hidden pt-16 text-white"> 
            
            <Navbar />

            <section 
                className="py-24 px-8 relative z-10 border-b-4" 
                style={{ backgroundColor: '#000000', borderColor: GREEN_PRIMARY }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-slide-up-slow">
                        Notre <span style={{ color: GREEN_PRIMARY, borderBottom: '4px solid' }}>Blog Agritech</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 animate-slide-up-delay-1">
                        Actualités, analyses de marché et études de cas sur la transformation agricole en Afrique par la technologie.
                    </p>
                    
                    <div className="max-w-lg mx-auto flex animate-slide-up-delay-2">
                        <input 
                            type="text" 
                            placeholder="Rechercher un article ou un sujet..."
                            className="w-full p-4 border-2 focus:border-green-500 focus:ring-0"
                            style={{ backgroundColor: BG_CARD, borderColor: TEXT_ACCENT, color: TEXT_LIGHT }}
                        />
                        <button 
                            className="p-4 flex items-center justify-center border-2 border-l-0"
                            style={{ backgroundColor: GREEN_PRIMARY, color: BG_DARK, borderColor: GREEN_PRIMARY }}
                        >
                            <Search className='w-6 h-6'/>
                        </button>
                    </div>
                </div>
            </section>
            
            <section className="py-20 px-8" style={{ backgroundColor: BG_DARK }}>
                <div className="max-w-7xl mx-auto">
                    
                    <div className="mb-12 flex flex-wrap gap-3 animate-slide-up">
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors duration-300 cursor-pointer ${
                                    index === 0
                                    ? `bg-transparent border-green-500 text-green-500 hover:bg-green-900` 
                                    : `border-gray-700 text-gray-400 hover:text-white hover:border-white`
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <BlogPostCard 
                                key={index}
                                {...post}
                            />
                        ))}
                    </div>
                    
                    <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <button className="px-6 py-3 font-semibold border-2" style={{ backgroundColor: BG_CARD, borderColor: GREEN_PRIMARY, color: GREEN_PRIMARY }}>
                            Charger plus d'articles
                        </button>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
