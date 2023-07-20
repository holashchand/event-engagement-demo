import { useQuery } from "react-query";
import { apiRoutes } from "../routes";
import { Exhibit, ExhibitDetailsResponse } from "../types/exhibit";
import { axiosInst } from "./axios";

interface ExhibitsResponse {
  visited: Exhibit[];
  unvisited: Exhibit[];
}

export const useExhibitsData = () => {
  return useQuery(
    ["exhibits"],
    // () => Promise.resolve({ data: [], count: 0 } as ExhibitsResponse),
    // replace with actual request below
    () =>
      axiosInst
        .get<ExhibitsResponse>(apiRoutes.EXHIBITS)
        .then((res) => {console.log('response ', res); return res.data}),
  );
};

export const useExhibitsDataOnId = (exhibitId: string) => {
  return useQuery(
    ["exhibitsDet", exhibitId],
    () =>
      axiosInst
        .get<ExhibitDetailsResponse>(apiRoutes.EXHIBITS_DET)
        .then((res) => res.data),
  );
}
