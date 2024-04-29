import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Prevention Care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontWeight={400}
          py={4}
          sx={{
            width: "50%",
            color: "gray",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla,
          nihil accusamus excepturi amet placeat nostrum quae, deserunt esse
          explicabo laborum, nisi ducimus.
        </Typography>
        <Button>Make Appoinment</Button>
        <Button
          variant="outlined"
          sx={{
            ml: "10px",
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Box>left</Box>
    </Container>
  );
};

export default HeroSection;
