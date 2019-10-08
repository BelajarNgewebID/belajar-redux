import React, { Component } from "react";

import Cart from './Cart'

class Body extends Component {
	render() {
		return (
			<div>
				<h3>Deskripsi</h3>
                <p>
                    Lorem ipsum dolor sit amet
                </p>
                <Cart />
			</div>
		)
	}
}

export default Body