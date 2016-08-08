import React from 'react';

const LeveledNav = () => {
    return (
        <nav className="level">
          <p className="level-item has-text-centered">
            <a className="link is-info">Home</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Menu</a>
          </p>
          <p className="level-item has-text-centered">
            <img src="http://bulma.io/images/bulma.png" alt="" style={{height: '33px'}} />
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Reservations</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Contact</a>
          </p>
        </nav>
    );
};

export default LeveledNav;

