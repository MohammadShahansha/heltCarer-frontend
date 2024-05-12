import HCDatePicker from "@/components/Forms/HCDatePicker";
import HCForms from "@/components/Forms/HCForms";
import HCTimePicker from "@/components/Forms/HCTimePicker";
import HCModal from "@/components/Shared/HCModal/HCModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormater } from "@/utils/dateFormate";
import { timeFormater } from "@/utils/timeFormate";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SchedulesModel = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handelFormSubmit = async (values: FieldValues) => {
    // console.log(values);
    values.startDate = dateFormater(values.startDate);
    values.endDate = dateFormater(values.endDate);
    values.startTime = timeFormater(values.startTime);
    values.endTime = timeFormater(values.endTime);

    // console.log(values);
    try {
      const res = await createSchedule(values).unwrap();
      console.log(res);
      if (res?.length) {
        toast.success("schedule created successfully");
        setOpen(false);
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };
  return (
    <HCModal open={open} setOpen={setOpen} title="Create a New Schedule">
      <HCForms onSubmit={handelFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <HCDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <HCDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <HCTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <HCTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit">submit</Button>
      </HCForms>
    </HCModal>
  );
};

export default SchedulesModel;
