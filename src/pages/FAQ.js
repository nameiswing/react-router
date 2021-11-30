import Typography from "@mui/material/Typography";

function FAQ() {
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
            Have questions? Google it.
        </Typography>
    );
}

export default FAQ;
