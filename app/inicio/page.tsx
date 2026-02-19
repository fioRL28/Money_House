import Alertas from "@/components/Inicio/Alertas";
import Bancos from "@/components/Inicio/Bancos";
import Hero from "@/components/Inicio/Hero";
import Pasos from "@/components/Inicio/Pregunta";
import Pregunta from "@/components/Inicio/Pregunta"
import Testimonios from "@/components/Inicio/Testimonios";
import Trayectoria from "@/components/Inicio/Trayectoria";


export default function Page() {
  return (
    <>
      <Hero />
      <Bancos/>
      <Alertas/>
      
      <Pasos/>
      <Trayectoria/>
      <Testimonios/>
    </>
  );
}

