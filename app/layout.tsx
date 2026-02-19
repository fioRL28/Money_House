import Navbar from "../components/layout/Navbar"; 
import Footer from "../components/layout/footer"; 
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        
        <Navbar /> 

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}