import Typewriter from "typewriter-effect";

const AnimacionLetras = () => {
  return (
    <div className="">
      <Typewriter
        options={{
          strings: ['CREACIÓN<br/>DE PAGINAS<br>WEB', 'DESAROLLO<br/>WEB', 'APLICACIONES<br/>WEB'],
          autoStart: true,
          loop: true,
          delay: 100
        }}
      />
    </div>
  );
};

export default AnimacionLetras;
