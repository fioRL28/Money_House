import Image from "next/image";

const CARDS = [
  { icon: "/img/trayectoria/icon_trayectoria1.png", label: "USUARIOS\nREGISTRADOS", value: "+ 10,000" },
  { icon: "/img/trayectoria/icon_trayectoria2.png", label: "OPERACIONES\nREALIZADAS", value: "+ 120,000" },
  { icon: "/img/trayectoria/icon_trayectoria3.png", label: "DÓLARES\nCAMBIADOS", value: "+ 500 Millones" },
  { icon: "/img/trayectoria/icon_trayectoria4.png", label: "SOLES\nAHORRADOS", value: "+ 20 Millones" },
];

export default function Trayectoria() {
  return (
    <section className="bg-[#1a3fb9] text-white">

      <div className="mx-auto max-w-[1200px] px-6 py-8 lg:py-10">
        
        <h2 className="text-center font-black uppercase tracking-tight text-[26px] md:text-[32px] mb-8">
          CONOCE NUESTRA TRAYECTORIA
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 w-full">
            {CARDS.map((c, i) => (
              <div
                key={i}
                className="rounded-[18px] border border-white/30 px-3 py-5 text-center bg-white/5 flex flex-col items-center justify-center min-h-[180px]"
              >
                <div className="mb-4 h-[55px] flex items-center justify-center">
                  <Image
                    src={c.icon}
                    alt={c.label}
                    width={55}
                    height={55}
                    className="h-auto w-auto object-contain brightness-0 invert"
                  />
                </div>

                <div className="whitespace-pre-line text-[10px] font-bold uppercase leading-tight opacity-90 min-h-[30px] flex items-center">
                  {c.label}
                </div>

                <div className="mt-3 text-[18px] font-black">
                  {c.value}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <Image
              src="/img/robot/icon_robot1.png"
              alt="Robot"
              width={220}
              height={180}
              className="h-auto w-[220px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}