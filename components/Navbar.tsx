import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center fixed w-full z-20 top-0">
      <div className="font-bold text-xl">ESRUD Agritech</div>
      <div className="space-x-6">
        <Link href="/">Accueil</Link>
        <Link href="/solutions">Nos solutions</Link>
        <Link href="/about">À propos</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
