import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';


export const ringContext = createContext('gold');
export const MoneyContext = createContext(0);

const Granpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
        <MoneyContext.Provider value={[money, setMoney]}>
        <ringContext.Provider value='golden Ring'>
                <section className='flex '>
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty ring={ring}></Aunty>
                </section>
            </ringContext.Provider>
        </MoneyContext.Provider>

        </div>
    );
};

export default Granpa;

/**
 * 1. Create Context and export
 * 2. Create a provider and pass a value
 * 3. Use useContext to receive
 * **/