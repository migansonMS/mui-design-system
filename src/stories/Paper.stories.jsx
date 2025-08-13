import { Paper, Typography, Stack, Box } from "@mui/material";
import { WarningAmber } from "@mui/icons-material";

export default { title: "Components/Paper" };

export const Variants = () => (
  <Stack direction="column" spacing={2}>
    <Paper variant="card">
      <Typography variant="h4">variant="card"</Typography>
      <Typography variant="body2">
        Border, radius, padding from theme.
      </Typography>
    </Paper>

    <Paper variant="home-section">
      <Typography variant="h4">variant="home-section"</Typography>
      <Typography variant="body2">
        Custom section surface from theme.
      </Typography>
    </Paper>

    <Paper variant="warning">
      <WarningAmber className="PaperWarning-icon" />
      <Box>
        <Typography className="PaperWarning-title">Action required</Typography>
        <Typography className="PaperWarning-body">
          Your schedule for this month isn’t confirmed yet. Please review and
          accept it to proceed.
        </Typography>
      </Box>
    </Paper>
  </Stack>
);

export const Elevations = () => (
  <Stack direction="row" spacing={2}>
    {[0, 1, 4, 8, 12, 24].map((elev) => (
      <Paper key={elev} elevation={elev}>
        <Typography variant="body2">elevation={elev}</Typography>
      </Paper>
    ))}
  </Stack>
);
