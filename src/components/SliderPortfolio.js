import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./SliderPortfolio.css";

import PortfolioCard from "./PortfolioCard";
import imgPortfolio from "../static/images/portfolio.jpg";
import imgBarbarART from "../static/images/barbart.jpg";
import impPortfoliok from "../static/images/portfoliok.jpg";
import imgNeurospyt from "../static/images/neurospyt.jpg";
import imgTodo from "../static/images/todo.jpg";

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
          subtitle={"React"}
          mediaContent={impPortfoliok}
          textContent={
            "I know this is a static site and it was not necessary the use of React but it helped me learn more about it."
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
            "This app use MongoDB, Express, React and Node and allows the authenticated user to use the CRUD functions and sockets. You can check both client and server rep."
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
            "This app was entirely built with Django. The idea was to learn this framework and improve my Python, HTML & CSS skills."
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
            "This is a web site built with HTML, CSS & JavaScript. It is one of my first attempt and I still want to add some extra feature and pages."
          }
          linkSite={"https://consuelo-sanna.github.io/test/index.html"}
          linkCode={"https://github.com/consuelo-sanna/test"}
        />
      </div>
      <div>
        <PortfolioCard
          title={"Neurospyt"}
          subtitle={"Wordpress"}
          mediaContent={imgNeurospyt}
          textContent={
            "This is a web site built with the CMS Wordpress. I don't have the code in a repository, so both link go to the site."
          }
          linkSite={"https://www.neurospyt.com/"}
          linkCode={"https://www.neurospyt.com/"}
        />
      </div>
    </Swiper>
  );
};
export default CoverflowEffect;
