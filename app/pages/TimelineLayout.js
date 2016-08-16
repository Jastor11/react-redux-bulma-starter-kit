import React from 'react';

const TimelineLayout = () => {
    return (
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item is-tab is-active"><i className="fa fa-home"></i> &nbsp; Home</a>
              <a className="nav-item is-tab"><i className="fa fa-bolt"></i> &nbsp; Moments</a>
              <a className="nav-item is-tab"><i className="fa fa-bell-o"></i> &nbsp; Notifications</a>
              <a className="nav-item is-tab"><i className="fa fa-envelope"></i> &nbsp; Messages</a>
            </div>

            <div className="nav-center">
              <a className="nav-item" href="#">
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
              </a>
            </div>

            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <div className="nav-right nav-menu">
              <span className="nav-item">
                <a className="button" >
                  <span className="icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </span>
            </div>
          </div>
        </nav>
        <section className="section main">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <div className="card is-fullwidth">
                  <header className="card-header">
                  </header>
                  <div className="card-content">
                    <a className="card-avatar">
                      <img src="https://pbs.twimg.com/profile_images/3005141692/dc8e1eb36b6cbd2b5726f63c50adf7f2.png" className="card-avatar-img" />
                    </a>

                    <div className="card-user">
                      <div className="card-user-name">
                        <a href="#">John Smith</a>
                      </div>
                      <span>
                        <a href="#">@<span>jsmith</span></a>
                      </span>
                    </div>

                    <div className="card-stats">
                      <ul className="card-stats-list">
                        <li className="card-stats-item">
                          <a href="#" title="9.840 Tweet">
                            <span className="card-stats-key">Tweets</span>
                            <span className="card-stats-val">1</span>
                          </a>
                        </li>
                        <li className="card-stats-item">
                          <a href="#/following" title="885 Following">
                            <span className="card-stats-key">Following</span>
                            <span className="card-stats-val">0</span>
                          </a>
                        </li>
                        <li className="card-stats-item">
                          <a href="#">
                            <span className="card-stats-key">Followers</span>
                            <span className="card-stats-val">0</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="spacer"></div>
                <div className="box trending">
                  <p className="trend-title"><span className="title is-5">Trends</span> · <a href="#">change</a></p>
                  <p className="trend-hashtag"><a href="#">#hashtag1</a><br />13k statuses</p>
                  <p className="trend-hashtag"><a href="#">#hashtag2</a><br />29k statuses</p>
                  <p className="trend-hashtag"><a href="#">#hashtag3</a><br />2k statuses</p>
                  <p className="trend-hashtag"><a href="#">#hashtag4</a><br />9k statuses</p>
                  <p className="trend-hashtag"><a href="#">#hashtag5</a><br />18k statuses</p>
                  <p className="trend-hashtag"><a href="#">#hashtag6</a><br />168k statuses</p>
                </div>
              </div>
              <div className="column is-6">
                <div className="notification is-danger">
                  <button className="delete" onclick="((this).parentNode.remove())"></button>
                  This template is not yet finished, it may change. Please check the readme for more information.
                </div>
                <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="http://placehold.it/128x128" alt="Image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small style="float:right;">31m</small>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav className="level">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fa fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              </div>
              <div className="column is-3">
                <div className="box">
                  <p><span className="title is-5">Who to follow</span> · <a href="#">Refresh</a> · <a href="#">View All</a></p>
                  <hr />
                  <div className="columns">
                    <div className="column is-3 is-marginless">
                      <div className="image">
                        <img src="https://placehold.it/200x200" />
                      </div>
                    </div>
                    <div className="column is-9">
                      <p>
                        <a href="#">
                          <strong>John Smith</strong>
                          &commat;jsmith
                        </a> 
                        <a href="#">
                          <i className="fa fa-times"></i>
                        </a>
                      </p>
                      <a className="button is-primary is-small">
                        <span>
                          + Follow
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-3 is-marginless">
                      <div className="image">
                        <img src="https://placehold.it/200x200" />
                      </div>
                    </div>
                    <div className="column is-9">
                      <p>
                        <a href="#">
                          <strong>Jane Smith</strong>
                          &commat;janesmith
                        </a> 
                        <a href="#">
                          <i className="fa fa-times"></i>
                        </a>
                      </p>
                      <a className="button is-primary is-small">
                        <span>
                          + Follow
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-3 is-marginless">
                      <div className="image">
                        <img src="https://placehold.it/200x200" />
                      </div>
                    </div>
                    <div className="column is-9">
                      <p>
                        <a href="#">
                          <strong>Mike Scott</strong>
                          &commat;mscott
                        </a> 
                        <a href="#">
                          <i className="fa fa-times"></i>
                        </a>
                      </p>
                      <a className="button is-primary is-small">
                        <span>
                          + Follow
                        </span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default TimelineLayout;
