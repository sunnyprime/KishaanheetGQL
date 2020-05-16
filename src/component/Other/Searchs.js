import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import React from 'react'
const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

 
 export default function Searchs() {
     return (
         <>
                <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
         </>
     )
 }
  