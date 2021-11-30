import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import DrawerComponent from "./Drawer";

const useStyles = makeStyles( theme => ({
    navLinks: {
        marginLeft: theme.spacing(5),
        display: 'flex',
    },
    logo: {
        flexGrow: 1,
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '16px',
        marginLeft: theme.spacing(5),
        letterSpacing: '-.375px',

        '&:hover': {
            color: 'yellow',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
        }
    }
}));



function NavBar() {

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <AppBar position="sticky" color="primary" elevation={0} >
            <CssBaseline />
            <Toolbar>
                <Typography variant="h6" className={classes.logo}>
                    sickenw!ngs
                </Typography>
                { isMobile ? <DrawerComponent /> : 
                <div className={classes.navLinks}>
                    <Link to="/" className={classes.link}>Home</Link>
                    <Link to="/example" className={classes.link}>Example</Link>
                    <Link to="/about" className={classes.link}>About Us</Link>
                    <Link to="/contact" className={classes.link}>Contact&nbsp;Us</Link>
                    <Link to="/team" className={classes.link}>The Team</Link>
                    <Link to="/faq" className={classes.link}>FAQs</Link>
                </div>
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
