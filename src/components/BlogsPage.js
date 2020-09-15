import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CardComponent from './CardComponent';

const useStyles = makeStyles( theme => ({
  root: {
  	marginTop: theme.spacing(2),
  },
}));

const BlogsPage = () => {
	const classes = useStyles();

	return (
		<div>
			<Grid container>
				<Grid item>
					<Link to="/newblog">
						<Button variant="contained" color="primary" href="#contained-buttons">
					    	New Blog
					    </Button>
					</Link>
				</Grid>
			</Grid>
			<Grid container spacing={2} direction="row" justify="flex-start" className={classes.root}>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<CardComponent />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<CardComponent />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<CardComponent />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<CardComponent />
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<CardComponent />
				</Grid>
			</Grid>
		</div>
	)
}

export default BlogsPage;