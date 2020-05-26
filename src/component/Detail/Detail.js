import React from 'react';
import './Detail.scss';
import {Rate, Space} from 'antd';
import {Typography} from 'antd';
import {InputNumber} from 'antd';

const {Text} = Typography;
const s =50;
function onChange(value) {
  console.log('changed', value);
}
export default function Detail() {
  return (
    <div className="detaildata">
      <h2><Text strong>Gromor Power (Calcium Nitrate with Boron), Fertilizer, 25 Kg</Text></h2>

      <Rate disabled defaultValue={4} />

      <br />
      <br />

      <h5>
        <Space size={s}>
          <Text strong delete type="danger">Rs: 500</Text>
          <Text strong>Rs: 500</Text>
        </Space>
      </h5>
      <Text>Quantity</Text><br />
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      <br />
      <br />

      <hr />

      <Text style={{fontSize: '15px'}} type="secondary">Gromor Power (Calcium Nitrate with Boron) is a fertilizer by Coromandel International Ltd. It contains calcium, nitrogen as well as boron. It increases the number, quality of fruits, crop production, and provides strength to the plants.</Text>

    </div>
  );
}
