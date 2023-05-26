import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Granpa';



const Brother = () => {
    const ring = useContext(ringContext);
    return (
        <div>
            <h2>Brother</h2>
            <h4>Ring: {ring}</h4>
        </div>
    );
};

export default Brother;