import { useState, useEffect, useContext } from "react";
import Component from "./components/Component";
import Always from './components/Always'
import { ThemeContext } from "./context/Theme";

import style from "./App.css";

function App() {
  let [loading, setLoading] = useState(true);
  const { theme, changeTheme } = useContext(ThemeContext);
  const cssVars = styles(theme);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 1000);
  }, []);

  return (
    <main style={cssVars} className="App">
      {loading && <div className="loading">Loading...</div>}
      {!loading && <Component />}
      <Always />
    </main>
  );
}

export default App;

const styles = (theme) => ({
  "--clr-main-text": theme.mainText,
  "--clr-neutral-900": theme.secondary,
});
