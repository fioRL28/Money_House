"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RefreshCcw, Lock, CheckCircle2 } from "lucide-react";

type Pair = "USD_PEN" | "PEN_USD";

export default function Inicio() {
  // Tasa demo
  const rates = useMemo(() => ({ compra: 3.33, venta: 3.375 }), []);

  // Par activo (arriba -> abajo)
  const [pair, setPair] = useState<Pair>("USD_PEN");

  // Input "envías"
  const [send, setSend] = useState<string>("0.007");

  const isUsdToPen = pair === "USD_PEN";

  const receive = useMemo(() => {
    const n = Number(send || 0);
    if (!Number.isFinite(n)) return 0;

    if (isUsdToPen) return n * rates.compra;
    return n / rates.venta;
  }, [send, isUsdToPen, rates]);

  
  const activeTab: "COMPRA" | "VENTA" = isUsdToPen ? "COMPRA" : "VENTA";

  const onSwap = () => {
    setPair((p) => (p === "USD_PEN" ? "PEN_USD" : "USD_PEN"));
  };
  const panelBg = activeTab === "COMPRA" ? "bg-[#EAF1FF]" : "bg-[#FFF6DE]";
const borderBg = activeTab === "COMPRA" ? "border-[#C9D8FF]" : "border-[#D8C592]";


  return (
    
    <section className="relative text-white overflow-hidden  bg-no-repeat"
        style={{
            backgroundImage: "url('/img/bgbanner.jpg')",
            backgroundSize: "2700px",         
            backgroundPosition: "center top",  
        }
    }>     

      <div className="relative mx-auto max-w-[1300px] px-6 lg:px-10 py-10 lg:py-14">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* IZQUIERDA */}
          <div className="space-y-5">
            <h1 className="font-black uppercase tracking-tight leading-[1.02] text-[40px] md:text-[55px] lg:text-[50px]">
              ¡Cambia dólares y
              <br />
              soles con el mejor
              <br />
              tipo de cambio!
            </h1>

            <p className="text-lg md:text-xl font-medium opacity-95">
              Rápido y seguro
            </p>

            <button className="inline-flex items-center justify-center rounded-xl bg-[#FFB81C] px-6 py-2.5 font-black uppercase text-[#1646C6] shadow-md hover:brightness-105">
              Regístrate aquí
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-4 rounded-2xl border-2 border-white/60 px-5 py-4">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-white">
                  <Lock className="text-[#1646C6]" size={26} strokeWidth={2.5} />
                </div>
                <p className="text-[12px] md:text-[13px] leading-tight font-black uppercase max-w-[280px]">
                  Inscritos en la Superintendencia de Banca, Seguros y AFP
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border-2 border-white/60 px-5 py-4">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-white">
                  <CheckCircle2
                    className="text-[#1646C6]"
                    size={28}
                    strokeWidth={2.5}
                  />
                </div>
                <div className="leading-tight">
                  <div className="text-lg font-black uppercase">+ 120 MIL</div>
                  <div className="text-[12px] font-black uppercase">
                    Transacciones realizadas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA */}
        <div className="flex justify-center lg:justify-end">
            <div
                className={`w-full max-w-[500px] rounded-[24px] ${panelBg} p-6 text-[#1646C6] shadow-xl`}
            >
                <h2 className="text-center text-[24px] font-black uppercase tracking-tight">
                Tipo de cambio actual
                </h2>

                {/* Tabs */}
                <div className="mt-5 grid grid-cols-2 gap-4 items-center">
                <div className="text-center">
                    <div className="text-[11px] font-black uppercase">Compra</div>
                    <div
                    className={[
                        "mt-2 rounded-2xl px-4 py-3 inline-block",
                        activeTab === "COMPRA"
                        ? "bg-[#FFB81C] shadow-md"
                        : "bg-transparent",
                    ].join(" ")}
                    >
                    <div className="text-[22px] font-black">
                        S/. {rates.compra.toFixed(4)}
                    </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="text-[11px] font-black uppercase">Venta</div>
                    <div
                    className={[
                        "mt-2 rounded-2xl px-4 py-3 inline-block",
                        activeTab === "VENTA"
                        ? "bg-[#FFB81C] shadow-md"
                        : "bg-transparent",
                    ].join(" ")}
                    >
                    <div className="text-[22px] font-black">
                        S/. {rates.venta.toFixed(4)}
                    </div>
                    </div>
                </div>
                </div>

                {/* Cards */}
                <div className="mt-6 space-y-5 relative">
                {/* ENVÍAS */}
                <div className="rounded-2xl bg-white px-5 py-5 shadow-sm border border-[#F1E3BC]">
                    <div className="flex items-start justify-between">
                    <div>
                        <div className="text-[13px] font-black uppercase">
                        {isUsdToPen ? "USD" : "PEN"}
                        </div>
                        <div className="mt-2">
                        <Flag code={isUsdToPen ? "US" : "PE"} />
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-[11px] font-black uppercase">Envías</div>
                        <input
                        value={send}
                        onChange={(e) =>
                            setSend(e.target.value.replace(/[^\d.]/g, ""))
                        }
                        inputMode="decimal"
                        className="mt-1 w-[150px] bg-transparent text-right text-[36px] font-black outline-none"
                        />
                    </div>
                    </div>
                </div>

                {/* Botón swap más pequeño */}
                <button
                    type="button"
                    onClick={onSwap}
                    className="absolute left-14 top-[86px] grid h-[74px] w-[74px] place-items-center rounded-full bg-[#123EA8] text-white shadow-lg transition-transform hover:scale-[1.05]"
                    aria-label="Invertir monedas"
                >
                    <RefreshCcw size={28} strokeWidth={2.5} />
                </button>

                {/* RECIBES */}
                <div className="rounded-2xl bg-white px-5 py-5 shadow-sm border border-[#F1E3BC]">
                    <div className="flex items-start justify-between">
                    <div>
                        <div className="text-[13px] font-black uppercase">
                        {isUsdToPen ? "PEN" : "USD"}
                        </div>
                        <div className="mt-2">
                        <Flag code={isUsdToPen ? "PE" : "US"} />
                        </div>
                    </div>

                    <div className="text-right">
                        <div className="text-[11px] font-black uppercase">Recibes</div>
                        <div className="mt-1 text-[36px] font-black">
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
                    className="flex-1 px-4 py-2.5 text-sm font-semibold outline-none text-slate-700"
                    />
                    <button
                    type="button"
                    className="bg-[#123EA8] px-8 py-2.5 text-xs font-black uppercase text-white"
                    >
                    Aplicar
                    </button>
                </div>

                <div className="text-center text-[15px] font-black text-[#1646C6]">
                    * Estas ahorrando aprox. S/ 0.00
                </div>

                <button className="mt-1 w-full rounded-2xl bg-[#FFB81C] py-3 text-[22px] font-black uppercase text-[#1646C6] shadow-md hover:brightness-105">
                    Cambiar ahora
                </button>

                <div className="text-center">
                    <Link href="#" className="text-[15px] font-black underline">
                    * Mayor a $10 000 Negocia aquí
                    </Link>
                    <div className="mt-2 text-[11px] font-semibold text-[#1646C6]/80">
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



      {/* NUEVA SECCIÓN BANCOS */}
    <section className="bg-[#F5F5F5] py-14">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <div className="rounded-[32px] bg-white shadow-md overflow-hidden">
            <div className="bg-[#1a3fba] text-white text-center font-black text-[24px] py-3">
              Transacciones inmediatas
            </div>

            <div className="p-8 text-center">
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <span className="text-[36px] font-black text-[#1a3fba]">
                  BCP
                </span>
                <span className="text-[36px] font-black text-[#16a34a]">
                  Interbank
                </span>
              </div>

              <div className="mt-6 text-[#1a3fba]">
                <p className="text-[18px] font-medium">
                  ⏱ Tiempo de abono (5 a 45 minutos)
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href="#"
                  className="text-[#1a3fba] font-black underline"
                >
                  Ver horarios
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-[32px] bg-white shadow-md overflow-hidden">
            <div className="bg-[#FFB81C] text-[#1a3fba] text-center font-black text-[24px] py-3">
              Transacciones interbancarias
            </div>

            <div className="p-8 text-center">
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <span className="text-[32px] font-black text-[#1a3fba]">
                  BBVA
                </span>
                <span className="text-[32px] font-black text-red-600">
                  Scotiabank
                </span>
                <span className="text-[16px] font-black text-slate-700 uppercase leading-tight">
                  OTROS <br /> BANCOS
                </span>
              </div>

              <div className="mt-6 text-[#1a3fba]">
                <p className="text-[18px] font-medium">
                  ⏱ Tiempo de abono (6 a 24 horas hábiles)
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href="#"
                  className="text-[#1a3fba] font-black underline"
                >
                  Ver horarios y comisiones
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section
  className="relative bg-[#FFB81C] bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: "url('/img/bgbanner2.jpg')",
  }}
