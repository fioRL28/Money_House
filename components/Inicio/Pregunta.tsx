"use client";

import Image from "next/image";
import { Siren } from "lucide-react";

export default function Pasos() {
  return (
    <>
      <style jsx global>{`
        @keyframes sway {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(10px); }
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
      `}</style>

      <section className="bg-white">
        {/* Espacio blanco superior (Padding top) */}
        <div className="pt-20">
          {/* Header azul */}
          <div className="relative bg-[#1646C6] overflow-visible">
            <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
              <div className="relative flex items-center justify-center py-7 lg:py-9">
                
                {/* Robot izquierda con movimiento sutil */}
                <div className="absolute left-0 lg:left-10 top-1/2 -translate-y-1/2 hidden md:block animate-sway">
                  <Image
                    src="/img/robot/icon_robot.png"
                    alt="Robot"
                    width={150}
                    height={150}
                    className="h-auto w-[120px] lg:w-[150px] object-contain"
                    priority
                  />
                </div>

                <h2 className="text-center text-white font-black uppercase tracking-tight text-[22px] md:text-[28px] lg:text-[34px]">
                  ¿CÓMO COMPRAR O VENDER TUS DÓLARES?
                </h2>
              </div>
            </div>
          </div>
        </div>

       
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center text-center">
                      
            <Paso
              paso="PASO 1"
              titulo="COTIZA"
              descripcion={
                <>
                  Usa nuestra calculadora para <br />
                  indicarnos el monto que <br />
                  deseas cambiar.
                </>
              }
              iconSrc="/img/pasos/img_paso1.png"
            />

            <Paso
              paso="PASO 2"
              titulo="TRANSFIERE"
              descripcion={
                <>
                  Desde tu banca móvil o <br />
                  banca por internet <br />
                  transfiere a nuestra cuenta <br />
                  y envíanos foto del comprobante.
                </>
              }
              iconSrc="/img/pasos/img_paso2.png"
            />

            {/* Paso 3 */}
            <Paso
              paso="PASO 3"
              titulo="RECIBE"
              descripcion={
                <>
                  Transferiremos tu cambio <br />
                  en la cuenta que <br />
                  registraste.
                </>
              }
              iconSrc="/img/pasos/img_paso3.png"
            />
          </div>
        </div>

        
      </section>
    </>
  );
}

// Componente auxiliar para los pasos
function Paso({
  paso,
  titulo,
  descripcion,
  iconSrc,
}: {
  paso: string;
  titulo: string;
  descripcion: React.ReactNode;
  iconSrc: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex items-center justify-center rounded-full border-2 border-[#1646C6] px-5 py-1.5 text-[#1646C6] font-black text-[16px]">
        {paso}
      </div>

      <div className="mt-7">
        <Image
          src={iconSrc}
          alt={titulo}
          width={140}
          height={140}
          className="h-auto w-[120px] lg:w-[140px] object-contain"
        />
      </div>

      <div className="mt-7 inline-flex items-center justify-center rounded-[10px] bg-[#FFB81C] px-8 py-2.5 text-[#1646C6] font-black text-[20px] uppercase">
        {titulo}
      </div>

      <p className="mt-5 text-[#8A8A8A] text-[15px] md:text-[16px] leading-relaxed font-medium">
        {descripcion}
      </p>
    </div>
  );
}