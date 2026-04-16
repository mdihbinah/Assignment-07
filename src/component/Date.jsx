import React from 'react';

const DateC = ({date}) => {
    const option = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return (
        <div>
            {date.toLocaleDateString('en-US', option)}
        </div>
    );
};

export default DateC;