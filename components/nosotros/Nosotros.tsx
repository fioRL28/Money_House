import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const Nosotros = () => {
  return (
    <section className="w-full bg-white">
      {/* ===== 1) HERO AZUL ===== */}
      <div className="bg-[#1a3fba] text-white">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-14 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6">
              <h2 className="font-extrabold text-[28px] md:text-[30px] uppercase tracking-tight">
                NOSOTROS
              </h2>

              <div className="space-y-4 text-[16px] text-justify md:text-[20px] leading-relaxed font-light text-white/95">
                <p>
                  Somos una casa de cambio virtual especializada en operaciones de compra y venta de dólares y soles en Perú. Operamos bajo MH DIGITAL BUSINESS S.A.C. – RUC 20613487817, garantizando un servicio formal, transparente y seguro.
                  </p>
                <p>Contamos con una sólida trayectoria como casa de cambio física y hemos evolucionado para ofrecer también un servicio 100% digital, ágil y confiable. Nuestra plataforma te permite realizar tus operaciones de manera rápida, con tipos de cambio competitivos y con el respaldo de un equipo experto en transacciones cambiarias.</p>  

                <p>En Money House trabajamos para brindarte una experiencia eficiente, segura y de confianza en cada operación.</p>  
                


                <h3 className="pt-2 font-extrabold text-[22px] md:text-[24px]">
                  Registros
                </h3>

                <p>
                  Contamos con registro como casa de cambio en la Superintendencia de Banca, Seguros y AFP - SBS, con la resolución 00171-2025 , en materia de prevención de lavado de activos y financiamiento del terrorismo.
                </p>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-[420px] md:h-[520px] lg:h-[560px] overflow-hidden  bg-white/10">
              <Image
                src="/img/nosotros.webp"
                alt="Local Money House"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== 2) LOCALES FÍSICOS ===== */}
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="flex items-center gap-3 mb-10">
          <MapPin className="text-[#1a3fba]" size={30} />
          <h2 className="text-[#1a3fba] font-extrabold text-[22px] md:text-[26px] uppercase tracking-tight">
            Ubícanos en nuestros locales físicos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Local 1 */}
          <div className="space-y-4">
            <div className="w-full h-[300px] rounded-[18px] overflow-hidden border border-slate-200 shadow-sm bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1388656627!2d-77.0624!3d-12.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiUyA3N8KwMDMnNDQuNiJX!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-center">
              <div className="font-extrabold text-[#1a3fba]">📍 Lima Norte</div>
              <p className="mt-1 text-[14px] text-slate-600">
                Av. Tomas Valle 499-a (Centro bancario Flori) SMP-Lima
              </p>
            </div>
          </div>

          {/* Local 2 */}
          <div className="space-y-4">
            <div className="w-full h-[300px] rounded-[18px] overflow-hidden border border-slate-200 shadow-sm bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.11!3d-12.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAzJzM2LjAiUyA3N8KwMDYnMzYuMCJX!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-center">
              <div className="font-extrabold text-[#1a3fba]">📍 Callao</div>
              <p className="mt-1 text-[14px] text-slate-600">
                Av. Oscar Benavides 3866 (Mall Aventura Bellavista)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 3) ¿POR QUÉ CAMBIAR...? ===== */}
      <div className="w-full bg-white pb-20">
        {/* Franja Azul */}
        <div className="bg-[#1a3fba] w-full relative">
          <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-12 relative">
            {/* Robot */}
            <div className="absolute -top-16 left-6 md:left-10 w-[130px] md:w-[180px] lg:w-[220px]">
              <Image
                src="/img/robot/icon_robot.png"
                alt="Robot Money House"
                width={240}
                height={240}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* Título */}
            <div className="text-center lg:text-left lg:pl-[260px]">
              <h2 className="text-white font-extrabold text-[26px] md:text-[28px] lg:text-[30px] uppercase tracking-tight">
                ¿POR QUÉ CAMBIAR CON NOSOTROS?
              </h2>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "MEJOR TIPO DE CAMBIO",
                desc: "Obtén un tipo de cambio superior al de los cambistas y bancos.",
              },
              {
                title: "TRANSFERENCIAS RÁPIDAS",
                desc: "Porque tu tiempo es valioso. Obtén tu cambio en pocos minutos.",
              },
              {
                title: "OPERACIONES FÁCILES",
                desc: "Realiza tus operaciones de forma sencilla desde cualquier lugar.",
              },
              {
                title: "OPERACIONES SEGURAS",
                desc: "Registrados en la SBS, en materia de prevención y lavados de activos.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-[#FFB81C] text-[#1a3fba] w-full min-h-[86px] px-5 py-5 rounded-[18px] shadow-md flex items-center justify-center font-extrabold text-[15px] leading-tight transition-transform duration-200 hover:-translate-y-1">
                  {item.title}
                </div>

                <p className="mt-5 text-slate-500 text-[14px] leading-relaxed font-medium px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
