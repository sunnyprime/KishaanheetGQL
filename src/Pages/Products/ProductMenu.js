import React from 'react';
import {Menu} from 'antd';
import {Slider} from 'antd';
import {Typography} from 'antd';
import {Switch} from 'antd';
const {Text} = Typography;
const {SubMenu} = Menu;


function handleClick(e) {
  console.log('click', e);
}
function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export default function ProductMenu() {
  const marks = {
    0: 'Rs: 0',

    100: 'Rs:100',

  };
  return (
    <div>
      <Menu onClick={handleClick} style={{width: 400}} mode="vertical" style={{padding: '20px'}}>
        <Menu.Item><Text strong>Price</Text>
          <Slider marks={marks} defaultValue={37} />
        </Menu.Item>

        <Menu.Item><Text strong>Discount</Text></Menu.Item>
        <br/>
        <br/>
        <Menu.Item>
          <Switch defaultChecked onChange={onChange} />
        </Menu.Item>

      </Menu>
    </div>
  );
}
