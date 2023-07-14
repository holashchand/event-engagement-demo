import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import {
  Box,
  Button,
  InputLabel,
  SwipeableDrawer,
  Typography,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC, ReactElement, useState } from "react";
import Quiz from "../Quiz/Quiz";
import ToolBar from "../layout/AppBar";
import qBank from "../layout/Questions";
import { useNavigate } from "react-router-dom";

const Puller = styled(Box)(({ theme }) => ({
  width: 48,
  height: 4,
  color: "primary.main",
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
}));

const ExhibitCardDetails: FC<any> = (): ReactElement => {

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

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
      <ToolBar show={true} badgeOpt={false} toolbarHeight={false} />
      <Box sx={{ my: 17, mx: 2, color: "primary.dark", width: "100%" }}>
        <Typography variant="h6" mb={2} sx={{ color: "primary.main" }}>
          Exhibits:
        </Typography>
        <Box
          border={"1px dotted #67C8D1"}
          sx={{
            position: "relative",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box sx={{ width: "100%", height: "80%" }}>
            <div style={{ marginTop: "2%" }}>
              <video src="rain.mp4" width="95%" controls></video>
            </div>
            <Box>
              <Typography variant="body2">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "1rem",
                border: "1px solid #348681",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                width: "60%",
                transform: "translate(25%, 0%)",
              }}
            >
              <img src="" width={80} height={80}></img>
              <div style={{ margin: "1rem" }}>
                <Typography
                  variant="body2"
                  color={"#48DDE4"}
                  fontSize={"16px !important"}
                >
                  Quiz Name
                </Typography>
                <div style={{ display: "flex", color: "#999999" }}>
                  <ArticleRoundedIcon fontSize="small" />
                  <InputLabel sx={{ fontSize: "14px !important" }}>
                    10 Question
                  </InputLabel>
                </div>
                <div style={{ display: "flex", color: "#999999" }}>
                  <AccessTimeRoundedIcon fontSize="small" />
                  <InputLabel sx={{ fontSize: "14px !important" }}>
                    15 mins
                  </InputLabel>
                </div>
              </div>
            </Box>
          </Box>
          <Box mt={4} mb={2} display={"flex"} justifyContent={"space-around"}>
            <Button
              sx={{ color: "#67C8D1", border: "1px solid #67C8D1" }}
              variant="outlined"
            >
              Back
            </Button>
            <Button
              sx={{ color: "#67C8D1", border: "1px solid #67C8D1" }}
              variant="outlined"
              onClick={toggleDrawer(true)}
            >
              play
            </Button>
          </Box>
        </Box>
      </Box>
      <SwipeableDrawer
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        open={open}
        anchor="bottom"
        disableSwipeToOpen
      >
        <Box height={"60vh"}>
          <Box
            p={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Puller />
          </Box>
          <Box px={4}>
            <Quiz questions={qBank} onFinish={toggleDrawer(false)} />
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default ExhibitCardDetails;
