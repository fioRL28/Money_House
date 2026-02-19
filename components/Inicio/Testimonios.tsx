

"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type Testimonio = {
  nombre: string;
  texto: string;
};

const TESTIMONIOS: Testimonio[] = [
  {
    nombre: "HUGO FROILAN",
    texto:
      "Money House es una excelente alternativa, siempre tienen el mejor precio y te responden inmediatamente y solucionan cualquier inconveniente en el acto.",
  },
  {
    nombre: "HAROLD MORENO",
    texto:
      "Recomendado, hice mi primer cambio y me llegó en menos de 5 minutos. Increíble, un poco de miedo y duda pero ahora será mi nueva casa de cambio.",
  },
  {
    nombre: "MIRTHA RAMIREZ",
    texto:
      "Excelente servicio, rápido y con un tipo de cambio muy competitivo. El proceso fue sencillo y el personal fue muy amable.",
  },

  // ✅ agrega 3 más para que exista el segundo bloque (D,E,F)
  {
    nombre: "DIANA SALAZAR",
    texto:
      "Todo el proceso fue claro y rápido. Me atendieron bien y el tipo de cambio fue mejor que en el banco.",
  },
  {
    nombre: "EDUARDO CASTRO",
    texto:
      "La transferencia llegó sin problemas. Buen soporte y la web es fácil de usar.",
  },
  {
    nombre: "FABIOLA QUISPE",
    texto:
      "Me gustó la rapidez y la confianza. Definitivamente lo volvería a usar.",
  },
];

const PAGE_SIZE = 3;

export default function Testimonios() {
  const pages = Math.ceil(TESTIMONIOS.length / PAGE_SIZE);
  const [pageStart, setPageStart] = useState(0); // 0 -> 3 -> 0 ...

  const visibles = useMemo(() => {
    return TESTIMONIOS.slice(pageStart, pageStart + PAGE_SIZE);
  }, [pageStart]);

  const next = () => {
    setPageStart((prev) => {
      const currentPage = prev / PAGE_SIZE;
      const nextPage = (currentPage + 1) % pages;
      return nextPage * PAGE_SIZE;
    });
  };

  const prev = () => {
    setPageStart((prev) => {
      const currentPage = prev / PAGE_SIZE;
      const prevPage = (currentPage - 1 + pages) % pages;
      return prevPage * PAGE_SIZE;
    });
  };

  return (
    <section className="bg-[#F4F4F4] py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Título */}
        <div className="flex justify-center">
          <div className="bg-[#FFB81C] px-8 py-3 rounded-[16px]">
            <h2 className="text-[#1646C6] text-[24px] md:text-[28px] font-semibold">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </div>

        {/* Contenido */}
        <div className="mt-12 flex items-center gap-8">
          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="hidden lg:flex items-center justify-center w-[60px] h-[60px] 
                        rounded-full border-2 border-[#1646C6] 
                        hover:bg-[#1646C6] transition-all group"
            >
            <ChevronLeft
                size={28}
                className="text-[#1646C6] group-hover:text-white transition-colors"
            />
        </button>


          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 flex-1">
            {visibles.map((t, idx) => (
              <div
                key={`${t.nombre}-${pageStart}-${idx}`}
                className="bg-white border-2 border-[#1646C6] rounded-[20px] px-8 py-8"
              >
                <h3 className="text-[#1646C6] font-bold text-[20px] text-center">
                  {t.nombre}
                </h3>

                <p className="mt-5 text-[#6B6B6B] text-[15px] leading-relaxed">
                  {t.texto}
                </p>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente"
            className="hidden lg:flex items-center justify-center w-[60px] h-[60px] 
                        rounded-full border-2 border-[#1646C6] 
                        hover:bg-[#1646C6] transition-all group"
            >
            <ChevronRight
                size={28}
                className="text-[#1646C6] group-hover:text-white transition-colors"
            />
            </button>

        </div>
      </div>
    </section>
  );
}
