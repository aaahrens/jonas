import React, {Component} from "react";
import logo from "./logo.svg";
import {connect} from "react-redux";
import {push} from "react-router-redux";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" style={{height: 50, width: 50}}/>
					<h2>Welcome to React</h2>
				</div>
				JONAS SHOULD LEARN TO FUCKING CODE
			</div>
		);
	}
}


export default connect(
	(state) => ({}),
	(dispatch) => ({
		next: () => dispatch(push("/about"))
	})
)(App)