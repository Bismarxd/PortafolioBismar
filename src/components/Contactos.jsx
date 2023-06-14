
const Contactos = () => {

  return (
    <div className=" h-[30rem]">
      <h1 className="text-center shadow-sm shadow-white text-slate-400 text-xl md:text-4xl m-5 p-5 uppercase">Contacto</h1>

      <form className="z-10 mx-auto md:max-w-4xl text-center m-10 h-[126px]" name="contacto" method="POST">
        {/* input, submit y textarea son clases css */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">          
            <input className="input" type="text" id="nombre" name="nombre" placeholder="Nombre"/>
            <input className="input" type="email" id="email" name="email" placeholder="Correo Electronico"/>
            <input className="input" type="number" id="numero" name="celular" placeholder="Numero de Celular"/>
          </div>

          <div className="md:w-1/2">
            <textArea
              className="textarea h-[8rem] md:h-[12rem]"
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje"
            ></textArea>
          </div>

        </div>
        
        <button 
          className="submit w-full mt-5 mb-5 p-2 md:p-4 rounded-xl text-white bg-slate-950 text-xs md:text-2xl uppercase"
          type="submit" 
          id="enviar"
        >Enviar</button>
      </form>
    </div>
  )
}

export default Contactos