import './sidebar.scss'

import {   
  LineStyle, 
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Logout,
  Report } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebarComponent">
      <div className="wrapper">
        <div className="menu">
          <h3>Dashboard</h3>
          <ul>
            <Link to='/' className='link'>
              <li>
                <LineStyle className='icon'/>
                Home
              </li>
            </Link>
            
          </ul>
        </div>
        <div className="menu">
          <h3>Quick Menu</h3>
          <ul>
            <Link to='/users' className='link'>
              <li>
                <PermIdentity className='icon'/>
                Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li>
                <Storefront className='icon' />
                Products
              </li>
            </Link>
            <Link to='/products' className='link' style={{color:'red'}}>
              <li>
                <Logout className='icon' style={{color:'red'}} />
                Log Out
              </li>
            </Link>
         
          </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Sidebar