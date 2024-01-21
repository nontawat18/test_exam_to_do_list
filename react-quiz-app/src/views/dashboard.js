// Dashboard.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

function createData(name, score, fullscore, status) {
  return { name, score, fullscore, status };
}

const rows = [
  createData("Frozen yoghurt", 15, 20, "Pass"),
  createData("Ice cream sandwich", 12, 20, "Pass"),
  createData("Eclair", 10, 20, "Not Pass"),
  createData("Frozen yoghurt", 15, 20, "Pass"),
  createData("Ice cream sandwich", 12, 20, "Pass"),
  createData("Eclair", 10, 20, "Not Pass"),
];

function ElevationScroll(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 0 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};
const Dashboard = (props) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <ElevationScroll {...props}>
        <AppBar position="static">
          <Toolbar className="navbar-color">
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMenuClose}
                color="inherit"
              >
                <LogoutIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMenuClose}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              elevation={0}
              sx={{ padding: "20px", height: "300px" }}
              className="paper"
            >
              <h1 className="text">12345</h1>
              <span className="sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium laborum magnam nesciunt! Odit cum nemo suscipit dicta
                quaerat, nostrum odio nisi vero, dolore officiis beatae maiores
                debitis fuga libero sit!
              </span>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              elevation={0}
              sx={{ padding: "20px", height: "300px" }}
              className="paper-2"
            >
              <h1 className="text">12345</h1>
              <span className="sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium laborum magnam nesciunt! Odit cum nemo suscipit dicta
                quaerat, nostrum odio nisi vero, dolore officiis beatae maiores
                debitis fuga libero sit!
              </span>
            </Paper>{" "}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              elevation={0}
              sx={{ padding: "20px", height: "300px" }}
              className="paper-3"
            >
              <h1 className="text">12345</h1>
              <span className="sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium laborum magnam nesciunt! Odit cum nemo suscipit dicta
                quaerat, nostrum odio nisi vero, dolore officiis beatae maiores
                debitis fuga libero sit!
              </span>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper elevation={0} sx={{ padding: "20px", height: "300px" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                  {/* <caption>A basic table example with a caption</caption> */}
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Score</TableCell>
                      <TableCell align="right">Full Score</TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.score}</TableCell>
                        <TableCell align="right">{row.fullscore}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
