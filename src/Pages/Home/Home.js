/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react'
import './Home.scss'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Cards from './Cards'
import UseWindowDimension from './UseWindowDimension'
import Banner from '../../component/Carosoul/Banner'

function Home() {
	const { width } = UseWindowDimension()
	return (
		<div>
			<Query query={GET_TRACKS_QUERY}>
				{({ data, loading, error }) => {
					if (loading) return <div>Loading...</div>
					if (error) return <div>Error</div>

					return (
						<div>
							<Cards category={data} width={width} />
						</div>
					)
				}}
			</Query>
			<Banner />
		</div>
	)
}

const GET_TRACKS_QUERY = gql`
	{
		allCategorys {
			id
			name
			image
		}
	}
`

export default Home
