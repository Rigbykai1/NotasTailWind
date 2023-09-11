const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1548598187-35e00175d911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Notes App</h1>
          <p className="mb-5">
            Bienvenido a la app de notas en desarrollo, una aplicación que te
            permite crear, editar y organizar tus notas de forma fácil y rápida.
            Con esta app, puedes guardar tus ideas, recordatorios, listas,
            proyectos y más en un solo lugar. También puedes sincronizar tus
            notas con otros dispositivos y acceder a ellas desde cualquier
            lugar.
          </p>

          <a className="btn btn-primary" href="/Notes">Get Started</a>
       
        </div>
      </div>
    </div>
  );
};

export default Hero;
