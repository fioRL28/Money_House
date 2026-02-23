import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const Nosotros = () => {
  return (
    <section className="w-full bg-white">
      {/* ===== 1) NOSOTROS ===== */}
      <div className="bg-[#1a3fba] text-white">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-extrabold text-[28px] md:text-[36px] uppercase tracking-tight">
                NOSOTROS
              </h2>

              <div className="space-y-4 text-[15px] sm:text-[16px] md:text-[19px] leading-relaxed font-light text-white/95 text-justify">
                <p>
                  Somos una casa de cambio virtual especializada en operaciones de
                  compra y venta de dólares y soles en Perú. Operamos bajo MH
                  DIGITAL BUSINESS S.A.C. – RUC 20613487817, garantizando un
                  servicio formal, transparente y seguro.
                </p>
                <p>
                  Contamos con una sólida trayectoria como casa de cambio física y
                  hemos evolucionado para ofrecer también un servicio 100% digital,
                  ágil y confiable. Nuestra plataforma te permite realizar tus
                  operaciones de manera rápida, con tipos de cambio competitivos y
                  con el respaldo de un equipo experto en transacciones cambiarias.
                </p>
                <p>
                  En Money House trabajamos para brindarte una experiencia
                  eficiente, segura y de confianza en cada operación.
                </p>

                <h3 className="pt-2 font-extrabold text-[20px] md:text-[24px]">
                  Registros
                </h3>

                <p>
                  Contamos con registro como casa de cambio en la Superintendencia
                  de Banca, Seguros y AFP - SBS, con la resolución 00171-2025 , en
                  materia de prevención de lavado de activos y financiamiento del
                  terrorismo.
                </p>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-[260px] sm:h-[340px] md:h-[460px] lg:h-[560px] overflow-hidden bg-white/10 rounded-[16px]">
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
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-14 lg:py-20">
        <div className="flex items-start sm:items-center gap-3 mb-10">
          <MapPin className="text-[#1a3fba] size-10 sm:size-[52px]" />
          <h2 className="text-[#1a3fba] font-extrabold text-[24px] sm:text-[28px] md:text-[32px] uppercase tracking-tight leading-tight">
            Ubícanos en nuestros <br className="hidden sm:block" /> locales físicos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {/* Local 1 */}
          <div className="group space-y-4 transition-transform duration-300 ease-out md:hover:-translate-y-1 md:hover:scale-[1.02]">
            <div className="w-full h-[240px] sm:h-[280px] md:h-[300px] overflow-hidden border-2 border-gray-300 bg-white transition-colors duration-300 md:group-hover:border-[#1a3fba] rounded-[14px]">
              <div className="h-full w-full md:transition-transform md:duration-300 md:ease-out md:group-hover:scale-[1.04]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1388656627!2d-77.0624!3d-12.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiUyA3N8KwMDMnNDQuNiJX!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="text-center md:transition-transform md:duration-300 md:group-hover:scale-[1.01]">
              <div className="flex items-center justify-center gap-2 font-extrabold text-[#1a3fba] text-[18px] uppercase">
                <MapPin className="text-[#1a3fba]" size={20} />
                <span>Lima Norte</span>
              </div>

              <p className="mt-2 text-[14px] leading-snug text-slate-600 max-w-[280px] mx-auto">
                Av. Tomas Valle 499-a <br className="hidden md:block" />
                (Centro bancario Flori) SMP-Lima
              </p>
            </div>
          </div>

          {/* Local 2 */}
          <div className="group space-y-4 transition-transform duration-300 ease-out md:hover:-translate-y-1 md:hover:scale-[1.02]">
            <div className="w-full h-[240px] sm:h-[280px] md:h-[300px] overflow-hidden border-2 border-gray-300 bg-white transition-colors duration-300 md:group-hover:border-[#1a3fba] rounded-[14px]">
              <div className="h-full w-full md:transition-transform md:duration-300 md:ease-out md:group-hover:scale-[1.04]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.11!3d-12.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAzJzM2LjAiUyA3N8KwMDYnMzYuMCJX!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="text-center md:transition-transform md:duration-300 md:group-hover:scale-[1.01]">
              <div className="flex items-center justify-center gap-2 font-extrabold text-[#1a3fba] text-[18px] uppercase">
                <MapPin className="text-[#1a3fba]" size={20} />
                <span>Callao</span>
              </div>

              <p className="mt-2 text-[14px] leading-relaxed text-slate-600 max-w-[260px] mx-auto">
                Av. Oscar Benavides 3866 <br />
                (Mall Aventura Bellavista)
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-white pb-16 lg:pb-20">
        <div className="bg-[#1a3fba] w-full relative">
          <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-10 lg:py-12 relative">

            <div className="flex justify-center mb-6 lg:mb-0 lg:block">
              <div className="relative w-[110px] sm:w-[140px] lg:absolute lg:-top-16 lg:left-6 xl:left-10 lg:w-[220px] animate-pendulum">
                <Image
                  src="/img/robot/icon_robot.png"
                  alt="Robot Money House"
                  width={240}
                  height={240}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>


            <div className="text-center lg:text-left lg:pl-[260px]">
              <h2 className="text-white font-extrabold text-[22px] sm:text-[26px] lg:text-[30px] uppercase tracking-tight leading-tight">
                ¿POR QUÉ CAMBIAR CON NOSOTROS?
              </h2>
            </div>
          </div>
        </div>
      
        <div className="mx-auto max-w-[1320px] px-20 sm:px-8 lg:px-10 mt-10 lg:mt-14">

          <div className="grid gap-6 lg:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
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
      <div key={idx} className="flex flex-col items-center text-center">
        
        <div className="bg-[#FFB81C] text-[#1a3fba] w-full 
          min-h-[80px] sm:min-h-[100px] 
          px-3 py-3 sm:px-6 rounded-[15px] 
          shadow-md flex items-center justify-center 
          transition-all duration-300 md:hover:-translate-y-2"
        >
          <h3 className="font-extrabold text-[13px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-tight uppercase">
            {item.title}
          </h3>
        </div>

       
        <p className="mt-3 text-slate-600 text-[12px] sm:text-[17px] leading-relaxed font-medium">
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