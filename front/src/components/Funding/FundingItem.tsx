import React from 'react';
import { Link } from 'react-router-dom';

type Item = {
  id: number;
  dday: string;
  price: number;
  title: string;
  imgUrl: string;
  percentage: number;
};

type FundingItemProps = {
  item: Item;
  itemKey: string;
};

export default function FundingItem({ item, itemKey }: FundingItemProps) {
  const { id, dday, title, price, imgUrl, percentage } = item;

  const daysFromNow = (date) => {
    const oneDay = 24 * (60 * 60) * 1000; // hours * minutes * seconds * milliseconds
    const today = Date.now();
    const diffDays = Math.round(Math.abs((date - today) / oneDay));
    return diffDays;
  };

  return (
    <Link to={`/funding/${id}`}>
      <div className="funding_item" key={itemKey}>
        <img src={imgUrl} alt={title} className="funding_item_image" />
        <div className="funding_item_info">
          <div className="funding_item_info_container">
            <div className="funding_item_percentage">{percentage}% 달성</div>
            <div className="funding_item_price">{price.toLocaleString()}원</div>
          </div>
          <div className="funding_item_date">{daysFromNow(new Date(dday))}일 남음</div>
        </div>
        <div className="funding_item_title">{title}</div>
        <div className="funding_item_progress_bar_container">
          <div className="funding_item_progress_bar" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </Link>
  );
}
