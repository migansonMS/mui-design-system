import { Paper, Typography } from "@mui/material";

export default { title: "Components/Header" };
export const Basic = () => (
  <Typography variant="h4" color="primary.main">
    Basic Header
  </Typography>
);
export const Styled = () => (
  <Paper variant="header">
    <Typography variant="h4" color="primary.main">
      Styled Header
    </Typography>
  </Paper>
);
