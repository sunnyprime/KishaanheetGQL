/* eslint-disable require-jsdoc */
import React from 'react';
import Singlecard from '../../component/Home/Singlecard';
import {Row, Col} from 'antd';


export default function Cards({category}) {
  if (category) {
    return (
      <div>
        <Row justify="space-between">


          {category.map((item, index)=>{
            return (
              <Col key={index} span={4} lg={4} md={8} sm={12} xs={24}
                style={{marginBottom: '20px'}}>
                <Singlecard key={index} src={item.url}
                  name={item.Name}/></Col>);
          })}
        </Row>
      </div>
    );
  } else {
    return (<div><Singlecard src={null} name="...Loading" /></div>);
  }
}
