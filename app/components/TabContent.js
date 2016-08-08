import React from 'react';

const TabContent = ({currentTab}) => {
    const tab1 = currentTab === 1;
    const tab2 = currentTab === 2;
    const tab3 = currentTab === 3;
    const tab4 = currentTab === 4;
    return (
        <div className="tab-content">
            {tab1 &&
                <div className="mike">
                    <img src="http://s.mlkshk.com/r/104TN" />
                </div>
            }
            {tab2 &&
                <div className="donnie">
                    <img src="http://s.mlkshk.com/r/103AG" />
                </div>
            }
            {tab3 &&
                <div className="raph">
                    <img src="http://s.mlkshk.com/r/JAUD" />
                </div>
            }
            {tab4 &&
                <div className="leo">
                    <img src="http://s.mlkshk.com/r/ZJPL" />
                </div>
            }
        </div>
    );
};

TabContent.propTypes = {
    currentTab: React.PropTypes.number
};

export default TabContent;
