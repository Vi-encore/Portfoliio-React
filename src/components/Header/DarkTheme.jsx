import { useState } from "react";

const DarkMode = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
      setDarkTheme(!isDarkTheme);
    } else {
      setLight();
      setDarkTheme(!isDarkTheme);
    }
  };

  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        {isDarkTheme ? (
          <img
            className="btn-mode"
            src="/img/dark.png"
            alt="dark theme"
            width="30"
            height="30"
          />
        ) : (
          <img
            className="btn-mode js-light"
            src="/img/light.png"
            alt="light theme"
            width="30"
            height="30"
          />
        )}
      </label>
    </div>
  );
};

export default DarkMode;
