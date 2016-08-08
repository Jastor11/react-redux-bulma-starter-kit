import React from 'react';

const BulmaTiles4Columns = () => {
    return (
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">One</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Two</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Three</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Four</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-vertical is-9">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Five</p>
                  <p className="subtitle">Subtitle</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                  </div>
                </article>
              </div>
              <div className="tile is-8 is-vertical">
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">Six</p>
                      <p className="subtitle">Subtitle</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">Seven</p>
                      <p className="subtitle">Subtitle</p>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">Eight</p>
                    <p className="subtitle">Subtitle</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-8 is-parent">
                <article className="tile is-child box">
                  <p className="title">Nine</p>
                  <p className="subtitle">Subtitle</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Ten</p>
                  <p className="subtitle">Subtitle</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <div className="content">
                <p className="title">Eleven</p>
                <p className="subtitle">Subtitle</p>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                  <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Twelve</p>
              <p className="subtitle">Subtitle</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-6">
            <article className="tile is-child box">
              <p className="title">Thirteen</p>
              <p className="subtitle">Subtitle</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Fourteen</p>
              <p className="subtitle">Subtitle</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
              </div>
            </article>
          </div>
      </div>
      </div>
    );
};

export default BulmaTiles4Columns;
