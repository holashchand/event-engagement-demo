import { useQuery } from "react-query";
import { apiRoutes } from "../routes";
import { axiosInst } from "./axios";

interface BadgeResponse {
  id: string;
  name: string;
  mobileNumber: string;
  work: string;
}

export const useBadgeData = () => {
  return useQuery({
    queryKey: ["badges"],
    queryFn: () =>
      axiosInst.get<BadgeResponse[]>(apiRoutes.BADGE).then((res) => res.data),
  });
};
