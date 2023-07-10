import { useQuery } from "react-query";
import { apiRoutes } from "../routes";
import { Exhibit } from "../types/exhibit";
import { axiosInst } from "./axios";

interface ExhibitsResponse {
  data: Exhibit[];
  count: number;
}

export const useExhibitsData = () => {
  return useQuery(["exhibits"], () =>
    axiosInst.get<ExhibitsResponse>(apiRoutes.EXHIBITS).then((res) => res.data),
  );
};
