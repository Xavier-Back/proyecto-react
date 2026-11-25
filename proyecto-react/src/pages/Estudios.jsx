import Header from "../components/Header";
import Footer from "../components/Footer";

function Estudios() {
  return (
    <>
      <Header />
      <section id="estudio" class="relative h-screen w-full snap-start overflow-hidden bg-[#FFE600] text-black pt-20 pb-16 px-6 md:px-12 flex items-center justify-center border-t-4 border-black">
      
      <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* <!-- Métricas Gigantes --> */}
        <div class="lg:col-span-5 flex flex-col gap-4">
          <span class="font-mono text-xs font-black uppercase bg-black text-[#FFE600] px-3 py-1 self-start">[05] CAPACIDAD TÉCNICA</span>
          <h2 class="text-3xl sm:text-5xl font-black uppercase leading-none">Ingeniería Sin Compromisos</h2>
          
          <div class="flex flex-col border-4 border-black bg-[#FFE600]">
            <div class="p-4 border-b-4 border-black flex items-center justify-between">
              <span class="font-mono font-bold text-xs uppercase">Resistencia Hormigón</span>
              <span class="font-black text-2xl">50 MPa</span>
            </div>
            <div class="p-4 border-b-4 border-black flex items-center justify-between bg-black text-[#FFE600]">
              <span class="font-mono font-bold text-xs uppercase">Premios Nacionales</span>
              <span class="font-black text-2xl">14</span>
            </div>
            <div class="p-4 flex items-center justify-between">
              <span class="font-mono font-bold text-xs uppercase">Vida Útil Estimada</span>
              <span class="font-black text-2xl">+120 AÑOS</span>
            </div>
          </div>
        </div>

        {/* <!-- Plano Técnico SVG --> */}
        <div class="lg:col-span-7 bg-black border-4 border-black p-5 shadow-[10px_10px_0px_0px_#000]">
          <div class="flex justify-between font-mono text-xs text-[#FFE600] border-b-2 border-[#FFE600] pb-2 mb-3">
            <span>PLANTA TIPO // MÓDULO B</span>
            <span>COTAS EN MM</span>
          </div>
          <svg class="w-full h-56 sm:h-64" viewBox="0 0 400 220" fill="none">
            <rect x="20" y="20" width="360" height="180" stroke="#FFE600" stroke-width="4"/>
            <line x1="150" y1="20" x2="150" y2="200" stroke="#FFE600" stroke-width="4"/>
            <line x1="150" y1="110" x2="380" y2="110" stroke="#FFE600" stroke-width="4"/>
            <rect x="40" y="40" width="90" height="140" fill="#FFE600" fill-opacity="0.15" stroke="#FFE600" stroke-width="2" stroke-dasharray="6 4"/>
            <circle cx="265" cy="65" r="28" stroke="#FFE600" stroke-width="3"/>
            <rect x="175" y="130" width="180" height="50" fill="#FFE600"/>
            <text x="265" y="160" text-anchor="middle" fill="#000" font-family="monospace" font-weight="900" font-size="14">PATIO CENTRAL</text>
          </svg>
        </div>

      </div>
    </section>
      <Footer />
    </>
  );
}

export default Estudios;
