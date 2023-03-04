import React from 'react';
import './Success.scss'
import {MdOutlineVerified} from 'react-icons/md'

const Success = () => {
    return (
        <div>
            <div className='succesful'> 
                <h1 className='succesful__title'> <MdOutlineVerified className='succesful__icon'/>Your Order Has been Successfully Complited</h1>
            </div>
            <p></p>
        </div>
    );
}

export default Success;
