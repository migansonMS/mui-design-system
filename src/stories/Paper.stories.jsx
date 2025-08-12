// src/stories/Paper.stories.jsx
import { Paper, Typography, Stack } from "@mui/material";

export default { title: "Components/Paper" };

export const Variants = () => (
  <Stack direction="column" spacing={2}>
    <Paper data-surface="padded">
      <Typography variant="h6">Default Padded Paper</Typography>
      <Typography variant="body2">
        All padding comes from theme (data-surface="padded").
      </Typography>
    </Paper>
    <Paper data-surface="tile">
      <Typography variant="h6">Default Padded Paper</Typography>
      <Typography variant="body2">
        All padding comes from theme (data-surface="padded").
      </Typography>
    </Paper>
    <Paper variant="card">
      <Typography variant="h6">variant="card"</Typography>
      <Typography variant="body2">
        Border, radius, padding from theme.
      </Typography>
    </Paper>

    <Paper variant="home-section">
      <Typography variant="h6">variant="home-section"</Typography>
      <Typography variant="body2">
        Custom section surface from theme.
      </Typography>
    </Paper>
  </Stack>
);

export const Elevations = () => (
  <Stack direction="row" spacing={2}>
    {[0, 1, 4, 8, 12, 24].map((elev) => (
      <Paper key={elev} data-surface="tile" elevation={elev}>
        <Typography variant="subtitle2">elevation={elev}</Typography>
      </Paper>
    ))}
  </Stack>
);
