import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		backgroundColor: "#FFF",
		padding: theme.spacing(3),
		boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.19)",
		borderRadius: "5px"
	},
	input: {
		width: "100%",
		marginBottom: "10px",
		textAlign: "left"
	},
	button: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(3)
	},
	link: {
		textDecoration: "none",
		color: "#868e96",
		'&:hover': {
	       textDecoration: "underline"
	    },
	},

}));

const BlogForm = () => {
	const classes = useStyles();
	const [description, setDescription] = useState('');
	const [category, setCategory] = React.useState('');

	const categoryHandleChange = (event) => {
		setCategory(event.target.value);
	};

	const descHandleChange = (event) => {
		setDescription(event.target.value);
	};

	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb">
		      <Link to="/blogs" className={classes.link}>
		      	<Typography>Blogs</Typography>
		      </Link>
		      <Typography color="textPrimary">New Blog</Typography>
		    </Breadcrumbs>

		    <form noValidate autoComplete="off" className={classes.root}>
		    	<Grid container spacing={2}>
		    		<Grid item xs={12} sm={12} md={6} lg={6}>
						<TextField id="standard-basic" label="Blog Title" className={classes.input} />
		    		</Grid>
		    		<Grid item xs={6} sm={6} md={3} lg={3}>
						<FormControl className={classes.input}>
							<InputLabel id="demo-simple-select-label">Category</InputLabel>
							<Select
							  	value={category}
							  	onChange={categoryHandleChange}
							>
							  	<MenuItem value={10}>Category One</MenuItem>
							  	<MenuItem value={20}>Category Two</MenuItem>
							  	<MenuItem value={30}>Cateogry Three</MenuItem>
							</Select>
						</FormControl>
		    		</Grid>
		    		<Grid item xs={6} sm={6} md={3} lg={3}>
						<TextField
					        id="date"
					        label="Published Date"
					        type="date"
					        defaultValue="2017-05-24"
					        className={classes.input}
					        InputLabelProps={{
					          shrink: true,
					        }}
					      />
		    		</Grid>
		    	</Grid>
		    	<Grid container spacing={2}>
		    		<Grid item xs={12} md={8} lg={8}>
		    			<TextField
							id="standard-multiline-flexible"
							label="Blog Content"
							multiline
							rowsMax={6}
							value={description}
							onChange={descHandleChange}
							className={classes.input}
				        />
		    		</Grid>
		    		<Grid item xs={12} md={4} lg={4}>
		    			<TextField id="standard-basic" label="Cover Image Link" className={classes.input} />
		    		</Grid>
		    	</Grid>
		    	<Button
			        variant="contained"
			        color="primary"
			        size="small"
			        className={classes.button}
			        startIcon={<CloudUploadIcon />}
			      >
			        Post
			    </Button>
		    </form>
		</div>
	)
}

export default BlogForm;