export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          Fares <span className="text-blue-500">Cherif</span> — Développeur
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:farescherif49@yahoo.com"
            className="hover:text-white transition"
          >
            Email
          </a>
          <a
            href="https://github.com/TonPseudo"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/TonPseudo"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}