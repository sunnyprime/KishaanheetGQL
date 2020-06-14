import { Input } from 'antd'
import './Searchs.scss'
import React from 'react'
const { Search } = Input

export default function Searchs() {
	return (
		<>
			<Search
				placeholder='input search text'
				onSearch={(value) => console.log(value)}
				style={{ width: 250, backgorund: 'green' }}
			/>
		</>
	)
}
