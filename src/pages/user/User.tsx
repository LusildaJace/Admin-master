import { CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './user.scss'

const User = () => {
  return (
    <div className='userPage'>
      <div className="titleContainer">
        <h1>Edit User</h1>
        <Link to='/newUser'>
          <button>Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="show">
          <div className="top">
            <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="profile" />
            <div className="title">
              <span className="username">Lusilda Jace</span>
              <span className="userTitle">Software Developer</span>
            </div>
          </div>
          <div className="bottom">
            <span className="title">Account Details</span>
            <div className="info">
              <PermIdentity className='icon' />
              <span className="infoTitle">lusilda</span>
            </div>
            <div className="info">
              <CalendarToday className='icon' />
              <span className="infoTitle">24/06/2002</span>
            </div>

            <span className="title">Contact Details</span>

            <div className="info">
              <PhoneAndroid className='icon' />
              <span className="infoTitle">+355 68 64 64 403</span>
            </div>
            <div className="info">
              <MailOutline className='icon' />
              <span className="infoTitle">lusildajace@gmail.com</span>
            </div>
            <div className="info">
              <LocationOn className='icon' />
              <span className="infoTitle">Tirane | Albania</span>
            </div>
          </div>
        </div>
        <div className="update">
          <span className="title">Edit</span>
          <form>
            <div className="left">
              <div className="updateItem">
                <label>Username</label>
                <input type="text" placeholder='Lusilda'/>
              </div>
              <div className="updateItem">
                <label>Full Name</label>
                <input type="text" placeholder='Lusilda Jace'/>
              </div>
              <div className="updateItem">
                <label>E-mail</label>
                <input type="text" placeholder='lusildajace@gmail.com'/>
              </div>
              <div className="updateItem">
                <label>Phone</label>
                <input type="text" placeholder='+355 68 64 64 403'/>
              </div>
              <div className="updateItem">
                <label>Address</label>
                <input type="text" placeholder='Tirane | Albania'/>
              </div>
            </div>
            <div className="right">
              <div className="upload">
                <label htmlFor="file"><img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="profilePic"/><Publish className='publish'/></label>
                <input type="file" id="file" style={{display: 'none'}} />
              </div>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User