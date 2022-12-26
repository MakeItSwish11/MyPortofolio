import React from 'react';
import './portfolio.css';
import paygua from '../../assets/paygua.png';
import guadigital from '../../assets/guadigital.png';
import soulfy from '../../assets/soulfy.png';

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={paygua} alt="" />
          </div>
          <h3>This is Portfolio Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://www.youtube.com/syafiqammar17"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={soulfy} alt="" />
          </div>
          <h3>This is Portfolio Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://www.youtube.com/syafiqammar17"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={guadigital} alt="" />
          </div>
          <h3>This is Portfolio Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://www.youtube.com/syafiqammar17"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
