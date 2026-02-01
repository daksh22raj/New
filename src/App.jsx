import { useRef, useState } from "react";
import "./App.css";

/* ✨ CUSTOMIZE NAME HERE ✨ */
const NAME = "Avni Verma 💕";

function App() {
  const noBtnRef = useRef(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const moveNoButton = () => {
    const btn = noBtnRef.current;
    const padding = 20;

    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.position = "fixed";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  };

  if (showSurprise) {
    return (
      <div className="page center">
        <div className="hearts"></div>
        <h1>💖 Surprise! 💖</h1>
        <h2>{NAME}, you’re my Valentine</h2>
        <p>You just made my day a little brighter ✨</p>
      </div>
    );
  }

  return (
    <div className="page center">
      <div className="hearts"></div>

      <div className="card">
        <h1>Hey {NAME}</h1>
        <p>I wanted to ask you something special…</p>

        <h2 className="question">Will you be my Valentine? 💘</h2>

        <div className="buttons">
          <button className="yes" onClick={() => setShowSurprise(true)}>
            Yes ❤️
          </button>

          <button
            ref={noBtnRef}
            className="no"
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
          >
            No 💔
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
