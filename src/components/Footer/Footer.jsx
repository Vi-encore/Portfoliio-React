function Footer() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__bg">
        <div className="contact__bg__circle-1"></div>
        <div className="contact__bg__circle-2"></div>
        <div className="contact__bg__circle-3"></div>
        <div className="contact__bg__circle-4"></div>
        <div className="contact__bg__circle-5"></div>
        <div className="contact__bg__circle-6"></div>
      </div>
      <div className="contact__wrapper">
        <h2 className="section__header contact__white">Contact me</h2>
        <div className="contact__btns">
          <div className="contact__btn">
            <i className="fa-brands fa-linkedin contact__logo"></i>
            <a href="#" className="contact__link" target="#" hidden>
              Linkedln
            </a>
          </div>
          <div className="contact__btn">
            <i className="fa-brands fa-instagram contact__logo"></i>
            <a href="#" className="contact__link" target="#" hidden>
              Instagram
            </a>
          </div>
          <div className="contact__btn">
            <i className="fa-solid fa-envelope contact__logo"></i>
            <a href="#" className="contact__link" target="#" hidden>
              Gmail
            </a>
          </div>
          <div className="contact__btn">
            <i className="fa-brands fa-telegram contact__logo"></i>
            <a href="#" className="contact__link" target="#" hidden>
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
