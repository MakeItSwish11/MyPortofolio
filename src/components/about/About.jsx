import React from 'react';
import './about.css';
import ME from '../../assets/profile.jpg';
import { BsAward } from 'react-icons/bs';
import { RiUserStarLine } from 'react-icons/ri';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

function About() {
  return (
    <section id="about">
      <h5>I'm a Frontend Developer</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className="about__card">
              <RiUserStarLine />
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
            <article className="about__card">
              <HiOutlineDocumentDownload />
              <h5>Company</h5>
              <small>4 Company</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo
            cum dicta sapiente impedit omnis delectus optio mollitia hic
            exercitationem? Temporibus rerum reprehenderit distinctio tenetur,
            assumenda magni adipisci cumque facilis?
          </p>

          <a href="#contact" className="btn btn-primary">
            Reach Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
