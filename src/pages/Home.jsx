import React from 'react';
import heroImage from "../assets/images/hero.jpg";

const Home = () => {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroImage})`}}>
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
    </>
  )
}

export default Home