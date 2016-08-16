import React from 'react';

const CoverLayout = () => {
    return (
        <section className="hero is-fullheight is-default is-bold">
          <div className="hero-head">
            <div className="container">
              <nav className="nav has-shadow">
                <div className="container">
                  <div className="nav-left">
                    <a className="nav-item" href="../index.html">
                      <img src="http://vignette2.wikia.nocookie.net/logopedia/images/8/8f/Perla_logo.svg/revision/latest?cb=20100107130653" alt="Description" />
                    </a>
                  </div>
                  <span className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <div className="nav-right nav-menu">
                    <a className="nav-item is-tab is-active">
                      Home
                    </a>
                    <a className="nav-item is-tab">
                      Features
                    </a>
                    <a className="nav-item is-tab">
                      Team
                    </a>
                    <a className="nav-item is-tab">
                      Help
                    </a>
                    <span className="nav-item">
                      <a className="button">
                        Log in
                      </a>
                      <a className="button is-info">
                        Sign up
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
                    <img src="http://placehold.it/800x600" alt="Description" />
                  </figure>
                </div>
                <div className="column is-6 is-offset-1">
                  <h1 className="title is-2">
                    Superhero Scaffolding
                  </h1>
                  <h2 className="subtitle is-4">
                    Let this cover page describe a product or service.
                  </h2>
                  <br />
                  <p className="has-text-centered">
                    <a className="button is-large">
                      Learn more
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
                  <li><a>And this at the bottom</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
};

export default CoverLayout;
