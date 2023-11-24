import { colors } from "@mui/material";
import { grey } from "@mui/material/colors";

const white = "#FFFFFF";
const black = "#212529";

export default {
  primary: {
    dark: "#951855",
    main: "#951855",
    light: "#951855",
  },
  secondary: {
    main: "#FFA700",
    light: "#C8EECD",
    dark: "#f9f9f9",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[100],
  },
  common: {
    black,
    white,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[100],
  },
  background: {
    default: "#EDEDF9",
    paper: "#F6F6F1",
    dark: "#F7F7F7",
  },
  text: {
    primary: black,
    secondary: grey[600],
    disabled: "#636161",
  },
  action: {
    active: "#000",
  },
};
