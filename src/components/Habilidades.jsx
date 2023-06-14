
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Habilidades = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 500  }); // Inicializar AOS con una duración de animación de 800ms
  }, []);



  return (
    <>

      

  <section id="habilidades" className="inset-0 py-16" data-aos="fade-up"
                    data-aos-delay="1000">
   
    <div className=''>
    
    
    <h1 className='text-white text-center text-4xl font-serif font-extrabold '>TECNOLOGIAS USADAS</h1>
      <div className="md:max-w-[120rem] mx-auto flex flex-col md:flex-row gap-5 items-center" data-aos="fade-up"
                    data-aos-delay="1200">
      
        <img src="./src/img/frontend2.png" alt="imagen frontend" 
            className='h-56'/>
        <h1 className='text-white text-2xl'>FRONTEND</h1>

        <div className=' flex flex-col gap-6'>
          <div className='flex flex-col items-center'>           
            <img src="./src/img/html.png" className='h-10' alt="" />
            <h2 className='text-white'>HTML</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="./src/img/css.svg.png" className='h-10' alt="" />
            <h2 className='text-white'>CSS</h2>
          </div>

        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center'>           
            <img src="./src/img/js.png" className='h-10' alt="" />
            <h2 className='text-white'>JAVASCRIPT</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="./src/img/sass.svg.png" className='h-10' alt="" />
            <h2 className='text-white'>SASS</h2>
          </div>

        </div>

        <div className=' flex flex-col gap-6'>
          <div className='flex flex-col items-center'>           
            <img src="./src/img/gulp.svg" className='h-10' alt="imagen gulp" />
            <h2 className='text-white'>GULP</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="./src/img/React.svg.png" className='h-10' alt="imagen react" />
            <h2 className='text-white'>REACT</h2>
          </div>

        </div>

        <div className=' flex flex-col gap-6'>
          <div className='flex flex-col items-center'>           
            <img src="./src/img/remix.png" className='h-10' alt="imagen remix" />
            <h2 className='text-white'>REMIX</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="./src/img/nextjs.png" className='h-10' alt="imagen nextjs" />
            <h2 className='text-white'>NEXTJS</h2>
          </div>

        </div>

        <div className=' flex flex-col gap-6'>
          <div className='flex flex-col items-center'>           
            <img src="./src/img/redux.svg" className='h-10' alt="imagen remix" />
            <h2 className='text-white'>REDUX</h2>
          </div>

          <div className='flex flex-col items-center'>           
            <img src="./src/img/vue.svg.png" className='h-10' alt="imagen nextjs" />
            <h2 className='text-white'>VUE</h2>
          </div>

        </div>


      </div>


      <div className="max-w-[120rem] mx-auto flex gap-5 items-center" data-aos="fade-up"
                    data-aos-delay="1400">
        <img src="./src/img/backend.png" alt="imagen backend" 
              className='h-56'/>
              <h1 className='text-white text-4xl '>BACKEND</h1>

              <div className=' flex flex-col gap-6'>
                <div className='flex flex-col items-center'>           
                  <img src="./src/img/node.svg.png" className='h-10' alt="imagen remix" />
                  <h2 className='text-white'>NODEJS</h2>
                </div>

                <div className='flex flex-col items-center'>           
                  <img src="./src/img/mongo.png" className='h-10' alt="imagen nextjs" />
                  <h2 className='text-white'>MONGODB</h2>
                </div>
              </div>

              <div className=' flex flex-col gap-6'>
                <div className='flex flex-col items-center'>           
                  <img src="./src/img/mysql.png" className='h-10' alt="imagen remix" />
                  <h2 className='text-white'>MYSQL</h2>
                </div>

                <div className='flex flex-col items-center'>           
                  <img src="./src/img/php.svg.png" className='h-10' alt="imagen nextjs" />
                  <h2 className='text-white'>PHP</h2>
                </div>
              </div>

              <div className=' flex flex-col gap-6'>
                <div className='flex flex-col items-center'>           
                  <img src="./src/img/postman.svg" className='h-10' alt="imagen remix" />
                  <h2 className='text-white'>POSTMAN</h2>
                </div>

                <div className='flex flex-col items-center'>           
                  <img src="./src/img/prisma2.svg" className='h-10' alt="imagen prisma" />
                  <h2 className='text-white'>PRISMA</h2>
                </div>
              </div>

      </div>

    </div>
    
  </section>

  
  
    </>
  
  )
}

export default Habilidades