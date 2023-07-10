import { useQuery } from "react-query";
import { Exhibit } from "../types/exhibit";

interface ExhibitsResponse {
  data: Exhibit[];
  count: number;
}

export const useExhibitsData = () => {
  return useQuery(
    ["exhibits"],
    () => Promise.resolve({ data: [], count: 0 } as ExhibitsResponse),
    // replace with actual request below
    // axiosInst.get<ExhibitsResponse>(apiRoutes.EXHIBITS).then((res) => res.data),
  );
};
