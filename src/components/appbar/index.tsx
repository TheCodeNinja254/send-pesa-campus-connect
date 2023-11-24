import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";

const Appbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar
        sx={{
          display: "flex",
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          marginLeft: theme.spacing(10),
          marginRight: theme.spacing(10),
          [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.common.white, textDecoration: "none" }}
        >
          Safaricom WIT CampusConnect
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
