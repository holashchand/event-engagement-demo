import { FC, ReactElement } from "react";
import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Avatar,
  Tooltip,
} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const ToolBar: FC = (): ReactElement => {
  return (
    <Box>
        <AppBar position="static" sx={{backgroundColor: "primary.main"}}>
            <Toolbar>
                <Box sx={{ flexGrow: 0, border: "1px solid primary.dark" }}>
                    <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2, color: "primary.dark"}}>
                    UP@AI Experience App
                </Typography>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ color: "white" }}
                    >
                    <MenuRoundedIcon fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
  )
};

export default ToolBar;