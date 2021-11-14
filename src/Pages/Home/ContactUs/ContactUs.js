import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useState } from 'react';
import bg from '../../../images/bg.png'
const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: "darken, luminosity"

}

const ContactUs = () => {
    const [message, setMessage] = useState({});
    const [submitAlert, setSubmitAlert] = useState(false)
    const handleMessageInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newMessageData = { ...message };
        newMessageData[field] = value;
        setMessage(newMessageData);
    }
    const handleMessageSubmit = e => {
        // setSubmitAlert(false)
        setSubmitAlert(true)
        e.preventDefault();

    }
    return (
        <Box style={appointmentBg}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, pt: 5 }} style={{ color: '#5CE7ED' }}> Contact Us</Typography>
            <Typography variant="h6" sx={{ pb: 3 }} style={{ color: "white" }}> Always Connected with us</Typography>
            <form onSubmit={handleMessageSubmit}>
                <TextField
                    required
                    style={{ backgroundColor: "whiteSmoke", width: "50%", marginBottom: "10px" }}
                    label="email"
                    name="email"
                    onBlur={handleMessageInput}
                    variant="filled" />
                <br />
                <TextField
                    required
                    style={{ backgroundColor: "whiteSmoke", width: "50%", marginBottom: "10px" }}
                    label="Subject"
                    name="subject"
                    onBlur={handleMessageInput}
                    variant="filled" />
                <br />

                <TextareaAutosize
                    required
                    aria-label="empty textarea"
                    placeholder="Your Message"
                    name="message"
                    onBlur={handleMessageInput}
                    style={{ backgroundColor: "whiteSmoke", width: "50%", marginBottom: "10px", fontSize: "15px", padding: "30px 0" }}
                />
                <br />
                <Button style={{ padding: "10px 30px ", fontSize: "20px", marginBottom: "30px" }} type="submit" variant="contained">Submit</Button>
            </form>
            {submitAlert && <Alert severity="success">Successfully your message sent ! </Alert>}
        </Box>
    );
};

export default ContactUs;