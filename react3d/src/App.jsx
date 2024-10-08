import "./App.css";

import { Helmet3d } from "./Helmte3D/Helmet";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          fontfamily: "Bangers",
          color: "black",
        }}
      >
        UM GUERREIRO <br />
        NUNCA DESISTE.
      </h1>

      <Helmet3d />
    </div>
  );
}

export default App;
