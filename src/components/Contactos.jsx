
const Contactos = () => {

  return (
    <div className=" h-[30rem]">
      <h1 className="text-center shadow-sm shadow-white text-slate-400 text-4xl m-5 p-5 uppercase">Contacto</h1>

      <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


    </div>
  )
}

export default Contactos