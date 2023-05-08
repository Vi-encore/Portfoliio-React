import DarkMode from "./DarkTheme.jsx";

function Header() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <img src="/img/favicon-big.png" alt="#" className="nav__logo" />
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#heropage" className="nav__link">
                About Me
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link nav__link-btn">
                Contact Me
              </a>
            </li>
          </ul>

          <ul className="nav__btns">
            <li className="nav__btn">
              <button className="nav__btn__translate translate-of">Ua</button>
            </li>
            <li className="nav__btn">
              <button className="nav__btn__translate translate-on gb">
                En
              </button>
            </li>
          </ul>
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Header;
