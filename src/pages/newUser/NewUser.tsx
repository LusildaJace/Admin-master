import './newUser.scss'

const NewUser = () => {
  return (
    <div className='newUserPage'>
      <h1>New User</h1>
      <form>
        <div className="item">
          <label>Username</label>
          <input type="text" placeholder='username'/>
        </div>
        <div className="item">
          <label>Full Name</label>
          <input type="text" placeholder='Name LastName'/>
        </div>
        <div className="item">
          <label>Email</label>
          <input type="email" placeholder='email'/>
        </div>
        <div className="item">
          <label>Password</label>
          <input type="password" placeholder='password'/>
        </div>
        <div className="item">
          <label>Phone</label>
          <input type="text" placeholder='+355 ...'/>
        </div>
        <div className="item">
          <label>Address</label>
          <input type="text" placeholder='City | Country'/>
        </div>
        <div className="item">
          <label>Gender</label>
          <div className="gender">
            <input type="radio" name='gender' id='male' value='male' />
            <label htmlFor="male">Male</label>
            <input type="radio" name='gender' id='female' value='female' />
            <label htmlFor="female">Female</label>
            <input type="radio" name='gender' id='others' value='others' />
            <label htmlFor="others">Others</label>
          </div>
        </div>

        <div className="item activeContainer">
          <label> Active </label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button>Create</button>
      </form>
    </div>
  )
}

export default NewUser;