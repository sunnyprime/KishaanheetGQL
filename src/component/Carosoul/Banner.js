import React from 'react';
// import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';
const imgs = [
  {src: 'https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/Carsouel4.jpg'},
  {src: 'https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/Carsouel2.jpg'},
  {src: 'https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/Carsouel3.jpg'},
  {src: 'https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/Carsouel1.jpg'},
];

export default function Banner() {
  return (
    <div>
      <Carousel autoPlay showThumbs={false}>
        {imgs.map((item, index)=>{
          return (
            <div key={index}>
              <img src={item.src} alt={index} />
            </div>
          );
        })}

      </Carousel>
    </div>
  );
}
