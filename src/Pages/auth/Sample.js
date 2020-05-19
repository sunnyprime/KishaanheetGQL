/* eslint-disable require-jsdoc */
import React from 'react';
import {Carousel} from 'antd';
import './Login.scss';

export default function Sample() {
  return (
    <div style={{border: '1px solid black'}}>
      <Carousel autoplay>
        <div>
          <h1><img src="" alit="img" /></h1>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
