import 'tailwindcss/tailwind.css';
import Habilidades from "./components/Habilidades";
import Header from "./components/Header"
import Proyectos from "./components/Proyectos";
import Contactos from "./components/Contactos";
import Presentacion from './components/Presentacion';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
    <div className='scroll w-full'>      
      <Header />      



        <Presentacion/>
        
        <Habilidades />

        <Proyectos />

        <Contactos/>

        <Footer/>

     

    </div>
  )
}

export default App;