// src/stories/TeamSelector.stories.jsx
import React from "react";
import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Link,
} from "@mui/material";

export default { title: "Screens/Team Selector" };

const DEMO_MEMBERS = [
  { id: 101, name: "Ada Lovelace" },
  { id: 102, name: "Grace Hopper" },
  { id: 103, name: "Linus Torvalds" },
  { id: 104, name: "Guido van Rossum" },
  { id: 105, name: "Donald Knuth" },
  { id: 106, name: "Barbara Liskov" },
  { id: 107, name: "Bjarne Stroustrup" },
];

export const Design = () => {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState([]);

  const filtered = React.useMemo(
    () =>
      DEMO_MEMBERS.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const toggle = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const selectAll = () => setSelected(filtered.map((m) => m.id));
  const selectNone = () => setSelected([]);

  return (
    <Box
      sx={{
        width: 320,
        p: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Team Selector Story
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search team"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Typography variant="body2">
        Select:{" "}
        <Link onClick={selectAll} sx={{ cursor: "pointer" }}>
          All
        </Link>{" "}
        |{" "}
        <Link onClick={selectNone} sx={{ cursor: "pointer" }}>
          None
        </Link>
      </Typography>

      <List dense sx={{ maxHeight: 300, overflow: "auto" }}>
        {filtered.map((member) => {
          const isChecked = selected.includes(member.id);
          return (
            <ListItem key={member.id} disablePadding>
              <ListItemButton
                onClick={() => toggle(member.id)}
                selected={isChecked}
                sx={{ pl: 0.5 }}
              >
                <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                  <Checkbox
                    edge="start"
                    checked={isChecked}
                    disableRipple
                    sx={{ p: 1 }}
                  />
                </ListItemIcon>
                <ListItemText primary={member.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
