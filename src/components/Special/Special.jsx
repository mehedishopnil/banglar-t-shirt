import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Granpa';

const Special = ({ring}) => {
    const angti = useContext(ringContext)
    return (
        <div>
            <h2>Special</h2>
            <h4>Ring: {angti}</h4>
        </div>
    );
};

export default Special;