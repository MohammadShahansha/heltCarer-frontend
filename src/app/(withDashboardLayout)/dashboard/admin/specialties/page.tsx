"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { use, useState } from "react";
import {
  useDeleteSpecialtiesMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialties] = useDeleteSpecialtiesMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialties(id).unwrap();
      if (res?.id) {
        toast.success("delete specialties successfully");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} alt="icon" width={30} height={30} />
          </Box>
        );
      },
    },
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
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="search specialty" />
      </Stack>
      <Box my={1}>
        {!isLoading ? (
          <DataGrid rows={data} columns={columns} />
        ) : (
          <h1>Loading.......</h1>
        )}
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
