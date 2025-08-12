// src/stories/Dialog.stories.jsx
import * as React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

export default { title: "Components/Dialog" };

export const Basic = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <Typography className="dialog-body">
            All styling comes from the theme (paper, spacing, backdrop blur).
          </Typography>
          <Typography className="dialog-body">
            All styling comes from the theme (paper, spacing, backdrop blur).
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined">Cancel</Button>
          <Button onClick={() => setOpen(false)} variant="contained">OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
