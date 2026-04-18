import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-full flex flex-col items-center justify-center text-center px-4">
      <p className="text-blue-500 font-mono text-lg mb-2">404</p>
      <h1 className="text-5xl font-bold mb-4">Page introuvable</h1>
      <p className="text-gray-400 max-w-md mb-8">
        Cette page n'existe pas ou a été déplacée. Retournez à l'accueil !
      </p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Retour à l'accueil
      </Link>
    </section>
  );
}