/* eslint-disable require-jsdoc */
import React from 'react';
import Singlecard from '../../component/Home/Singlecard';


export default function Cards({category}) {
  console.log('pppppp');
  console.log(category);

  // console.log(props);
  // const {category} = props;
  console.log(typeof(category));
  console.log('nnn');

  if (category) {
    return (
      <div style={{margin: '20px'}}>
        {category.map((item, index)=>{
          return (
            <Singlecard key={index} src={item.url} name={item.Name}/>);
        })}
      </div>
    );
  } else {
    return (<>Loading</>);
  }
}
