import React from 'react';

const Tab = ({handleClick, name, isCurrent, url}) => {
    return (
            <li className={isCurrent ? 'current' : null}>
                <a onClick={ event => { event.preventDefault(); handleClick(); }}
                   href={url}>
                    {name}
                </a>
            </li>
    );
};

Tab.propTypes = {
    handleClick: React.PropTypes.func,
    isCurrent: React.PropTypes.bool,
    url: React.PropTypes.string,
    name: React.PropTypes.string
};

export default Tab;
