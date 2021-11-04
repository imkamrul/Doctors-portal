import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';
import persion1 from '../../../images/people-1.png'
const Testimonial = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, mt: 5 }} style={{ color: '#5CE7ED' }} textAlign="left"> Testimonial</Typography>
                <Typography variant="h4" textAlign="left">What's Our Patients Says </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ mt: 3, p: 2 }}>    <Typography variant="body1">It is a long established fact that by the readable content of a lot layout.The point of using lorem a more-or-less normal distribution usingn "Content here", content.</Typography>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} md={4}>
                                    <img src={persion1} alt="" />
                                </Grid>
                                <Grid item xs={12} md={8} >
                                    <Typography sx={{ mt: 2 }} style={{ color: '#5CE7ED' }} textAlign="left">
                                        Winson Herry
                                    </Typography>
                                    <Typography textAlign="left">
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper >
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ mt: 3, p: 2 }}>    <Typography variant="body1">It is a long established fact that by the readable content of a lot layout.The point of using lorem a more-or-less normal distribution usingn "Content here", content.</Typography>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} md={4}>
                                    <img src={persion1} alt="" />
                                </Grid>
                                <Grid item xs={12} md={8} >
                                    <Typography sx={{ mt: 2 }} style={{ color: '#5CE7ED' }} textAlign="left">
                                        Winson Herry
                                    </Typography>
                                    <Typography textAlign="left">
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper >
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ mt: 3, p: 2 }}>    <Typography variant="body1">It is a long established fact that by the readable content of a lot layout.The point of using lorem a more-or-less normal distribution usingn "Content here", content.</Typography>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} md={4}>
                                    <img src={persion1} alt="" />
                                </Grid>
                                <Grid item xs={12} md={8} >
                                    <Typography sx={{ mt: 2 }} style={{ color: '#5CE7ED' }} textAlign="left">
                                        Winson Herry
                                    </Typography>
                                    <Typography textAlign="left">
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper >
                    </Grid>


                </Grid>
            </Box >
        </Container >
    );
};

export default Testimonial;