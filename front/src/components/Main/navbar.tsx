import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h1>GIFTEA</h1>
      </div>
      <div className="navbar_set">
        <ul>
          <li>
            <div className="navbar_menu">로그인</div>
          </li>
          <li>
            <div className="navbar_menu">마이페이지</div>
          </li>
          <li>
            <div className="navbar_menu2">펀딩 만들기</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
