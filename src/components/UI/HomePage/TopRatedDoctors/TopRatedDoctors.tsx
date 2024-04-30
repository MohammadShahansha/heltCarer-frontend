import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  //   console.log(doctors);
  return (
    <Box
      sx={{
        mt: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          Access to expert physicians and surgeons, advanced technologis
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          and top-quality surgery facilities right here
        </Typography>
      </Box>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            margin: "20px 0px",
            paddingBottom: "20px",
          }}
        >
          {doctors.map((doctor: any) => (
            <Grid item key={doctor.id} md={4}>
              <Card>
                <Box>
                  <Image
                    src={doctor.profilePhoto}
                    alt="doctor1"
                    width={500}
                    height={500}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" ml={1}>
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" ml={1}>
                    {doctor.qualification} , {doctor.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <PlaceIcon /> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    gap: "30px",
                    paddingBottom: "20px",
                  }}
                >
                  <Button>Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button variant="outlined">See All</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
