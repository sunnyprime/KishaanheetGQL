import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

export default function Footers() {
	return (
		<div>
			<Footer
				style={{ textAlign: 'left', background: 'black', color: 'white' }}
			>
				Copyright © 2020 BPVS Agrotech Pvt. Ltd. - All Rights Reserved.
			</Footer>
		</div>
	)
}
