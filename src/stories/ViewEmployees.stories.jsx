import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  ListSubheader,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default {
  title: "Screens/View Employees",
  parameters: { layout: "fullscreen" },
};

const sites = [
  { SiteID: 0, SiteName: "Any" },
  { SiteID: 1, SiteName: "Manila" },
  { SiteID: 2, SiteName: "Cebu" },
  { SiteID: 3, SiteName: "Clark" },
];
const groups = {
  "Department / Accounts": [
    { id: "d-ops", label: "Operations" },
    { id: "d-hr", label: "HR" },
    { id: "c-acme", label: "Acme Corp" },
    { id: "c-globex", label: "Globex" },
  ],
};

const rows = [
  {
    id: "1-1001",
    employeeid: 1,
    hrisemployeeid: "1001",
    fullname: "Alice Smith",
    clientname: "Acme Corp",
    jobdescription: "UI Designer",
    sitename: "Manila",
    employeeterm: "Full-time",
    employeelevel: "L2",
  },
];
const cols = [
  { field: "hrisemployeeid", headerName: "Emp ID", minWidth: 90, flex: 1 },
  { field: "fullname", headerName: "Full name", minWidth: 200, flex: 1 },
  { field: "clientname", headerName: "Client Name", minWidth: 150, flex: 1 },
  {
    field: "jobdescription",
    headerName: "Position Title",
    minWidth: 150,
    flex: 1,
  },
  { field: "sitename", headerName: "Site", minWidth: 120, flex: 1 },
  {
    field: "employeeterm",
    headerName: "Employment Term",
    minWidth: 150,
    flex: 1,
  },
  { field: "employeelevel", headerName: "Job Level", minWidth: 120, flex: 1 },
];

// tiny helper to reduce repetition
const Field = ({ span = 1, label, labelId, htmlFor, children }) => (
  <Box sx={{ gridColumn: `span ${span}` }}>
    <Typography
      id={labelId}
      htmlFor={htmlFor}
      variant="formLabel"
      component="label"
    >
      {label}
    </Typography>
    {children}
  </Box>
);

export const Design = () => {
  // state purely for visuals
  const [site, setSite] = React.useState(0);
  const [group, setGroup] = React.useState("Any-");
  const [position, setPosition] = React.useState("");
  const [active, setActive] = React.useState("Yes");
  const [startFrom, setStartFrom] = React.useState("");
  const [startTo, setStartTo] = React.useState("");

  const [empId, setEmpId] = React.useState("");
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [dummy, setDummy] = React.useState("No");
  const [endFrom, setEndFrom] = React.useState("");
  const [endTo, setEndTo] = React.useState("");

  const onSubmit = (e) => e.preventDefault();

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={6} sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Employee Management
        </Typography>

        <Box
          component="form"
          onSubmit={onSubmit}
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            columnGap: 1,
            rowGap: 1.5,
          }}
        >
          <Field span={2} label="Site" labelId="lbl-site" htmlFor="fld-site">
            <FormControl fullWidth size="small">
              <Select
                id="fld-site"
                aria-labelledby="lbl-site"
                value={site}
                onChange={(e) => setSite(e.target.value)}
              >
                {sites.map((s) => (
                  <MenuItem key={s.SiteID} value={s.SiteID}>
                    {s.SiteName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Field>

          <Field
            span={3}
            label="Department / Accounts"
            labelId="lbl-group"
            htmlFor="fld-group"
          >
            <FormControl fullWidth size="small">
              <Select
                id="fld-group"
                aria-labelledby="lbl-group"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                <MenuItem value="Any-">Any</MenuItem>
                {Object.entries(groups).map(([hdr, items]) => [
                  <ListSubheader key={`${hdr}-hdr`}>{hdr}</ListSubheader>,
                  items.map((i) => (
                    <MenuItem key={i.id} value={i.id}>
                      {i.label}
                    </MenuItem>
                  )),
                ])}
              </Select>
            </FormControl>
          </Field>

          <Field
            span={2}
            label="Position Title"
            labelId="lbl-pos"
            htmlFor="fld-pos"
          >
            <TextField
              id="fld-pos"
              size="small"
              fullWidth
              placeholder="Position title"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Field>

          <Field
            span={1}
            label="Active"
            labelId="lbl-active"
            htmlFor="fld-active"
          >
            <FormControl fullWidth size="small">
              <Select
                id="fld-active"
                aria-labelledby="lbl-active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              >
                <MenuItem value="Any">Any</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Field>

          <Field
            span={2}
            label="Employment Start (From)"
            htmlFor="fld-start-from"
          >
            <TextField
              id="fld-start-from"
              type="date"
              size="small"
              fullWidth
              value={startFrom}
              onChange={(e) => setStartFrom(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Field>

          <Field span={2} label="Employment Start (To)" htmlFor="fld-start-to">
            <TextField
              id="fld-start-to"
              type="date"
              size="small"
              fullWidth
              value={startTo}
              onChange={(e) => setStartTo(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Field>

          <Field span={2} label="Emp ID" htmlFor="fld-empid">
            <TextField
              id="fld-empid"
              size="small"
              fullWidth
              placeholder="Emp ID"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
            />
          </Field>

          <Field span={3} label="Employee First Name" htmlFor="fld-first">
            <TextField
              id="fld-first"
              size="small"
              fullWidth
              placeholder="First name"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </Field>

          <Field span={2} label="Employee Last Name" htmlFor="fld-last">
            <TextField
              id="fld-last"
              size="small"
              fullWidth
              placeholder="Last name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </Field>

          <Field
            span={1}
            label="Dummy?"
            labelId="lbl-dummy"
            htmlFor="fld-dummy"
          >
            <FormControl fullWidth size="small">
              <Select
                id="fld-dummy"
                aria-labelledby="lbl-dummy"
                value={dummy}
                onChange={(e) => setDummy(e.target.value)}
              >
                <MenuItem value="Any">Any</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Field>

          <Field span={2} label="Employment End Date" htmlFor="fld-end-from">
            <TextField
              id="fld-end-from"
              type="date"
              size="small"
              fullWidth
              value={endFrom}
              onChange={(e) => setEndFrom(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Field>

          <Field span={1} label="Employment End (To)" htmlFor="fld-end-to">
            <TextField
              id="fld-end-to"
              type="date"
              size="small"
              fullWidth
              value={endTo}
              onChange={(e) => setEndTo(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Field>

          <Box
            sx={{
              gridColumn: "span 1",
              display: "flex",
              alignItems: "end",
              justifyContent: "flex-end",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ minWidth: 120 }}
            >
              Search
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <DataGrid
            density="compact"
            rows={rows}
            columns={cols}
            pageSizeOptions={[10, 25, 50]}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>
    </Box>
  );
};
