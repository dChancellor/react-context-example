import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import style from "./Component.css";

function Component() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={() => {
          changeTheme();
        }}
        className="theme"
      >
        Swap Theme
      </button>
      <h1>Hello, World</h1>
    </div>
  );
}

export default Component;
