import React, { memo } from 'react'
import './Header.scss'
function Header(props) {
  const { onChangeMenu, selectedMenu } = props

  return (
    <div className="Header">
      <div className="icon-container">
        <img src={"./images/logoImage.png"} height="75px" width={"auto"}/>
      </div>
      <div className="menu">
        <div
          onClick={() => {
            onChangeMenu('home')
          }}
          className={`menu-item ${selectedMenu == 'home' ? 'selected' : ''}`}
        >
         <div className='inner-item'> Home</div>
        </div>
        <div
          onClick={() => {
            onChangeMenu('about')
          }}
          className={`menu-item ${selectedMenu == 'about' ? 'selected' : ''}`}
        >
         <div className='inner-item'> About</div>
        </div>
        <div
          onClick={() => {
            onChangeMenu('services')
          }}
          className={`menu-item ${
            selectedMenu == 'services' ? 'selected' : ''
          }`}
        >
         <div className='inner-item'>Services</div>
        </div>
        <div
          onClick={() => {
            onChangeMenu('blogs')
          }}
          className={`menu-item ${selectedMenu == 'blogs' ? 'selected' : ''}`}
        >
         <div className='inner-item'> Blogs</div>
        </div>
        <div
          onClick={() => {
            onChangeMenu('contactus')
          }}
          className={`menu-item ${
            selectedMenu == 'contactus' ? 'selected' : ''
          }`}
        >
          <div className='inner-item'> Contact US</div>
        </div>
      </div>
      <div className="book-appointment">
        <div className="appointment">Book An Apointment</div>
      </div>
    </div>
  )
}

export default memo(Header)
