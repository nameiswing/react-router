import { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import InfoIcon from "@material-ui/icons/Info";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { ListItemIcon } from "@mui/material";

const useStyles = makeStyles( theme => ({
    link: {
        display: 'block',
        textDecoration: 'none',
        color: '#333',
        fontSize: '16px',
        marginRight: theme.spacing(3),
        letterSpacing: '-.375px',
        // marginLeft: theme.spacing(2),
        // textAlign: 'center',

        '&:hover': {
            color: 'dodgerblue'
        }
    },
    listContainer: {
        paddingInline: '1.5rem'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
    }
}));

const listItems = [
    {icon: <HomeIcon />, path: '/', description: 'Home'},
    {icon: <PeopleAltIcon />, path: '/example', description: 'Example'},
    {icon: <InfoIcon />, path: '/about', description: 'About Us'},
    {icon: <LocalPhoneIcon />, path: '/contact', description: 'Contact Us'},
    {icon: <PeopleAltIcon />, path: '/team', description: 'The Team'},
    {icon: <LiveHelpIcon />, path: '/faq', description: 'FAQ\'s'},
]

const DrawerComponent = () => {

    const classes = useStyles();
    const [ openDrawer, setOpenDrawer ] = useState(false);
    
    return (
        <>
            <IconButton aria-label="" onClick={() => setOpenDrawer(true)}>
                <MenuIcon htmlColor="#f1f1f1"/>
            </IconButton>
            <Drawer
                anchor='right'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List className={classes.listContainer} >
                    {
                        listItems.map( item => (
                            <ListItem onClick={ () => setOpenDrawer(false) } key={`${item.icon}${item.description}`}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    <Link to={item.path} className={classes.link}>{item.description}</Link>
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </>
    )
};

export default DrawerComponent;
