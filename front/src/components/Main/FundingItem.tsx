import React from 'react';

type Item = {
  title: string;
  imgUrl: string;
  percentage: number;
};

type FundingItemProps = {
  item: Item;
  itemKey: string;
};

export default function FundingItem({ item, itemKey }: FundingItemProps) {
  const { title, imgUrl, percentage } = item;
  return (
    <div className="main_funding_item">
      <img src={imgUrl} alt={title} className="main_funding_item_image" />
      <div className="main_funding_item_title">{title}</div>
      <div className="main_funding_item_percentage">펀딩 성공률 {percentage}%</div>
    </div>
  );
}
