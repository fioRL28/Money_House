import Alertas from "@/components/public/Inicio/Alertas";
import Bancos from "@/components/public/Inicio/Bancos";
import Hero from "@/components/public/Inicio/Hero";
import Pasos from "@/components/public/Inicio/Pasos";
import Testimonios from "@/components/public/Inicio/Testimonios";
import Trayectoria from "@/components/public/Inicio/Trayectoria";


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

