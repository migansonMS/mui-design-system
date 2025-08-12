import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";

export default {
  title: "Theme/Typography",
};

const SampleBlock = ({ label, children }) => (
  <Box>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Box mt={0.5}>{children}</Box>
  </Box>
);

export const Scale = () => (
  <Stack spacing={2}>
    <SampleBlock label="h1Title">
      <Typography variant="h1Title">H1 Title — Roboto 700</Typography>
    </SampleBlock>

    <SampleBlock label="h2Subtitle">
      <Typography variant="h2Subtitle">H2 Subtitle — Roboto 600</Typography>
    </SampleBlock>

    <Divider />

    <SampleBlock label="h4">
      <Typography variant="h4">H4 — weight bolder</Typography>
    </SampleBlock>

    <SampleBlock label="h5">
      <Typography variant="h5">H5 — 25/700</Typography>
    </SampleBlock>

    <SampleBlock label="h6">
      <Typography variant="h6">H6 — 20/700</Typography>
    </SampleBlock>

    <Divider />

    <SampleBlock label="body16 (custom)">
      <Typography variant="body16">
        Body16 — 16px/1.5. The quick brown fox jumps over the lazy dog.
      </Typography>
    </SampleBlock>

    <SampleBlock label="body1 (MUI default)">
      <Typography variant="body1">
        Body1 — default body text. The quick brown fox jumps over the lazy dog.
      </Typography>
    </SampleBlock>

    <SampleBlock label="body2 (MUI default)">
      <Typography variant="body2">
        Body2 — smaller body text. The quick brown fox jumps over the lazy dog.
      </Typography>
    </SampleBlock>

    <SampleBlock label="bodyMuted (custom)">
      <Typography variant="bodyMuted">
        Muted helper text — secondary tone for notes & metadata.
      </Typography>
    </SampleBlock>

    <SampleBlock label="caption / captionItalic">
      <Typography variant="caption" display="block">
        Caption — small label text.
      </Typography>
      <Typography variant="captionItalic" display="block">
        Caption Italic — emphasized caption text.
      </Typography>
    </SampleBlock>

    <SampleBlock label="button / overline">
      <Typography variant="button" display="block">
        BUTTON TEXT
      </Typography>
      <Typography variant="overline" display="block">
        OVERLINE
      </Typography>
    </SampleBlock>
  </Stack>
);
