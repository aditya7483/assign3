import React from 'react'
import ProfilePic from '../pics/profile pic.jpg'

export default function List(props) {

    let { username,setActiveId,id,avatar} = props

    const handleClick = ()=>{
        setActiveId(id)
    };

    return (
        <div>
            <button type="button" className={`py-1 list-group-item list-group-item-action myactive`} onClick={handleClick}>
            <img className='mx-2' src={avatar ? ProfilePic : ProfilePic} alt='...' style={{ borderRadius: '50%', width: '3rem', height: '3rem'}} />{username}
            </button>
        </div>
    )
}
