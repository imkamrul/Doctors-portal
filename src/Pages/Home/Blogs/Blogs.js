import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';
import person from '../../../images/people-1.png'
const Blogs = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0, mt: 5 }} style={{ color: '#5CE7ED' }}> Our Blog</Typography>
            <Typography variant="h4" style={{ color: 'blue' }}> From Our Blog News</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Container sx={{ m: 2 }}>
                            <Paper elevation={1} >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <img src={person} alt="" />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Typography sx={{ fontWeight: 'bold', mt: 1 }} textAlign="left">Dr.Coudi</Typography>
                                        <Typography sx={{ color: "gray" }} textAlign="left">23 April 2021</Typography>

                                    </Grid>
                                    <Typography variant="h5" sx={{ fontWeight: 'light', mt: 1 }} textAlign="center">2 times of brush in a day can keep you healthy</Typography>
                                    <Typography sx={{ color: "gray", m: 2 }} textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum dolore velit illo quae perspiciatis nam voluptas nihil minus, repellendus, aut nulla! At, a repudiandae.</Typography>



                                </Grid>
                            </Paper>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Container sx={{ m: 2 }}>
                            <Paper elevation={1} >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <img src={person} alt="" />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Typography sx={{ fontWeight: 'bold', mt: 1 }} textAlign="left">Dr.Coudi</Typography>
                                        <Typography sx={{ color: "gray" }} textAlign="left">23 April 2021</Typography>

                                    </Grid>
                                    <Typography variant="h5" sx={{ fontWeight: 'light', mt: 1 }} textAlign="center">2 times of brush in a day can keep you healthy</Typography>
                                    <Typography sx={{ color: "gray", m: 2 }} textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum dolore velit illo quae perspiciatis nam voluptas nihil minus, repellendus, aut nulla! At, a repudiandae.</Typography>



                                </Grid>
                            </Paper>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Container sx={{ m: 2 }}>
                            <Paper elevation={1} >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <img src={person} alt="" />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Typography sx={{ fontWeight: 'bold', mt: 1 }} textAlign="left">Dr.Coudi</Typography>
                                        <Typography sx={{ color: "gray" }} textAlign="left">23 April 2021</Typography>

                                    </Grid>
                                    <Typography variant="h5" sx={{ fontWeight: 'light', mt: 1 }} textAlign="center">2 times of brush in a day can keep you healthy</Typography>
                                    <Typography sx={{ color: "gray", m: 2 }} textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsum dolore velit illo quae perspiciatis nam voluptas nihil minus, repellendus, aut nulla! At, a repudiandae.</Typography>



                                </Grid>
                            </Paper>
                        </Container>
                    </Grid>


                </Grid>
            </Box >
        </Container >
    );
};

export default Blogs;