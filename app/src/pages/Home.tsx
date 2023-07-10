import { useExhibitsData } from "../api/exhibit";

function HomePage() {
  const { data, isLoading } = useExhibitsData();
  if (isLoading) {
    return "Loading";
  }
  console.debug(data);
  return <>Home Page</>;
}

export default HomePage;
