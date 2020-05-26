/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Card} from 'antd';
const {Meta} = Card;


export default function Singlecard(props) {
  // console.log(props);

  const {src, name, width} = props;
  let itemwidth;
  let height;

  if (width<575) {
    itemwidth=240;
    height=180;
  } else if (width>1400) {
    itemwidth=240;
    height=180;
  } else {
    itemwidth = ((width*4)/25).toFixed(0);
    height = itemwidth -40;
  }
  return (

    <Card
      hoverable
      style={{width: `${itemwidth}px`}}
      cover={<img alt="example" src={src} height={`${height}px`} />}
    >
      <Meta style={{textAlign: 'center'}} size='smaller' title={name} />
    </Card>

  );
}
