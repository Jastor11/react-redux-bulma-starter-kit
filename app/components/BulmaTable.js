import React, { PropTypes } from 'react';

const BulmaTable = ({ data }) => {
    return (
        <div className="columns">
			  	<div className="column">
			  		{data.first} column
			  	</div>
			  	<div className="column">
			  		{data.second} column
			  	</div>
			  	<div className="column">
			  		{data.third} column
			  	</div>
			  	<div className="column">
			  		{data.fourth} column
			  	</div	>
			  </div>
    );
};

BulmaTable.defaultProps = {
    data: {
        first: 'First',
        second: 'Second',
        third: 'Third',
        fourth: 'Fourth'
    }
};

BulmaTable.propTypes = {
    data: PropTypes.Object
};

export default BulmaTable;
