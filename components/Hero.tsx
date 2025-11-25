export default function Hero() {
  return (
    <section className="bg-green-100 text-green-900 py-32 text-center">
      <h1 className="text-5xl font-bold mb-6">Bienvenue sur ESRUD Agritech</h1>
      <p className="text-lg mb-8">
        Nous innovons pour une agriculture intelligente et durable grâce à la technologie.
      </p>
      <a
        href="/contact"
        className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Contactez-nous
      </a>
    </section>
  );
}
