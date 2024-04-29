import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Specialists = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const specialties = await res.json();
  console.log(specialties);
  return (
    <Container>
      <Box my={5}>
        <Box>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments across specialist
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Find experience doctor across all specialist
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialists;
