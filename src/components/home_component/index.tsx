"use client";

import { Container, Typography, useTheme } from "@mui/material";
import ActionArea from "@/components/action_area";

const HomeComponent = () => {
  const theme = useTheme();

  return (
    <Container>
      <Typography variant="h2" sx={{ marginTop: theme.spacing(15) }}>
        Send Pesa App
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: theme.spacing(5) }}>
        A simple interface for sending money and seeing your transactions
      </Typography>
      <ActionArea />
    </Container>
  );
};

export default HomeComponent;
