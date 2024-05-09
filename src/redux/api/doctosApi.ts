import { TDoctor } from "@/types/doctor";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { TMeta } from "@/types";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctors: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),

    getAllDoctor: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TDoctor[], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),

    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const {
  useCreateDoctorsMutation,
  useGetAllDoctorQuery,
  useDeleteDoctorMutation,
} = doctorsApi;
