import React from "react";

export default function Blog() {
  return (
    <section className="bg-[#F7F9FC] py-16">
      <div className="mx-auto max-w-[1100px] px-6">

        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-[#1646C6] text-[34px] md:text-[42px] font-black uppercase tracking-tight">
            Blog
          </h2>
          <p className="mt-3 text-slate-500 text-[16px]">
            Información económica actualizada y análisis del mercado cambiario.
          </p>
        </div>

        {/* Card principal */}
        <article className="bg-white rounded-[28px] shadow-lg p-8 md:p-12">

          {/* Encabezado */}
          <header className="mb-8 border-b border-slate-200 pb-6">
            <h3 className="text-[#1646C6] text-[28px] md:text-[34px] font-black leading-tight">
              BCRP interviene para frenar caída del dólar
            </h3>
            <p className="mt-3 text-slate-400 text-sm font-medium">
              14 noviembre 2025
            </p>
          </header>

          {/* Contenido */}
          <div className="space-y-8 text-slate-700 text-[16px] leading-relaxed">

            <p>
              El Banco Central de Reserva del Perú (BCRP) realizó nuevas compras 
              de dólares en el mercado cambiario para contener la fuerte caída 
              del billete verde. Solo en noviembre, la entidad adquirió 
              <strong> USD 104 millones</strong>, luego de que el tipo de cambio 
              llegara a <strong>S/ 3.353</strong>, su nivel más bajo en más de cinco años.
            </p>

            {/* Subtítulo */}
            <div>
              <h4 className="text-[#1646C6] font-bold text-[20px] mb-4">
                ¿Por qué el dólar sigue bajando en Perú?
              </h4>
              <ul className="space-y-3 list-disc pl-6 marker:text-[#1646C6]">
                <li>
                  Altos precios de los metales —cobre, oro y plata— que impulsan un mayor ingreso de divisas.
                </li>
                <li>
                  Un superávit comercial proyectado de <strong>USD 30,000 millones</strong> para el 2025.
                </li>
                <li>
                  Debilidad global del dólar frente a monedas emergentes.
                </li>
              </ul>

              <p className="mt-4">
                Como resultado, el dólar acumula una caída de 
                <strong> 10.5%</strong> en lo que va del año, fortaleciendo 
                significativamente al sol peruano.
              </p>
            </div>

            {/* Subtítulo */}
            <div>
              <h4 className="text-[#1646C6] font-bold text-[20px] mb-4">
                Efectos en la economía: ganadores y perdedores
              </h4>
              <ul className="space-y-3 list-disc pl-6 marker:text-[#1646C6]">
                <li>
                  <strong>Exportadores:</strong> pierden competitividad por un tipo de cambio real más bajo.
                </li>
                <li>
                  <strong>Importadores:</strong> se benefician al comprar insumos a menor costo.
                </li>
                <li>
                  <strong>Inflación:</strong> el dólar barato contribuye a que la inflación anual baje a 
                  <strong> 3.15%</strong>, acercándose al rango meta del BCRP.
                </li>
              </ul>
            </div>

            {/* Subtítulo */}
            <div>
              <h4 className="text-[#1646C6] font-bold text-[20px] mb-4">
                ¿Qué busca el BCRP con estas intervenciones?
              </h4>
              <p>
                Según analistas, el BCRP no intenta revertir la tendencia, 
                sino moderar la velocidad de la caída del dólar y evitar 
                movimientos bruscos en el mercado.
              </p>
              <p className="mt-3">
                Además, la autoridad monetaria se prepara ante eventuales 
                ventas de dólares de las AFP, que requerirán soles para 
                atender solicitudes de retiros.
              </p>
            </div>

            {/* Subtítulo */}
            <div>
              <h4 className="text-[#1646C6] font-bold text-[20px] mb-4">
                ¿Seguirá bajando el dólar en Perú?
              </h4>

              <p>
                Los bancos proyectan que, luego de la intervención del BCRP, 
                el tipo de cambio se moverá en el rango:
              </p>

              <div className="mt-4 bg-[#F4F7FF] border border-[#DCE5FF] rounded-xl p-4">
                <p className="font-semibold text-[#1646C6]">
                  S/ 3.35 a S/ 3.40 (escenario base)
                </p>
              </div>

              <p className="mt-4">
                Si los precios internacionales del oro y el cobre continúan altos, 
                algunos especialistas estiman que el dólar podría caer aún más:
              </p>

              <div className="mt-4 bg-[#FFF4D8] border border-[#FFE2A1] rounded-xl p-4">
                <p className="font-semibold text-[#A56A00]">
                  S/ 3.30 a S/ 3.35 (escenario de mayor presión bajista)
                </p>
              </div>
            </div>

            {/* Conclusión */}
            <div>
              <h4 className="text-[#1646C6] font-bold text-[20px] mb-4">
                Conclusión
              </h4>
              <p>
                Las intervenciones del BCRP buscan estabilizar el mercado cambiario, 
                pero la tendencia a la baja del dólar se mantiene. 
                Los factores externos continúan favoreciendo al sol peruano, 
                por lo que es posible que el tipo de cambio siga mostrando 
                niveles bajos en las próximas semanas.
              </p>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}
