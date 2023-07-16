import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import QRScanner from "../QRScanner/QRScanner";

const ScanQR: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Box height={"100%"} width={"100%"}>
      <QRScanner
        onScan={(decodedText) => {
          console.debug(decodedText);
          navigate("/QuestionSet");
        }}
      />
    </Box>
  );
};

export default ScanQR;
