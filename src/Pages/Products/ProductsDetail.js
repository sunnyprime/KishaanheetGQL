/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Spin } from 'antd'
import { Row, Col } from 'antd'
import ProductMenu from './ProductMenu'
import ProductCard from '../../component/Product/ProductCard'
import { bycategory } from './ProductUtil'
import { Link } from 'react-router-dom'
import { addTocart } from '../../redux/cart/cart.action'
// import { Query } from 'react-apollo'
// import { gql } from 'apollo-boost'

function ProductsDetail(props) {
	console.log(props)

	const [filteredctg, addcategory] = useState()
	const { id } = useParams()
	const { category } = props

	useEffect(() => {
		addcategory(category)
	}, [category, id])
	useEffect(() => {
		if (filteredctg) {
			const byctg = bycategory(category, id)
			addcategory(byctg)
		}
	}, [category, filteredctg, id])

	const addtocart = (data) => {
		console.log('add To cartt')

		// console.log(data);
		props.addTocart(data)
	}

	if (filteredctg) {
		return (
			<div>
				<Row gutter={[12, 24]}>
					<Col span={6} lg={6} md={8} sm={12} xs={24}>
						<ProductMenu />
					</Col>
					<Col span={18} lg={18} md={16} sm={12} xs={24}>
						<Row
							gutter={[12, 24]}
							justify='space-around'
							style={{ marginLeft: '30px' }}
						>
							{filteredctg.map((item, index) => {
								return (
									<Col
										style={{ margin: '0px 20px' }}
										key={index}
										span={6}
										lg={6}
										md={8}
										sm={12}
										xs={24}
									>
										<Link to={`/productdetails/${item.id}`}>
											<ProductCard
												image={item.image}
												name={item.name}
												price={item.price}
												discount={item.discount}
												offer={item.offer}
												add={addtocart}
											/>
										</Link>
									</Col>
								)
							})}
						</Row>
					</Col>
				</Row>
			</div>
		)
	} else {
		return (
			<div style={{ textAlign: 'center' }}>
				<Spin tip='Loading...' />
			</div>
		)
	}
}

// const GET_TRACKS_QUERY = gql`
// 	{
// 		allProducts {
// 			id
// 			name
// 			image
// 		}
// 	}
// `

const mapDispatchToProps = (dispatch) => {
	return {
		addTocart: (creds) => dispatch(addTocart(creds)),
	}
}
const mapStateToProps = (state) => {
	return {
		categorya: state.firestore.ordered.product,
	}
}
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{
			collection: 'product',
		},
	])
)(ProductsDetail)
