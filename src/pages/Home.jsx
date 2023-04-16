import React from 'react';
import heroImage from "../assets/images/hero.jpg";
import duckImage from "../assets/images/duck.jpg";
import cardImage1 from "../assets/images/habitat.jpg";
import cardImage2 from "../assets/images/animal.jpg";
import cardImage3 from "../assets/images/events.jpg";
import membershipImage from "../assets/images/membership.jpg";
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

      <section className="section-our-work" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${duckImage})` }}>
        <div className="section-our-work__box">
          <div className="section-our-work__title">
            <h2>Our Work</h2>
          </div>

          <div className="section-our-work__paragraph">
            <p>We're proud of our successfull history saving animals, from birds to snow leopards. Learn about some of our current work.</p>
          </div>

          <div className="section-our-work__actions">
            <button className="btn btn--white">Learn More</button>
          </div>
        </div>
      </section>

      <section className="section-opening-times">
        <div className="shell">
          <div className="section-opening-times__inner">
            <div className="section-opening-times__title">
              <h2>Opening Times</h2>
            </div>

            <table>
              <tr>
                <th>Dates</th>
                <th>Opening</th>
                <th>Closing</th>
              </tr>

              <tr>
                <td>31 October 2022 - 10 February 2023</td>
                <td>10:00</td>
                <td>16:00</td>
              </tr>

              <tr>
                <td>11 February 2023 - 25 March 2023</td>
                <td>10:00</td>
                <td>17:00</td>
              </tr>

              <tr>
                <td>26 March 2023 - 3 September 2023</td>
                <td>10:00</td>
                <td>18:00</td>
              </tr>

              <tr>
                <td>4 September 2023 - 29 October 2023</td>
                <td>10:00</td>
                <td>17:00</td>
              </tr>

              <tr>
                <td>30 October 2023 - 9 February 2024</td>
                <td>10:00</td>
                <td>16:00</td>
              </tr>
            </table>
          </div>
        </div>
      </section>


      <section className="section-membership" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${membershipImage})` }}>
          <div className="section-membership__box">
            <div className="section-membership__title">
              <h2>Become a Member</h2>
            </div>

            <div className="section-membership__paragraph">
              <p>Join us on our mission to protect wildlife and inspire the next generation
                 of zoologists and conservationists. Choose the membership that's right for you.</p>
            </div>

            <div className="section-membership__actions">
              <button className="btn btn--white">Join Now</button>
            </div>
          </div>
      </section>
    </>
  )
}

export default Home