// src/stories/Snackbars.stories.jsx
import React from "react";
import { Snackbar, Alert, Button, Stack, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default {
  title: "Feedback/Snackbar",
  parameters: { layout: "centered" },
  argTypes: {
    severity: {
      control: "radio",
      options: ["success", "info", "warning", "error"],
    },
    message: { control: "text" },
  },
  args: {
    severity: "success",
    message: "Saved successfully.",
  },
};

export const Playground = ({ severity, message }) => {
  const [open, setOpen] = React.useState(false);
  const close = (_, reason) => {
    if (reason !== "clickaway") setOpen(false);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained" onClick={() => setOpen(true)}>
        Show snackbar
      </Button>
      <Snackbar open={open} onClose={close}>
        <Alert onClose={close} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export const WithAction = () => {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained" onClick={() => setOpen(true)}>
        Trigger
      </Button>
      <Snackbar open={open} onClose={close}>
        <Alert
          severity="info"
          action={
            <>
              <Button color="inherit" size="small" onClick={close}>
                UNDO
              </Button>
              <IconButton
                size="small"
                color="inherit"
                onClick={close}
                aria-label="close"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        >
          Item archived
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export const Queued = () => {
  const [queue, setQueue] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState(null);

  const push = (msg, sev) => setQueue((q) => [...q, { msg, sev }]);

  React.useEffect(() => {
    if (!open && queue.length) {
      setCurrent(queue[0]);
      setQueue((q) => q.slice(1));
      setOpen(true);
    }
  }, [queue, open]);

  const close = (_, reason) => {
    if (reason !== "clickaway") setOpen(false);
  };
  const exited = () => setCurrent(null);

  return (
    <Stack spacing={1} alignItems="flex-start">
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          onClick={() => push("Saved profile", "success")}
        >
          Push Success
        </Button>
        <Button
          variant="outlined"
          onClick={() => push("Network error", "error")}
        >
          Push Error
        </Button>
        <Button variant="outlined" onClick={() => push("Heads up!", "warning")}>
          Push Warning
        </Button>
      </Stack>

      <Snackbar
        open={open}
        onClose={close}
        TransitionProps={{ onExited: exited }}
      >
        <Alert severity={current?.sev || "info"}>{current?.msg}</Alert>
      </Snackbar>
    </Stack>
  );
};
