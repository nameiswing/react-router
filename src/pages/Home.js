import Typography from '@mui/material/Typography';

function Home() {
    return (
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
            This is the Home page.
        </Typography>
    )
}

export default Home
