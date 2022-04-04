import * as React from 'react';
import { useState } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import NewCustomer from '../customer/NewCustomer';
import Box from '@mui/material/Box';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { AccountCircle, Home, Person, PersonAdd } from '@mui/icons-material';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../home/Home';
import { Menu, MenuItem } from '@mui/material';


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

type NavItemProps = {
  open: any
  text: string
  to: string
  children: JSX.Element
}

const NavItem = ({ open, text, to, children }: NavItemProps) => {
  const navigate = useNavigate();
  return (
    <ListItemButton
      onClick={() => navigate(to)}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {children}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
};

function LayoutRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="customers" element={<NewCustomer />} />
      </Route>
    </Routes>
  );
}

function AppLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'fixed', height: '100%' }}>
        <AppBar position="fixed" elevation={0} sx={{ height: '4em' }} open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" flexGrow={1}>Pawnflow </Typography>
            <div>
              <IconButton size="large" onClick={handleMenu} color="inherit"> <AccountCircle /></IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 50,
                  horizontal: -80,
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}><Link className="btn-link" to="/login">Sign out</Link></MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <NavItem open={open} text="Home" to="/"><Home /></NavItem>
          </List>
          <Divider />
          <List>
            <NavItem open={open} text="Customers" to="/customers"><Person /></NavItem>
            <NavItem open={open} text="Add Customer" to="customers/new"><PersonAdd /></NavItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, alignItems: 'stretch', height: '100%', display: 'flex', pt: '4em' }}>
          <Box sx={{ overflowY: 'auto', margin: '1em 2em 0 2em' }} flexGrow={1}><Outlet /></Box>
          <Box bgcolor="lightpink" flex="1">receipt</Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default AppLayout;
