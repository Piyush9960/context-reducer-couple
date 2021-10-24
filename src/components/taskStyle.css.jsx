import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainGrid: {
    margin: "15vh auto",
    width: "50%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  table: {
    width: 550,
    margin: "5vh auto",
  },
}));
