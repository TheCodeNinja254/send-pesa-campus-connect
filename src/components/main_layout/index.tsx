"use client";

import { Box, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { ReactNode, Suspense } from "react";
import { SuspenseLoader } from "@/components/common";
import Appbar from "@/components/appbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<SuspenseLoader />} />
      <Box>
        <Appbar />
        <main>{children}</main>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
