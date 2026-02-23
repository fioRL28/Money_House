"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Testimonio = {
  nombre: string;
  texto: string;
};

const TESTIMONIOS: Testimonio[] = [
  { nombre: "HUGO FROILAN", texto: "Money House es una excelente alternativa, siempre tienen el mejor precio y te responden inmediatamente y solucionan cualquier inconveniente en el acto." },
  { nombre: "HAROLD MORENO", texto: "Recomendado, hice mi primer cambio y me llegó en menos de 5 minutos. Increíble, un poco de miedo y duda pero ahora será mi nueva casa de cambio." },
  { nombre: "MIRTHA RAMIREZ", texto: "Excelente servicio, rápido y con un tipo de cambio muy competitivo. El proceso fue sencillo y el personal fue muy amable." },
  { nombre: "DIANA SALAZAR", texto: "Todo el proceso fue claro y rápido. Me atendieron bien y el tipo de cambio fue mejor que en el banco." },
  { nombre: "EDUARDO CASTRO", texto: "La transferencia llegó sin problemas. Buen soporte y la web es fácil de usar." },
  { nombre: "FABIOLA QUISPE", texto: "Me gustó la rapidez y la confianza. Definitivamente lo volvería a usar." },
];

function getIsDesktop() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(min-width: 768px)").matches;
}

export default function Testimonios() {
  const [isDesktop, setIsDesktop] = useState(true);
  const pageSize = isDesktop ? 3 : 1;
  const [pageStart, setPageStart] = useState(0);

  useEffect(() => {
    const update = () => setIsDesktop(getIsDesktop());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = useMemo(() => Math.ceil(TESTIMONIOS.length / pageSize), [pageSize]);
  useEffect(() => {
    setPageStart((prev) => {
      const currentPage = Math.floor(prev / pageSize);
      const safePage = Math.min(currentPage, pages - 1);
      return safePage * pageSize;
    });
  }, [pageSize, pages]);

  const visibles = useMemo(() => TESTIMONIOS.slice(pageStart, pageStart + pageSize), [pageStart, pageSize]);

  const next = () => {
    setPageStart((prev) => {
      const currentPage = Math.floor(prev / pageSize);
      const nextPage = (currentPage + 1) % pages;
      return nextPage * pageSize;
    });
  };

  const prev = () => {
    setPageStart((prev) => {
      const currentPage = Math.floor(prev / pageSize);
      const prevPage = (currentPage - 1 + pages) % pages;
      return prevPage * pageSize;
    });
  };

  return (
    <section className="bg-[#F4F4F4] py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">

        {/* Título */}
        <div className="flex justify-start mb-8">
          {isDesktop ? (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FFB81C] px-6 md:px-8 py-2 rounded-[12px] shadow-sm"
            >
              <h2 className="text-[#1646C6] text-[18px] md:text-[24px] font-bold">
                Lo que dicen nuestros clientes
              </h2>
            </motion.div>
          ) : (
            <div className="bg-[#FFB81C] px-6 md:px-8 py-2 rounded-[12px] shadow-sm">
              <h2 className="text-[#1646C6] text-[18px] md:text-[24px] font-bold">
                Lo que dicen nuestros clientes
              </h2>
            </div>
          )}
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div className="relative flex justify-center px-8">
            <button
              onClick={prev}
              className="absolute -left-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[44px] h-[44px] rounded-full border-2 border-[#1646C6] bg-white hover:bg-[#1646C6] transition-all group shadow-sm"
            >
              <ChevronLeft size={26} className="text-[#1646C6] group-hover:text-white" />
            </button>

            <div className="bg-white border-2 border-[#1646C6] rounded-[20px] px-4 py-5 w-full flex flex-col min-h-[190px] shadow-sm">
              <h3 className="text-[#1646C6] font-bold text-[18px] text-center uppercase mb-4">
                {visibles[0]?.nombre}
              </h3>
              <p className="text-[#6B6B6B] text-[14px] leading-relaxed text-justify">
                {visibles[0]?.texto}
              </p>
            </div>

            <button
              onClick={next}
              className="absolute -right-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[44px] h-[44px] rounded-full border-2 border-[#1646C6] bg-white hover:bg-[#1646C6] transition-all group shadow-sm"
            >
              <ChevronRight size={26} className="text-[#1646C6] group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* DESKTOP */}
        {isDesktop && (
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={prev}
              className="shrink-0 flex items-center justify-center w-[50px] h-[50px] rounded-full border-2 border-[#1646C6] hover:bg-[#1646C6] transition-all group"
            >
              <ChevronLeft size={32} className="text-[#1646C6] group-hover:text-white" />
            </button>

            <div className="grid grid-cols-3 gap-8 flex-1">
              {visibles.map((t, idx) => (
                <motion.div
                  key={`${t.nombre}-${pageStart}-${idx}`}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border-2 border-[#1646C6] rounded-[20px] px-6 py-8 flex flex-col min-h-[220px] shadow-sm"
                >
                  <h3 className="text-[#1646C6] font-bold text-[18px] text-center uppercase mb-4">
                    {t.nombre}
                  </h3>
                  <p className="text-[#6B6B6B] text-[14px] leading-relaxed text-center">
                    {t.texto}
                  </p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={next}
              className="shrink-0 flex items-center justify-center w-[50px] h-[50px] rounded-full border-2 border-[#1646C6] hover:bg-[#1646C6] transition-all group"
            >
              <ChevronRight size={32} className="text-[#1646C6] group-hover:text-white" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}