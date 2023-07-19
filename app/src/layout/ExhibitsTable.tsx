import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import MuseumOutlinedIcon from "@mui/icons-material/MuseumOutlined";
import {
  Card,
  CardContent,
  InputLabel,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes";
import { Exhibit } from "../types/exhibit";

interface TabContentProps {
  content: Exhibit[];
  visited: boolean;
}

const TabContents: React.FC<TabContentProps> = (props) => {
  const { content, visited } = props;
  const navigate = useNavigate();

  function navigateToDetails(data: Exhibit) {
    data.additionalProp1.visited = visited
    const path = pageRoutes.EXHIBIT_DETAILS;
    navigate(`${path}/${data.did}`, {state: data});
  }
  return (
    <List>
      {content.map((exhibit, index) => {
        return (
          <ListItem
            key={index + 1}
            disablePadding
            sx={{ marginBottom: "0.5rem" }}
          >
            <Card
              onClick={() => navigateToDetails(exhibit)}
              sx={{
                width: "100%",
                border: `1px solid #67C8D1`,
                borderRadius: "10px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <CardContent sx={{ padding: "0 10px 0 10px !important" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {exhibit.logoURL ? (
                    <img src={exhibit.logoURL} />
                  ) : (
                    <MuseumOutlinedIcon color={"disabled"} />
                  )}
                  <Typography
                    ml={2}
                    variant="h6"
                    fontWeight={"bold"}
                    color={"#212C62"}
                  >
                    {exhibit.name}
                  </Typography>
                </div>
                <div>
                  <InputLabel>Kiosk Number: </InputLabel>
                  {/* <InputLabel>Time: {new Date(`${exhibit.startDate}`).toLocaleTimeString()} </InputLabel> */}
                  <InputLabel>
                    Description:{" "}
                    {exhibit.shortDescription || exhibit.fullDescription}
                  </InputLabel>
                </div>
                <div>
                  <InputLabel
                    sx={{
                      textAlign: "end",
                      color: "primary.main",
                      fontSize: "10px",
                    }}
                  >
                    More...
                  </InputLabel>
                </div>
              </CardContent>
            </Card>
            <BookmarkRoundedIcon
              fontSize="large"
              sx={{
                position: "absolute",
                right: "-9px",
                top: "-5px",
                color: "primary.main",
                fontSize: "3rem",
              }}
            ></BookmarkRoundedIcon>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TabContents;
