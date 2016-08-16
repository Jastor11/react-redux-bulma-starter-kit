import React from 'react';
// import '../styles/landing.scss';

const BulmaLanding = () => {
    return (
        <section className="hero is-fullheight is-dark">
            <div className="hero-head">
              <div className="container">
                <nav className="nav">
                  <div className="container">
                    <div className="nav-left">
                      <a className="nav-item" href="../index.html">
                        <img src="http://bulma.io/images/bulma-white.png" alt="Description" />
                      </a>
                    </div>
                    <span className="nav-toggle">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    <div className="nav-right nav-menu">
                      <a className="nav-item">
                        About
                      </a>
                      <a className="nav-item">
                        Tour
                      </a>
                      <a className="nav-item">
                        FAQ
                      </a>
                      <a className="nav-item">
                        Contact
                      </a>
                      <span className="nav-item">
                        <a className="button is-default">
                          Get Early Access
                        </a>
                      </span>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img src="https://images.unsplash.com/photo-1461669802687-84a1aee43a29?dpr=1&auto=format&crop=entropy&fit=crop&w=800&h=600&q=80" className="promo-img" alt="Description" />
                    </figure>
                  </div>
                  <div className="column is-6 is-offset-1">
                    <h1 className="title is-2">
                      Introducing Landing Page
                    </h1>
                    <h2 className="subtitle is-4">
                      It's time to say hello to bulma.
                    </h2>
                    <br />
                    <p className="control has-addons has-text-centered">
                      <input className="input is-expanded is-large" type="text" placeholder="Join the beta waitlist, you@example.org" />
                      <a className="button is-large is-danger is-outlined">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-foot">
              <div className="container">
                <div className="tabs is-centered">
                  <ul>
                    <li><a href="http://bulma.io">Made with bulma</a></li>
                    <li><a>Copyright 2016 Bulma</a></li>
                    <li><a href="http://unsplash.com">Images via unsplash</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
    );
};

export default BulmaLanding;
