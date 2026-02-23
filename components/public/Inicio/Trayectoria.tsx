"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

const CARDS = [
  { icon: "/img/trayectoria/icon_trayectoria1.png", label: "USUARIOS\nREGISTRADOS", value: "+ 10,000" },
  { icon: "/img/trayectoria/icon_trayectoria2.png", label: "OPERACIONES\nREALIZADAS", value: "+ 120,000" },
  { icon: "/img/trayectoria/icon_trayectoria3.png", label: "DÓLARES\nCAMBIADOS", value: "+ 500 Millones" },
  { icon: "/img/trayectoria/icon_trayectoria4.png", label: "SOLES\nAHORRADOS", value: "+ 20 Millones" },
];

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const titleFromRight: Variants = {
  hidden: { x: 70, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.9, ease: EASE_OUT } },
};

const gridWrap: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardFromLeft: Variants = {
  hidden: { x: -70, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

const iconFloat = { y: [-2, 2, -2], transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } } as const;

const robotPendulum = { rotate: [-4, 4, -4], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } } as const;

export default function Trayectoria() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleInView = useInView(titleRef, { amount: 0.25, margin: "-10% 0px -10% 0px" });

  const gridRef = useRef<HTMLDivElement | null>(null);
  const gridInView = useInView(gridRef, { amount: 0.25, margin: "-10% 0px -10% 0px" });

  return (
    <section className="bg-[#1a3fb9] text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-14">
        {isDesktop ? (
          <motion.h2
            ref={titleRef}
            variants={titleFromRight}
            initial="hidden"
            animate={titleInView ? "show" : "hidden"}
            className="text-center font-semibold uppercase tracking-tight text-[28px] md:text-[38px] mb-10"
          >
            CONOCE NUESTRA TRAYECTORIA
          </motion.h2>
        ) : (
          <h2 className="text-center font-semibold uppercase tracking-tight text-[28px] md:text-[38px] mb-10">
            CONOCE NUESTRA TRAYECTORIA
          </h2>
        )}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="relative w-full">
            {/* Robot para mobile */}
            <motion.div animate={robotPendulum as any} className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-6 z-10 origin-top">
              <Image
                src="/img/robot/icon_robot1.png"
                alt="Robot"
                width={250}
                height={200}
                className="w-[140px] sm:w-[170px] md:w-[190px] object-contain"
                priority
              />
            </motion.div>

            {isDesktop ? (
              <motion.div
                ref={gridRef}
                variants={gridWrap}
                initial="hidden"
                animate={gridInView ? "show" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full pt-20 sm:pt-24 md:pt-28 lg:pt-0"
              >
                <CardItems />
              </motion.div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full pt-20 sm:pt-24 md:pt-28 lg:pt-0">
                <CardItems isDesktop={false} />
              </div>
            )}
          </div>

          {/* Robot para desktop */}
          {isDesktop && (
            <motion.div animate={robotPendulum as any} className="hidden lg:block shrink-0 origin-top">
              <Image
                src="/img/robot/icon_robot1.png"
                alt="Robot"
                width={250}
                height={200}
                className="w-[250px] object-contain"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function CardItems({ isDesktop = true }: { isDesktop?: boolean }) {
  return (
    <>
      {CARDS.map((c) => (
        <motion.div
          key={c.label}
          variants={isDesktop ? cardFromLeft : undefined}
          whileHover={isDesktop ? { scale: 1.05 } : undefined}
          transition={isDesktop ? { type: "spring", stiffness: 200, damping: 15 } : undefined}
          className="rounded-[22px] border border-white px-5 py-8 text-center flex flex-col items-center justify-center min-h-[210px]"
        >
          <motion.div animate={iconFloat as any} className="mb-5">
            <Image
              src={c.icon}
              alt={c.label}
              width={64}
              height={64}
              className="object-contain brightness-0 invert"
            />
          </motion.div>

          <div className="whitespace-pre-line text-[13px] font-bold uppercase leading-tight min-h-[35px] flex items-center">
            {c.label}
          </div>

          <div className="mt-4 text-[21px] font-black">{c.value}</div>
        </motion.div>
      ))}
    </>
  );
}