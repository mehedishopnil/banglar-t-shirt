import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Granpa';


const Sister = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Sister</h2>
            <p>Grandpa money: {money}</p>
            <button onClick={() => setMoney(money + 500)}>Send 500tk</button>
        </div>
    );
};

export default Sister;