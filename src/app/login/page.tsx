import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image
                src={assets.svgs.logo}
                alt="logo"
                width={50}
                height={50}
              ></Image>
            </Box>
            <Box>
              <Typography variant="h5" mt={1} fontWeight={600}>
                Login HealthCare
              </Typography>
            </Box>
          </Stack>

          <Box mt={3}>
            <form>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography
                fontWeight={300}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                Forget password?
              </Typography>
              <Button
                fullWidth={true}
                sx={{
                  marginTop: "20px",
                }}
              >
                Login
              </Button>
              <Typography
                component="p"
                fontWeight={300}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Don&apos;t have an account?
                <Link href="/register">
                  <Box color="primary.main">Register</Box>
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
