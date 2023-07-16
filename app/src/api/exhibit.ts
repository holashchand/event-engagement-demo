import { useMutation, useQuery, useQueryClient } from "react-query";
import { apiRoutes } from "../routes";
import { Exhibit } from "../types/exhibit";
import { axiosInst } from "./axios";

interface ExhibitsResponse {
  visited: Exhibit[];
  notVisited: Exhibit[];
  count: number;
}

export const useExhibitsData = () => {
  return useQuery(
    ["exhibits"],
    // () => Promise.resolve({ data: [], count: 0 } as ExhibitsResponse),
    // replace with actual request below
    () =>
      axiosInst
        .get<ExhibitsResponse>(apiRoutes.EXHIBITS)
        .then((res) => res.data),
  );
};

export const useVisitExhibit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (exhibitId: string) =>
      axiosInst.post(apiRoutes.VISIT_EXHIBIT, { exhibitId }),
    onMutate: async (exhibitId) => {
      await queryClient.cancelQueries(["exhibits"]);

      queryClient.setQueryData<ExhibitsResponse>(["exhibits"], (oldData) => {
        if (!oldData) {
          return { visited: [], notVisited: [], count: 0 };
        }
        return {
          visited: [
            ...oldData.visited,
            ...oldData.notVisited
              .filter((x) => x.exhibitId === exhibitId)
              .map((x) => ({
                ...x,
                visited: true,
              })),
          ],
          notVisited: oldData.notVisited.filter(
            (x) => x.exhibitId !== exhibitId,
          ),
          count: oldData.count,
        };
      });
    },
  });
};
