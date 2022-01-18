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
        <p style={{ color: "var(--font-color)" }}>Tela Inicial</p>
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
            history.push({
              pathname: "/login",
            });
          }}
        >
          Ir para o login
        </button>
      </div>
    </Background>
  );
}
