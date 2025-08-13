import { DataGrid } from "@mui/x-data-grid";
import { Paper, Typography } from "@mui/material";

const columns = [
  { field: "type", headerName: "Type", flex: 1 },
  { field: "example", headerName: "Example", flex: 1 },
  { field: "notes", headerName: "Notes", flex: 2 },
];

const TYPES = [
  "Typography",
  "Chip",
  "Status",
  "Button",
  "Badge",
  "Tag",
  "Avatar",
  "Tooltip",
  "Dialog",
  "Link",
];
const EXAMPLES = [
  "h4 + muted",
  "body2Semi + caption",
  "filled/success",
  "outlined/warning",
  "error/contained",
  "8×8 dot",
  "icon + label",
  "startIcon + text",
  "hover tooltip",
  "click to open",
];
const NOTES = [
  "Sizes & weights from theme",
  "Colors via Chip color prop",
  "Simple Box badge",
  "Use sx for overrides",
  "Keep contrast ≥ 4.5:1",
  "Follows theme.palette",
  "Variant controls style",
  "Use Typography variants",
  "Accessible label required",
  "Keep dense spacing",
];
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const rows = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  type: pick(TYPES),
  example: pick(EXAMPLES),
  notes: pick(NOTES),
}));

export default { title: "Components/DataGrid" };

export const ThemedHeader = () => (
  <Paper variant="card">
    <Typography variant="h2">Themed DataGrid</Typography>
    <DataGrid rows={rows} columns={columns} />
  </Paper>
);
