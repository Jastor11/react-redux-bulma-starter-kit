import React from 'react';

const ChatMessage = ({message, align}) => {
    return align === 'right' ?
        <div className="column is-three-quarters box is-offset-one-quarter">
          <article className="media">
            <div className="media-left">
              <button className="delete"></button>
            </div>
            <div className="media-content">
              <div className="content has-text-right">
                <p>
                  <strong>{message.owner} - </strong>
                  <small> {message.handle} |</small>
                  <small> {message.time} seconds ago</small>
                  <br />
                  {message.content}
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                    <div className="level-item"></div>
                </div>
                <div className="level-right">
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
            <div className="media-right">
              <figure className="image is-64x64">
                <img src="https://67.media.tumblr.com/avatar_aa68696648f0_128.png" alt="Image" />
              </figure>
            </div>
          </article>
        </div>
    :
        <div className="column is-three-quarters box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/04f/1e9/00eb89f.jpg" alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{message.owner} - </strong>
                  <small> {message.handle} |</small>
                  <small> {message.time} seconds ago</small>
                  <br />
                  {message.content}
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
            <div className="media-right">
              <button className="delete"></button>
            </div>
          </article>
        </div>;
};

ChatMessage.propTypes = {
    message: React.PropTypes.shape({
        owner: React.PropTypes.string,
        time: React.PropTypes.string,
        handle: React.PropTypes.string,
        content: React.PropTypes.string,
        avatar: React.PropTypes.string
    }).isRequired,
    align: React.PropTypes.string
};

export default ChatMessage;
