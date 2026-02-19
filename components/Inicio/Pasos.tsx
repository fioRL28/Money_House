import Image from "next/image";

export default function Pasos() {
  return (
    <section className="bg-white">
      {/* Header azul */}
      <div className="relative bg-[#1646C6]">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
          <div className="relative flex items-center justify-center py-8 lg:py-10">
            {/* Robot izquierda */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
              <Image
                src="/img/robot-top.png" // <-- tu robot grande
                alt="Robot"
                width={150}
                height={150}
                className="h-auto w-[120px] lg:w-[150px] object-contain"
                priority
              />
            </div>

            <h2 className="text-center text-white font-black uppercase tracking-tight text-[26px] md:text-[34px] lg:text-[40px]">
              ¿CÓMO COMPRAR O VENDER TUS DÓLARES?
            </h2>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-20 text-center">
          {/* Paso 1 */}
          <Paso
            paso="PASO 1"
            titulo="COTIZA"
            descripcion={
              <>
                Usa nuestra calculadora <br />
                para indicarnos el monto <br />
                que deseas cambiar.
              </>
            }
            iconSrc="/img/pasos/paso1.png"
          />

          {/* Paso 2 */}
          <Paso
            paso="PASO 2"
            titulo="TRANSFIERE"
            descripcion={
              <>
                Desde tu banca movil o <br />
                banca por internet <br />
                transfiere a nuestra <br />
                cuenta y envíanos una <br />
                foto del comprobante.
              </>
            }
            iconSrc="/img/pasos/paso2.png"
          />

          {/* Paso 3 */}
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
            iconSrc="/img/pasos/paso3.png"
          />
        </div>
      </div>
    </section>
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
    <div className="flex flex-col items-center">
      {/* Label PASO */}
      <div className="inline-flex items-center justify-center rounded-full border-2 border-[#1646C6] px-6 py-2 text-[#1646C6] font-black text-[18px]">
        {paso}
      </div>

      {/* Icono */}
      <div className="mt-8">
        <Image
          src={iconSrc}
          alt={titulo}
          width={160}
          height={160}
          className="h-auto w-[140px] lg:w-[160px] object-contain"
        />
      </div>

      {/* Botón amarillo */}
      <div className="mt-8 inline-flex items-center justify-center rounded-[10px] bg-[#FFB81C] px-10 py-3 text-[#1646C6] font-black text-[22px] uppercase">
        {titulo}
      </div>

      {/* Texto gris */}
      <p className="mt-6 text-[#8A8A8A] text-[18px] leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
}
