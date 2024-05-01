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
import { useForm, SubmitHandler } from "react-hook-form";
import { modyfiPayload } from "@/utils/modifyFormData";
import { registerPatient } from "@/service/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientFormData>();
  const onSubmit: SubmitHandler<IPatientFormData> = async (values) => {
    const data = modyfiPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/login");
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box mt={3}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.email")}
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
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    type="tel"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth={true}
                sx={{
                  marginTop: "20px",
                }}
                type="submit"
              >
                Register
              </Button>
              <Typography
                component="p"
                fontWeight={300}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Do you have an account?
                <Link href="/login">
                  <Box color="primary.main">Login</Box>
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
