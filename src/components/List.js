import React from 'react'
import ProfilePic from '../pics/profile pic.jpg'

export default function List(props) {

    let { username,setActiveId,id,avatar} = props

    const handleClick = ()=>{
        setActiveId(id)
    }

    return (
        <div className='py-1'>
            <button type="button" className={`list-group-item list-group-item-action`} onClick={handleClick}>
            <img className='mx-2' src={avatar ? ProfilePic : ProfilePic} alt='...' style={{ borderRadius: '50%', width: '3rem', height: '3rem'}} />{username}
            </button>
        </div>
    )
}
