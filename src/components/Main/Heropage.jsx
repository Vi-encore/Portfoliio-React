function HeroPage() {
  return (
    <section className="heropage" id="heropage">
      <div className="heropage__bg">
        <div className="heropage__circle1"></div>
        <div className="heropage__circle2"></div>
        <div className="heropage__circle3"></div>
        <div className="heropage__circle4"></div>
        <div className="heropage__circle5"></div>
        <div className="heropage__circle6"></div>
        <div className="heropage__circle7"></div>
        <div className="heropage__circle8"></div>
        <div className="heropage__circle9"></div>
        <div className="heropage__circle10"></div>
      </div>
      <div className="heropage__wrapper">
        <img
          src="/img/me-photo.png"
          alt="My photo"
          className="heropage__photo"
        />
        <div className="heropage__info">
          <h1 className="heropage__header">About me</h1>
          <p className="heropage__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="heropage__download">
            <i className="fa-regular fa-circle-down heropage__i"></i>
            <a href="#" className="heropage__download--link">
              &nbsp;download cv
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
