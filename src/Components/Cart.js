import React, { Component } from "react";

import { connect } from 'react-redux'
import { increaseQty,decreaseQty } from '../Redux/Actions'

class Cart extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.decQty}>-</button>
				<input type='number' value={this.props.qty} />
				<button onClick={this.props.incQty}>+</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		qty: state.qty,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		incQty: () => {
			dispatch(increaseQty())
		},
		decQty: () => {
			dispatch(decreaseQty())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)