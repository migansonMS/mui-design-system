import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Swatch = ({ label, color }) => (
  <Box sx={{ width: 160 }}>
    <Box
      sx={{
        height: 48,
        borderRadius: 1,
        bgcolor: color,
        border: "1px solid",
        borderColor: "divider",
      }}
    />
    <Typography variant="caption">
      {label} {typeof color === "string" ? `· ${color}` : ""}
    </Typography>
  </Box>
);

export default { title: "Theme/Palette" };

export const BrandPalette = () => {
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Primary</Typography>
      <Stack direction="row" spacing={1}>
        <Swatch label="main" color={theme.palette.primary.main} />
        <Swatch label="600" color={theme.palette.primary[600]} />
        <Swatch label="400" color={theme.palette.primary[400]} />
        <Swatch
          label="contrastText"
          color={theme.palette.primary.contrastText}
        />
      </Stack>

      <Typography variant="h4" sx={{ mt: 2 }}>
        Secondary
      </Typography>
      <Stack direction="row" spacing={1}>
        <Swatch label="main / 700" color={theme.palette.secondary.main} />
        <Swatch label="800" color={theme.palette.secondary[800]} />
        <Swatch label="300" color={theme.palette.secondary[300]} />
        <Swatch
          label="contrastText"
          color={theme.palette.secondary.contrastText}
        />
      </Stack>

      <Typography variant="h4" sx={{ mt: 2 }}>
        Warning
      </Typography>
      <Stack direction="row" spacing={1}>
        <Swatch label="main / 500" color={theme.palette.warning.main} />
        <Swatch label="900" color={theme.palette.warning[900]} />
        <Swatch label="400" color={theme.palette.warning[400]} />
        <Swatch label="50 (bg)" color={theme.palette.warning[50]} />
      </Stack>

      <Typography variant="h4" sx={{ mt: 2 }}>
        Alert/Warning Tokens
      </Typography>
      <Stack direction="row" spacing={1}>
        <Swatch
          label="color (MS Orange/600)"
          color={theme.palette.ms?.alertWarning.color}
        />
        <Swatch
          label="background (amber/50)"
          color={theme.palette.ms?.alertWarning.background}
        />
      </Stack>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Background
      </Typography>
      <Stack direction="row" spacing={1}>
        <Swatch label="light" color={theme.palette.background.light} />
        <Swatch label="dark" color={theme.palette.background.dark} />
      </Stack>

      <Typography variant="h4" sx={{ mt: 2 }}>
        Custom
      </Typography>
      <Stack direction="row" spacing={1}>
        <Swatch label="purple" color={theme.palette.custom.purple} />
      </Stack>
    </Stack>
  );
};
