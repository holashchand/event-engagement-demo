import { IconButton, IconButtonProps, styled } from "@mui/material";

const ContainedIconButton = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    color: "black",
    backgroundColor: theme.palette.primary.main,
    "& .Mui-disabled": {
      color: "white",
      backgroundColor: theme.palette.grey[400],
    },
    "& .Mui-active": {
      color: "white",
      backgroundColor: theme.palette.primary.main,
    },
    "& .Mui-focused": {
      color: "white",
      backgroundColor: theme.palette.primary.main,
    },
    "& .Mui-focusVisible": {
      color: "white",
      backgroundColor: theme.palette.primary.main,
    },
  }),
);

export default ContainedIconButton;
