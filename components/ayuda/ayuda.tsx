"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  pregunta: string;
  respuesta: React.ReactNode; 
}

interface FAQCategory {
  categoria: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    categoria: "GENERALES",
    items: [
      {
        pregunta: "1 ¿Money House es seguro?",
        respuesta: "¡Por supuesto!, nos encontramos registrada en el padrón de casas de cambio de la Superintendencia de Banca, Seguros y AFP (SBS) con la resolución SBS N°00171-2025, nuestra plataforma web se encuentra encriptada y con certificado SSL y también emitimos boletas y facturas electrónicas."
      },
      {
        pregunta: "2 ¿En cuánto tiempo tendré mi cambio?",
        respuesta: "El tiempo de demora es de aproximadamente es: Para el Banco BCP es de 5 a 25 minutos, para el Banco Interbank es de 15 a 45 minutos. Para Otros Bancos el tiempo de demora será el de una transferencia interbancaria diferida (6 a 24 horas aproximadamente de lunes a viernes)."
      },
      {
        pregunta: "3 ¿Cuánto cuesta usar Money House?",
        respuesta: "No cobramos ninguna comisión por el uso de nuestros servicios. Si debes considerar el cobro de comisión por transferencia interbancaria que te puede cargar tu entidad financiera..."
      }
    ]
  },
  {
    categoria: "OPERACIONES",
    items: [
      {
        pregunta: "1 ¿Cuál es el procedimiento de cambio?",
        respuesta: (
          <div className="space-y-4">
            <p>Solo regístrate y/o Ingresa a tu perfil de usuario desde la web luego:</p>
            <ol className="list-decimal ml-5 space-y-2">
              <li><strong>Calculadora:</strong> colocar el monto y moneda que desea cambiar.</li>
              <li><strong>Transferencia:</strong> Realizar la transferencia bancaria desde tu banca móvil o app de tu banco a nuestra cuenta corriente que le brinda nuestra página web.</li>
              <li><strong>Confirmación:</strong> Hacer clic en ya transferí, adjuntar su váucher y su Nro. de transferencia bancaria.</li>
            </ol>
            <p className="pt-2">
              También puedes ver nuestro tutorial para que te puedas guiar:{" "}
              <a 
                href="https://www.youtube.com/watch?v=wrdIZPWUFhU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1a3fba] font-bold underline hover:text-[#FFB81C] transition-colors"
              >
                https://www.youtube.com/watch?v=wrdIZPWUFhU
              </a>
            </p>
          </div>
        )
      },
      {
        pregunta: "2 ¿Puedo cancelar mi operación en Money House?",
        respuesta: "Si tuvo un imprevisto y no podrá realizar la transferencia o se confundió de colocar el monto a transferir, de no haber adjuntado ningún archivo, podrá cancelar su operación haciendo click sobre cancelar operación, especificando el motivo. De tener algún inconveniente podrá comunicarse vía whatsapp."
      },
      {
        pregunta: "3 ¿El tipo de cambio que acordamos tiene un tiempo de vigencia?",
        respuesta: "Entenderemos también si tuviste un contratiempo y se te pasó el tiempo, a veces pasa. No te preocupes, ponte en contacto con nosotros que siempre hay una solución."
      }
    ]
  },
  {
    categoria: "SEGURIDAD",
    items: [
      {
        pregunta: "1 ¿Cómo maneja Money House mis datos?",
        respuesta: "Los datos que proporcionas a Money House se encuentran seguros bajo el marco de las Políticas de Privacidad de la empresa."
      },
      {
        pregunta: "2 En el proceso, me preguntan si soy PEP ¿Qué significa eso?",
        respuesta: "Una PEP (Persona Expuesta Políticamente) son personas naturales, nacionales o extranjeras, que cumplen o que en los últimos cinco (5) años hayan cumplido funciones públicas destacadas o funciones prominentes en una organización internacional, sea en el territorio nacional o extranjero y cuyas circunstancias financieras puedan ser objeto de un interés público. Incluye a sus parientes hasta segundo grado de consanguinidad, segundo de afinidad y al cónyuge."
      },
      {
        pregunta: "3 Me piden ingresar el Origen de fondos, ¿A qué se refiere? ¿Por qué se solicita esa información?",
        respuesta: "Se refiere a la procedencia del dinero, es decir, de dónde obtuvo ese ingreso. Te brindamos varias opciones para declarar el origen de sus fondos; si indica 'Otros' debe especificar el tipo de ingreso. Esta información la solicitamos en cumplimiento de la normativa de prevención de Lavado de Activos que es supervisada por la Unidad de Inteligencia Financiera (UIF)."
      }
    ]
  }
];

export default function Ayuda() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-[#1a3fba] font-[900] text-3xl lg:text-5xl uppercase tracking-tighter leading-none">
            Preguntas Frecuentes
          </h2>
          <div className="w-32 h-2 bg-[#FFB81C] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            {faqData.map((cat, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-[#1a3fba] font-[900] text-xl mb-6 border-l-4 border-[#FFB81C] pl-4 uppercase">
                  {cat.categoria}
                </h3>
                
                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => {
                    const id = `${catIdx}-${itemIdx}`;
                    const isOpen = activeId === id;
                    
                    return (
                      <div 
                        key={id}
                        className={`bg-white rounded-[20px] border-[2.5px] transition-all duration-300
                          ${isOpen ? 'border-[#FFB81C] shadow-lg scale-[1.01]' : 'border-[#1a3fba]/20 hover:border-[#1a3fba]'}`}
                      >
                        <button
                          onClick={() => toggleFaq(id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="text-[#1a3fba] font-[900] text-sm lg:text-base uppercase">
                            {item.pregunta}
                          </span>
                          <ChevronDown 
                            className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#FFB81C]' : 'text-[#1a3fba]/40'}`} 
                          />
                        </button>
                        
                        <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
                          <div className="p-6 pt-0 text-slate-600 font-medium border-t border-slate-50 mt-2">
                            <div className="pt-4">{item.respuesta}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}