
import { useEffect, useRef } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Habilidades = () => {

  const miDivRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 500  }); // Inicializar AOS con una duración de animación de 800ms
  }, []);

  //ocultar el div 
  



  return (
    <>

      

  <section id="habilidades" className="inset-0 py-16" data-aos="fade-up"
                    data-aos-delay="1000">
   
    
    
    
    <h1 className='text-white text-center text-xl md:text-4xl font-serif font-extrabold '>TECNOLOGIAS USADAS</h1>

    <div className='grid grid-cols-2 md:flex md:flex-col' ref={miDivRef}>
      <div className="flex flex-col md:flex-row gap-5 items-center"        data-aos="fade-up"
        data-aos-delay="1200">
        
        <img src="/img/frontend2.png" alt="imagen frontend" 
            className='md:h-56 h-36'/>
        <h1 className='text-white text-lg md:text-2xl'>FRONTEND</h1>

        <div className='grid grid-cols-2 gap-5 md:flex md:flex-col '>
          <div className='flex flex-col items-center'>           
            <img src="/img/html.png" className='h-5 md:h-10' alt="" />
            <h2 className='text-white text-xs md:text-xl'>HTML</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="/img/css.svg.png" className='h-5 md:h-10' alt="" />
            <h2 className='text-white text-xs md:text-xl'>CSS</h2>
          </div>

        </div>

        <div className='grid grid-cols-2 md:flex md:flex-col gap-5'>
          <div className='flex flex-col items-center'>           
            <img src="/img/js.png" className='h-5 md:h-10' alt="" />
            <h2 className='text-white text-xs md:text-xl'>JAVASCRIPT</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="/img/sass.svg.png" className='h-5 md:h-10' alt="" />
            <h2 className='text-white text-xs md:text-xl'>SASS</h2>
          </div>

        </div>

        <div className='grid grid-cols-2 md:flex md:flex-col gap-5'>
          <div className='flex flex-col items-center'>           
            <img src="/img/gulp.svg" className='h-5 md:h-10' alt="imagen gulp" />
            <h2 className='text-white text-xs md:text-xl'>GULP</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="/img/React.svg.png" className='h-5 md:h-10' alt="imagen react" />
            <h2 className='text-white text-xs md:text-xl'>REACT</h2>
          </div>

        </div>

        <div className='grid grid-cols-2 md:flex md:flex-col gap-5'>
          <div className='flex flex-col items-center'>           
            <img src="/img/remix.png" className='h-5 md:h-10' alt="imagen remix" />
            <h2 className='text-white text-xs md:text-xl'>REMIX</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="/img/nextjs.png" className='h-5 md:h-10' alt="imagen nextjs" />
            <h2 className='text-white text-xs md:text-xl'>NEXTJS</h2>
          </div>

        </div>

        <div className='grid grid-cols-2 md:flex md:flex-col gap-5'>
          <div className='flex flex-col items-center'>           
            <img src="/img/redux.svg" className='h-5 md:h-10' alt="imagen remix" />
            <h2 className='text-white text-xs md:text-xl'>REDUX</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="/img/vue.svg.png" className='h-5 md:h-10' alt="imagen nextjs" />
            <h2 className='text-white text-xs md:text-xl'>VUE</h2>
          </div>

        </div>


      </div>


      <div className="flex flex-col md:flex-row gap-5 items-center" data-aos="fade-up"
                    data-aos-delay="1200">
        <img src="/img/backend.png" alt="imagen backend" 
              className='md:h-56 h-36'/>
              <h1 className='text-white text-lg md:text-2xl '>BACKEND</h1>

              <div className='grid grid-cols-2 md:flex md:flex-col gap-5'>
                <div className='flex flex-col items-center'>           
                  <img src="/img/node.svg.png" className='h-5 md:h-10' alt="imagen remix" />
                  <h2 className='text-white text-xs md:text-xl'>NODEJS</h2>
                </div>

                <div className='flex flex-col items-center'>           
                  <img src="/img/mongo.png" className='h-5 md:h-10' alt="imagen nextjs" />
                  <h2 className='text-white text-xs md:text-xl'>MONGODB</h2>
                </div>
              </div>

              <div className='grid grid-cols-2 md:flex md:flex-col gap-5'>
                <div className='flex flex-col items-center'>           
                  <img src="/img/mysql.png" className='h-5 md:h-10' alt="imagen remix" />
                  <h2 className='text-white text-xs md:text-xl'>MYSQL</h2>
                </div>

                <div className='flex flex-col items-center'>           
                  <img src="/img/php.svg.png" className='h-5 md:h-10' alt="imagen nextjs" />
                  <h2 className='text-white text-xs md:text-xl'>PHP</h2>
                </div>
              </div>

              <div className='grid grid-cols-2 md:flex md:flex-col gap-5'>
                <div className='flex flex-col items-center'>           
                  <img src="/img/postman.svg" className='h-5 md:h-10' alt="imagen remix" />
                  <h2 className='text-white text-xs md:text-xl'>POSTMAN</h2>
                </div>

                <div className='flex flex-col items-center'>           
                  <img src="/img/prisma2.svg" className='h-5 md:h-10' alt="imagen prisma" />
                  <h2 className='text-white text-xs md:text-xl'>PRISMA</h2>
                </div>
              </div>

      </div>
    </div>

      

    
    
  </section>

  
  
    </>
  
  )
}

export default Habilidades