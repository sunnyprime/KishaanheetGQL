import React from 'react'
import Picture from '../../component/Detail/Picture'
import Detail from '../../component/Detail/Detail'
import { Row, Col } from 'antd'
import Deals from '../../component/Deals/Deals'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { useParams } from 'react-router-dom'
// import { matchRoutes } from 'react-router-config'

// const id = useParams()
// const id = 1
// 4H1EdS37kYf4pG7RWvPf
function Details() {
	const { id } = useParams()
	const GET_SINGLEPRODUCT_QUERY = gql`
	{
		product(id:${id}) {
			id
			name
			price
			quantitiy
			image
			offer
			discount
			pieces
			description
			brand
		}
	}
`
	console.log(useParams())

	return (
		<div>
			<Query query={GET_SINGLEPRODUCT_QUERY}>
				{({ data, loading, error }) => {
					if (loading) return <div>Loading...</div>
					if (error) return <div>Error</div>
					// console.log(data)

					return (
						<div>
							<Row gutter={[0, 24]}>
								<Col span={10} lg={10} md={24} sm={24} xs={24}>
									<Picture image={data.product.image} />
								</Col>
								<Col span={14} lg={14} md={24} sm={24} xs={24}>
									<Detail
										name={data.product.name}
										category={data.product.category}
										price={data.product.price}
										discount={data.product.discount}
										quantitiy={data.product.quantitiy}
										description={data.product.description}
									/>
								</Col>
							</Row>
							<Deals />
						</div>
					)
				}}
			</Query>
		</div>
	)
}

export default Details
