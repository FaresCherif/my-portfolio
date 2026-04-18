import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-24 py-12 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Me contacter</h2>
      <p className="text-gray-400 mb-12">
        Disponible pour de nouvelles opportunités. N'hésitez pas à me contacter !
      </p>

      <div className="flex flex-col gap-4">

        <a
          href="mailto:farescherif49@yahoo.com"
          className="flex items-center gap-4 border border-gray-700 hover:border-blue-500 rounded-xl px-6 py-4 transition group"
        >
          <Mail className="text-blue-500 shrink-0" size={20} />
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-1">Email</p>
            <p className="text-gray-300 group-hover:text-white transition">farescherif49@yahoo.com</p>
          </div>
        </a>

        <a
          href="tel:+33662357707"
          className="flex items-center gap-4 border border-gray-700 hover:border-blue-500 rounded-xl px-6 py-4 transition group"
        >
          <Phone className="text-blue-500 shrink-0" size={20} />
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-1">Téléphone</p>
            <p className="text-gray-300 group-hover:text-white transition">+33 6 62 35 77 07</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/fares-lucas-cherif-93bab4170/"
          target="_blank"
          className="flex items-center gap-4 border border-gray-700 hover:border-blue-500 rounded-xl px-6 py-4 transition group"
        >
          <ExternalLink className="text-blue-500 shrink-0" size={20} />
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-1">LinkedIn</p>
            <p className="text-gray-300 group-hover:text-white transition">Fares Cherif</p>
          </div>
        </a>

        <div className="flex items-center gap-4 border border-gray-700 rounded-xl px-6 py-4">
          <MapPin className="text-blue-500 shrink-0" size={20} />
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-1">Localisation</p>
            <p className="text-gray-300">Poitiers, France</p>
          </div>
        </div>

      </div>
    </section>
  );
}