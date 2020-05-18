import { Input } from 'antd';

import React from 'react'
const { Search } = Input;


 
 export default function Searchs() {
     return (
         <>
                <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
         </>
     )
 }
  