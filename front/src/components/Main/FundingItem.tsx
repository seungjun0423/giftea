import React from 'react';
import { Link } from 'react-router-dom';

type Item = {
  id: number;
  title: string;
  imgUrl: string;
  percentage: number;
};

type FundingItemProps = {
  item: Item;
  itemKey: string;
};

export default function FundingItem({ item, itemKey }: FundingItemProps) {
  const { id, title, imgUrl, percentage } = item;

  return (
    <Link to={`/funding/${id}`} state={{ item: item }}>
      <div className="main_funding_item" key={itemKey}>
        <img src={imgUrl} alt={title} className="main_funding_item_image" />
        <div className="main_funding_item_title">{title}</div>
        <div className="main_funding_item_percentage">펀딩 성공률 {percentage}%</div>
      </div>
    </Link>
  );
}
