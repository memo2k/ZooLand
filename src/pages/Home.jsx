import React from 'react';
import heroImage from "../assets/images/hero.jpg";
import ourWorkImage from "../assets/images/ourwork.jpg";
import cardImage1 from "../assets/images/habitat.jpg";
import cardImage2 from "../assets/images/animal.jpg";
import cardImage3 from "../assets/images/events.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})` }}>
        <div className="shell">
          <div className="hero__inner">
            <div className="hero__title">
              <h1>Visit Zoo Land</h1>
            </div>

            <div className="hero__actions">
              <button className="btn btn--orange">Plan Your Visit</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-welcome">
        <div className="shell">
          <div className="section-welcome__title">
            <h2>Welcome to Zoo Land</h2>
          </div>

          <p className="section-welcome__paragraph">
            A great day out that makes a difference.
            Feel closer to nature at Zoo Land, discover amazing wildlife, learn how we're
            protecting their future and share incredible
            memories of our leaping, roaring, squawking natural world.
          </p>
        </div>
      </section>

      <section className="section-cards">
        <div className="shell">
          <div className="grid">
            <div className="grid__col grid__col--1of3">
              <div className="card">
                <Link to="/">
                  <div className="card__image">
                    <img src={cardImage1} alt="" />
                  </div>

                  <div className="card__title">
                    <h3>Habitats</h3>
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid__col grid__col--1of3">
              <div className="card">
                <Link to="/">
                  <div className="card__image">
                    <img src={cardImage2} alt="" />
                  </div>

                  <div className="card__title">
                    <h3>Animals</h3>
                  </div>
                </Link>
              </div>
            </div>

            <div className="grid__col grid__col--1of3">
              <div className="card">
                <Link to="/">
                  <div className="card__image">
                    <img src={cardImage3} alt="" />
                  </div>

                  <div className="card__title">
                    <h3>Upcoming Events</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home