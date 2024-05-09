"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorsModel from "./components/DoctorsModel";
import { useGetAllDoctorQuery } from "@/redux/api/doctosApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const DoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllDoctorQuery({});
  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    try {
    } catch (err: any) {
      console.log(err.message);
    }
  };
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "experience", headerName: "Experience", flex: 1 },
    { field: "qualification", headerName: "Qualification", flex: 1 },
    { field: "designation", headerName: "Designation", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Doctor</Button>
        <DoctorsModel
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></DoctorsModel>
        <TextField size="small" placeholder="search doctor" />
      </Stack>
      <Box my={1}>
        {!isLoading ? (
          <DataGrid rows={doctors} columns={columns} />
        ) : (
          <h1>Loading.......</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorPage;
