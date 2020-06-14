/* eslint-disable no-invalid-this */
import React, { Component } from 'react'
import { Menu } from 'antd'
import { Spin } from 'antd'
import { NavLink } from 'react-router-dom'
import ProductsDetail from './ProductsDetail'
import { Route } from 'react-router-dom'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Plist from '../ProductList.js/Plist'

class Products extends Component {
	state = {
		current: 'mail',
	}

	handleClick = (e) => {
		console.log('click ', e)
		this.setState({
			current: e.key,
		})
	}
	render() {
		return (
			<div>
				{/* Top navbar */}
				<Query query={GET_CATEGORY_QUERY}>
					{({ data, loading, error }) => {
						if (loading)
							return (
								<div>
									<Spin tip='Loading...' />
								</div>
							)
						if (error) return <div>Error</div>

						return (
							<div>
								<Menu
									style={{ textAlign: 'center' }}
									onClick={this.handleClick}
									selectedKeys={[this.state.current]}
									mode='horizontal'
								>
									<Menu.Item>
										<NavLink exact to='/products/all'>
											All
										</NavLink>
									</Menu.Item>
									{data.allCategorys.map((item, index) => {
										return (
											<Menu.Item style={{ margin: '0px 3vw' }} key={index}>
												<NavLink to={`/products/${item.name}`}>
													{item.name}
												</NavLink>
											</Menu.Item>
										)
									})}
								</Menu>
							</div>
						)
					}}
				</Query>
				<br />
				{/* <Route path='/products/:id' component={ProductsDetail} /> */}
				<Route path='/products/:id'>
					<Query query={GET_PRODUCT_QUERY}>
						{({ data, loading, error }) => {
							if (loading) return <div>Loading...</div>
							if (error) return <div>Error</div>
							// console.log(data)

							return (
								<div>
									<Plist {...data.allProducts} />
									<ProductsDetail category={data.allProducts} />
								</div>
							)
						}}
					</Query>
				</Route>
			</div>
		)
	}
}

const GET_CATEGORY_QUERY = gql`
	{
		allCategorys {
			id
			name
		}
	}
`
const GET_PRODUCT_QUERY = gql`
	{
		allProducts {
			id
			name
			price
			quantitiy
			image
			offer
			discount
			pieces
			brand
		}
	}
`

export default Products
