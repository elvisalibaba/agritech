export default function BlogPreview() {
  const articles = [
    { id: 1, title: "Nouvelles technologies agricoles", slug: "#" },
    { id: 2, title: "Analyse de fertilité du sol", slug: "#" },
    { id: 3, title: "Comment optimiser vos récoltes", slug: "#" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {articles.map((article) => (
        <div key={article.id} className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <a
            href={article.slug}
            className="text-green-600 font-semibold hover:underline"
          >
            Lire plus
          </a>
        </div>
      ))}
    </div>
  );
}
