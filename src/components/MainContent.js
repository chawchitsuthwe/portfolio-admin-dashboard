import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ProjectsPage from './ProjectsPage';
import ProjectForm from './ProjectForm';
import BlogsPage from './BlogsPage';
import BlogForm from './BlogForm';

const useStyles = makeStyles((theme) => ({
	root: {
    	display: 'flex',
    	paddingLeft: theme.spacing(9)
  	},
  	toolbar: {
		display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'flex-end',
	    padding: theme.spacing(0, 1),
	    ...theme.mixins.toolbar,
  	},
  	content: {
    	flexGrow: 1,
    	padding: theme.spacing(3),
  	},
}));


const MainContent = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<main className={classes.content}>
	        <div className={classes.toolbar} />
	        {
	        	props.content==="projects" && <ProjectsPage />
	        }
	        {
	        	props.content==="blogs" && <BlogsPage />
	        }
	        {
	        	props.content==="projectForm" && <ProjectForm />
	        }
	        {
	        	props.content==="blogForm" && <BlogForm />
	        }
	      </main>
		</div>
	)
}

export default MainContent;