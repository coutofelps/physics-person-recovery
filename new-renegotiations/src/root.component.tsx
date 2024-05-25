import "./root.css";
import * as sigleSpa from "single-spa";
import ErrorIcon from "./no-proposal-found-icon.png";

export default function Root(props) {
  const routeChange = () =>{ 
    sigleSpa.navigateToUrl('/')
  }

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
            <div className="image-wrapper">
              <img src={ErrorIcon} alt="Error Icon Image" />
            </div>

            <span className="text">
              No momento, não encontramos contratos disponíveis para renegociar
            </span>
          </div>

          <div className="back-button-wrapper">
            <button onClick={routeChange}>
              Ir para a tela inicial
            </button>
          </div>
        </section>
      </div>
    </main>
  </>
}
