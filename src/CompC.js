import React from 'react';
import { UseProvider } from './useContext';
import CompD from './CompD';
import CompE from './CompE';

function CompC(props) {
    return (
        <div>
         <CompD></CompD>
         <CompE></CompE>
        </div>
    );
}

export default CompC;