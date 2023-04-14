import React from 'react';
import heroImage from "../assets/images/hero.jpg";

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
    </>
  )
}

export default Home