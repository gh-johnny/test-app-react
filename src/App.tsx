// ----------------------------------------------------------
//    TODO:
//
//    [ ] - Fazer requisição para a rota "albums/1/photos" 
//    [ ] - Tratar erro com um simples console.error
//    [ ] - Fazer um estado de loading (mostrar um simples "Carregando..." na tela.)
//    [ ] - Listar os dados retornados em tela
//    [ ] - Crie um componente que será utilizado na listagem dos dados
//    [ ] - Estilize minimamente o conteúdo
//
//    OBS:
//    - Sinta-se à vontade para estilizar e alterar a estrutura atual
// ----------------------------------------------------------

function App() {
  return (
    <div className="bg-sky-50 w-dvw h-dvh">
      <h1 className="w-full text-center text-2xl py-4">
        Galeria de Fotos
      </h1>

      <div>
        {[].map(() => (
          <>
            {/* Substitua aqui por um componente customizado (começo) */}
            <div>

              <h3>
              </h3>
              <img />

            </div>
            {/* Substitua aqui por um componente customizado (fim) */}
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
