import React from 'react';
import Tabs from './Tabs';
import Content from './TabContent';

class TabHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: props.tabList,
            currentTab: 2
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(tab) {
        this.setState({ currentTab: tab.id });
    }

    render() {
        const {currentTab, tabList} = this.state;
        return (
            <div>
                <Tabs
                    currentTab={currentTab}
                    tabList={tabList}
                    changeTab={this.changeTab}
                />
                <Content currentTab={currentTab} />
            </div>
         );
    }
}

TabHolder.defaultProps = {
    tabList: [
        { 'id': 1, 'name': 'Mike', 'url': '/mike' },
        { 'id': 2, 'name': 'Donnie', 'url': '/donnie' },
        { 'id': 3, 'name': 'Raph', 'url': '/raph' },
        { 'id': 4, 'name': 'Leo', 'url': '/leo' }
    ]
};

TabHolder.propTypes = {
    tabList: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        url: React.PropTypes.string
    }))
};

export default TabHolder;
