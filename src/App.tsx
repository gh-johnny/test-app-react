function App() {
  return (
    <div className="bg-sky-50 w-dvw h-dvh">
      <h1 className="w-full text-center text-2xl py-4">
        Galeria de Fotos
      </h1>

      <div>
        {[].map(() => (
          <div>

            <h3>
            </h3>
            <img />

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
