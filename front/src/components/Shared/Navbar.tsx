import React from 'react';
import { Link } from 'react-router-dom';

import loginIcon from '../../assets/login.png';
import mypageIcon from '../../assets/mypage.png';
import makeFundingIcon from '../../assets/makeFunding.png';

function Navbar() {
  return (
    <nav>
      <div className="navbar_container">
        <Link to="/" className="title">GIFTEA</Link>
        <div className="navbar_icon_container">
          <div className="navbar_icon">
            <img src={loginIcon} alt="login icon" className="navbar_icon_img" />
            <div className="navbar_icon_title">로그인</div>
          </div>
          <Link to="/my" className="navbar_icon">
            <img src={mypageIcon} alt="mypage icon" className="navbar_icon_img" />
            <div className="navbar_icon_title">마이페이지</div>
          </Link>
          <Link to="/create" className="navbar_icon">
            <img src={makeFundingIcon} alt="make funding icon" className="navbar_icon_img make_funding_img" />
            <div className="navbar_icon_title make_funding_menu">펀딩 만들기</div>
          </Link>
        </div>
      </div>
      <hr className="navbar_line" />
      <div className="navbar_menu_container">
        <Link to="funding" className="navbar_menu">펀딩 중</Link>
        <Link to="complete" className="navbar_menu">펀딩 성공</Link>
      </div>
    </nav>
  );
}

export default Navbar;
