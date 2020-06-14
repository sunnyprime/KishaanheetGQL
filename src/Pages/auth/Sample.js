/* eslint-disable require-jsdoc */
import React from 'react'
import { Carousel } from 'antd'
import './Login.scss'

const imgs = [
	{
		src:
			'https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/Carsouel4.jpg',
	},
	{
		src:
			'https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/Carsouel2.jpg',
	},
	{
		src:
			'https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/Carsouel3.jpg',
	},
	{
		src:
			'https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/Carsouel1.jpg',
	},
]

export default function Sample() {
	return (
		<div>
			<Carousel effect='fade' autoplay>
				{imgs.map((item, index) => {
					return (
						<div key={index}>
							<img src={item.src} alt='image' />
						</div>
					)
				})}
			</Carousel>
		</div>
	)
}
