"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RefreshCcw, Lock, CheckCircle2 } from "lucide-react";

type Pair = "USD_PEN" | "PEN_USD";

export default function Hero() {
  const rates = useMemo(() => ({ compra: 3.33, venta: 3.375 }), []);
  const [pair, setPair] = useState<Pair>("USD_PEN");
  const [send, setSend] = useState<string>("0.007");

  const isUsdToPen = pair === "USD_PEN";
  const activeTab: "COMPRA" | "VENTA" = isUsdToPen ? "COMPRA" : "VENTA";

  const panelBg = activeTab === "COMPRA" ? "bg-[#EAF1FF]" : "bg-[#FFF6DE]";
  const borderBg = activeTab === "COMPRA" ? "border-[#C9D8FF]" : "border-[#D8C592]";

  const receive = useMemo(() => {
    const n = Number(send || 0);
    if (!Number.isFinite(n)) return 0;
    if (isUsdToPen) return n * rates.compra;
    return n / rates.venta;
  }, [send, isUsdToPen, rates]);

  const onSwap = () => setPair((p) => (p === "USD_PEN" ? "PEN_USD" : "USD_PEN"));

  return (
    <section
      id="hero"
      className="relative overflow-hidden text-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bgbanner.jpg')" }}
    >
      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10 pt-[15px] pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* IZQUIERDA */}
          <div className="space-y-5">
            <h1 className="font-black uppercase tracking-tight leading-[1.02] text-[32px] sm:text-[40px] md:text-[55px] lg:text-[50px]">
              ¡Cambia dólares y
              <br />
              soles con el mejor
              <br />
              tipo de cambio!
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-medium opacity-95">
              Rápido y seguro
            </p>

            <button className="inline-flex items-center justify-center rounded-xl bg-[#FFB81C] px-6 py-2.5 font-black uppercase text-[#1646C6] shadow-md hover:brightness-105">
              Regístrate aquí
            </button>

            {/* BADGES (responsive real) */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
              <div className="flex flex-1 items-center gap-4 rounded-2xl border-2 border-white/60 px-5 py-4">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-white shrink-0">
                  <Lock className="text-[#1646C6]" size={26} strokeWidth={2.5} />
                </div>
                <p className="text-[12px] sm:text-[12px] md:text-[13px] leading-tight font-black uppercase">
                  Inscritos en la Superintendencia de Banca, Seguros y AFP
                </p>
              </div>

              <div className="flex flex-1 items-center gap-4 rounded-2xl border-2 border-white/60 px-5 py-4">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-white shrink-0">
                  <CheckCircle2 className="text-[#1646C6]" size={28} strokeWidth={2.5} />
                </div>
                <div className="leading-tight">
                  <div className="text-base sm:text-lg font-black uppercase">+ 120 MIL</div>
                  <div className="text-[12px] font-black uppercase">Transacciones realizadas</div>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA */}
          <div className="flex justify-center lg:justify-end">
            <div className={`w-full max-w-[500px] rounded-[24px] ${panelBg} p-5 sm:p-6 text-[#1646C6] shadow-xl`}>
              <h2 className="text-center text-[20px] sm:text-[24px] font-black uppercase tracking-tight">
                Tipo de cambio actual
              </h2>

              {/* Tabs */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 items-center">
                <div className="text-center">
                  <div className="text-[11px] font-black uppercase">Compra</div>
                  <div
                    className={[
                      "mt-2 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 inline-block",
                      activeTab === "COMPRA" ? "bg-[#FFB81C] shadow-md" : "bg-transparent",
                    ].join(" ")}
                  >
                    <div className="text-[18px] sm:text-[22px] font-black">
                      S/. {rates.compra.toFixed(4)}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-[11px] font-black uppercase">Venta</div>
                  <div
                    className={[
                      "mt-2 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 inline-block",
                      activeTab === "VENTA" ? "bg-[#FFB81C] shadow-md" : "bg-transparent",
                    ].join(" ")}
                  >
                    <div className="text-[18px] sm:text-[22px] font-black">
                      S/. {rates.venta.toFixed(4)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="mt-6 space-y-5 relative">
                {/* ENVÍAS */}
                <div className="rounded-2xl bg-white px-4 sm:px-5 py-4 sm:py-5 shadow-sm border border-[#F1E3BC]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[13px] font-black uppercase">
                        {isUsdToPen ? "USD" : "PEN"}
                      </div>

                      <div className="mt-2">
                        <Image
                          src={isUsdToPen ? "/img/bandera1.jpg" : "/img/bandera2.jpg"}
                          alt={isUsdToPen ? "USA" : "Perú"}
                          width={56}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] font-black uppercase">Envías</div>
                      <input
                        value={send}
                        onChange={(e) => setSend(e.target.value.replace(/[^\d.]/g, ""))}
                        inputMode="decimal"
                        className="mt-1 w-[120px] sm:w-[150px] bg-transparent text-right text-[28px] sm:text-[36px] font-black outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Botón swap (centrado y responsive) */}
                <button
                  type="button"
                  onClick={onSwap}
                  className="absolute left-1/2 -translate-x-1/2 top-[92px] sm:left-14 sm:translate-x-0 sm:top-[86px] grid h-[64px] w-[64px] sm:h-[74px] sm:w-[74px] place-items-center rounded-full bg-[#123EA8] text-white shadow-lg transition-transform hover:scale-[1.05]"
                  aria-label="Invertir monedas"
                >
                  <RefreshCcw size={26} strokeWidth={2.5} />
                </button>

                {/* RECIBES */}
                <div className="rounded-2xl bg-white px-4 sm:px-5 py-4 sm:py-5 shadow-sm border border-[#F1E3BC]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[13px] font-black uppercase">
                        {isUsdToPen ? "PEN" : "USD"}
                      </div>

                      <div className="mt-2">
                        <Image
                          src={isUsdToPen ? "/img/bandera2.jpg" : "/img/bandera1.jpg"}
                          alt={isUsdToPen ? "Perú" : "USA"}
                          width={56}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] font-black uppercase">Recibes</div>
                      <div className="mt-1 text-[28px] sm:text-[36px] font-black">
                        {receive.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cupón */}
                <div className={`mt-2 flex overflow-hidden rounded-xl border ${borderBg} bg-white`}>
                  <input
                    type="text"
                    placeholder="Ingresa tu cupón"
                    className="flex-1 px-4 py-2.5 text-sm font-semibold outline-none text-slate-700 min-w-0"
                  />
                  <button
                    type="button"
                    className="bg-[#123EA8] px-5 sm:px-8 py-2.5 text-xs font-black uppercase text-white whitespace-nowrap"
                  >
                    Aplicar
                  </button>
                </div>

                <div className="text-center text-[13px] sm:text-[15px] font-black text-[#1646C6]">
                  * Estas ahorrando aprox. S/ 0.00
                </div>

                <button className="mt-1 w-full rounded-2xl bg-[#FFB81C] py-3 text-[18px] sm:text-[22px] font-black uppercase text-[#1646C6] shadow-md hover:brightness-105">
                  Cambiar ahora
                </button>

                <div className="text-center">
                  <Link href="#" className="text-[13px] sm:text-[15px] font-black underline">
                    * Mayor a $10 000 Negocia aquí
                  </Link>
                  <div className="mt-2 text-[10px] sm:text-[11px] font-semibold text-[#1646C6]/80">
                    (*) Respecto al tipo de cambio de entidades bancarias.
                    <br />
                    (**) Exclusivo para usuarios RUC 20
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
