import React, {Component} from 'react';
import Layout from './components/generics/Layout';
import Routes from './Routes';


class App extends Component{
	
	render(){
		const childProps = {};
		return(
			<Layout {...this.props}>
				<Routes childProps={childProps} />
			</Layout>
		)
	}	
}

export default App;
