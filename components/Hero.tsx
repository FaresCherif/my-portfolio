export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-blue-500 font-medium mb-2">Bonjour, je m'appelle</p>
      <h1 className="text-5xl font-bold mb-4">Ton Nom</h1>
      <h2 className="text-2xl text-gray-400 mb-6">
        Développeur Full-Stack
      </h2>
      <p className="max-w-xl text-gray-500 mb-8">
        Je crée des applications web modernes, performantes et accessibles.
        Disponible pour des missions freelance.
      </p>
      <div className="flex gap-4">
        
        <a href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Voir mes projets
        </a>
        
        <a  href="#contact"
          className="border border-gray-600 hover:border-blue-500 text-gray-300 px-6 py-3 rounded-lg font-medium transition"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}