import { Stack, Chip } from "@mui/material";

export default { title: "Components/Chip" };

export const Basic = () => (
  <Stack direction="row" spacing={1}>
    <Chip label="Cleared" color="success" size="small" />
    <Chip label="Pending" color="warning" size="small" />
    <Chip label="Rejected" color="error" size="small" />
    <Chip label="Work day" color="success" size="small" variant="outlined" />
    <Chip label="Rest day" size="small" variant="outlined" />
    <Chip
      label="Special Holiday"
      color="purple"
      size="small"
      variant="filled"
    />
    <Chip
      label="Regular Holiday"
      color="primary"
      size="small"
      variant="filled"
    />
  </Stack>
);
