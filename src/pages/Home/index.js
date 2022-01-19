import { Background } from "./style";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <Background>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "10%",
        }}
      >
        <p style={{ color: "var(--font-color)" }}>Tela Principal do site depois de logado</p>
        <button
          style={{
            backgroundColor: "var(--primary-color)",
            border: "none",
            borderRadius: "0.3rem",
            width: "150px",
            height: "30px",
            textTransform: "uppercase",
          }}
          onClick={() => {
            localStorage.clear();
            history.push({
              pathname: "/",
            });
          }}
        >
          Ir para a tela inicial
        </button>
      </div>
    </Background>
  );
}
