import React from 'react';

export default function Picture(props) {
  const {image} =props;
  console.log(image);


  return (
    <div className="detailimage">
      <img className="" src={image} alt="image" />
    </div>
  );
}
