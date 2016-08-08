import React from 'react';
import Tab from './Tab';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
//         props.changeTab = props.changeTab.bind(this);
    }

    handleClick(tab) {
        this.props.changeTab(tab);
    }

    render() {
        const renderTabs = this.props.tabList.map( tab => {
            return (
                <Tab
                    handleClick={this.handleClick.bind(this, tab)}
                    key={tab.id}
                    url={tab.url}
                    name={tab.name}
                    isCurrent={(this.props.currentTab === tab.id)}
                 />
            );
        });

        return (
            <nav>
                <ul>
                    {renderTabs}
                </ul>
            </nav>
        );
    }
}

Tabs.propTypes = {
    tabList: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        url: React.PropTypes.string
    })),
    changeTab: React.PropTypes.func,
    currentTab: React.PropTypes.number
};

export default Tabs;
