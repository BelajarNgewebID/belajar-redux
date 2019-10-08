import React, { Component } from "react";

import { connect } from 'react-redux'
import Profile from './Profile'

class Header extends Component {
	render() {
		return (
			<div style={{ height: 85 }}>
				<h1 style={{ float: 'left' }}>Nama produk</h1>
				<Profile />
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		qty: state.qty,
	}
}

export default connect(mapStateToProps)(Header)