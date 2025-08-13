// src/stories/ShiftTimeInputs.stories.jsx
import React from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default {
  title: "Forms/Shift Time Inputs",
  // Provide the picker context once for this story
  decorators: [
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ],
};

export const Basic = () => {
  const [schedIn, setSchedIn] = React.useState("09:00");
  const [schedOut, setSchedOut] = React.useState("18:00");
  return (
    <Box sx={{ p: 2, maxWidth: 600 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Shift Times
      </Typography>

      <Stack direction="column" spacing={4}>
        <TimePicker
          label="Sched In"
          value={schedIn ? dayjs(`2000-01-01T${schedIn}`) : null}
          onChange={(v) => setSchedIn(v ? dayjs(v).format("HH:mm") : "")}
        />

        <TimePicker
          label="Sched Out"
          value={schedOut ? dayjs(`2000-01-01T${schedOut}`) : null}
          onChange={(v) => setSchedOut(v ? dayjs(v).format("HH:mm") : "")}
        />

        <TextField type="date" size="small" fullWidth />
      </Stack>
    </Box>
  );
};
