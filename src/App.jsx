import { useRef, useState } from "react";
import "./App.css";

const messages = ["Almost!", "Try harder 😏", "Nice try 😜"];

function App() {
  const noBtnRef = useRef(null);

  const [noPos, setNoPos] = useState(null); // null = fixed
  const [msgIndex, setMsgIndex] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);

  const moveNoButton = () => {
    const btn = noBtnRef.current;
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    const padding = 20;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    setNoPos({
      left: Math.random() * maxX,
      top: Math.random() * maxY
    });

    setMsgIndex((prev) => (prev + 1) % messages.length);
  };

  if (showSurprise) {
    return (
      <div className="container">
        <h1 className="surprise">💖 Yayyyyayayaya 🥳💖</h1>
        <h2>You are my Valentine now 😘</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Will you be my Valentine? 💘</h1>

      <div className="btn-row">
        <button className="yes-btn" onClick={() => setShowSurprise(true)}>
          Yes ❤️
        </button>

        <button
          ref={noBtnRef}
          className="no-btn"
          style={
            noPos
              ? { position: "absolute", top: noPos.top, left: noPos.left }
              : {}
          }
          onMouseEnter={moveNoButton}
        >
          {noPos ? messages[msgIndex] : "No 💔"}
        </button>
      </div>
    </div>
  );
}

export default App;
