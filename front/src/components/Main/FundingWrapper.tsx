import React from 'react';
import FundingItem from './FundingItem';

function FundingWrapper() {
  return (
    <div className="main_funding">
      <div className="main_funding_wrapper">
        <h1 className="main_funding_title">펀딩중</h1>
      </div>
      <div className="main_funding_wrapper">
        {fundingItems && fundingItems.map((item) => <FundingItem key={item.title} itemKey={item.title} item={item} />)}
      </div>
    </div>
  );
}

const fundingItems = [
  {
    title: '올해 선물은 에어팟으로 부탁해',
    imgUrl: 'https://www.macworld.com/wp-content/uploads/2023/01/airpods-pro2-hero-1.jpg?quality=50&strip=all&w=1024',
    percentage: 31
  },
  {
    title: '올해 선물은 노트북으로 부탁해',
    imgUrl:
      'https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2029.jpg?auto=webp&quality=75&width=1024',
    percentage: 31
  },
  {
    title: '올해 선물은 맥북으로 부탁해',
    imgUrl: 'https://cdn.mos.cms.futurecdn.net/GfinEMFXnT42BFxAcDc2rA.jpg',
    percentage: 52
  },
  {
    title: '올해 선물은 갤럭시워치로 부탁해',
    imgUrl: 'https://media.wired.com/photos/5baeb45891b99b2d21c6f781/master/pass/galaxywatch.jpg',
    percentage: 35
  },
  {
    title: '올해 선물은 아이패드로 부탁해',
    imgUrl: 'https://image.cnbcfm.com/api/v1/image/107027163-ipod1.jpg?v=1666373017&w=1920&h=1080',
    percentage: 68
  },
  {
    title: '올해 선물은 애플워치로 부탁해',
    imgUrl:
      'https://media.wired.com/photos/632b6fafd884b4dcc9416568/191:100/w_2580,c_limit/Apple-Watch-SE-2022-Gear.jpg',
    percentage: 27
  }
];

export default FundingWrapper;
