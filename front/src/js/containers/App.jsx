import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

export default class App extends Component {

	render(){
		return(
			<div>
				<Header />
				<Sidebar />
				{ this.props.children }
				<Footer />
			</div>
		)
	}
}