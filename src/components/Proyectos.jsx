import { useState, useEffect } from "react"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import AOS from 'aos'
import 'aos/dist/aos.css';


const Proyectos = () => {

  const [cambiarPalabras, setCambiarPalabras] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(2)

  const palabras = [
    'Proyectos',
    'Personales'
    
]; 

useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (mediaQuery.matches) {
    setSlidesToShow(3);
  } else {
    setSlidesToShow(2);
  }


}, []);

const configuracionCarrusel = {
  dots: true,
  infinite: true,
  infiniteLoop: true,
  speed: 500,
  slidesToShow: slidesToShow,
  slidesToScroll: 1
};

useEffect(() => {
  AOS.init({ duration: 1000, delay: 500  }); // Inicializar AOS con una duración de animación de 800ms
}, []);
  useEffect(() => {
    const interval = setInterval(() => {
        setCambiarPalabras(prevIndex => (prevIndex + 1) % palabras.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      };
  }, []);


  return (
    <>
      
        <section id="proyectos">
          <div className="w-full" data-aos="fade-up"
                    data-aos-delay="1200">
            <h1 className="text-white text-center uppercase text-4xl transision">{palabras[cambiarPalabras]}</h1>
              <div className="flex justify-center w-full">
                <Slider {...configuracionCarrusel} className="md:w-3/4 w-[60rem] m-5">
                  <div className="text-white md:w-[100rem] m-10">
                      <div className="relative ml-10">
                        <img src="/img/Proyectos/Devwebcamp.png" alt="imagen proyecto" className=""/>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center">
                          <h3 className="font-bold text-lg">Dev Wev Camp</h3>
                          <a href="https://github.com/Bismarxd/Reastauran-App-FullStack/blob/main/helpers/index.js">
                            <img src="/img/github.svg" alt="imagen git hub" className="md:w-16 w-10" />
                          </a>                                                   
                        </div>                                              
                      </div>   
                      
                      <div className="flex justify-center items-center mt-5">
                        <div className="flex flex-row gap-5">
                          <img src="/img/html.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                          <img src="/img/sass.svg.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                          <img src="/img/css.svg.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                          <img src="/img/js.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                          <img src="/img/php.svg.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                        </div>
                      </div>      
                    </div> 


                    <div className="text-white md:w-[50rem] m-10">
                      <div className="relative ml-10">
                        <img src="/img/Proyectos/MonitoreoPacientes.png" alt="imagen proyecto" className=""/>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-slate-950 text-center">
                          <h3 className="font-bold text-lg">Monitoreo de Pacientes</h3>
                          <a href="https://github.com/Bismarxd/Reastauran-App-FullStack/blob/main/helpers/index.js">
                            <img src="/img/github.svg" alt="imagen git hub" className="md:w-16 w-10" />
                          </a>                                                   
                        </div>                                              
                      </div>   

                      
                        <div className="flex justify-center items-center ">
                          <div className="flex gap-5 mt-5">
                              <img src="/img/React.svg.png" alt="imagen react" className="md:w-10 md:h-10 w-6 h-6" />
                              <img src="/img/node.svg.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                              <img src="/img/mongo.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                              
                          </div>     
                        </div>   
                      </div>    

                    

                    <div className="text-white md:w-[50rem] m-10">
                      <div className="relative ml-10">
                        <img src="/img/Proyectos/TiendaVideoJuegos.png" alt="imagen proyecto" className=""/>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center">
                          <h3 className="font-bold text-lg">Tienda de<br></br>VideoJuegos</h3>
                          <a href="https://github.com/Bismarxd/Monitoreo-de-Pacientes-de-Veterinaria-FrontEnd">
                            <img src="/img/github.svg" alt="imagen git hub" className="md:w-16 w-10" />
                          </a>                                                   
                        </div>                                              
                      </div>   

                      <div className="flex justify-center items-center">
                        <div className="flex gap-5 mt-5">
                            <img src="/img/React.svg.png" alt="imagen react" className="md:w-10 md:h-10 w-6 h-6" />
                            <img src="/img/remix.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                            <img src="/img/css.svg.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                            <img src="/img/strapi.jpg" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                            
                        </div>   
                      </div>
                               
                    </div> 

                    <div className="text-white md:w-[50rem] m-10">
                      <div className="relative ml-10">
                        <img src="/img/Proyectos/RestaurantApp.png" alt="imagen proyecto" className=""/>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-black text-center">
                          <h3 className="font-black text-lg">RestaurantApp - FullStack</h3>
                          <a href="https://github.com/Bismarxd/Reastauran-App-FullStack/blob/main/helpers/index.js">
                            <img src="/img/github.svg" alt="imagen git hub" className="md:w-16 w-10" />
                          </a>                                                   
                        </div>                                              
                      </div>   

                      <div className="flex justify-center items-center">
                        <div className="flex gap-5 mt-5">
                            <img src="/img/React.svg.png" alt="imagen react" className="md:w-10 md:h-10 w-6 h-6" />
                            <img src="/img/nextjs.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                            <img src="/img/prisma2.svg" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                      
                        </div>  
          
                      </div>
                                
                    </div> 

                    <div className="text-white md:w-[50rem] m-10">
                      <div className="relative ml-10">
                        <img src="/img/Proyectos/BlogGamer.png" alt="imagen proyecto" className=""/>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center">
                          <h3 className="font-bold text-lg">Blog Gamer</h3>
                          <a href="https://github.com/Bismarxd/Reastauran-App-FullStack/blob/main/helpers/index.js">
                            <img src="/img/github.svg" alt="imagen git hub" className="md:w-16 w-10" />
                          </a>                                                   
                        </div>                                              
                      </div>   

                      <div className="flex justify-center items-center">
                        <div className="flex gap-5 mt-5">
                            <img src="/img/React.svg.png" alt="imagen react" className="md:w-10 md:h-10 w-6 h-6" />
                            <img src="/img/nextjs.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                            <img src="/img/firebase.png" alt="imagen html" className="md:w-10 md:h-10 w-6 h-6" />
                            
                        </div>     
                      </div>
                             
                    </div>
                  

                    
                </Slider>
              </div>
                
              
           
          </div>
        </section>
    </>
    
  )
}

export default Proyectos