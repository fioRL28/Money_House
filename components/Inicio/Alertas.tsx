"use client";

import Image from "next/image";
import { Siren } from "lucide-react";

export default function Alertas() {
  return (
    <>
      {/* Animación personalizada para que las flechas floten */}
      <style jsx global>{`
        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative bg-[#FFB81C] bg-no-repeat bg-cover bg-[position:center_top]"
        style={{ backgroundImage: "url('/img/bgbanner2.jpg')" }}
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 py-10 lg:py-14">
          {/* Fila superior: Texto y Tabla */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="pt-1">
              <h2 className="text-[#1646C6] font-medium leading-[1.18] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px]">
                Conoce cómo está el tipo de cambio hoy en Perú
              </h2>
              <p className="mt-4 sm:mt-5 text-[#6B6B6B] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[520px]">
                Compara por que somos tu mejor opción de cambio.
              </p>
            </div>

            <div className="w-full lg:ml-auto">
              <div className="bg-white rounded-[20px] shadow-md px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
                {/* ===== DESKTOP TABLE ===== */}
                <div className="hidden sm:block">
                  <div className="grid grid-cols-[1fr_140px_140px] items-center">
                    <div />
                    <div className="text-[#1646C6] font-semibold text-[16px] text-center">
                      Compra
                    </div>
                    <div className="text-[#1646C6] font-semibold text-[16px] text-center">
                      Venta
                    </div>

                    <div className="flex items-center gap-4 py-5">
                      <Image
                        src="/img/sunat.png"
                        alt="SUNAT"
                        width={150}
                        height={46}
                        className="h-auto w-[130px] md:w-[150px] object-contain"
                      />
                    </div>
                    <div className="py-5 text-center text-slate-500 text-[16px]">
                      S/ 3,359
                    </div>
                    <div className="py-5 text-center text-slate-500 text-[16px]">
                      S/ 3,372
                    </div>

                    <div className="flex items-center gap-4 py-5 border-t border-slate-200">
                      <div className="text-slate-500 font-semibold text-[18px]">
                        Bancos *
                      </div>
                    </div>
                    <div className="py-5 text-center text-slate-500 text-[16px] border-t border-slate-200">
                      S/ 3,238
                    </div>
                    <div className="py-5 text-center text-slate-500 text-[16px] border-t border-slate-200">
                      S/ 3,512
                    </div>

                    <div className="col-span-3 pt-3 text-slate-400 text-[12px]">
                      * Precios referenciales.
                    </div>
                  </div>
                </div>

                {/* ===== MOBILE “CARDS” (más legible) ===== */}
                <div className="sm:hidden space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[#1646C6] font-semibold text-[14px]">
                      Compra
                    </div>
                    <div className="text-[#1646C6] font-semibold text-[14px]">
                      Venta
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <Image
                        src="/img/sunat.png"
                        alt="SUNAT"
                        width={130}
                        height={40}
                        className="h-auto w-[120px] object-contain"
                      />
                      <div className="grid grid-cols-2 gap-4 text-right">
                        <div>
                          <div className="text-[11px] font-semibold text-slate-400">
                            Compra
                          </div>
                          <div className="text-[15px] text-slate-600">
                            S/ 3,359
                          </div>
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-slate-400">
                            Venta
                          </div>
                          <div className="text-[15px] text-slate-600">
                            S/ 3,372
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-slate-500 font-semibold text-[16px]">
                        Bancos *
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-right">
                        <div>
                          <div className="text-[11px] font-semibold text-slate-400">
                            Compra
                          </div>
                          <div className="text-[15px] text-slate-600">
                            S/ 3,238
                          </div>
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-slate-400">
                            Venta
                          </div>
                          <div className="text-[15px] text-slate-600">
                            S/ 3,512
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 text-slate-400 text-[12px]">
                    * Precios referenciales.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fila inferior: Alertas + CTA */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {/* ALERTA COMPRA */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="animate-float">
                <Image
                  src="/img/flecha_up.png"
                  alt="Flecha arriba"
                  width={60}
                  height={60}
                  className="object-contain w-[52px] h-[52px] sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[#1646C6] uppercase font-semibold text-[12px] sm:text-[13px] leading-snug max-w-[280px]">
                  AVISARME CUANDO LA COMPRA DEL DOLAR ESTE POR ENCIMA DE:
                </p>
                <div className="mt-4 sm:mt-6 inline-flex items-center justify-center rounded-[14px] bg-[#1646C6] px-7 sm:px-8 py-2.5 sm:py-3 text-white font-bold text-[26px] sm:text-[30px] shadow-md">
                  3.550
                </div>
              </div>
            </div>

            {/* ALERTA VENTA */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="animate-float" style={{ animationDelay: "0.5s" }}>
                <Image
                  src="/img/flecha_down.png"
                  alt="Flecha abajo"
                  width={60}
                  height={60}
                  className="object-contain w-[52px] h-[52px] sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[#1646C6] uppercase font-semibold text-[12px] sm:text-[13px] leading-snug max-w-[280px]">
                  AVISARME CUANDO LA VENTA DEL DOLAR ESTE POR DEBAJO DE:
                </p>
                <div className="mt-4 sm:mt-6 inline-flex items-center justify-center rounded-[14px] bg-[#1646C6] px-7 sm:px-8 py-2.5 sm:py-3 text-white font-bold text-[26px] sm:text-[30px] shadow-md">
                  3.357
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#1646C6] rounded-[28px] px-6 sm:px-8 py-8 sm:py-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 border-2 border-white/10 motion-safe:hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="flex-shrink-0">
                <Siren size={68} strokeWidth={1.2} className="text-white sm:hidden" />
                <Siren size={80} strokeWidth={1.2} className="text-white hidden sm:block" />
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-extrabold leading-none tracking-tight">
                  CREAR ALERTA
                </h3>
                <p className="mt-3 sm:mt-4 uppercase text-[11px] sm:text-[12px] font-bold leading-tight tracking-wide max-w-[280px]">
                  REGISTRATE Y RECIBE ALERTAS EN TIEMPO REAL EL CAMBIO DE DIVISAS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
