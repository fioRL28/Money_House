"use client"; //

import React from "react";
import Image from "next/image";

interface CardProps {
  src: string;
  title: string;
}

export default function BeneficiosEmpresa() {
  return (
    <section className="w-full bg-white">

  <div className="mx-auto max-w-[1600px]">
  
    <div className="flex flex-col lg:flex-row">
    
      <div className="bg-[#1a3fba] text-white flex-1 px-8 lg:px-20 py-16 lg:py-24 flex flex-col justify-center items-center text-center">
        <h4 className="text-[#FFB81C] font-bold text-lg lg:text-2xl uppercase tracking-wider">
          OBTEN BENEFICIOS
        </h4>
        <h2 className="text-white font-bold text-xl lg:text-3xl uppercase mt-1">
          EXCLUSIVOS PARA TU
        </h2>
        <h2 className="text-white font-black text-4xl lg:text-6xl uppercase leading-none">
          EMPRESA
        </h2>

        <p className="mt-8 text-white/90 text-base sm:text-lg lg:text-xl font-light">
          ¡Contacta con un asesor ahora!
        </p>

        <div className="mt-6">
          <button
            type="button"
            className="bg-transparent text-[#FFB81C] font-black px-10 py-3 rounded-xl uppercase text-sm lg:text-base
                       border-2 border-[#FFB81C] transition-all duration-300 active:scale-95
                       hover:bg-[#FFB81C] hover:text-[#1a3fba]"
          >
            CONTACTAR
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[#1a3fba] lg:pr-[80px]">
        
        <div className="relative min-h-[260px] sm:min-h-[360px] lg:h-full">
          <Image
            src="/img/imgempresas.jpg"
            alt="Alianza empresarial"
            fill
            className="object-cover"
            priority
          />
        </div>
        /</div>
    </div>
  </div>



      <div className="relative bg-[#1a3fba] py-6 mt-20 overflow-visible">
        <div className="mx-auto max-w-[1320px] px-6 relative">
          {/* Título */}
          <h2 className="text-white font-black text-xl lg:text-3xl uppercase tracking-tight text-center lg:text-center lg:pr-40">
            Nuestros Beneficios
          </h2>

          <div
            className="
              absolute z-20
              left-1/2 -translate-x-1/2 -top-18 w-[95px]
              sm:-top-22 sm:w-[120px]
              md:-top-26 md:w-[140px]
              lg:left-auto lg:translate-x-0 lg:-top-14 lg:right-[22%] lg:w-[160px]
            "
          >
            <div className="animate-pendulum">
              <Image
                src="/img/robot/icon_robot.png"
                alt="Robot Money House"
                width={160}
                height={160}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

  
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
  
      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-10 justify-items-center">
            <CardBeneficio 
              src="/img/beneficios/icon_asesoria.png" 
              title="Tipo de Cambio Preferencial" 
            />
            <CardBeneficio 
              src="/img/beneficios/icon_tc.png" 
              title="Asesoría Personalizada" 
            />
            <CardBeneficio 
              src="/img/beneficios/icon_rapido.png" 
              title="Operaciones más Rápidas" 
            />
            <CardBeneficio 
              src="/img/beneficios/icon_factura.png" 
              title="Factura Electrónica" 
            />
          </div>
      </div>
    </section>
  );
}


function CardBeneficio({ src, title }: CardProps) {
  return (
    <button
      type="button"
      className="
        group
        w-full max-w-[180px] sm:max-w-[220px] lg:max-w-none
        aspect-square
        bg-white border-[2.5px] border-[#1a3fba]
        rounded-[22px] sm:rounded-[30px]
        flex flex-col items-center justify-center
        p-4 sm:p-6
        text-center cursor-pointer
        transition-all duration-300 ease-in-out
        hover:border-[#FFB81C] hover:scale-105 hover:shadow-xl
        active:border-[#FFB81C]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB81C]
      "
    >
      <div className="relative w-22 h-22 sm:w-25 sm:h-25 lg:w-35 lg:h-35 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
        <Image src={src} alt={title} fill className="object-contain" />
      </div>

      <p className="text-[#1a3fba] font-bold text-[10px] sm:text-[15px] lg:text-[17px] uppercase leading-snug px-2">
        {title}
      </p>
    </button>
  );

}