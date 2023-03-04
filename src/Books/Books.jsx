import React, { useState } from 'react';
import data from '../components/user.json'
import './Books.scss'
import { BsChevronCompactDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Books = () => {
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div >
            <div className='vido__box'>
                <h2 className='title'>Infinite Books</h2>
                <h2 className='title2'>Infinite Books</h2>
            </div>
            <div className='container'>
                <div className='search'>
                    <div className='search__img'>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Books  )' className='search__autor' />
                    </div >
                    <div>
                        <button className='search__btn'>
                            <Link className='search__link' to="/singin">Sing Up</Link> </button>
                        <button className='search__btn'>
                            <Link className='search__link' to="/singin">LogIn</Link></button>
                    </div>
                </div>
                <div className='cards'>
                    {
                        data.filter(arr => arr.name.toLowerCase().includes(search)).map((arr, i) => {
                            return (
                                <div className='card' key={i} >
                                    <div className='title3' >
                                        <Link to={`/user/${arr.id}`}>
                                            <img src={arr.img} alt="" />
                                        </Link>
                                        <h5 className='content__title'>Book Name : {arr.name}</h5>
                                    </div>

                                    <div className={selected == i ? 'content__show' : 'content'}>
                                        <h6 className='content__title'>Author : {arr.author} </h6>
                                        <p className='content__title'> Info : {arr.describtion}</p>
                                    </div>
                                    <span className='down' onClick={() => toggle(i)} >
                                        {selected == i ? <BsChevronUp color='white' /> : <BsChevronCompactDown color='white' />}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Books;

//
// 