>
  <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-2 lg:py-5">

    {/* Fila superior */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* Texto izquierda */}
      <div>
        <h2 className="text-[#1646C6] font-medium leading-[1.2] text-[32px] md:text-[38px] lg:text-[42px]">
          Conoce cómo está el tipo de cambio hoy en Perú<br className="hidden md:block" />
          
        </h2>

        <p className="mt-5 text-[#737373] text-[17px] md:text-[19px] leading-relaxed max-w-[520px]">
          Compara por que somos tu mejor opción de cambio.
        </p>
      </div>

      {/* Tabla derecha */}
      <div className="w-full max-w-[700px] lg:ml-auto">
        <div className="bg-white rounded-[20px] shadow-md px-8 py-7">
          <div className="grid grid-cols-[1fr_140px_140px] items-center">

            <div />
            <div className="text-[#1646C6] font-semibold text-[16px] text-center">
              Compra
            </div>
            <div className="text-[#1646C6] font-semibold text-[16px] text-center">
              Venta
            </div>

            {/* SUNAT */}
            <div className="flex items-center gap-4 py-5">
              <div className="h-8 w-8 rounded-full bg-slate-100 grid place-items-center text-[#1646C6] font-bold">
                S
              </div>
              <div className="text-[#1646C6] font-semibold text-[20px]">
                SUNAT
              </div>
            </div>

            <div className="py-5 text-center text-slate-500 text-[16px]">
              S/ 3,359
            </div>
            <div className="py-5 text-center text-slate-500 text-[16px]">
              S/ 3,372
            </div>

            {/* Bancos */}
            <div className="flex items-center gap-4 py-5 border-t border-slate-200">
              <div className="h-8 w-8 rounded-full bg-slate-100 grid place-items-center text-slate-500 font-bold">
                B
              </div>
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
      </div>
    </div>

    {/* Fila inferior */}
    <div className="mt-14 grid lg:grid-cols-3 gap-12 items-end">

      {/* Alerta compra */}
      <div>
        <p className="text-[#737373] uppercase font-semibold text-[13px] leading-snug">
          AVISARME CUANDO LA COMPRA DEL DOLAR ESTE POR ENCIMA DE:
        </p>

        <div className="mt-6 inline-flex items-center justify-center rounded-[12px] bg-[#1646C6] px-7 py-3 text-white font-bold text-[28px]">
          3.550
        </div>
      </div>

      {/* Alerta venta */}
      <div>
        <p className="text-[#737373] uppercase font-semibold text-[13px] leading-snug">
          AVISARME CUANDO LA VENTA DEL DOLAR ESTE POR DEBAJO DE:
        </p>

        <div className="mt-6 inline-flex items-center justify-center rounded-[12px] bg-[#1646C6] px-7 py-3 text-white font-bold text-[28px]">
          3.357
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1646C6] rounded-[24px] px-10 py-8 text-white shadow-lg">
        <div className="text-[34px] font-semibold leading-none">
          CREAR ALERTA
        </div>

        <div className="mt-3 uppercase text-[12px] font-semibold leading-snug">
          REGISTRATE Y RECIBE ALERTAS EN TIEMPO REAL EL CAMBIO DE DIVISAS
        </div>
      </div>

    </div>
  </div>
</section>









    </section>

    

    
  );

  
}




function Flag({ code }: { code: "US" | "PE" }) {
  if (code === "US") {
    return (
      <div className="h-10 w-14 overflow-hidden rounded-md border border-slate-200">
        <div className="h-full w-full bg-[linear-gradient(#b91c1c_0_14%,#fff_14%_28%,#b91c1c_28%_42%,#fff_42%_%,#b91c1c_56%_70%,#fff_70%_84%,#b91c1c_84%_100%)] relative">
          <div className="absolute left-0 top-0 h-6 w-7 bg-[#1e3a8a]" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-10 w-14 overflow-hidden rounded-md border border-slate-200">
      <div className="h-full w-full bg-[linear-gradient(90deg,#dc2626_0_33%,#fff_33%_66%,#dc2626_66%_100%)]" />
    </div>
  );
}
