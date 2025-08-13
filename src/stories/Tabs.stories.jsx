import * as React from "react";
import { Paper, Tabs, Tab, Typography } from "@mui/material";

export default { title: "Components/Tabs" };

function TabPanel({ children, value, index }) {
  if (value !== index) return null;
  return (
    <div
      role="tabpanel"
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {children}
    </div>
  );
}
export const Basic = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper variant="card">
      <Tabs
        value={value}
        onChange={(_, nv) => setValue(nv)}
        aria-label="basic tabs"
      >
        <Tab label="Profile" id="tab-0" aria-controls="tab-panel-0" />
        <Tab label="Compensation" id="tab-1" aria-controls="tab-panel-1" />
        <Tab label="Requirements" id="tab-2" aria-controls="tab-panel-2" />
        <Tab label="Logs" id="tab-3" aria-controls="tab-panel-3" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Typography variant="body2">Profile content</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="body2">Compensation content</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="body2">Requirements content</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="body2">Logs content</Typography>
      </TabPanel>
    </Paper>
  );
};

export const Styled = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper variant="card">
      <Tabs variant="styled" value={value} onChange={(_, nv) => setValue(nv)}>
        <Tab
          variant="styled"
          label="Profile"
          id="tab-0"
          aria-controls="tab-panel-0"
        />
        <Tab
          variant="styled"
          label="Compensation"
          id="tab-1"
          aria-controls="tab-panel-1"
        />
        <Tab
          variant="styled"
          label="Requirements"
          id="tab-2"
          aria-controls="tab-panel-2"
        />
        <Tab
          variant="styled"
          label="Logs"
          id="tab-3"
          aria-controls="tab-panel-3"
        />
      </Tabs>
    </Paper>
  );
};
