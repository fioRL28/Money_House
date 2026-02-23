"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RefreshCcw, Lock, CheckCircle2 } from "lucide-react";

type Pair = "USD_PEN" | "PEN_USD";
type Tab = "COMPRA" | "VENTA";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* =========================
   TOAST (modal)
========================= */
function Toast({
  open,
  message,
  onClose,
  imageSrc = "/img/robot/icon_robot1.png",
}: {
  open: boolean;
  message: string;
  onClose: () => void;
  imageSrc?: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 cursor-pointer"
        aria-label="Cerrar alerta"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(480px,calc(100%-28px))]">
        <div className="relative flex items-center gap-4 rounded-2xl bg-white border-2 border-[#1646C6] shadow-2xl px-6 py-4">
          <div className="shrink-0">
            <Image
              src={imageSrc}
              alt="Alerta"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          <p className="flex-1 text-[#1646C6] text-[16px] sm:text-[18px] md:text-[20px] leading-tight">
            {message}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-4 text-black/80 text-2xl font-black leading-none hover:opacity-70 transition"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div className="text-center">
      <div className="text-[11px] font-black uppercase">{label}</div>

      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={[
          "mt-2 w-full rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 transition-all",
          "select-none",
          active ? "bg-[#FFB81C] shadow-md" : "bg-transparent",
        ].join(" ")}
      >
        <div className="text-[18px] sm:text-[22px] font-black">
          S/. {value.toFixed(4)}
        </div>
      </button>
    </div>
  );
}

