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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/service/actions/userLogin";
import { storeUserInfo } from "@/service/auth.services";
import { toast } from "sonner";
import HCForms from "@/components/Forms/HCForms";
import HCInput from "@/components/Forms/HCInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const validatinSchema = z.object({
  email: z.string().email("Please inter a valid email"),
  password: z.string().min(5, "Must be at least 5 characters"),
});
const LoginPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const handleLoggin: SubmitHandler<FieldValues> = async (values) => {
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success("user login successfully");
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.log("here are some problem");
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
          {error && (
            <Box
              sx={{
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box mt={3}>
            <HCForms
              onSubmit={handleLoggin}
              resolver={zodResolver(validatinSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <HCInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    name="password"
                    label="Password"
                    type="password"
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
            </HCForms>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
