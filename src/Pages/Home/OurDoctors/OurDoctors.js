import React from 'react';
import Box from '@mui/material/Box';
import doctorIMG from '../../../images/doctor-small.png'
import Grid from '@mui/material/Grid';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Typography } from '@mui/material';
const OurDoctors = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, mt: 5 }} style={{ color: '#5CE7ED' }}> Our Doctors</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} >
                    <img src={doctorIMG} alt="" style={{ width: "90%", height: "290px" }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, mb: 0 }} gutterBottom component="div">
                        Dr. Caudi
                    </Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 0 }}>
                        <Box>
                            < PhoneAndroidIcon sx={{ fontSize: 30 }} style={{ color: '#5CE7ED' }} />
                        </Box>
                        <Box sx={{ mt: 0.5 }}>   +8801715684555</Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} >
                    <img src={doctorIMG} alt="" style={{ width: "90%", height: "290px" }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, mb: 0 }} gutterBottom component="div">
                        Dr. Caudi
                    </Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 0 }}>
                        <Box>
                            < PhoneAndroidIcon sx={{ fontSize: 30 }} style={{ color: '#5CE7ED' }} />
                        </Box>
                        <Box sx={{ mt: 0.5 }}>   +8801715684555</Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} >
                    <img src={doctorIMG} alt="" style={{ width: "90%", height: "290px" }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, mb: 0 }} gutterBottom component="div">
                        Dr. Caudi
                    </Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 0 }}>
                        <Box>
                            < PhoneAndroidIcon sx={{ fontSize: 30 }} style={{ color: '#5CE7ED' }} />
                        </Box>
                        <Box sx={{ mt: 0.5 }}>   +8801715684555</Box>
                    </Typography>
                </Grid>


            </Grid>
        </Box >
    );
};

export default OurDoctors;