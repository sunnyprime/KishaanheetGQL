import React from 'react';
import {Menu} from 'antd';
import {Slider} from 'antd';
import {Typography} from 'antd';
import {Switch} from 'antd';
import {Checkbox} from 'antd';


const {Text} = Typography;
const {SubMenu} = Menu;


function handleClick(e) {
  console.log('click', e);
}
function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function ProductMenu() {
  const marks = {
    0: 'Rs: 0',

    100: 'Rs:100',

  };
  return (
    <div>
      <Menu onClick={handleClick} style={{width: 400}} mode="vertical" style={{padding: '20px'}}>
        <Menu.Item label="price"><Slider label="Price" marks={marks} defaultValue={37} />

        </Menu.Item>

        <Menu.Item>
          <Checkbox onChange={onChange}><Text strong>Discount</Text></Checkbox>
        </Menu.Item>
        <Menu.Item>
          <Checkbox onChange={onChange}><Text strong>Offers</Text></Checkbox>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default ProductMenu;
