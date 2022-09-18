import { useCallback, useState } from 'react'
import './App.scss';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Icon from './Icons/Icon';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('home')
  const onChangeMenu = useCallback(
    (selectedItem) => {
      setSelectedMenu(selectedItem)
    },
    [setSelectedMenu],
  )
  return (
    <div className="App">
      <div className="header-container">
        <Header
          selectedMenu={selectedMenu}
          onChangeMenu={onChangeMenu}
        ></Header>
      </div>

      <div className="main-page-container">
        {selectedMenu == 'home' && <Home></Home>}
        {selectedMenu == 'about' && <About></About>}
        {selectedMenu == 'blogs' && <Blogs></Blogs>}
        {selectedMenu == 'contactus' && <Contact></Contact>}
        {selectedMenu == 'services' && <Services></Services>}
      </div>
      <div className="bottom-div">
        <div className="bottpm-top">
          <div className="iconic-text">ICONIC 32</div>
          <div className="contact-detail">
            <div className="email-id">thakkarchintu5@gmail.com</div>
            <div className="contact-no">+91 9737151511</div>
          </div>
        </div>
        <div className="bottom-bottom">
          <div className="copyright-text">
            Copyright ©2022 ICONIC 32 Dental Clinic. All rights reserved
          </div>
          <div className="contact-detail bottom">
            <div className="media-icons">
              <a href={'http://www.facebook.com'} target={"_blank"} className="facebook-size">
                <Icon icon="FACEBOOK_ICON" className="icon-smile" />
              </a>
            </div>
            <div className="media-icons">
              <a href={'http://www.facebook.com'} target={"_blank"} className="facebook-size">
                <Icon icon="INSTA_ICON" className="icon-smile" />
              </a>
            </div>
            <div className="media-icons">
              <a href={'http://www.facebook.com'} target={"_blank"} className="facebook-size">
                <Icon icon="TWITTER_ICON" className="icon-smile" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
