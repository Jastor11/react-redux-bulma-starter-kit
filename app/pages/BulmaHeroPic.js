import React from 'react';
// import '../styles/hero.scss';

const BulmaHeroPick = () => {
    return (
        <div>
            <section className="hero is-primary is-large header-image">
              <div className="hero-head">
                <header className="nav">
                  <div className="container">
                    <div className="nav-left">
                      <a className="nav-item" href="../index.html">
                        <img src="http://bulma.io/images/bulma-white.png" alt="Logo" />
                      </a>
                    </div>
                    <span className="nav-toggle">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    <div className="nav-right nav-menu">
                      <a className="nav-item is-active">
                        Home
                      </a>
                      <a className="nav-item">
                        Examples
                      </a>
                      <a className="nav-item">
                        Documentation
                      </a>
                      <span className="nav-item">
                        <a className="button is-info is-outlined is-inverted">
                          <span className="icon">
                            <i className="fa fa-github"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </header>
              </div>
              <div className="hero-body">
                <div className="container has-text-centered">
                  <h1 className="title is-2">
                    Hero Heading
                  </h1>
                  <h2 className="subtitle is-5">
                    A hero description could go here.
                  </h2>
                  <p>
                    <a className="button is-outlined">
                      <span className="icon">
                        <i className="fa fa-download"></i>
                      </span>
                      <span>
                        Download
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </section>
            <div className="hero-cta">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <p className="title">Call to action here! <a className="button is-primary"><span className="icon"><i className="fa fa-download"></i></span><span>Intent</span></a></p>
                </div>
              </nav>
            </div>
            <div className="section main">
              <div className="container">
                <div className="columns">
                  <div className="column is-4">
                    <div className="panel">
                      <div className="panel-block section">
                        <p className="has-text-centered"><i className="fa fa-camera-retro icon-block"></i></p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                        <br />
                        <p className="has-text-centered"><a className="button is-info is-outlined">Action</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="column is-4">
                    <div className="panel">
                      <div className="panel-block section">
                        <p className="has-text-centered"><i className="fa fa-bar-chart icon-block"></i></p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                        <br />
                        <p className="has-text-centered"><a className="button is-info is-outlined">Action</a></p>
                      </div>
                    </div>

                  </div>
                  <div className="column is-4">
                    <div className="panel">
                      <div className="panel-block section">
                        <p className="has-text-centered"><i className="fa fa-cloud icon-block"></i></p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                        <br />
                        <p className="has-text-centered"><a className="button is-info is-outlined">Action</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="container">
                <div className="content has-text-centered">
                  <p>
                    <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                  </p>
                  <p>
                    <a className="icon" href="https://github.com/jgthms/bulma">
                      <i className="fa fa-github"></i>
                    </a>
                  </p>
                </div>
              </div>
            </footer>
      </div>
    );
};

export default BulmaHeroPick;
