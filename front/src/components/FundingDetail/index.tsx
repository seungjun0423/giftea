import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import linkIcon from '../../assets/link.png';

function FundingDetail() {
  // id: 현재 펀딩 id
  const { id } = useParams();

  // 추후에 해당 id로 API 가져오기
  console.log(id);

  const location = useLocation();
  const { item } = location.state || {};

  const { dday, title, price, imgUrl, description, percentage } = item;

  const daysFromNow = (date) => {
    const oneDay = 24 * (60 * 60) * 1000; // hours * minutes * seconds * milliseconds
    const today = Date.now();
    const diffDays = Math.round(Math.abs((date - today) / oneDay));
    return diffDays;
  };

  const handleClickShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => window.alert('링크가 복사되었습니다!'));
  };

  return (
    <div className="funding_detail">
      <div className="wrapper">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="title_wrapper">
        <h1>{title}</h1>
        <button className="btn_share" onClick={handleClickShare}>
          <img src={linkIcon} alt="link" />
        </button>
      </div>
      <p className="funding_detail_price">{price.toLocaleString()}원</p>
      <div className="funding_detail_info_container">
        <div className="funding_detail_percentage">
          <span>{percentage}% </span>달성
        </div>
        <div className="funding_detail_date">{daysFromNow(new Date(dday))}일 남음</div>
      </div>
      <div className="funding_detail_progress_bar_container">
        <div className="funding_detail_progress_bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="funding_detail_description">{description}</div>
      <div className="funding_detail_transfer_wrapper">
        <button className="funding_detail_transfer_button">계좌번호로 송금하기</button>
      </div>
    </div>
  );
}

export default FundingDetail;
