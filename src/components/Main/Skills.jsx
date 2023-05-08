function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__bg">
        <div className="skills-circle-1"></div>
        <div className="skills-circle-2"></div>
        <div className="skills-circle-3"></div>
        <div className="skills-circle-4"></div>
        <div className="skills-circle-5"></div>
        <div className="skills-circle-6"></div>
      </div>
      <div className="skills__wrapper">
        <h2 className="section__header">Skills</h2>
        <div className="skills__grid">
          <div className="skills__card">
            <div className="skills__card--circle">
              <i className="fa-brands fa-html5 skills__card--logo"></i>
              <p className="skills__card--percent c--1">90%</p>
            </div>
            <p className="skills__info-head">HTML</p>
            <p className="skills__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="skills__card">
            <div className="skills__card--circle">
              <i className="fa-brands fa-css3-alt skills__card--logo"></i>
              <p className="skills__card--percent c--2">90%</p>
            </div>
            <p className="skills__info-head">CSS</p>
            <p className="skills__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="skills__card">
            <div className="skills__card--circle">
              <i className="fa-brands fa-square-js skills__card--logo"></i>
              <p className="skills__card--percent c--3">90%</p>
            </div>
            <p className="skills__info-head">JS</p>
            <p className="skills__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="skills__card">
            <div className="skills__card--circle">
              <i className="fa-brands fa-git-alt skills__card--logo"></i>
              <p className="skills__card--percent c--4">90%</p>
            </div>
            <p className="skills__info-head">GIT</p>
            <p className="skills__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="skills__card">
            <div className="skills__card--circle">
              <i className="fa-brands fa-sass skills__card--logo"></i>
              <p className="skills__card--percent c--5">90%</p>
            </div>
            <p className="skills__info-head">SCSS</p>
            <p className="skills__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="skills__card">
            <div className="skills__card--circle">
              <i className="fa-solid fa-circle-info skills__card--logo"></i>
              <p className="skills__card--percent c--6">+</p>
            </div>
            <p className="skills__info-head">More...</p>
            <p className="skills__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
