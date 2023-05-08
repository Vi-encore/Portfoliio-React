/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import Slider from "react-slick";
// import switchTheme from "../DarkTheme/switchTheme";

function Work() {
  const [data, setData] = useState("");

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchWorkData();
  }, []);

  async function fetchWorkData() {
    const url = "https://my-json-server.typicode.com/Vi-encore/test/projects";
    await fetch(url)
      .then((response) => response.json())
      .then((dataItems) => setData(dataItems))
      .catch((error) => error);
  }

  return (
    <>
      {/* <div className="work-bg">
        <div className="work-circle-1"></div>
        <div className="work-circle-2"></div>
        <div className="work-circle-3"></div>
        <div className="work-circle-4"></div>
        <div className="work-circle-5"></div>
      </div> */}
      {!data.length ? (
        <p>No works found!</p>
      ) : (
        <div className="slider work" id="work">
          <div className="work-bg">
            <div className="work-circle-1"></div>
            <div className="work-circle-2"></div>
            <div className="work-circle-3"></div>
            <div className="work-circle-4"></div>
            <div className="work-circle-5"></div>
          </div>
          <div className="work__wrapper">
            <h2 className="section__header">Projects</h2>
            <Slider {...settings}>
              {data.map((item) => {
                const { id, name, imgURL, hostingURL, repositoryURL } = item;

                return (
                  <div className="slider__inner" key={`${name}-${id}`}>
                    <a className="" href={hostingURL} target="_blank">
                      <img src={imgURL} alt={name} />
                    </a>
                    <h3 className="slider__header">{name}</h3>
                    <a
                      href={repositoryURL}
                      className="work__card--github"
                      target="_blank"
                    >
                      Repository
                    </a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

export default Work;
