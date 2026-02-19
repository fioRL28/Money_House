"use client"; //

import React from "react";
import Image from "next/image";

// Interfaz para usar imágenes propias en lugar de iconos de librería
interface CardProps {
  src: string;
  title: string;
}

export default function BeneficiosEmpresa() {
  return (
    <section className="w-full bg-white">
      {/* 1) HERO CENTRADO */}
      <div className="bg-[#1a3fba] text-white overflow-hidden">
        <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row items-stretch">
          
          <div className="flex-1 px-8 lg:px-20 py-16 lg:py-24 flex flex-col justify-center items-center text-center">
            <h4 className="text-[#FFB81C] font-bold text-lg lg:text-2xl uppercase tracking-wider">
              OBTEN BENEFICIOS
            </h4>
            <h2 className="text-white font-bold text-1xl lg:text-3xl uppercase mt-1">
              EXCLUSIVOS PARA TU
            </h2>
            <h2 className="text-white font-black text-2xl lg:text-5xl uppercase leading-none">
              EMPRESA
            </h2>
            
            <p className="mt-8 text-white/90 text-lg lg:text-xl font-light">
              ¡Contacta con un asesor ahora!
            </p>
            
            <div className="mt-6">
                <button className="bg-[#FFB81C] text-[#1a3fba] font-black px-10 py-3 rounded-lg uppercase text-sm lg:text-base 
                                    border-2 border-transparent transition-all duration-300 shadow-lg active:scale-95
                                    hover:bg-[#1a3fba] hover:text-[#FFB81C] hover:border-[#FFB81C]">
                    CONTACTAR
                </button>
            </div>
          </div>

          <div className="flex-1 relative min-h-[200px] lg:min-h-[400px]">
            <Image
              src="/img/imgempresas.jpg"
              alt="Alianza empresarial"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* 2) FRANJA: "Nuestros Beneficios" con Robot ajustado */}
      <div className="relative bg-[#1a3fba] py-6 mt-20 overflow-visible">
        <div className="mx-auto max-w-[1320px] px-6 relative flex justify-center items-center">
          
          {/* Desplazamiento pr-20 para que el robot no tape el texto */}
          <div className="relative z-10 pr-20 lg:pr-40">
            <h2 className="text-white font-black text-xl lg:text-3xl uppercase tracking-tight">
              Nuestros Beneficios
            </h2>
          </div>

          {/* Robot Money House */}
          <div className="absolute -top-14 right-[5%] md:right-[15%] lg:right-[22%] w-[110px] md:w-[140px] lg:w-[160px] z-20">
            <Image 
              src="/img/robot/icon_robot.png" 
              alt="Robot Money House" 
              width={160} 
              height={160} 
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* 3) GRILLA: Tarjetas con tus imágenes de iconos */}
      <div className="max-w-[1100px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
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

// Componente de Tarjeta con efecto de escala y borde amarillo al pasar el mouse
function CardBeneficio({ src, title }: CardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full aspect-square bg-white border-[2.5px] border-[#1a3fba] rounded-[30px] 
                      flex flex-col items-center justify-center p-6 text-center 
                      transition-all duration-300 ease-in-out 
                      hover:border-[#FFB81C] hover:scale-105 hover:shadow-xl cursor-pointer">
        
        {/* Contenedor de la Imagen */}
        <div className="relative w-16 h-16 lg:w-20 lg:h-20 mb-4 transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={src} 
            alt={title} 
            fill 
            className="object-contain" 
          />
        </div>

        {/* Texto del Beneficio */}
        <p className="text-[#1a3fba] font-bold text-[11px] lg:text-[13px] uppercase leading-snug px-2">
          {title}
        </p>
      </div>
    </div>
  );
}