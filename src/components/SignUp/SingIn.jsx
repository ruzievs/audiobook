import React from 'react';
import { Link } from 'react-router-dom';
import './SingUp.scss'

const SingIn = () => {
    return (
        <div>
            <div class="containerr">
                <div className='box'>
                    <div>
                        <form action="">
                            <input className='input' type="email" placeholder="Enter Your Email" required />
                            <input className='input' type="text" placeholder="Enter Your Name" required />
                            <input className='input' type="password" placeholder="Password" required />
                            <Link className='link' to="/success"><button type="button" className='butn'>Sign Up</button></Link>
                        </form>
                    </div>
                    <div class="carousel">
                        <div class="image"><span></span></div>
                        <div class="image"><span></span></div>
                        <div class="image"><span></span></div>
                        <div class="image"><span></span></div>
                        <div class="image"><span></span></div>
                        <div class="image"><span></span></div>
                        <div class="image"><span></span></div>
                        <div class="image"><span></span></div>
                        <div class="image"><span></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingIn;

{/* <input class="input" type="email" placeholder="Enter Your Email" required>
                <input class="input" type="text" placeholder="Enter Your Name" required>
                <input class="input" type="password" placeholder="Password" required>
                <button type="button">Sign Up</button> */}

