import React, { useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const CardComponent = () => {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
 	   setOpen((prevOpen) => !prevOpen);
 	};

  	const handleClose = (event) => {
    	if (anchorRef.current && anchorRef.current.contains(event.target)) {
    	  	return;
    	}

    	setOpen(false);
  	};

  	function handleListKeyDown(event) {
    	if (event.key === 'Tab') {
    	  	event.preventDefault();
      		setOpen(false);
    	}
  	}

	const prevOpen = React.useRef(open);
  	useEffect(() => {
    	if (prevOpen.current === true && open === false) {
      		anchorRef.current.focus();
    	}

    	prevOpen.current = open;
  	}, [open]);

	return (
		<div>
			<Card>
		      <CardHeader
		        action={
		          <IconButton 
		          	aria-label="settings"
		          	ref={anchorRef}
					aria-controls={open ? 'menu-list-grow' : undefined}
					aria-haspopup="true"
					onClick={handleToggle}>
		            <MoreVertIcon />
		          </IconButton>
		        }
		        title="Card Title"
        		subheader="September 14, 2016"
		      />
		    </Card>


		    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
         	{({ TransitionProps, placement }) => (
            	<Grow
              		{...TransitionProps}
              		style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            	>
	              <Paper>
	                <ClickAwayListener onClickAway={handleClose}>
	                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
	                    <MenuItem onClick={handleClose}>Edit</MenuItem>
	                    <MenuItem onClick={handleClose}>Delete</MenuItem>
	                  </MenuList>
	                </ClickAwayListener>
	              </Paper>
            	</Grow>
          	)}
        </Popper>
		</div>
	)
}

export default CardComponent;