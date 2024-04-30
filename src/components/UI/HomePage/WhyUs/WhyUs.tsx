import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import chooseUsImg from "@/assets/choose-us.png";

const WhyUs = () => {
  const servicesData = [
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning Service",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Best Quality Pregnancy Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Complete Medical Equipments",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Dedicated Emergency Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
  ];
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          my={5}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                alignItems: "center",
                padding: "10px 30px 10px 10px",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[0].imageSrc} alt="Award1" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography variant="body2" color="gray" fontWeight={300}>
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                alignItems: "center",
                padding: "10px 30px 10px 10px",
                borderRadius: "10px 100px 10px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[1].imageSrc} alt="Award1" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography variant="body2" color="gray" fontWeight={300}>
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                alignItems: "center",
                padding: "10px 30px 10px 10px",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[2].imageSrc} alt="Award1" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography variant="body2" color="gray" fontWeight={300}>
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                alignItems: "center",
                padding: "10px 30px 10px 10px",
                borderRadius: "10px 100px 10px 10px",
                marginTop: "30px",
              }}
            >
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[3].imageSrc} alt="Award1" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography variant="body2" color="gray" fontWeight={300}>
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={chooseUsImg} width={400} alt="Choose Us Image" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
