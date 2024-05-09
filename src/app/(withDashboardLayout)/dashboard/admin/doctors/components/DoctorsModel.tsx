import HCForms from "@/components/Forms/HCForms";
import HCInput from "@/components/Forms/HCInput";
import HCSelectField from "@/components/Forms/HCSelectField";
import HCFullScreenModel from "@/components/Shared/HCModal/HCFullScreenModel";
import { useCreateDoctorsMutation } from "@/redux/api/doctosApi";
import { Gender } from "@/types";
import { modyfiPayload } from "@/utils/modifyFormData";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DoctorsModel = ({ open, setOpen }: TProps) => {
  const [createDoctors] = useCreateDoctorsMutation();
  const defaultValues = {
    password: "",
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
  };
  const handelDoctorSubmit = async (values: FieldValues) => {
    // console.log(values);
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    const data = modyfiPayload(values);

    try {
      const res = await createDoctors(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Doctor created successfully");
        setOpen(false);
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  return (
    <HCFullScreenModel
      open={open}
      setOpen={setOpen}
      title="Create a New Doctor"
    >
      <HCForms onSubmit={handelDoctorSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.email"
              label="Email"
              type="email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="password"
              label="Password"
              type="password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.contactNumber"
              label="Contact Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCSelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.experience"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.apointmentFee"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HCInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button type="submit">Submit</Button>
        </Box>
      </HCForms>
    </HCFullScreenModel>
  );
};

export default DoctorsModel;
