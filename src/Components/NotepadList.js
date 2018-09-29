import React from 'react';

const List = props => (
    
    <ul className="tl">
        {
            props.items.map((item, index) => 
            <p key={index}>{item}</p>
            )
            
        }
    </ul>
);

export default List