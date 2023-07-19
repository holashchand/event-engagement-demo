import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import anubhavLogo from "../assets/anubhavLogo.svg";
import footer from "../assets/footer.svg";
import key from "../assets/key.svg";
import { pageRoutes } from "../routes";

const FirstLogin: FC<any> = (): ReactElement => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    if (data.phone && data.otp) {
      let path = pageRoutes.EXHIBITS_HOME;
      navigate(path);
    }
  };

  const [otp, setShowOtp] = useState(false);
  function changeState() {
    setShowOtp(!otp);
  }

  const emailLogin = () => {
    console.log("login through email");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        background:
          "linear-gradient(to top, #67C8D1 25%, #FFF 110%) !important",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <img src={anubhavLogo}></img>
        <Typography
          sx={{ margin: "25% 10% 0 10% !important" }}
          gutterBottom
          variant="subtitle1"
          component="div"
          color={"#1F3665"}
          fontWeight={"bold"}
        >
          Hey Visitor, please login using your Registered phone number and OTP
        </Typography>
        <Box width={"100%"} color={"black"} mt={4} mb={4} component="form">
          <div className="inputFields">
            <TextField
              id="phone"
              type="number"
              label=""
              placeholder="Enter you phone number"
              {...register("phone")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ width: "90%", background: "white", borderRadius: "10px" }}
            />
          </div>
          {otp ? (
            <>
              <div className="inputFields">
                <TextField
                  id="otp"
                  type="number"
                  label=""
                  placeholder="Enter you organisation name"
                  {...register("otp")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={key} />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  sx={{
                    width: "90%",
                    background: "white",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 10,
                  mb: 2,
                  width: "50%",
                  backgroundColor: "#1F3964",
                  color: "white",
                }}
                onClick={handleSubmit(onSubmit)}
              >
                Login
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              sx={{
                mt: 10,
                mb: 2,
                width: "50%",
                backgroundColor: "#1F3964",
                color: "white",
              }}
              onClick={changeState}
            >
              Send OTP
            </Button>
          )}
          <div>
            <Button
              variant="contained"
              sx={{ width: "50%", color: "#1F3964", backgroundColor: "white" }}
              onClick={emailLogin}
            >
              Login through email
            </Button>
          </div>
        </Box>

        <img src={footer} style={{ position: "relative" }} />
      </Box>
    </Box>
  );
};

export default FirstLogin;
