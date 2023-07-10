import { Box } from "@mui/material";
import { useExhibitsData } from "../api/exhibit";
import banner from "../assets/banner.svg";

function HomePage() {
  const { data, isLoading } = useExhibitsData();
  if (isLoading) {
    return "Loading";
  }
  console.debug(data);
  return (
    <Box display={"flex"} height={"100vh"} justifyContent={"center"}>
      <img src={banner} className="banner" />
    </Box>
  );
}

export default HomePage;
