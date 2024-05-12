"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SchedulesModel from "./components/SchedulesModel";

const SchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Doctor</Button>
        <SchedulesModel
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></SchedulesModel>
        <TextField
          // onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search doctor"
        />
      </Stack>
    </Box>
  );
};

export default SchedulePage;
