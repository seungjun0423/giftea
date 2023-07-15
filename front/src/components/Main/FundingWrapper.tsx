import React from 'react';
import { Link } from 'react-router-dom';

import FundingItem from './FundingItem';

function FundingWrapper() {
  return (
    <div className="main_funding">
      <div className="main_funding_wrapper">
        <h1 className="main_funding_title">펀딩중</h1>
      </div>
      <div className="main_funding_wrapper">
        {fundingItems?.map((item) => (
          <FundingItem key={item.title} itemKey={item.title} item={item} />
        ))}
      </div>
      <Link to="/funding">
        <div className="button_wrapper">
          <button className="main_button">진행 중인 펀딩 더보기</button>
        </div>
      </Link>
    </div>
  );
}

const fundingItems = [
  {
    id: 1,
    title: '올해 선물은 에어팟으로 부탁해',
    description: '아이엠의 생일이 곧 다가오고 있어요! \n모두 아이엠이 갖고 싶어하는 에어팟을 선물해주세요.',
    author: '마동석',
    dday: '2023-09-12',
    price: 300000,
    imgUrl: 'https://www.macworld.com/wp-content/uploads/2023/01/airpods-pro2-hero-1.jpg?quality=50&strip=all&w=1024',
    percentage: 31
  },
  {
    id: 2,
    title: '올해 선물은 노트북으로 부탁해',
    description: '셔누의 생일이 곧 다가오고 있어요! \n모두 셔누가 갖고 싶어하는 노트북을 선물해주세요.',
    author: '이준혁',
    dday: '2023-08-11',
    price: 1500000,
    imgUrl:
      'https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2029.jpg?auto=webp&quality=75&width=1024',
    percentage: 12
  },
  {
    id: 3,
    title: '올해 선물은 맥북으로 부탁해',
    description: '기현의 생일이 곧 다가오고 있어요! \n모두 기현이가 갖고 싶어하는 맥북을 선물해주세요.',
    author: '이범수',
    dday: '2023-07-04',
    price: 3000000,
    imgUrl: 'https://cdn.mos.cms.futurecdn.net/GfinEMFXnT42BFxAcDc2rA.jpg',
    percentage: 52
  },
  {
    id: 6,
    title: '올해 선물은 갤럭시워치로 부탁해',
    description: '형원의 생일이 곧 다가오고 있어요! \n모두 형원이가 갖고 싶어하는 갤럭시워치를 선물해주세요.',
    author: '이범수',
    dday: '2023-07-04',
    price: 400000,
    imgUrl: 'https://media.wired.com/photos/5baeb45891b99b2d21c6f781/master/pass/galaxywatch.jpg',
    percentage: 35
  },
  {
    id: 4,
    title: '올해 선물은 아이패드로 부탁해',
    description: '형원의 생일이 곧 다가오고 있어요! \n모두 형원이가 갖고 싶어하는 아이패드를 선물해주세요.',
    author: '고규필',
    dday: '2023-07-04',
    price: 1000000,
    imgUrl: 'https://image.cnbcfm.com/api/v1/image/107027163-ipod1.jpg?v=1666373017&w=1920&h=1080',
    percentage: 68
  },
  {
    id: 5,
    title: '올해 선물은 애플워치로 부탁해',
    description: '주헌이의 생일이 곧 다가오고 있어요! \n모두 주헌이가 갖고 싶어하는 아이패드를 선물해주세요.',
    author: '김민재',
    dday: '2023-07-04',
    price: 700000,
    imgUrl:
      'https://media.wired.com/photos/632b6fafd884b4dcc9416568/191:100/w_2580,c_limit/Apple-Watch-SE-2022-Gear.jpg',
    percentage: 27
  }
];

export default FundingWrapper;
