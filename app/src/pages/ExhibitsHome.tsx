import { Box, Tab, Tabs, Typography } from "@mui/material";
import { FC, ReactElement, useMemo, useState } from "react";
import { useExhibitsData } from "../api/exhibit";
import ToolBar from "../layout/AppBar";
import TabContents from "../layout/ExhibitsTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ExhibitsHome: FC<any> = (): ReactElement => {
  const [tabIndex, setTabIndex] = useState(0);
  const { data, isLoading } = useExhibitsData();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const { visitedList, notVisitedList } = useMemo(() => {
    if (!data) return { visitedList: [], notVisitedList: [] };
    return { visitedList: data.visited, notVisitedList: data.notVisited };
  }, [data]);

  //   const visitedList = [
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //     { date: "12/07/20203", time: "1pm", description: "exhibit quiz" },
  //   ];

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ToolBar
        show={true}
        badgeOpt={true}
        toolbarHeight={true}
        hideBtn={false}
      />
      <Box sx={{ my: 20, mx: 2, width: "100%" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", textAlign: "start" }}
        >
          Exhibits:
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="Visited" {...a11yProps(0)} />
            <Tab label="Not visited" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabIndex} index={0}>
          {isLoading ? (
            "Loading ..."
          ) : (
            <TabContents content={visitedList}></TabContents>
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabIndex} index={1}>
          {isLoading ? (
            "Loading ..."
          ) : (
            <TabContents content={notVisitedList}></TabContents>
          )}
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default ExhibitsHome;
