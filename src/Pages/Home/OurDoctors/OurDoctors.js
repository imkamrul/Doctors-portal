import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import Doctor from "./Doctor";
const OurDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://doctor-portal-server-amber.vercel.app/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, mt: 5 }}
        style={{ color: "#5CE7ED" }}
      >
        {" "}
        Our Doctors {doctors.length}
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurDoctors;
