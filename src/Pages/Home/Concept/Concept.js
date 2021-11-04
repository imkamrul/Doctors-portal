import React from 'react';

import Box from '@mui/material/Box';
import conceptIMG from '../../../images/treatment.png'
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Concept = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={10} md={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={conceptIMG} style={{ width: "210px", height: "290px" }} alt="" />
                </Grid>
                <Grid item xs={12} md={5} sx={{ textAlign: 'left', mt: 2 }}>
                    <Typography variant={'h4'} sx={{ textAlign: 'left', mt: 2 }}>Exceptional Dental Care, <br /> on Your Terms</Typography>
                    <Typography sx={{ textAlign: 'left', mt: 2 }} style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, mollitia! Harum, nostrum! Soluta modi omnis provident consequatur fugit iure placeat, architecto ipsum deleniti porro fugiat numquam! In nihil, placeat officia pariatur veniam repudiandae ex blanditiis iste est obcaecati neque nostrum?</Typography>
                    <Button variant="contained" sx={{ mt: 2 }}>Learn More </Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Concept;