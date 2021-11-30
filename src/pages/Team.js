import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/system';
import GitHubIcon from '@material-ui/icons/GitHub';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from '@mui/material';

const useStyles = makeStyles( () => ({
    cardContainer: {
        display: 'flex',
        maxWidth: '48rem',
        margin: '3rem auto',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    cardItems: {
        margin: '1rem'
    }

}))

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

const cardContents = [
    {
        imgSource: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
        name: 'Arnulfo',
        description: lorem,
        githubLink: "https://github.com/arn-misagal",
    },
    {
        imgSource: "https://i.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY",
        name: 'Lemuel',
        description: lorem,
        githubLink: "https://github.com/nameiswing",
    },
    {
        imgSource: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        name: 'Rhodette',
        description: lorem,
        githubLink: "https://github.com/broodcoffee",
    },
    {
        imgSource: "https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
        name: 'Romain',
        description: lorem,
        githubLink: "https://github.com/romankodego",
    },
]

function Team() {

    const classes = useStyles();
    
    return (
        <>
            <Typography 
                variant="h1" 
                color="initial"
                sx={{ 
                    letterSpacing: "-1.5px",
                    color: '#333',
                    textAlign: 'center',
                    mt: 5,
                    fontSize: '3rem'
                }}
            >
                The Team
            </Typography>

            <Box className={classes.cardContainer}>
            {cardContents.map( item => (
                <Card className={classes.cardItems} sx={{ maxWidth: 345 }} key={item.name + item.githubLink}>
                    <CardMedia
                        component="img"
                        alt="profile"
                        height="auto"
                        image={item.imgSource}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" color="primary">
                            Web Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" startIcon={<FaceIcon />} sx={{mr:2, ml:'auto'}}>Portfolio</Button>
                        <Link underline="none" href={item.githubLink} target="_blank">
                            <Button size="small" startIcon={<GitHubIcon />} sx={{mr:1}}>Github</Button>
                        </Link>
                    </CardActions>
                </Card>
            ))}
            </Box>
        </>
    )
}

export default Team
