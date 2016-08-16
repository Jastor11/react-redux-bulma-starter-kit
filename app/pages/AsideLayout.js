import React from 'react';
// import '../styles/aside.scss';

const AsideLayout = () => {
    return (
      <div>
        <nav className="nav is-dark has-shadow" id="top">
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
                <a className="button is-default">
                  Log in
                </a>
                <a className="button is-info">
                  Sign up
                </a>
              </span>
            </div>
          </div>
        </nav>
        <div className="columns">
          <aside className="column is-2 aside hero is-fullheight">
            <div>
              <div className="uploader has-text-centered">
                <a className="button">
                  <i className="fa fa-upload"></i>
                </a>
              </div>
              <div className="main">
                <div className="title">Main</div>
                <a href="#" className="item active"><span className="icon"><i className="fa fa-home"></i></span><span className="name">Dashboard</span></a>
                <a href="#" className="item"><span className="icon"><i className="fa fa-map-marker"></i></span><span className="name">Activity</span></a>
                <a href="#" className="item"><span className="icon"><i className="fa fa-th-list"></i></span><span className="name">Timeline</span></a>
                <a href="#" className="item"><span className="icon"><i className="fa fa-folder-o"></i></span><span className="name">Folders</span></a>
              </div>
            </div>
          </aside>
          <div className="content column is-10">
            <div className="title is-2">Overview</div>
            <nav className="nav menu">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item is-tab is-active"><span className="icon-btn"><i className="fa fa-plus"></i></span></a>
                  <a className="nav-item is-tab">
                    <span className="icon-btn">
                      <i className="fa fa-print"></i>
                    </span>
                  </a>
                  <a className="nav-item is-tab">
                    <span className="icon-btn thin">
                      <i className="fa fa-lock"></i>
                    </span>
                  </a>
                  <a className="nav-item is-tab">
                    <span className="icon-btn">
                      <i className="fa fa-trash"></i>
                    </span>
                  </a>
                  <div className="nav-item is-tab">
                    <strong>2 items selected</strong>
                  </div>
                </div>
                <div className="nav-right">
                  <a className="nav-item is-tab">Name</a>
                  <a className="nav-item is-tab">Size</a>
                  <a className="nav-item is-tab">Views</a>
                  <a className="nav-item"><span className=" button is-success">Uploaded</span></a>
                </div>
              </div>
            </nav>
            <div className="columns files">
              <div className="column is-2">
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://images.unsplash.com/photo-1467321638755-7246fd0dc1f3?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1125&q=80" />
                    </div>
                    <div className="name">swimmin.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://images.unsplash.com/photo-1467321638755-7246fd0dc1f3?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1125&q=80" />
                    </div>
                    <div className="name">swimmin.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/nature/640x480" />
                    </div>
                    <div className="name">daisydaisydaisyuntitled.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
              </div>
              <div className="column is-2">
                <a className="file active">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/buildings/640x480" />
                  </div>
                    <div className="name">untitled.jpeg</div>
                    <div className="timestamp">2 minutes ago</div>
                </a>
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/nature/640x480" />
                    </div>
                    <div className="name">daisydaisydaisyuntitled.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://images.unsplash.com/photo-1467321638755-7246fd0dc1f3?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1125&q=80" />
                    </div>
                    <div className="name">swimmin.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
              </div>
              <div className="column is-2">
                <a className="file active">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/food/640x480" />
                  </div>
                    <div className="name">splashsplash.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/nature/640x480" />
                  </div>
                    <div className="name">untitled.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
              </div>
              <div className="column is-2">
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/objects/640x480" />
                  </div>
                    <div className="name">untitled.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://images.unsplash.com/photo-1467321638755-7246fd0dc1f3?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1125&q=80" />
                    </div>
                    <div className="name">swimmin.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
              </div>
              <div className="column is-2">
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/people/640x480" />
                  </div>
                    <div className="name">untitled.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/objects/640x480" />
                    </div>
                    <div className="name">swimmin.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
              </div>
              <div className="column is-2">
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/nature/640x480" />
                  </div>
                    <div className="name">untitled.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
                <a className="file">
                  <div className="image is-3by2">
                    <img src="https://source.unsplash.com/category/people/640x480" />
                  </div>
                    <div className="name">untitled.jpeg</div>
                    <div className="timestamp">2 hours ago</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AsideLayout;
