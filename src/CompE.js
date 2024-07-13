import React,{useContext} from 'react';
import { UseContext } from './useContext';

function CompE(props) {
    const user=useContext(UseContext)
    return (
        <div>
          user Value  {user}
        </div>
    );
}

export default CompE;