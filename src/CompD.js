import React from 'react';
import { UseConsumer } from './useContext';

function CompD(props) {
    return (
        <div>
            <UseConsumer>
                {
                    (useName)=>{
                        return <div>HELLO{useName}</div>

                    }
                }
            </UseConsumer>
        </div>
    );
}

export default CompD;