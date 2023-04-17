import { useEffect, useMemo, useState  } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useUsers } from "../../Selectors";
import { getUsers } from "../../Redux/ApplicationActionCreators";
import Home from "../Home";
/*
STEP 2

TODO: Import profile component, friend component, and useNavigate;
*/
import "./App.scss"

const App = function() {
  const dispatch = useDispatch();
  const users = useUsers();

  /*
  STEP 2

  TODO: Define variable for useNavigate the component 
  */
 
  /*
  STEP 2

  TODO: Define memoized (useMemo) variable to get the user with ID of 1. This will be the current user. 
  */

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);


  const onMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuAction = (path) => {
    setAnchorEl(null);

    if (path) {
      /*
      STEP 2

      TODO: Add action to navigate to the path 
      */
    }
  };

  return (
    <div className={"appContainer"}>
      <Box className={"appBarContainer"}>
        <AppBar position="static">
          <Toolbar>   
            <Typography
              component={"div"}
              variant={"h6"}
              sx={{ flexGrow: 1 }}>
              Socialize App
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={onMenuClick}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuAction}
              >
                <MenuItem onClick={() => handleMenuAction('profile')}>Profile</MenuItem>
                <MenuItem onClick={() => handleMenuAction('friends')}>Friends</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className={"routeContainer"}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home users={users}/>}>
            </Route>
            {
              /*
              STEP 2

              TODO: Add Route for for a profile component and friends component
              */
            }
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
