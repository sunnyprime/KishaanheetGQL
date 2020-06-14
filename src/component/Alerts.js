import React from 'react'
import { Alert } from 'antd'
import { connect } from 'react-redux'

function Alerts({ alert }) {
	if (alert.length > 0) {
		console.log(alert)
		return (
			<div style={{ position: 'absolute', margin: 'auto', marginTop: '100px' }}>
				{alert.map((alerts, index) => (
					<div
						key={index}
						style={{ margin: '10px 100px 10px 100px', width: '80vw' }}
					>
						<Alert message={alerts.msg} type={alerts.alertType} showIcon />
					</div>
				))}
			</div>
		)
	} else {
		return <></>
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		//   signIn: (creds) => dispatch(signIn(creds))
	}
}

const mapStateToProps = (state) => ({
	alert: state.alerts,
})

export default connect(mapStateToProps, mapDispatchToProps)(Alerts)
