import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Contact() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const [ allData, setAllData ] = useState([]);

    function handleSubmit(event) {
        if(localStorage.getItem('contactData')) {
            let data = JSON.parse(localStorage.getItem('contactData'));
            setAllData([...data])
        }
        event.preventDefault();
        const formData = {
            id: Date.now(),
            fname: firstNameRef.current,
            lname: lastNameRef.current,
            email: emailRef.current,
            message: messageRef.current
        }
        setAllData([...allData, formData]);
        localStorage.setItem('contactData', JSON.stringify([...allData, formData]));

        document.forms['contact-form'].reset();
    }

    function displayData() {
        if(!localStorage.getItem('contactData'))  return;
        let data = JSON.parse(localStorage.getItem('contactData'));
        console.log(data);
        setAllData([...data]);
    }

    // useEffect( () => localStorage.setItem('contactData', JSON.stringify(allData)), [allData])

    return (
        <>
            <Typography
                variant="h1"
                color="initial"
                sx={{
                    letterSpacing: "-1.5px",
                    color: "#333",
                    textAlign: "center",
                    mt: 5,
                    fontSize: "3rem",
                }}
            >
                Contact Us. . . If you want.
            </Typography>

            <Box sx={boxStyle_1} component="form" name="contact-form">
                <Box sx={{ display: "flex" }}>
                    <TextField
                        variant="outlined"
                        label="First Name"
                        size="small"
                        onChange={e => firstNameRef.current = e.target.value}
                        name="fname"
                        sx={{ mt: 1, mb: 1, mr: 2, width: "50%" }}
                        required
                    />
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        size="small"
                        onChange={e => lastNameRef.current = e.target.value}
                        name="lname"
                        sx={{ mt: 1, mb: 1, width: "50%" }}
                        required
                    />
                </Box>
                <TextField
                    type="email"
                    variant="outlined"
                    label="Email"
                    size="small"
                    onChange={e => emailRef.current = e.target.value}
                    name="email"
                    sx={{ mt: 1, mb: 1, width: "100%" }}
                />
                <TextField
                    multiline
                    variant="outlined"
                    label="Enter Message..."
                    size="small"
                    onChange={e => messageRef.current = e.target.value}
                    name="message"
                    sx={{ mt: 1, mb: 1, width: "100%" }}
                    rows={4}
                    required
                />
                <Button size="small" color="primary" variant="contained" onClick={e=>handleSubmit(e)}>Send Message</Button>
                <Button size="small" color="primary" variant="outlined" onClick={()=>displayData()} sx={{ml:2}}>Display All</Button>
            </Box>

            <TableContainer component={Paper} sx={{maxWidth: '48rem', m: '0 auto'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell component="th">Name</TableCell>
                            <TableCell component="th">Email</TableCell>
                            <TableCell component="th">Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    { allData.length > 0 &&
                        allData.map( item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.fname} {item.lname}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.message}</TableCell>
                            </TableRow>
                            )
                        )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Contact;

const boxStyle_1 = {
    maxWidth: 480,
    margin: "3rem auto",
};
