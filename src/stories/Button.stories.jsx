import { Stack, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default { title: "Components/Button" };

export const Variants = () => (
  <Stack direction="row" spacing={2}>
    <Button variant="contained" color="primary">
      Contained Primary
    </Button>
    <Button variant="outlined" color="primary">
      Outlined Primary
    </Button>
    <Button variant="outlined" color="secondary">
      Outlined Secondary
    </Button>
    <Button variant="contained" color="primary" disabled>
      Contained Disabled
    </Button>
  </Stack>
);

export const WithIcons = () => (
  <Stack direction="row" spacing={2}>
    <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
      Save
    </Button>
    <Button variant="outlined" color="primary" endIcon={<SendIcon />}>
      Send
    </Button>
    <Button
      variant="contained"
      color="secondary"
      startIcon={<AddIcon />}
      endIcon={<ArrowForwardIcon />}
    >
      Continue
    </Button>
    <Button
      variant="contained"
      color="primary"
      disabled
      startIcon={<SaveIcon />}
    >
      Save
    </Button>
  </Stack>
);
