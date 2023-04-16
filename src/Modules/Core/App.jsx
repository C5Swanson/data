import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useUsers } from "../../Selectors";
import { getUsers } from "../../Redux/ApplicationActionCreators";
import Home from "../Home";
import "./App.scss"

function App() {
  const dispatch = useDispatch();
  const users = useUsers();

  useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={"appContainer"}>
      <Box className={"appBarContainer"}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component={"div"}
              variant={"h6"}
              sx={{ flexGrow: 1 }}>
              Socialize App
            </Typography>
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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
