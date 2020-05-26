import React from 'react';
import {Card} from 'antd';
import {Typography} from 'antd';
import {Button, Radio} from 'antd';
const {Text} = Typography;

const {Meta} = Card;

export default function ProductCard(props) {
//   console.log(props);
  const {name, image, price, offer, discount} = props;
  const oldprice = (price*100/(100-discount)).toFixed(0);

  return (
    <div>
      <Card
        hoverable
        style={{width: 240}}
        cover={<img alt="example" src={image} />}
      >

        <Meta title={name} />
        <p><Text type="danger" delete>Rs: {oldprice}</Text> <Text style={{color: 'blue'}} strong type="secondary">Rs: {price}</Text>
        </p>
        <div>
          <Button className="cartbutton" type="primary" shape="round"> Add To cart</Button>
        </div>
      </Card>
    </div>
  );
}
