import React, { Component } from "react";

import { connect } from 'react-redux'

class Profile extends Component {
	render() {
		return (
			<div>
				<div style={{float: 'right'}}>
                    Halo user, pesanan Anda : <b>{ this.props.qty }</b>
                </div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		qty: state.qty
	}
}

export default connect(mapStateToProps)(Profile)