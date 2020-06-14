import React, { Component } from 'react'
import { Menu } from 'antd'
import man from '../../Images/man.png'
// import AccountContent from './AccountContent';
import { Row, Col } from 'antd'
import { FolderAddTwoTone } from '@ant-design/icons'

// const style = {background: '#0092ff', padding: '8px 0'};

class AccountMenu extends Component {
	render() {
		return (
			<div>
				<Menu>
					<Menu.Item style={{ height: '50px' }}>
						<Row gutter={16}>
							<Col className='gutter-row' span={5}>
								<div>
									<img src={man} alt='logo' height='50px' width='50px' />
								</div>
							</Col>
							<Col className='gutter-row' span={19}>
								<div style={{ lineHeight: '4px', marginTop: '15px' }}>
									<p style={{ fontSize: '15px' }}>Hello,</p>
									<p style={{ fontSize: '20px', paddingLeft: '12px' }}>
										<b>VIVEK KUMAR</b>
									</p>
								</div>
							</Col>
						</Row>
					</Menu.Item>
				</Menu>
				<br />
				<Menu>
					<Menu.Item>
						<FolderAddTwoTone />
					</Menu.Item>
				</Menu>
			</div>
		)
	}
}

export default AccountMenu
