import React from "react";
import { PropagateLoader } from "react-spinners";
import { Box, useTheme } from "@mui/material";

const SuspenseLoader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PropagateLoader color={theme.palette.primary.main} />
    </Box>
  );
};

export default SuspenseLoader;
