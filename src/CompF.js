import React,{useContext} from 'react';
import { UseConsumer, UseContext } from './useContext';

function CompF(props) {
     const data=useContext(UseContext)
    // need to consume the data
    return (
        <div>
            {/* <UseConsumer>
             {

                (data)=>{
                 return <h1> ------CompF: {data}</h1>
                }
             }
            </UseConsumer> */}
            <h1>data recived {data}</h1>
        </div>
    );
}

export default CompF;