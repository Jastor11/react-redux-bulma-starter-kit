import React from 'react';
// import '../styles/profile.scss';

const ProfileLayout = () => {
    return (
      <div>
          <nav className="nav has-shadow" id="top">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item" href="../index.html">
                  <img src="../images/bulma.png" alt="Description" />
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
          <div className="container profile">

            <div className="section profile-heading">
              <div className="columns">
                <div className="column is-2">
                  <div className="image is-128x128 avatar">
                    <img src="https://placehold.it/256x256" />
                  </div>
                </div>
                <div className="column is-4 name">
                  <p>
                    <span className="title is-bold">John Smith</span>
                    <span className="button is-primary is-outlined follow">Follow</span>
                  </p>
                  <p className="tagline">The users profile bio would go here, of course. It could be two lines</p>
                </div>
                <div className="column is-2 followers has-text-centered">
                  <p className="stat-val">129k</p>
                  <p className="stat-key">followers</p>
                </div>
                <div className="column is-2 following has-text-centered">
                  <p className="stat-val">2k</p>
                  <p className="stat-key">following</p>
                </div>
                <div className="column is-2 likes has-text-centered">
                  <p className="stat-val">29</p>
                  <p className="stat-key">likes</p>
                </div>
              </div>
            </div>
            <div className="profile-options">
              <div className="tabs is-fullwidth">
                <ul>
                  <li className="link is-active"><a><span className="icon"><i className="fa fa-list"></i></span> <span>My Lists</span></a></li>
                  <li className="link"><a><span className="icon"><i className="fa fa-heart"></i></span> <span>My Likes</span></a></li>
                  <li className="link"><a><span className="icon"><i className="fa fa-th"></i></span> <span>My Posts</span></a></li>
                  <li className="link"><a><span className="icon"><i className="fa fa-bookmark"></i></span> <span>My Bookmarks</span></a></li>
                </ul>
              </div>
            </div>

            <div className="box">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="subtitle is-5">
                      <strong>123</strong> posts
                    </p>
                  </div>
                  <div className="level-item">
                    <p className="control has-addons">
                      <input className="input" type="text" placeholder="Find a post" />
                      <button className="button">
                        Search
                      </button>
                    </p>
                  </div>
                </div>

                <div className="level-right">
                  <p className="level-item"><strong>All</strong></p>
                  <p className="level-item"><a>Published</a></p>
                  <p className="level-item"><a>Drafts</a></p>
                  <p className="level-item"><a>Deleted</a></p>
                  <p className="level-item"><a className="button is-success">New</a></p>
                </div>
              </nav>
            </div>

            <div className="spacer"></div>

            <div className="columns">
              <div className="column is-3">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
              </div>
              <div className="column is-3">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
              </div>
              <div className="column is-3">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
              </div>
              <div className="column is-3">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="http://placehold.it/300x225" alt="" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <span className="tag is-dark">#webdev</span>
                      <strong className="timestamp">2 d</strong>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Save</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item">Delete</a>
                  </footer>
                </div>
                <br />
              </div>
            </div>
          </div>
      </div>
    );
};

export default ProfileLayout;
