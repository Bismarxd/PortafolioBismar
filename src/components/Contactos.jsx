
const Contactos = () => {

  return (
    <div className=" h-[30rem]">
      <h1 className="text-center shadow-sm shadow-white text-slate-400 text-4xl m-5 p-5 uppercase">Contacto</h1>

      <form name="contacto" method="POST" data-netlify="true" action="/gracias">
  <input type="text" name="nombre" placeholder="Nombre" />
  <input type="email" name="correo" placeholder="Correo electrónico" />
  <textarea name="mensaje" placeholder="Mensaje"></textarea>
  <button type="submit">Enviar</button>
</form>
    </div>
  )
}

export default Contactos