import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a3fba] text-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-14 pb-8">
        {/* TOP: Logo + Síguenos */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo */}
          <div className="flex items-start gap-5">
            <Image
              src="/img/logo_2.png"
              alt="MoneyHouse"
              width={320}
              height={160}
              className="h-auto w-[240px] md:w-[280px] object-contain"
              priority
            />
          </div>

          {/* Síguenos */}
          <div className="lg:text-right">
            <div className="text-[18px] font-extrabold uppercase tracking-wide">
              SÍGUENOS
            </div>

            <div className="mt-3 flex gap-3 lg:justify-end">
              <SocialIcon href="#" label="YouTube">
                <Play className="h-5 w-5 fill-current" />
              </SocialIcon>

              <SocialIcon href="#" label="Facebook">
                <Facebook className="h-5 w-5 fill-current" />
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialIcon>

              <SocialIcon href="#" label="LinkedIn">
                <Linkedin className="h-5 w-5 fill-current" />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* MID: columnas */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Operado por + Horarios */}
          <div>
            <h4 className="text-[20px] font-extrabold uppercase">Operado por:</h4>

            <div className="mt-4 space-y-2 text-[16px] leading-relaxed opacity-95">
              <div>MH DIGITAL BUSINESS S.A.C</div>
              <div>RUC: 20613487817</div>
            </div>

            <h4 className="mt-6 text-[20px] font-extrabold uppercase">Horarios</h4>

            <div className="mt-4 space-y-4 text-[16px] leading-relaxed opacity-95">
              <div>
                <div className="font-semibold">Lunes a Viernes:</div>
                <div>9:00 am. - 6:00 pm.</div>
              </div>

              <div>
                <div className="font-semibold">Sábados:</div>
                <div>9:00 am. - 1:00 pm.</div>
              </div>
            </div>
          </div>

          {/* Contáctanos */}
          <div>
            <h4 className="text-[20px] font-extrabold uppercase">Contáctanos</h4>

            <div className="mt-4 space-y-3 text-[16px] leading-relaxed opacity-95">
              <div className="font-semibold">contacto@moneyhouse.pe</div>

              <div className="flex flex-wrap items-center gap-2">
                <span>Consultas:</span>
                <span className="font-extrabold underline underline-offset-4">
                  923 814 836
                </span>
              </div>

              <div className="mt-4 italic">
                Av. Nicolas Arriola 314&nbsp; Dpt.D Int.1101
              </div>
              <div className="italic">Urb. Santa Catalina - La Victoria</div>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-[20px] font-extrabold uppercase">Empresa</h4>
            <ul className="mt-4 space-y-3 text-[16px] opacity-95">
              <li>
                <Link className="hover:underline underline-offset-4" href="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="text-[20px] font-extrabold uppercase">Soporte</h4>
            <ul className="mt-4 space-y-3 text-[16px] opacity-95">
              <li>
                <Link className="hover:underline underline-offset-4" href="#">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="#">
                  Como funciona
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal + libro */}
          <div>
            <h4 className="text-[20px] font-extrabold uppercase">Legal</h4>
            <ul className="mt-4 space-y-3 text-[16px] opacity-95">
              <li>
                <Link className="hover:underline underline-offset-4" href="#">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="#">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link className="hover:underline underline-offset-4" href="#">
                  Política de Cookies
                </Link>
              </li>
            </ul>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-white/10">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-[22px]">
                📖
              </span>
              <span className="text-[18px] font-semibold leading-tight">
                Libro de
                <br />
                reclamaciones
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 text-center text-[16px] opacity-90">
          Todos los derechos reservados ©Money House 2025
        </div>
      </div>

      {/* Widget flotante (si lo dejas aquí, ok… pero mejor muévelo a otro componente) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <div className="bg-white text-[#003B95] px-4 py-2 rounded-full font-extrabold text-sm shadow-lg flex items-center gap-2">
          <span className="text-base">💬</span> HOLA!
        </div>

        <button
          type="button"
          className="w-[74px] h-[74px] bg-white rounded-full p-2 shadow-2xl hover:scale-105 transition-transform"
          aria-label="Abrir chat"
        >
          <Image
            src="/img/robot/icon_robot1.png"
            alt="Robot"
            width={64}
            height={64}
            
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#003B95] hover:brightness-95"
    >
      {children}
    </Link>
  );
}
