import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Transition logic for appointment modes
  function transition(newMode, replace = false) {
    setMode(newMode);

    if (replace) { // optional secondary argument for double back state
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    } else setHistory((prev) => [...prev, newMode]);
  }

  function back() {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory((prev) => prev.slice(0, prev.length - 1));
    }
  }

  return { mode, transition, back };
}
