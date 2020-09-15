import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import { ColorValues } from './theme/colors';
import { recreateMuiTheme } from './theme/recreateMuiTheme';
import { ThemeProvider } from '@material-ui/core';

import SideNav from './components/SideNav';
import MainContent from './components/MainContent';

const App = () => {

	const customizedTheme = recreateMuiTheme(ColorValues.DARKBLUE);

	return (
	<ThemeProvider theme={customizedTheme}>
		<div className="App">
			<Router> 
				<SideNav />
				<Switch>
			  		<Route exact path="/" 
			  			render={(props) => <MainContent {...props} content="projects" />} />
			  		<Route exact path="/projects" 
					  	render={(props) => <MainContent {...props} content="projects" />}/>
					<Route exact path="/blogs" 
					  	render={(props) => <MainContent {...props} content="blogs" />}/>
					<Route exact path="/newblog" 
					  	render={(props) => <MainContent {...props} content="blogForm" />}/>
					<Route exact path="/newproject" 
					  	render={(props) => <MainContent {...props} content="projectForm" />}/>
				</Switch>
			</Router>
		</div>
	</ThemeProvider>
	);
}

export default App;
