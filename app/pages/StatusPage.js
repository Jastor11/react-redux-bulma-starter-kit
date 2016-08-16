import React from 'react';
// import '../styles/statuspage.scss';

const StatusPage = () => {
    return (
        <div className="container">
          <div className="logo">
            <a href="../index.html">
              <img src="../images/bulma.png" />
            </a>
          </div>
          <div className="section">
            <div className="status-header">
              <div className="indicator"></div>
              <div className="title">All services are online.</div>
              <div className="subtitle">As of August 1, 2016 at 11:08PM MST.</div>
            </div>
            <div className="status-uptime">
              <div className="title">Services</div>
              <div className="uptime">Uptime of the past 90 days</div>
            </div>
            <div className="status-list">
              <div className="api">
                <div className="label">API</div>
                <div className="bar"><progress className="progress is-success" value="99" max="100">99%</progress></div>
                <div className="amount has-text-centered">99%</div>
              </div>
              <hr />
              <div className="lib">
                <div className="label">library.js</div>
                <div className="bar"><progress className="progress is-success" value="99" max="100">99%</progress></div>
                <div className="amount has-text-centered">99%</div>
              </div>
              <hr />
              <div className="website">
                <div className="label">website</div>
                <div className="bar"><progress className="progress is-success" value="100" max="100">100%</progress></div>
                <div className="amount has-text-centered">100%</div>
              </div>
              <hr />
              <div className="website">
                <div className="label">something hacky</div>
                <div className="bar"><progress className="progress is-warning" value="40" max="100">40%</progress></div>
                <div className="amount has-text-centered">40%</div>
              </div>
              <hr />
              <div className="website">
                <div className="label">something unreliable</div>
                <div className="bar"><progress className="progress is-danger" value="14" max="100">14%</progress></div>
                <div className="amount has-text-centered">14%</div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="status-tweets">
              <div className="twitter">
                <div className="icon"><i className="fa fa-twitter"></i></div>
                <div className="username">&commat;username</div>
              </div>
              <div className="updates">
                <div className="update">
                  <div className="timestamp">July 29 at 5:39pm</div>
                  <div className="event">We're experiencing higher than normal load on our batch infrastructure. Webhooks are about an hour delayed. API calls are not impacted</div>
                </div>
                <div className="update">
                  <div className="timestamp">July 23 at 9:21pm</div>
                  <div className="event">Sorry about that! Our systems are showing everything as caught up now. Let us know if you're still seeing problems!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="status-footer">
              <p>
                <a href="#">Legal</a>
                <a href="#">About</a>
                <a href="#">Jobs</a>
              </p>
            </div>
          </div>
        </div>
    );
};

export default StatusPage;
