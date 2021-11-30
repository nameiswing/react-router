import Typography from '@mui/material/Typography';
import * as React from 'react';


function About() {
    
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
                About Us
            </Typography>

        </>
    )
}

export default About
