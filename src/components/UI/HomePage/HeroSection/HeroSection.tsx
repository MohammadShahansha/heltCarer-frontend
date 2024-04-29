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
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image
            src={assets.svgs.arrow}
            alt="Arrow"
            width={100}
            height={100}
          ></Image>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box
            sx={{
              mt: 5,
            }}
          >
            <Image
              src={assets.images.doctor1}
              alt="Doctor1"
              width={240}
              height={380}
            ></Image>
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="Doctor2"
              width={240}
              height={380}
            ></Image>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "160px",
            top: "230px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={200}
            height={200}
          ></Image>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "380px",
            bottom: "-50px",
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="stethoscope"
            width={250}
            height={250}
          ></Image>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
