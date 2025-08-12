import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Swatch = ({ label, color }) => (
  <Box sx={{ width: 120 }}>
    <Box sx={{ height: 48, borderRadius: 1, bgcolor: color, border: '1px solid rgba(0,0,0,0.08)' }} />
    <Typography variant="caption">{label}</Typography>
  </Box>
);

export default { title: "Theme/Palette" };

export const PrimarySecondary = () => {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Primary</Typography>
      <Stack direction="row" spacing={1}>
        <Swatch label="main" color={theme.palette.primary.main} />
        <Swatch label="600" color={theme.palette.primary[600] || theme.palette.primary.main} />
        <Swatch label="light" color={theme.palette.primary.light} />
        <Swatch label="dark" color={theme.palette.primary.dark} />
      </Stack>

      <Typography variant="h6" sx={{ mt: 2 }}>Secondary</Typography>
      <Stack direction="row" spacing={1}>
        <Swatch label="main" color={theme.palette.secondary.main} />
        <Swatch label="light" color={theme.palette.secondary.light} />
        <Swatch label="dark" color={theme.palette.secondary.dark} />
      </Stack>
    </Stack>
  );
};
