export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Me contacter</h2>
      <p className="text-gray-400 mb-8">
        Disponible pour des opportunités. N'hésitez pas à me contacter !
      </p>
      <div className="flex flex-col gap-3 items-center">
        <a href="mailto:farescherif49@yahoo.com" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
          farescherif49@yahoo.com
        </a>
        <p className="text-gray-500">+33 6 62 35 77 07</p>
      </div>
    </section>
  );
}