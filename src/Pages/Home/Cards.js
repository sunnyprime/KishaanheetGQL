import React from 'react'
import Singlecard from '../../component/Home/Singlecard'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

export default function Cards({ category, width }) {
	// console.log(width);
	// console.log(category.allCategorys)

	if (category) {
		return (
			<div>
				{
					<Row justify='space-around'>
						{category.allCategorys.map((item, index) => {
							return (
								<Col
									key={index}
									className='cardcenter'
									span={4}
									lg={4}
									md={4}
									sm={4}
									xs={24}
									style={{ marginBottom: '20px' }}
								>
									<Link to={`/products/${item.Name}`}>
										<Singlecard
											key={index}
											src={item.image}
											name={item.name}
											width={width}
										/>
									</Link>
								</Col>
							)
						})}
					</Row>
				}
			</div>
		)
	} else {
		return (
			<div>
				<Singlecard src={null} name='...Loading' />
			</div>
		)
	}
}
