import { CssBaseline, Grid2 } from "@mui/material";
import React from "react";

export interface RootLayoutPropsI {
  children: React.ReactNode;
}
export const RootLayout = (props: RootLayoutPropsI) => {
  const { children } = props;
  return (
    <Grid2
      data-testid="root-layout"
      height="100vh"
      width="100vw"
      sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
    >
      <CssBaseline />
      {children}
    </Grid2>
  );
};
