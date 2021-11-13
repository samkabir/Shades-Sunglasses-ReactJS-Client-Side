import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
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
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
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
            <Divider />

            {admin? 
            <Box>
                <Link to="/home"><Button color="inherit">Home</Button></Link>
                <Link to={`${url}`}><Button color="inherit">Manage All Orders</Button></Link>
                <Link to={`${url}/addaproduct`}><Button color="inherit">Add a Product</Button></Link> 
                <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link> 
                <Link to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link> 
            </Box>:
            <Box>
                <Link to="/home"><Button color="inherit">Home</Button></Link>
                <Link to={`${url}`}><Button color="inherit">My Orders</Button></Link>
                <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link>
                <Link to={`${url}/pay`}><Button color="inherit">Payment</Button></Link> 
            </Box>
            }


            <Button onClick={logout} color="inherit">Logout</Button>
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
                <Toolbar>
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