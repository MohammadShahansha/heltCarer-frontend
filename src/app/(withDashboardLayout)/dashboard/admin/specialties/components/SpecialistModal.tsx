import HCFileUploader from "@/components/Forms/HCFileUploader";
import HCForms from "@/components/Forms/HCForms";
import HCInput from "@/components/Forms/HCInput";
import HCModal from "@/components/Shared/HCModal/HCModal";
import { modyfiPayload } from "@/utils/modifyFormData";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handelSpecialSubmit = (values: FieldValues) => {
    const data = modyfiPayload(values);
  };
  return (
    <HCModal open={open} setOpen={setOpen} title="Create a New Specialty">
      <HCForms onSubmit={handelSpecialSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <HCInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <HCFileUploader name="file" label="File Upload" />
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
    </HCModal>
  );
};

export default SpecialistModal;
