import React, { useContext } from 'react';
import { UseConsumer, UseContext } from './useContext';

function CompH(props) {
    const data=useContext(UseContext)
    return (
        <div>
            Reciver comp H
            
            {data}
        </div>
    );
}

export default CompH;