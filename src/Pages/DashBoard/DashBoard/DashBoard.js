import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeReview from '../MakeReview/MakeReview';
import Pay from '../Pay/Pay';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import useAuth from './../../../hooks/useAuth';
import AddaProduct from '../AddaProduct/AddaProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 200;

const DashBoard = (props) => {
    const { logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            

            {admin? 
            <List>
                <Link style={{textDecoration:'none', color:'black'}} to="/home"><ListItem button><Button color="inherit">Home</Button></ListItem></Link>
                <Link style={{textDecoration:'none', color:'black'}} to={`${url}`}><ListItem button><Button color="inherit">Manage All Orders</Button></ListItem></Link>
                <Link style={{textDecoration:'none', color:'black'}} to={`${url}/addaproduct`}><ListItem button><Button color="inherit">Add a Product</Button></ListItem></Link>
                <Link style={{textDecoration:'none', color:'black'}} to={`${url}/makeadmin`}><ListItem button><Button color="inherit">Make Admin</Button></ListItem></Link>
                <Link style={{textDecoration:'none', color:'black'}} to={`${url}/manageproducts`}><ListItem button><Button color="inherit">Manage Products</Button></ListItem></Link>
            </List>:
            <List>
                <Link style={{textDecoration:'none', color:'black'}} to="/home"><ListItem button><Button color="inherit">Home</Button></ListItem></Link>
                <Link style={{textDecoration:'none', color:'black'}} to={`${url}`}><ListItem button><Button color="inherit">My Orders</Button></ListItem></Link>
                <Link style={{textDecoration:'none', color:'black'}} to={`${url}/review`}><ListItem button><Button color="inherit">Review</Button></ListItem></Link>
                <Link style={{textDecoration:'none', color:'black'}} to={`${url}/pay`}><ListItem button><Button color="inherit">Payment</Button></ListItem></Link>
            </List>
            }
            <Button onClick={logout} color="inherit"><ListItem button>Logout</ListItem></Button>
            <List>
                
            </List>
            </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor:'black' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    DashBoard
                </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <Route path={`${path}/review`}>
                        <MakeReview></MakeReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/addaproduct`}>
                        <AddaProduct></AddaProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
        </>
    );
};
DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


export default DashBoard;