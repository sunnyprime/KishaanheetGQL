/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import {Card} from 'antd';
const {Meta} = Card;

export default function Singlecard(props) {
  // console.log(props);

  const {src, name} = props;
  return (

    <Card
      hoverable
      style={{width: 240}}
      cover={<img alt="example" src={src} height="180px"/>}
    >
      <Meta size='larger' title={name} />
    </Card>

  );
}
