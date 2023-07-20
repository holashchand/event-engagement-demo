import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import QRScanner from "../QRScanner/QRScanner";
import ToolBar from "../layout/AppBar";

const ScanQR: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Box height={"100%"} width={"100%"}>
      <ToolBar
        hideBtn={false}
        show={false}
        badgeOpt={false}
        toolbarHeight={true}
      />
      <Box my={17}>
        <QRScanner
          onScan={(decodedText) => {
            console.debug(decodedText);
            navigate("/QuestionSet");
          }}
        />
      </Box>
    </Box>
  );
};

export default ScanQR;
