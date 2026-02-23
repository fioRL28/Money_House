"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";


const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cardFromLeft: Variants = {
  hidden: { x: -80, opacity: 0, scale: 0.98, filter: "blur(6px)" },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

const cardFromRight: Variants = {
  hidden: { x: 80, opacity: 0, scale: 0.98, filter: "blur(6px)" },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};



function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const listener = () => setIsDesktop(media.matches);

    listener();
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [breakpoint]);

  return isDesktop;
}

/* 
   Modal */

function HorariosModal({
  type,
  onClose,
}: {
  type: "inmediatas" | "interbancarias" | null;
  onClose: () => void;
}) {
  if (!type) return null;

  const imageSrc =
    type === "inmediatas"
      ? "/img/horarios/Horarios _1.png"
      : "/img/horarios/Horarios_2.png";

  return (
    <div className="fixed inset-0 z-[9999]">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[520px] px-4">
        <div className="relative rounded-2xl bg-white border-2 border-[#1646C6] shadow-2xl overflow-hidden">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-4 text-black/80 text-2xl font-black hover:opacity-70 transition"
            aria-label="Cerrar"
          >
            ×
          </button>

          <div className="py-10 sm:py-5 text-center">
            <h3 className="text-[#1646C6] font-semibold text-[28px] sm:text-[40px]">
              Horarios
            </h3>
          </div>

          <div className="px-6 sm:px-10 pb-10 sm:pb-5 flex justify-center">
            <Image
              src={imageSrc}
              alt="Horarios"
              width={900}
              height={520}
              className="w-full max-w-[650px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
   Coom. Principal*/

export default function Bancos() {
  const [modalType, setModalType] = useState<
    "inmediatas" | "interbancarias" | null
  >(null);

  const isDesktop = useIsDesktop();

  const getMotionProps = (variants: Variants) =>
    isDesktop
      ? {
          variants,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: false, amount: 0.35 },
        }
      : {};

  return (
    <section className="bg-[#F3F3F3] py-10 sm:py-14">
      <HorariosModal
        type={modalType}
        onClose={() => setModalType(null)}
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          
          <motion.div
            {...getMotionProps(cardFromLeft)}
            className="rounded-[28px] sm:rounded-[32px] bg-[#EEEEEE] overflow-hidden"
          >
            <div className="bg-[#1a3fba] text-white text-center font-black text-[18px] sm:text-[22px] lg:text-[24px] py-3">
              Transacciones inmediatas
            </div>

            <div className="px-6 sm:px-10 py-8 sm:py-10 text-center">
              <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap">
                <Image
                  src="/img/bancos/logo_bcp_0.png"
                  alt="BCP"
                  width={170}
                  height={52}
                  className="w-[120px] sm:w-[150px] md:w-[170px] h-auto object-contain"
                />
                <Image
                  src="/img/bancos/logo_interbank_0.png"
                  alt="Interbank"
                  width={190}
                  height={52}
                  className="w-[130px] sm:w-[160px] md:w-[190px] h-auto object-contain"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-3 text-[#1a3fba]">
                <Image
                  src="/img/icon_tiempo.png"
                  alt="Tiempo"
                  width={22}
                  height={22}
                />
                <p className="text-[15px] sm:text-[17px] md:text-[18px] font-medium">
                  Tiempo de abono (5 a 45 minutos)
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalType("inmediatas")}
                className="mt-4 text-[#1a3fba] font-black underline text-[14px] sm:text-[16px]"
              >
                Ver horarios
              </button>
            </div>
          </motion.div>

          <motion.div
            {...getMotionProps(cardFromRight)}
            className="rounded-[28px] sm:rounded-[32px] bg-[#EEEEEE] overflow-hidden"
          >
            <div className="bg-[#FFB81C] text-[#1a3fba] text-center font-black text-[18px] sm:text-[22px] lg:text-[24px] py-3">
              Transacciones interbancarias
            </div>

            <div className="px-6 sm:px-10 py-8 sm:py-10 text-center">
              <div className="flex justify-center items-center gap-5 sm:gap-8 flex-wrap sm:flex-nowrap">
                <Image
                  src="/img/bancos/logo_bbva.png"
                  alt="BBVA"
                  width={150}
                  height={46}
                  className="w-[110px] sm:w-[130px] md:w-[150px] h-auto object-contain"
                />
                <Image
                  src="/img/bancos/logo_scotia.png"
                  alt="Scotiabank"
                  width={190}
                  height={46}
                  className="w-[130px] sm:w-[160px] md:w-[190px] h-auto object-contain"
                />
                <Image
                  src="/img/bancos/icon_bancos_0.png"
                  alt="Otros bancos"
                  width={140}
                  height={46}
                  className="w-[110px] sm:w-[120px] md:w-[140px] h-auto object-contain"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-3 text-[#1a3fba]">
                <Image
                  src="/img/icon_tiempo.png"
                  alt="Tiempo"
                  width={22}
                  height={22}
                />
                <p className="text-[15px] sm:text-[17px] md:text-[18px] font-medium">
                  Tiempo de abono (6 a 24 horas hábiles)
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalType("interbancarias")}
                className="mt-4 text-[#1a3fba] font-black underline text-[14px] sm:text-[16px]"
              >
                Ver horarios y comisiones
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}