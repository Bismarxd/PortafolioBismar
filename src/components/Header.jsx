import AnimacionLetras from "./AnimacionLetras";
import AOS from 'aos'
import 'aos/dist/aos.css';
import {useState, useEffect } from "react";


const Header = () => {
  //stats para cambiar al imagenes
    const [cambiarImagen, setCambiarImagen] = useState(0)
    const imagenes = [
        './src/img/React.svg.png',
        './src/img/node.svg.png',
        './src/img/html.png',
        './src/img/css.svg.png',
        './src/img/js.png'
    ]; 

    //state para el menu
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
      setMenu(!menu)
    };

  //Cambia las imagenes del Header
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 500 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setCambiarImagen(prevIndex => (prevIndex + 1) % imagenes.length);
    }, 4000);

    return () => {
        clearInterval(interval);
        };
    }, []);
    
    
    //Descarga el ocumento pdf
    function descargarDocumento() {
      const url = `${window.location.origin}/pegatinas 2.pdf`;
      window.open(url, '_blank');
    }

  return (
    <>
        <header className="" id="header" >
      <nav className="relative top-0 left-0 w-full md:fixed flex flex-col md:flex-row justify-end md:items-center px-6 py-8 bg-opacity-30 text-white mt-6 md:mt-0 bg-gray-950">

         <div>
          <div className="">
            <button
               type="button"
               className="absolute inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden hover:cursor-pointer mt-10 z-50"
               aria-controls="mobile-menu"
               aria-expanded="false"
               onClick={toggleMenu}
            >
                  <span className="sr-only">Open main menu</span>
            <svg
              className={`${menu ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${menu ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
              </svg>
            </button>
          </div>
         </div>
        
        <h1 className="text-white font-black uppercase font-serif md:mt-10">Portafolio</h1>
        <ul className={`${menu ? 'block' : 'hidden md:block'} md:flex flex-col md:flex-row gap-2 md:gap-20 font-extralight text-lg md:text-xl mr-auto md:mr-0 mt-12 md:mt-0`}>
        
          <li className="flex gap-1">
            <img src="./src/img/home.svg" alt="imagen inicio" className="h-16" />
            <a href="#header" className="hover:text-teal-950 hover:no-underline">
              Inicio
            </a>
          </li>
          <li className="flex gap-5">
          <img src="./src/img/habilidades.svg" alt="imagen habilidades" className="h-16" />
            <a
              href="#habilidades"
              className="hover:text-teal-950 hover:no-underline"
            >
              Habilidades
            </a>
          </li>
          <li className="flex gap-5">
          <img src="./src/img/proyectos.svg" alt="imagen habilidades" className="h-16" />
            <a
              href="#proyectos"
              className="hover:text-teal-950 hover:no-underline"
            >
              Proyectos
            </a>
          </li>

          <li className="flex gap-5">
          <img src="./src/img/contactos.svg" alt="imagen habilidades" className="h-16" />
            <a
              href="#contactos"
              className="hover:text-teal-950 hover:no-underline"
            >
              Contactos
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col">
      <div 
        className="z-10 flex md:absolute gap-10 flex-col items-center md:flex-row text-white text-opacity-70 font-black font-serif text-2xl md:text-5xl mt-3 md:mt-10 md:p-28">
        <div className="md:p-12 md:mr-14 -mt-10 flex flex-col items-center">
            <img
            src={imagenes[cambiarImagen]}
            alt="Imagen Header"
            className="h-16 md:h-36 md:mt-7 transision" //transision una clase que rota la imgenes
            />
          
            <button
              id="boton-descargar"
              className="text-xs md:text-lg mt-5 md:mt-20 bg-gradient-to-br from-black to-sky-950 hover:from-sky-950 hover:to-black text-white font-bold p-2 rounded shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={descargarDocumento}
            >
              DESCARGAR CV
            </button>
            <div className="flex gap-12 mt-10">
            <img
              src="./src/img/whatsap.png"
              alt="Imagen Header"
              className="h-7 md:h-10 mt-2"
              />
              <img
              src="./src/img/face.png"
              alt="Imagen Header"
              className="h-7 md:h-10 mt-2"
              />
              <img
              src="./src/img/github.svg"
              alt="Imagen Header"
              className="h-7 md:h-10 mt-2"
              />
          </div>
          

         
        </div>
      
      <div className="w-full ml-32">
      <div className="nomover md:-mt-52  md:text-6xl" >
          <AnimacionLetras />
        </div>
      </div>
        
        
        
        
      </div>
      
      </div>
      

      <video autoPlay muted loop id="video-fondo" className="absolute md:static top-0 left-0 w-full h-full md:object-cover -z-10">
        <source src="./src/img/fondoheader.mp4" type="video/mp4"/>
      </video>
    </header>
    </>
    
  );
};

export default Header;