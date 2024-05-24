import "./root.css";
import ErrorIcon from "./not-found-error-icon.png";

export default function Root(props) {
  return <>
    <main className="new-renegotiations">
      <div className="phone-screen">
        <header>
          <button className="back-button">
            <span className="icon">&lt;</span>
            
            <h1>renegociação</h1>
          </button>
        </header>

        <section className="content">
          <div className="not-found-wrapper">
            <div className="image">
              <img src={ErrorIcon} alt="Error Icon Image" />
            </div>

            <span className="text">
              No momento, não encontramos contratos disponíveis para renegociar
            </span>
          </div>

          <div className="back-button-wrapper">
            <button>
              Ir para a tela inicial
            </button>
          </div>
        </section>
      </div>
    </main>
  </>
}
