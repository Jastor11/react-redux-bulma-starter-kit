import React from 'react';

import TalkToPerLA from '../components/TalkToPerLA';
import ChatList from '../components/ChatList';
import VerticalBar from '../components/VerticalBar';
import BulmaSection from '../components/BulmaSection';
import TabHolder from '../components/Tabs/TabHolder';
import LeveledNav from '../components/LeveledNav';
import Bulma4ColumnTiles from '../components/BulmaTiles4Columns';

const Bulma = () => {
    return (
      <div>
        <section className="hero is-primary is-info is-large">{/* Hero head will stick to top*/}
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item">
                    <img src="http://vignette2.wikia.nocookie.net/logopedia/images/8/8f/Perla_logo.svg/revision/latest?cb=20100107130653" alt="Logo" />
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
                    Contact Us
                  </a>
                  <a className="nav-item">
                    What We're About
                  </a>
                  <span className="nav-item">
                    <a className="button is-info is-inverted">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>Github Repo</span>
                    </a>
                  </span>
                </div>
              </div>
            </header>
          </div>
          {/* Hero content will be in middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Welcome to PerLA!
              </h1>
              <h2 className="subtitle">
                Your Personal Learning Assistant
              </h2>
              <TalkToPerLA name="Jeff" />
            </div>
          </div>
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active"><a>Overview</a></li>
                  <li><a>Modifiers</a></li>
                  <li><a>Grid</a></li>
                  <li><a>Elements</a></li>
                  <li><a>Components</a></li>
                  <li><a>Layout</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br /><br />
        <div className="columns" >
            <div className="column is-half is-offset-one-quarter has-text-centered">
                <h2 className="title is-white is-2">Chat List</h2>
            </div>
        </div>
        <hr /><br />
        <div className="container is-fluid">
            <ChatList />
        </div>
        <br /><hr /><br />
        <VerticalBar />
        <br /><hr /><br />
        <BulmaSection />
        <br /><hr /><br />
        <div className="container"><TabHolder /></div>
        <br /><hr /><br />
        <LeveledNav />
        <br /><hr /><br />
        <Bulma4ColumnTiles />
        <br /><hr /><br />
      </div>
    );
};

export default Bulma;
