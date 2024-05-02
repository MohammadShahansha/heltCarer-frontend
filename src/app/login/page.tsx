"use client";
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
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/service/actions/userLogin";
import { storeUserInfo } from "@/service/auth.services";
import { toast } from "sonner";

export type TPatientLoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TPatientLoginForm>();
  const onSubmit: SubmitHandler<TPatientLoginForm> = async (values) => {
    // console.log(data);
    try {
      const res = await userLogin(values);
      // console.log(res);
      if (res?.data?.accessToken) {
        toast.success("user login successfully");
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      }
    } catch (err: any) {
      console.log(err.messsage);
    }
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
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
                type="submit"
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
