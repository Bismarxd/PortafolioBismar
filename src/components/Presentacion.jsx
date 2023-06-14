import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Presentacion = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 500  }); // Inicializar AOS con una duración de animación de 800ms
      }, []);

      

  return (
    <>

        <section id="habilidades" className="py-16 shadow-xl shadow-slate-800 mt-28 md:m-5">
            
            <div className="max-w-[100rem] mx-auto bg-black rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-center text-white " >
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <div className="relative overflow-hidden flex justify-center items-center">
                    <img
                        src="/img/kenny.png"
                        alt="Mi foto"
                        className="w-auto h-20 md:h-48 object-cover shadow-lg transform hover:scale-110 "
                        data-aos="fade-up"
                        data-aos-delay="0"
                    />
                    <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-800 opacity-0 transition-opacity duration-300 "></div>
                    </div> {/* overlay define los efectos de transision */}
                </div>
                <div className="w-full md:w-2/3 md:pl-8 font-serif">
                    <h2 className="md:text-4xl font-bold mb-4 uppercase">Bismarck Mayta Tintaya</h2>
                    <p className="text-xs md:text-lg leading-relaxed text-justify" data-aos="fade-up" data-aos-delay="400">
                    Soy un desarrollador web apasionado por crear soluciones innovadoras y atractivas para mis clientes. Con mi experiencia en HTML, CSS, JavaScript y React, estoy comprometido a brindar una experiencia de usuario excepcional a través de la creación de sitios web intuitivos y atractivos.
                    </p>
                </div>
            </div>
        </section>

        <section data-aos="fade-up"
                    data-aos-delay="100">
            <h1 className='text-white text-center text-lg md:text-4xl font-serif font-extrabold mt-10'>SERVICIOS DE DESAROLLO WEB</h1>

            <div className="md:flex md:m-10 grid grid-cols-2">
                <div className="max-w-[120rem] mx-auto flex flex-col gap-5 items-center mt-4">
                    <img src="/img/desarolloweb.svg" alt="imagen backend" 
                        className='md:h-32 h-16'/>
                    <h1 className='text-white text-xs md:text-lg '>DESAROLLO DE SITIOS WEB COMPLETOS</h1>            
                </div>

                <div className="max-w-[120rem] mx-auto flex flex-col gap-5 items-center mt-4">
                    <img src="/img/desarollowebcompleto.png" alt="imagen backend" 
                        className='md:h-32 h-16'/>
                    <h1 className='text-white text-xs md:text-lg '>DESAROLLO DE APLICCIONES WEB COMPLETAS</h1>            
                </div>

                <div className="max-w-[120rem] mx-auto flex flex-col gap-5 items-center mt-4">
                    <img src="/img/integracion de sistemas.png" alt="imagen backend" 
                        className='md:h-32 h-16'/>
                    <h1 className='text-white text-xs md:text-lg '>INTEGRACION DE SISTEMAS</h1>            
                </div>

                <div className="max-w-[120rem] mx-auto flex flex-col gap-5 items-center mt-4">
                    <img src="/img/desarollodeAPI.svg" alt="imagen backend" 
                        className='md:h-32 h-16'/>
                    <h1 className='text-white text-xs md:text-lg'>DESAROLLO DE APIS </h1>            
                </div>

                <div className="max-w-[120rem] mx-auto flex flex-col gap-5 items-center mt-4">
                    <img src="/img/mantenimientoysoporte.png" alt="imagen backend" 
                        className='md:h-32 h-16'/>
                    <h1 className='text-white text-xs md:text-lg'>MANTENIMIENTO Y SOPORTE</h1>            
                </div>
            </div>
            

        </section>
        
    </>
  )
}

export default Presentacion