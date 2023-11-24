"use client";

import { createTheme, Theme } from "@mui/material";
import "./fonts/Futura.css";
import palette from "@/theme/palette";
import typography from "@/theme/typography";
import components from "@/theme/components";

const theme: Theme = createTheme({
  palette,
  typography,
  // @ts-ignore
  components,
});

export default theme;
