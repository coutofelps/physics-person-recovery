import "./root.css";

export default function Root(props) {
  return <>
    <main>
      <div className="phone-screen">
        <header>
          <button className="back-button">
            <span className="icon">&lt;</span>
            
            <h1>renegociação</h1>
          </button>
        </header>

        <section>
          <div className="not-found-image">

          </div>

          <span className="text">
            No momento, não encontramos contratos disponíveis para renegociar
          </span>

          <button>
            Ir para a tela inicial
          </button>
        </section>
      </div>
    </main>
  </>
}
