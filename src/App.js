import React, { useState, useEffect } from 'react'
import List from './components/List';
import Spinner from './components/Spinner';
import UserInfo from './components/UserInfo';
import './App.css'

export default function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(1);

  const changeActiveId = (id)=>{
    setActiveId(id)
  }

  let url = 'https://602e7c2c4410730017c50b9d.mockapi.io/users'

  const fetchData = async (url) => {
    setLoading(true)
    let res = await fetch(url);
    let data = await res.json();
    setUserData(data);
    setLoading(false)
  }

  useEffect(() => {
    fetchData(url)
    // eslint-disable-next-line
  },[]);

  return (
    <div>
      <div className='d-flex justify-content-around' style={{ marginTop: '6rem' }}>
        {loading&&<Spinner/>}
        {!loading &&
          <>
            <div className="card" style={{ width: '23rem', height:'100%'}}>
              <div className='card-header'  style={{backgroundColor:'#8adfbf'}}>
              <h4 className='text-center'>User List</h4>
              </div>
              {userData.map((ele) => {
                return <List key={ele.id} id={ele.id} avatar={ele.avatar} username={ele.profile.username} setActiveId={changeActiveId}/>
              })}
            </div>
            <div>
              <UserInfo userData={userData} activeId={activeId} loading={loading}/>
            </div>
          </>
        }
      </div>
    </div>
  )
}

