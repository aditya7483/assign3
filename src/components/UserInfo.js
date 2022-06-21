import React from 'react'
import ProfilePic from '../pics/profile pic.jpg'

export default function UserInfo(props) {

    let userData = props.userData
    let loading = props.loading
    let id = props.activeId;

    return (
        <div>
            {!loading && <div className="card" style={{ width: '31rem' }}>
                <h4 className="card-header text-center" style={{backgroundColor:'#8adfbf'}}>User Info</h4>
                <div className="card-body">
                    <img className='d-block' src={userData[id-1].avatar ? ProfilePic : ProfilePic} alt='...' style={{ borderRadius: '50%', width: '6rem', height: '6rem', margin: 'auto' }} />

                    <p className='text-center'>Joined on : {new Date(userData[id-1].createdAt).getFullYear()}</p>

                    <h5 className="card-title text-center">@{userData[id-1].profile.username}</h5>

                    <div className='my-3'>
                        <h6>Bio</h6>
                        <p>{userData[id-1].Bio}</p>
                    </div>

                    <div className='my-3'>
                        <h6>First Name</h6>
                        <input className="form-control" type="text" value={userData[id-1].profile.firstName} aria-label="Disabled input example" disabled readOnly />
                    </div>

                    <div className='my-3'>
                        <h6>Last Name</h6>
                        <input className="form-control" type="text" value={userData[id-1].profile.lastName} aria-label="Disabled input example" disabled readOnly />
                    </div>

                    <div className='my-3'>
                        <h6>Email</h6>
                        <input className="form-control" type="text" value={userData[id-1].profile.email} aria-label="Disabled input example" disabled readOnly />
                    </div>

                    <div className='my-3'>
                        <h6>Job</h6>
                        <input className="form-control" type="text" value={userData[id-1].jobTitle} aria-label="Disabled input example" disabled readOnly />
                    </div>

                </div>
            </div>
            }
        </div>
    )
}
