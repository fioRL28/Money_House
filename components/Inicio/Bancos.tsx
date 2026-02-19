import Link from "next/link";
import Image from "next/image";

export default function Bancos() {
  return (
    <section className="bg-[#F3F3F3] py-10 sm:py-14">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* CARD 1 */}
          <div className="rounded-[28px] sm:rounded-[32px] bg-[#EEEEEE] overflow-hidden">
            <div className="bg-[#1a3fba] text-white text-center font-black text-[18px] sm:text-[22px] lg:text-[24px] py-3">
              Transacciones inmediatas
            </div>

            <div className="px-6 sm:px-10 py-8 sm:py-10 text-center">
              {/* LOGOS */}
              <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap">
                <Image
                  src="/img/bancos/logo_bcp_0.png"
                  alt="BCP"
                  width={170}
                  height={52}
                  className="h-auto w-[120px] sm:w-[150px] md:w-[170px] object-contain"
                  priority={false}
                />
                <Image
                  src="/img/bancos/logo_interbank_0.png"
                  alt="Interbank"
                  width={190}
                  height={52}
                  className="h-auto w-[130px] sm:w-[160px] md:w-[190px] object-contain"
                />
              </div>

              {/* TEXTO */}
              <div className="mt-6 flex items-center justify-center gap-3 text-[#1a3fba]">
                <Image
                  src="/img/icon_tiempo.png"
                  alt="Tiempo"
                  width={22}
                  height={22}
                  className="object-contain"
                />
                <p className="text-[15px] sm:text-[17px] md:text-[18px] font-medium">
                  Tiempo de abono (5 a 45 minutos)
                </p>
              </div>

              <div className="mt-4">
                <Link href="#" className="text-[#1a3fba] font-black underline text-[14px] sm:text-[16px]">
                  Ver horarios
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-[28px] sm:rounded-[32px] bg-[#EEEEEE] overflow-hidden">
            <div className="bg-[#FFB81C] text-[#1a3fba] text-center font-black text-[18px] sm:text-[22px] lg:text-[24px] py-3">
              Transacciones interbancarias
            </div>

            <div className="px-6 sm:px-10 py-8 sm:py-10 text-center">
              {/* LOGOS */}
            
              <div className="flex justify-center items-center gap-5 sm:gap-8 flex-wrap sm:flex-nowrap">
                <Image
                  src="/img/bancos/logo_bbva.png"
                  alt="BBVA"
                  width={150}
                  height={46}
                  className="h-auto w-[110px] sm:w-[130px] md:w-[150px] object-contain"
                />
                <Image
                  src="/img/bancos/logo_scotia.png"
                  alt="Scotiabank"
                  width={190}
                  height={46}
                  className="h-auto w-[130px] sm:w-[160px] md:w-[190px] object-contain"
                />
                <Image
                  src="/img/bancos/icon_bancos_0.png"
                  alt="Otros bancos"
                  width={140}
                  height={46}
                  className="h-auto w-[110px] sm:w-[120px] md:w-[140px] object-contain"
                />
              </div>

              {/* TEXTO */}
              <div className="mt-6 flex items-center justify-center gap-3 text-[#1a3fba]">
                <Image
                  src="/img/icon_tiempo.png"
                  alt="Tiempo"
                  width={22}
                  height={22}
                  className="object-contain"
                />
                <p className="text-[15px] sm:text-[17px] md:text-[18px] font-medium">
                  Tiempo de abono (6 a 24 horas hábiles)
                </p>
              </div>

              <div className="mt-4">
                <Link href="#" className="text-[#1a3fba] font-black underline text-[14px] sm:text-[16px]">
                  Ver horarios y comisiones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
