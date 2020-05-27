import React from 'react';

export default function Picture(props) {
  const {image} =props;
  // console.log(image);


  return (
    <div className="detailimage">
      <img className="" src={image} alt="my new" height='240px' width='240px' />
    </div>
  );
}
