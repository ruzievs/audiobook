import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from '../user.json';
import './SingleUser.scss';
import audi1 from './audio1.mp3';
import { FaMale } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';

const SingleUser = () => {
    let params = useParams()

    return (
        <div className='container'>
            <div className='info'>
                <img className='info__img' src={data[params.id].img} alt="" />
                <h1 className='info__title'>Book Name : {data[params.id].name}</h1>
                <h1 className='info__title'>Auther Name : {data[params.id].author}</h1>
                <h4 className='info__title'>Info : {data[params.id].describtion2}</h4>
                <div>
                    <div className='box__audio'>
                            <FaMale  className='audio__icon'/>
                        <div className='info__user'>
                            <audio className='info__audio' src={audi1} controls></audio>
                        </div>
                        <div className='info__user'>
                            <audio className='info__audio' src={audi1} controls></audio>
                        </div>
                        <div className='info__user'>
                            <audio className='info__audio' src={audi1} controls></audio>
                        </div>
                        <FaFemale className='audio__icon2'/>
                        <div className='info__user2'>
                            <audio className='info__audio' src={audi1} controls></audio>
                        </div>
                        <div className='info__user2'>
                            <audio className='info__audio' src={audi1} controls></audio>
                        </div>
                        <div className='info__user2'>
                            <audio className='info__audio' src={audi1} controls></audio>
                        </div>
                    </div>
                </div>
                <button className='info__btn'><Link className='info__btns' to="/singin">Order</Link></button>
            </div>
        </div>
    );
}

export default SingleUser;
