import React from 'react';
import LoginModal from 'components/Login/LoginModal';

function Navbar() {
  return (
    <div className="navbar_set">
      <div className="navbar_set1">
        <div className="navbar_main">GIFTEA</div>
        <div className="navbar_menu">
          <div className="navbar_img_set">
            <div className="navbar_img">img1</div>
            <div className="navbar_menu1">로그인</div>
          </div>
          <div className="navbar_img_set">
            <div className="navbar_img">img2</div>
            <div className="navbar_menu1">마이페이지</div>
          </div>
          <div className="navbar_img_set">
            <div className="navbar_img">img3</div>
            <div className="navbar_menu1">펀딩 만들기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
