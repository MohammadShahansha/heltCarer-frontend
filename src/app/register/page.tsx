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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modyfiPayload } from "@/utils/modifyFormData";
import { registerPatient } from "@/service/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/service/actions/userLogin";
import { storeUserInfo } from "@/service/auth.services";
import HCForms from "@/components/Forms/HCForms";
import HCInput from "@/components/Forms/HCInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// interface IPatientData {
//   name: string;
//   email: string;
//   contactNumber: string;
//   address: string;
// }

// interface IPatientFormData {
//   password: string;
//   patient: IPatientData;
// }
export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please inter your name"),
  email: z.string().email("Please inter your valid email address"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number"),
  address: z.string().min(1, "Please inter a valid address"),
});

export const validationSchema = z.object({
  password: z.string().min(5, "Must be inted at least 5 characters"),
  patient: patientValidationSchema,
});
export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modyfiPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const directLoggin = await userLogin({
          email: values.patient.email,
          password: values.password,
        });
        // console.log(res);
        if (directLoggin?.data?.accessToken) {
          storeUserInfo({ accessToken: directLoggin?.data?.accessToken });
          router.push("/dashboard");
        }
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
            <HCForms
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <HCInput label="Name" fullWidth={true} name="patient.name" />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <HCInput
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
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
            </HCForms>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
