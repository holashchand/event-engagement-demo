import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import {
  Box,
  Button,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AnubhavLogo from "../assets/anubhavLogo.svg";
import footer from "../assets/footer.svg";
import { pageRoutes } from "../routes";

const Register: FC<{}> = (): ReactElement => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    if (data.phone.length != 10) {
    }
    if (data.name && data.phone.length == 10 && data.organisation) {
      let path = pageRoutes.LOGIN;
      navigate(path);
    } else {
    }
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
        <img src={AnubhavLogo} />
        <Typography
          sx={{ margin: "25% 10% 0 10% !important" }}
          gutterBottom
          variant="subtitle1"
          component="div"
          color={"#1F3665"}
          fontWeight={"bold"}
        >
          Hey Visitor,would be great if you could register with us before the
          experience
        </Typography>
        <Box
          width={"100%"}
          color={"black"}
          mt={4}
          mb={4}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="inputFields">
            <TextField
              id="name"
              label=""
              placeholder="Enter you name"
              {...register("name")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactEmergencyOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ width: "90%", background: "white", borderRadius: "10px" }}
            />
          </div>
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
          <div className="inputFields">
            <TextField
              id="organisation"
              label=""
              placeholder="Enter you organisation name"
              {...register("organisation")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ApartmentOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ width: "90%", background: "white", borderRadius: "10px" }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 10, mb: 2, width: "50%", backgroundColor: "white" }}
          >
            Register
          </Button>
          <div
            style={{
              position: "absolute",
              left: "8%",
              transform: "translate(30%, 0)",
            }}
          >
            <Link
              onClick={() => {
                navigate(pageRoutes.LOGIN)
              }}
              variant="body2"
              sx={{ textAlign: "center", color: "#1F3964 !important" }}
            >
              Already registered? Go to Login
            </Link>
          </div>
        </Box>
        <img src={footer} style={{ position: "relative" }} />
      </Box>
    </Box>
  );
};

export default Register;
