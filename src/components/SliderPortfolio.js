import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./SliderPortfolio.css";

import PortfolioCard from "./PortfolioCard";
import imgPortfolio from "../static/images/portfolio2.jpg";
import imgBarbarART from "../static/images/barbart.jpg";
import impPortfoliok from "../static/images/portfoliok2.png";
import imgNeurospyt from "../static/images/neurospyt.jpg";
import imgTodo from "../static/images/todo.jpg";
import imgGql from "../static/images/gql.png";

const CoverflowEffect = () => {
  const params = {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    mousewheel: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next ",
      prevEl: ".swiper-button-prev ",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  return (
    <Swiper {...params}>
      <div>
        <PortfolioCard
          title={"This Portfolio"}
          subtitle={"React application"}
          mediaContent={impPortfoliok}
          textContent={
            "Single Page Application built with React and Material-UI libraries. This application follows the Mobile First approach to ensure the greatest user experience."
          }
          linkSite={"https://consuelo-sanna.github.io/React-portfolio"}
          linkCode={"https://github/consuelo-sanna/React-portfolio"}
        />
      </div>
      <div>
        <PortfolioCard
          title={"To Do App"}
          subtitle={"MERN stack application"}
          textContent={
            "The MERN Stack combines MongoDB, Express, React and Node.js for Back and Front-End web development. This app allows the authenticated user to access the CRUD functions and sockets. Please check both client and server repositories."
          }
          mediaContent={imgTodo}
          linkSite={"https://github.com/consuelo-sanna/my_todo"}
          linkCode={"https://github.com/consuelo-sanna/server_todo"}
        />
      </div>
      <div>
        <PortfolioCard
          title={"Portfolio App"}
          subtitle={"Django application"}
          mediaContent={imgPortfolio}
          textContent={
            "I’ve utilized my skills in Python and Bootstrap in order to build a fast and dynamic single page application. This app is currently deployed on PythonAnywhere Cloud Platform."
          }
          linkSite={"http://consuelo.pythonanywhere.com"}
          linkCode={"https://github.com/consuelo-sanna/django-portfolio"}
        />
      </div>

      <div>
        <PortfolioCard
          title={"BarbarART"}
          subtitle={"HTML, CSS & JS application"}
          mediaContent={imgBarbarART}
          textContent={
            "This website was built with HTML, CSS & JavaScript. This is a brochure website which allows the artist to showcase their work and to be contacted through it."
          }
          linkSite={"https://consuelo-sanna.github.io/test/index.html"}
          linkCode={"https://github.com/consuelo-sanna/test"}
        />
      </div>
      <div>
        <PortfolioCard
          title={"Neurospyt"}
          subtitle={"Wordpress website"}
          mediaContent={imgNeurospyt}
          textContent={
            "This site is built with the CMS Wordpress. The theme was custom made following client preferences and indications."
          }
          linkSite={"https://www.neurospyt.com/"}
          linkCode={"https://www.neurospyt.com/"}
        />
      </div>
      <div>
        <PortfolioCard
          title={"RealTime Web App"}
          subtitle={"MERN stack, Firebase and GraphQL"}
          mediaContent={imgGql}
          textContent={
            "This realtime web app is built with the MERN Stack and uses graphQL for the API and Firebase for the authentication sistem. "
          }
          linkSite={"https://gql-mern-client.herokuapp.com/"}
          linkCode={"https://github.com/consuelo-sanna/graphQL"}
        />
      </div>
    </Swiper>
  );
};
export default CoverflowEffect;
