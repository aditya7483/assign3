import React from 'react'
import Spin from '../pics/spinning-loading.gif' 

export default function Spinner() {
  return (
    <div>
        <img src={Spin} alt="loading..." style={{height:'14rem',width:'20rem',margin:'auto',display:'block'}}/>
    </div>
  )
}
