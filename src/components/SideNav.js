import React from 'react';
import moment from 'moment';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import BookIcon from '@material-ui/icons/Book';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
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
	link: {
		textDecoration: "none",
		color: "#000"
	}
}));

const SideNav = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
	      <CssBaseline />
	      <AppBar
	        position="fixed"
	        className={clsx(classes.appBar, {
	          [classes.appBarShift]: open,
	        })}
	      >
	        <Toolbar>
	          <IconButton
	            color="inherit"
	            aria-label="open drawer"
	            onClick={handleDrawerOpen}
	            edge="start"
	            className={clsx(classes.menuButton, {
	              [classes.hide]: open,
	            })}
	          >
	            <MenuIcon />
	          </IconButton>
	      
	          <Grid container justify="space-between">  
				<Typography variant="h6" align="left">Dashboard</Typography>
				<Typography variant="h6" align="right">{moment().format('ll')}</Typography>
			  </Grid>
	        </Toolbar>
	      </AppBar>
	      <Drawer
	        variant="permanent"
	        className={clsx(classes.drawer, {
	          [classes.drawerOpen]: open,
	          [classes.drawerClose]: !open,
	        })}
	        classes={{
	          paper: clsx({
	            [classes.drawerOpen]: open,
	            [classes.drawerClose]: !open,
	          }),
	        }}
	      >
	        <div className={classes.toolbar}>
			  <Typography variant="body1">Chaw Chit Su Thwe</Typography>
	          <IconButton onClick={handleDrawerClose}>
	            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
	          </IconButton>
	        </div>
	        <Divider />
	        <List>
	        	<Link to="/projects" className={classes.link}>
	        		<ListItem button>
		              	<ListItemIcon>
		              		<WorkIcon />
		              	</ListItemIcon>
		              	<ListItemText primary="Projects" />
		          	</ListItem>
	        	</Link>
	          	
	        	<Link to="/blogs" className={classes.link}>
	        		<ListItem button>
		              	<ListItemIcon>
		              		<BookIcon />
		              	</ListItemIcon>
		              	<ListItemText primary="Blogs" />
		          	</ListItem>
	        	</Link>
	          <ListItem button>
	              <ListItemIcon>
	              	<OpenInBrowserIcon color="secondary" />
	              </ListItemIcon>
	              <ListItemText primary="View Website" />
	          </ListItem>
	        </List>
	      </Drawer>
	    </div>
	)
}

export default SideNav