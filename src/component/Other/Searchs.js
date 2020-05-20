import {Input} from 'antd';
import './Searchs.scss';
import React from 'react';
const {Search} = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );
export default function Searchs() {
  return (
    <>
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        style={{width: 200, marginBottom: '10px'}}
      />
    </>
  );
}

