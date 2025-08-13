import { Box, Stack, Typography, Divider } from "@mui/material";

export default { title: "Theme/Typography" };

const Row = ({ label, children }) => (
  <Box>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Box mt={0.5}>{children}</Box>
  </Box>
);

export const Scale = () => (
  <Stack spacing={2}>
    <Row label="h1 · 38/600/1.25">
      <Typography variant="h1">H1</Typography>
    </Row>
    <Row label="h2 · 30/600/1.25">
      <Typography variant="h2">H2</Typography>
    </Row>
    <Row label="h3 · 24/600/1.25">
      <Typography variant="h3">H3</Typography>
    </Row>
    <Row label="h4 · 20/600/1.25">
      <Typography variant="h4">H4</Typography>
    </Row>
    <Row label="h5 · 16/600/1.5">
      <Typography variant="h5">H5</Typography>
    </Row>

    <Divider />

    <Row label="body1 · 16/400/1.5">
      <Typography variant="body1">Body 1 — regular</Typography>
    </Row>
    <Row label="body1Semi · 16/600/1.5">
      <Typography variant="body1Semi">Body 1 — semi</Typography>
    </Row>
    <Row label="body2 · 14/400/1.5">
      <Typography variant="body2">Body 2 — regular</Typography>
    </Row>
    <Row label="body2Semi · 14/600/1.5">
      <Typography variant="body2Semi">Body 2 — semi</Typography>
    </Row>

    <Divider />

    <Row label="bodyMuted · 12/—/1.4">
      <Typography variant="bodyMuted">Muted helper text</Typography>
    </Row>
    <Row label="captionItalic · 12 italic">
      <Typography variant="captionItalic">Caption italic</Typography>
    </Row>
  </Stack>
);
