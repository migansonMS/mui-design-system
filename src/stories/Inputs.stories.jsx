import { useState } from "react";
import {
  Paper,
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";

export default { title: "Forms/Inputs" };

const cities = ["Tokyo", "Osaka", "Kyoto", "Nagoya", "Sapporo"];
const roles = ["Admin", "Editor", "Viewer"];

export const AllControls = () => {
  const [city, setCity] = useState(null);
  const [role, setRole] = useState("");
  const [checked, setChecked] = useState({ a: true, b: false });
  const [radio, setRadio] = useState("opt1");
  const [text, setText] = useState("");
  const [value, setValue] = useState([]);

  return (
    <Paper variant="card">
      <Typography variant="h4">Inputs</Typography>

      <Stack direction="column" spacing={2}>
        <TextField
          label="Text"
          placeholder="Type something"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <TextField
          placeholder="Text without label"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles.map((r) => (
              <MenuItem key={r} value={r}>
                {r}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Autocomplete
          value={city}
          onChange={(_, v) => setCity(v)}
          options={cities}
          renderInput={(params) => (
            <TextField {...params} label="Autocomplete" fullWidth />
          )}
        />
        <Stack direction="column" spacing={2}>
          <Autocomplete
            multiple
            disableCloseOnSelect
            options={cities}
            value={value}
            onChange={(_, v) => setValue(v)}
            isOptionEqualToValue={(o, v) => o === v}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox checked={selected} />
                {option}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Autocomplete Multiple"
                placeholder="Select cities"
              />
            )}
          />
        </Stack>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.a}
                onChange={(e) =>
                  setChecked((s) => ({ ...s, a: e.target.checked }))
                }
              />
            }
            label="Checkbox A"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.b}
                onChange={(e) =>
                  setChecked((s) => ({ ...s, b: e.target.checked }))
                }
              />
            }
            label="Checkbox B"
          />
          <FormControlLabel
            label="Required (disabled)"
            control={<Checkbox checked disabled />}
          />
        </FormGroup>

        <FormControl>
          <RadioGroup
            value={radio}
            onChange={(e) => setRadio(e.target.value)}
            name="radio-demo"
          >
            <FormControlLabel
              value="opt1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="opt2"
              control={<Radio />}
              label="Option 2"
            />
            <FormControlLabel
              value="opt3"
              control={<Radio />}
              label="Option 3"
            />
          </RadioGroup>
        </FormControl>

        <Button variant="contained">Submit</Button>
      </Stack>
    </Paper>
  );
};

export const SqueezedInputs = () => {
  const [text, setText] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState(null);

  return (
    <Paper variant="card">
      <Typography variant="h4">Squeezed Inputs</Typography>

      <Grid container columns={8} spacing={2} wrap="nowrap" alignItems="center">
        <Grid item xs={1}>
          <TextField
            size="small"
            label="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            size="small"
            label="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>{" "}
        <Grid item xs={1}>
          <TextField
            size="small"
            label="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>{" "}
        <Grid item xs={1}>
          <TextField
            size="small"
            label="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>{" "}
        <Grid item xs={1}>
          <TextField
            size="small"
            label="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl size="small" fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              id="role"
              labelId="role-label"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              {roles.map((r) => (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <Autocomplete
            size="small"
            options={cities}
            value={city}
            onChange={(_, v) => setCity(v)}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export const TextOnly = () => (
  <Paper variant="card">
    <TextField label="Text" placeholder="Type something" fullWidth />
  </Paper>
);

export const DropdownOnly = () => {
  const [val, setVal] = useState("");
  return (
    <Paper variant="card">
      <FormControl fullWidth>
        <InputLabel id="dd-label">Select</InputLabel>
        <Select
          labelId="dd-label"
          label="Select"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        >
          <MenuItem value="one">One</MenuItem>
          <MenuItem value="two">Two</MenuItem>
          <MenuItem value="three">Three</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export const AutocompleteOnly = () => {
  const [val, setVal] = useState(null);
  return (
    <Paper variant="card">
      <Autocomplete
        value={val}
        onChange={(_, v) => setVal(v)}
        options={cities}
        renderInput={(params) => (
          <TextField {...params} label="Autocomplete" fullWidth />
        )}
      />
    </Paper>
  );
};
export const AutocompleteMultiple = () => {
  const [value, setValue] = useState([]);

  return (
    <Paper variant="card">
      <Typography variant="h4">Autocomplete (multiple)</Typography>
      <Stack direction="column" spacing={2}>
        <Autocomplete
          multiple
          disableCloseOnSelect
          options={cities}
          value={value}
          onChange={(_, v) => setValue(v)}
          isOptionEqualToValue={(o, v) => o === v}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox checked={selected} />
              {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Cities" placeholder="Select cities" />
          )}
        />
      </Stack>
    </Paper>
  );
};

export const CheckboxesOnly = () => {
  const [state, setState] = useState({ a: false, b: true });
  return (
    <Paper variant="card">
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.a}
              onChange={(e) => setState((s) => ({ ...s, a: e.target.checked }))}
            />
          }
          label="A"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.b}
              onChange={(e) => setState((s) => ({ ...s, b: e.target.checked }))}
            />
          }
          label="B"
        />
        <FormControlLabel
          label="Required (disabled)"
          control={<Checkbox checked disabled />}
        />
      </FormGroup>
    </Paper>
  );
};

export const RadiosOnly = () => {
  const [val, setVal] = useState("1");
  return (
    <Paper variant="card">
      <FormControl>
        <RadioGroup value={val} onChange={(e) => setVal(e.target.value)}>
          <FormControlLabel value="1" control={<Radio />} label="One" />
          <FormControlLabel value="2" control={<Radio />} label="Two" />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};