export default function Hero() {
  // base y bancos
  const baseRates = useMemo(() => ({ compra: 3.33, venta: 3.375 }), []);
  const bankRates = useMemo(() => ({ compra: 3.238, venta: 3.512 }), []);

  const [pair, setPair] = useState<Pair>("USD_PEN");
  const [send, setSend] = useState<string>("0.007");

  // cupón
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");

  // toast
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const validCoupons: Record<string, number> = { MONEY10: 0.01 };

  const isUsdToPen = pair === "USD_PEN";
  const activeTab: Tab = isUsdToPen ? "COMPRA" : "VENTA";

  const couponBoost = useMemo(() => {
    const code = appliedCoupon.trim().toUpperCase();
    return validCoupons[code] ?? 0;
  }, [appliedCoupon]);

  const rates = useMemo(() => {
    return {
      compra: baseRates.compra + (activeTab === "COMPRA" ? couponBoost : 0),
      venta: baseRates.venta - (activeTab === "VENTA" ? couponBoost : 0),
    };
  }, [baseRates, couponBoost, activeTab]);

  const panelBg = activeTab === "COMPRA" ? "bg-[#EAF1FF]" : "bg-[#FFF6DE]";
  const borderBg = activeTab === "COMPRA" ? "border-[#C9D8FF]" : "border-[#D8C592]";

  const receive = useMemo(() => {
    const n = Number(send || 0);
    if (!Number.isFinite(n)) return 0;
    return isUsdToPen ? n * rates.compra : n / rates.venta;
  }, [send, isUsdToPen, rates]);

  const savings = useMemo(() => {
    const nSend = Number(send || 0);
    if (!Number.isFinite(nSend) || nSend <= 0) return 0;

    if (isUsdToPen) return (rates.compra - bankRates.compra) * nSend;

    const usdReceived = receive;
    return (bankRates.venta - rates.venta) * usdReceived;
  }, [send, isUsdToPen, receive, rates, bankRates]);

  const onSwap = () => setPair((p) => (p === "USD_PEN" ? "PEN_USD" : "USD_PEN"));
  const onSelectTab = (tab: Tab) => setPair(tab === "COMPRA" ? "USD_PEN" : "PEN_USD");

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setToastOpen(true);
  };

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (!code) return showToast("Ingresa un cupón");
    if (!validCoupons[code]) return showToast("Cupón inválido");
    setAppliedCoupon(code);
    showToast("Cupón aplicado");
  };

  // Animations
  const slideLeft = {
    hidden: { x: -60, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
  };
  const slideRight = {
    hidden: { x: 60, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
  };
  const popInside = {
    hidden: { scale: 0.65, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.55, ease: EASE_OUT } },
  };

  return (
    <section
      id="hero"
      className="relative overflow-x-clip text-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bgbanner.jpg')" }}
    >
      <Toast open={toastOpen} message={toastMsg} onClose={() => setToastOpen(false)} />

      {/* ✅ EXACTAMENTE como el v1: un solo wrapper de padding */}
      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10 pt-[15px] pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* IZQUIERDA */}
          <div className="space-y-5 min-w-0">
            <motion.h1
              variants={slideRight}
              initial="hidden"
              animate="show"
              className="font-black uppercase tracking-tight leading-[1.02] text-[32px] sm:text-[40px] md:text-[55px] lg:text-[50px] break-words"
            >
              ¡Cambia dólares y
              <br />
              soles con el mejor
              <br />
              tipo de cambio!
            </motion.h1>

            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.18 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg md:text-xl font-medium opacity-95">
                Rápido y seguro
              </p>

              <Link
                href="/user/register"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFB81C] px-6 py-2.5 font-black uppercase text-[#1646C6] shadow-md hover:brightness-105"
              >
                Regístrate aquí
              </Link>
            </motion.div>

            <motion.div
              variants={popInside}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6"
            >
              <div className="flex flex-1 items-center gap-4 rounded-2xl border-2 border-white/60 px-5 py-4 min-w-0">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-white shrink-0">
                  <Lock className="text-[#1646C6]" size={26} strokeWidth={2.5} />
                </div>
                <p className="text-[12px] sm:text-[12px] md:text-[13px] leading-tight font-black uppercase break-words">
                  Inscritos en la Superintendencia de Banca, Seguros y AFP
                </p>
              </div>

              <div className="flex flex-1 items-center gap-4 rounded-2xl border-2 border-white/60 px-5 py-4 min-w-0">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-white shrink-0">
                  <CheckCircle2 className="text-[#1646C6]" size={28} strokeWidth={2.5} />
                </div>
                <div className="leading-tight min-w-0">
                  <div className="text-base sm:text-lg font-black uppercase">+ 120 MIL</div>
                  <div className="text-[12px] font-black uppercase">Transacciones realizadas</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* DERECHA (sin padding extra dentro; igual que v1) */}
          <div className="flex justify-center lg:justify-end min-w-0">
            <div
              className={`w-full max-w-[500px] rounded-[24px] ${panelBg} p-5 sm:p-6 text-[#1646C6] shadow-xl`}
            >
              <h2 className="text-center text-[20px] sm:text-[24px] font-black uppercase tracking-tight">
                Tipo de cambio actual
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 items-center">
                <TabButton
                  label="Compra"
                  value={rates.compra}
                  active={activeTab === "COMPRA"}
                  onClick={() => onSelectTab("COMPRA")}
                />
                <TabButton
                  label="Venta"
                  value={rates.venta}
                  active={activeTab === "VENTA"}
                  onClick={() => onSelectTab("VENTA")}
                />
              </div>

              <div className="mt-6 space-y-5 relative">
                {/* ENVÍAS */}
                <div className="rounded-2xl bg-white px-4 sm:px-5 py-4 sm:py-5 shadow-sm border border-[#F1E3BC]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
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

                    <div className="text-right min-w-0">
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

                {/* SWAP */}
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
                    <div className="min-w-0">
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

                    <div className="text-right min-w-0">
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
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Ingresa tu cupón (ej: MONEY10)"
                    className="flex-1 px-4 py-2.5 text-sm font-semibold outline-none text-slate-700 min-w-0"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="bg-[#123EA8] px-5 sm:px-8 py-2.5 text-xs font-black uppercase text-white whitespace-nowrap hover:bg-[#FFB81C] hover:text-[#1646C6] transition-colors"
                  >
                    Aplicar
                  </button>
                </div>

                <div className="text-center text-[13px] sm:text-[15px] font-black text-[#1646C6]">
                  * Estás ahorrando aprox. S/ {Math.max(0, savings).toFixed(2)}
                </div>

                <Link
                  href="/user/login/operaciones"
                  className="mt-1 w-full inline-flex items-center justify-center rounded-2xl bg-[#FFB81C] py-3 text-[18px] sm:text-[22px] font-black uppercase text-[#1646C6] shadow-md hover:brightness-105"
                >
                  Cambiar ahora
                </Link>

                <div className="text-center">
                  <a
                    href="https://wa.me/51923814836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] sm:text-[15px] font-black underline text-[#1646C6] hover:text-[#FFB81C] transition-colors"
                  >
                    * Mayor a $10 000 Negocia aquí
                  </a>
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