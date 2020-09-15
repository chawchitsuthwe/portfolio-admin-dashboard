import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import TextField from '@material-ui/core/TextField';
// import MaterialTable from 'material-table';
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
//import ViewColumn from '@material-ui/icons/ViewColumn';
import SaveIcon from '@material-ui/icons/Save';

// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };

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

const ProjectForm = () => {
	const classes = useStyles();
	const [description, setDescription] = useState('');
	// const [gallery, setGallery] = useState({
	//     columns: [
	//       { title: 'Image Link', field: 'imagelink' },
	//     ],
	//     data: [
	//     ],
	//   });

	const handleChange = (event) => {
		setDescription(event.target.value);
	};

	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb">
		      <Link to="/projects" className={classes.link}>
		        Projects
		      </Link>
		      <Typography color="textPrimary">New Project</Typography>
		    </Breadcrumbs>

		    <form noValidate autoComplete="off" className={classes.root}>
		    	<Grid container spacing={2}>
		    		<Grid item xs={6}>
						<TextField id="standard-basic" label="Project Title" className={classes.input} />
		    		</Grid>
		    		<Grid item xs={6}>
						<TextField id="standard-basic" label="Cover Image Link" className={classes.input} />
		    		</Grid>
		    	</Grid>
		    	<Grid container spacing={2}>
		    		<Grid item xs={12} md={6} lg={6}>
		    			<TextField
							id="standard-multiline-flexible"
							label="Description"
							multiline
							rowsMax={6}
							value={description}
							onChange={handleChange}
							className={classes.input}
				        />
		    		</Grid>
		    		<Grid item xs={6} md={3} lg={3}>
		    			<TextField
					        id="date"
					        label="Start Date"
					        type="date"
					        defaultValue="2017-05-24"
					        className={classes.input}
					        InputLabelProps={{
					          shrink: true,
					        }}
					      />
		    		</Grid>
		    		<Grid item xs={6} md={3} lg={3}>
		    			<TextField
					        id="date"
					        label="End Date"
					        type="date"
					        defaultValue="2017-05-24"
					        className={classes.input}
					        InputLabelProps={{
					          shrink: true,
					        }}
					      />
		    		</Grid>
		    	</Grid>
		    	<Button
			        variant="contained"
			        color="primary"
			        size="small"
			        className={classes.button}
			        startIcon={<SaveIcon />}
			      >
			        Save
			    </Button>
		    </form>
		    {/*<MaterialTable
				title="Project Gallery"
				icons={tableIcons}
				columns={gallery.columns}
				data={gallery.data}
				options={{
			        headerStyle: {
			          backgroundColor: '#C1765A',
			          color: '#FFF',
			        }
			    }}
				editable={{
					onRowAdd: (newData) =>
				  		new Promise((resolve) => {
				    		setTimeout(() => {
				      		resolve();
				      		setGallery((prevState) => {
				        	const data = [...prevState.data];
				        		data.push(newData);
				        		return { ...prevState, data };
				      		});
				    	}, 600);
				  	}),
					onRowUpdate: (newData, oldData) =>
				  		new Promise((resolve) => {
				    		setTimeout(() => {
				      		resolve();
				      		if (oldData) {
				        		setGallery((prevState) => {
				          		const data = [...prevState.data];
				          		data[data.indexOf(oldData)] = newData;
				          		return { ...prevState, data };
				    	    	});
				      		}
				    	}, 600);
				  	}),
					onRowDelete: (oldData) =>
				  		new Promise((resolve) => {
				    		setTimeout(() => {
				      		resolve();
				      		setGallery((prevState) => {
				        		const data = [...prevState.data];
				        		data.splice(data.indexOf(oldData), 1);
				        		return { ...prevState, data };
				      		});
				    	}, 600);
				  	}),
				}}
				/>*/}
		</div>
	)
}

export default ProjectForm;