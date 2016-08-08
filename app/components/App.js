import React, { PropTypes } from 'react';
// import { Link } from 'react-router';

const App = ({ children }) =>
    <div>
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
