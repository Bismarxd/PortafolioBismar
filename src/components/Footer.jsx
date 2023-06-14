import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className='bg-zinc-900'>
        <div className="container text-center">
            <div className='border-b-gray-50 border-b-2 p-4'>
                
                    <div className='flex text-white gap-28 justify-center m-5'>
                        <div className=''>
                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#838486",}} />
                            <div>
                                <h4>Ciudad</h4>
                                <span>Nuestra Señora de La Paz, Bolivia</span>
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} style={{color: "#d4dbe8",}} />
                            <div>
                                <h4>Celular</h4>
                                <span>69933860</span>
                            </div>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#797a7c",}} />
                            <div>
                                <h4>Correo Electronico</h4>
                                <span>bismarckmaytatintaya@gmail.com</span>
                            </div>
                        </div>
                    </div>
            </div>

            
        
            </div> 
               
            <div className='flex justify-between border-b-gray-50 border-b-2 p-4'>
                <div className='flex gap-9 p-5'>   
                    <div>
                        <span className='border-b-white border-b-2 text-white font-black text-2xl w-1/2'>REDES</span>
                    </div>
                    
                            <a href="">
                                <FontAwesomeIcon 
                                    className='h-10'
                                    icon={faWhatsapp} style={{color: "#7e8186",}} />
                            </a>

                            <a href="">
                                <FontAwesomeIcon 
                                    className='h-10'
                                    icon={faFacebook} style={{color: "#7e8186",}} />
                            </a>

                            <a href="">
                                <FontAwesomeIcon 
                                    className='h-10'
                                    icon={faGithub} style={{color: "#7e8186",}} />
                            </a>
                </div>

                <div className='flex items-center m-8 text-white'>
                    <div className=''>
                        <ul className='flex gap-7 '>
                            <li>
                            <a href="#header" className="hover:text-black hover:no-underline">
                                Inicio</a>
                            </li>

                            <li>
                            <a href="#habilidades" className="hover:text-black hover:no-underline"
                            >Habilidades</a>
                            </li>

                            <li>
                            <a href="#proyectos" className="hover:text-black hover:no-underline">
                                Proyectos</a>
                            </li>

                            <li>
                            <a href="#contactos" className="hover:text-black hover:no-underline">
                                Contactos</a>
                            </li>
                        </ul>
                    </div>
                </div>

                
                
            </div>

            <div className='text-white p-4'>
                <div>
                    <p>Copyrigth &copy; 2023, Todos los Derechos Reservados - Bismarck Mayta Tintaya</p>
                </div>
            </div>
            
    </footer>
  )
}

export default Footer