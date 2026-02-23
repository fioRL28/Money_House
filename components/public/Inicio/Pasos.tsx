"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants, useInView } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

function useRevealOnlyHideOnScrollUp(inView: boolean) {
  const [shown, setShown] = useState(false);
  const lastY = useRef(0);
  const dir = useRef<"up" | "down">("down");

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      dir.current = y < lastY.current ? "up" : "down";
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      setShown(true);
      return;
    }
    if (!inView && dir.current === "up") setShown(false);
  }, [inView]);

  return shown;
}

const headerDiagLeft: Variants = {
  hidden: { x: -90, y: 70, opacity: 0, scale: 0.98 },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

const stepsContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

const stepDiagRight: Variants = {
  hidden: { x: 90, y: 70, opacity: 0, scale: 0.98 },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

export default function Pasos() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, {
    amount: 0.2,
    margin: "-10% 0px -10% 0px",
  });
  const headerShown = useRevealOnlyHideOnScrollUp(headerInView);

  const stepsRef = useRef<HTMLDivElement | null>(null);
  const stepsInView = useInView(stepsRef, {
    amount: 0.2,
    margin: "0px 0px -15% 0px",
  });
  const stepsShown = useRevealOnlyHideOnScrollUp(stepsInView);

  return (
    <>
      <style jsx global>{`
        @keyframes sway {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(10px); }
        }
        .animate-sway { animation: sway 4s ease-in-out infinite; }
      `}</style>

      <section id="como-funciona" className="bg-white scroll-mt-24">
        <div className="pt-20">
          {isDesktop ? (
            <motion.div
              ref={headerRef}
              variants={headerDiagLeft}
              initial="hidden"
              animate={headerShown ? "show" : "hidden"}
              className="relative bg-[#1646C6] overflow-visible"
            >
              <HeaderContent isDesktop={true} />
            </motion.div>
          ) : (
            <div ref={headerRef} className="relative bg-[#1646C6] overflow-visible">
              <HeaderContent isDesktop={false} />
            </div>
          )}
        </div>

        <div
          ref={stepsRef}
          className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 py-12 lg:py-16"
        >
          {isDesktop ? (
            <motion.div
              variants={stepsContainer}
              initial="hidden"
              animate={stepsShown ? "show" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 justify-items-center text-center"
            >
              <StepItems />
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-8 justify-items-center text-center">
              <StepItems />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function HeaderContent({ isDesktop }: { isDesktop: boolean }) {
  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 relative">
      <div className="relative flex items-center justify-center py-7 lg:py-9">
        <div
          className={`absolute animate-sway ${
            isDesktop
              ? "left-0 lg:left-10 top-1/2 -translate-y-1/2 hidden md:block"
              : "top-0 left-1/2 -translate-x-1/2 -translate-y-[10%] w-[120px] h-[120px] md:hidden"
          }`}
        >
          <Image
            src="/img/robot/icon_robot.png"
            alt="Robot"
            width={150}
            height={150}
            className="h-auto w-[120px] lg:w-[150px] object-contain"
            priority
          />
        </div>

        <h2 className="text-center text-white font-black uppercase tracking-tight text-[22px] md:text-[28px] lg:text-[34px] leading-tight px-2">
          ¿CÓMO COMPRAR O VENDER TUS DÓLARES?
        </h2>
      </div>
    </div>
  );
}

function StepItems() {
  return (
    <>
      <motion.div variants={stepDiagRight} className="w-full">
        <PasoLink href="/user/login">
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
        </PasoLink>
      </motion.div>

      <motion.div variants={stepDiagRight} className="w-full">
        <PasoLink href="/user/login">
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
        </PasoLink>
      </motion.div>

      <motion.div variants={stepDiagRight} className="w-full">
        <PasoLink href="/user/login">
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
        </PasoLink>
      </motion.div>
    </>
  );
}

function PasoLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1646C6]/40 rounded-[28px]"
      aria-label="Ir al siguiente paso"
    >
      {children}
    </Link>
  );
}

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
    <div className="flex flex-col items-center w-full max-w-[360px] md:max-w-none cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
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

      <p className="mt-5 text-[#8A8A8A] text-[15px] md:text-[16px] leading-relaxed font-medium max-w-[320px] md:max-w-none">
        {descripcion}
      </p>
    </div>
  );
}