import React from 'react';

const VerticalBar = () => {
    return (
      <div className="container">
          <div className="columns">
              <div className="column is-half is-offset-one-half">
                  <div className="notification has-text-centered">
                      This container is <strong>centered</strong> on desktop.
                  </div>
              </div>
          </div>
      </div>
    );
};

export default VerticalBar;
