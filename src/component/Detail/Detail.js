import React from 'react'
import './Detail.scss'
import { Rate, Space } from 'antd'
import { Typography } from 'antd'
import { InputNumber } from 'antd'
import { Button } from 'antd'

const { Text } = Typography
const s = 50
function onChange(value) {
	// console.log('changed', value);
}
export default function Detail({
	name,
	category,
	price,
	discount,
	description,
	quantitiy,
}) {
	const oldprice = ((price * 100) / (100 - discount)).toFixed(0)
	console.log(description)

	return (
		<div className='detaildata'>
			<h2>
				<Text strong>
					{name} {category} {quantitiy}
				</Text>
			</h2>

			<Rate disabled defaultValue={4} />

			<br />
			<br />

			<h5>
				<Space size={s}>
					<Text strong delete type='danger'>
						Rs: {oldprice}
					</Text>
					<Text strong>Rs: {price}</Text>
				</Space>
			</h5>
			<Text>Quantity</Text>
			<br />
			<InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
			<br />
			<br />
			<Button className='cartbutton' type='primary' shape='round'>
				{' '}
				Add To cart
			</Button>
			<br />
			<br />
			<hr />

			<Text className='detailfont' type='secondary'>
				{description}
			</Text>
		</div>
	)
}
