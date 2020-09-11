import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import SideNav from './components/SideNav';
import MainContent from './components/MainContent';

function App() {
  return (
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
  );
}

export default App;
