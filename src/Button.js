import React from 'react'
import { useState } from 'react'
import './button.css'


export const Button = () => {
    const [isDeleting, setDeleting] = useState(false);
    const [isDeleted, setDeleted] = useState(false);
    const handleClick = async () =>{
           setDeleting(true);
           setDeleting(false)
           setDeleted(true)
           setTimeout(()=> setDeleted(false),2000);
    };

    return (
        <button
        onClick={handleClick}
        className={isDeleting || isDeleted ? 'deleting' : ''}
        disabled={isDeleting || isDeleted}
        >
            <span className='button-text'>
                {isDeleting || isDeleting ? "Deleting" : "Delete"}
            </span>
            <span className='animation'>
                <span className='balls'></span>
                <span className='lid'></span>
                <span className='can'>
                    <span className='filler'></span>
                </span>
            </span>
        </button>
    )
}
