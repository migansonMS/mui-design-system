// src/providers/AppThemeProvider.jsx
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import { grey, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F08732",
      light: "#d2d2d2",
      dark: "#282d32",
      50: "#FFF3E0",
      100: "#FFE0B2",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#F08732",
      600: "#E67C2B",
      700: "#D06F28",
      800: "#C3641F",
      900: "#9B4C16",
    },
    secondary: {
      main: "#00B7EF",
      light: "#EBF3F5",
      dark: "#121829",
      50: "#EBF3F5",
      100: "#D4F2FF",
      200: "#ADEBFF",
      300: "#9EDAFF",
      400: "#82D0FF",
      500: "#00B7EF",
      600: "#00A3D6",
      700: "#008CBC",
      800: "#0077A3",
      900: "#005575",
    },
    background: { light: "#EBF3F5", dark: "#282d32" },
    grey,
    yellow,
  },

  typography: {
    button: { fontFamily: "Roboto", fontSize: 16, fontWeight: "bolder" },
    h4: { fontWeight: "bolder" },
    h5: {
      fontFamily: "Roboto",
      fontSize: 25,
      fontWeight: 700,
      lineHeight: "30px",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "30px",
    },
    subtitle1: { fontWeight: "bolder", fontSize: 13 },
    subtitle2: { fontWeight: "normal", fontSize: 13 },

    h1Title: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h2Subtitle: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.25,
    },
    body16: { fontSize: "1rem", lineHeight: 1.5 },
    bodyMuted: { fontSize: "0.75rem", lineHeight: 1.4, color: grey[600] },
    captionItalic: { fontSize: "0.75rem", fontStyle: "italic" },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1Title: "h1",
          h2Subtitle: "h2",
          body16: "p",
          bodyMuted: "p",
          captionItalic: "span",
        },
      },
      variants: [
        {
          props: { variant: "h1Title" },
          style: ({ theme }) => theme.typography.h1quickTitle,
        },
        {
          props: { variant: "h2Subtitle" },
          style: ({ theme }) => theme.typography.h2Subtitle,
        },
        {
          props: { variant: "body16" },
          style: ({ theme }) => theme.typography.body16,
        },
        {
          props: { variant: "bodyMuted" },
          style: ({ theme }) => theme.typography.bodyMuted,
        },
        {
          props: { variant: "captionItalic" },
          style: ({ theme }) => theme.typography.captionItalic,
        },
      ],
    },

    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: "uppercase", fontWeight: 600 },
        startIcon: { marginRight: 8 },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: ({ theme }) => ({
            color: theme.palette.common.white,
            "&:hover": { backgroundColor: theme.palette.primary[600] },
          }),
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: ({ theme }) => ({
            borderColor: theme.palette.primary.main,
          }),
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: ({ theme }) => ({
            borderColor: theme.palette.secondary.main,
          }),
        },
      ],
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: "0.75rem",
        },
      },
    },

    MuiDataGrid: {
      defaultProps: { density: "compact" },
      styleOverrides: {
        root: ({ theme }) => ({
          marginTop: theme.spacing(1),
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: theme.palette.secondary.light,
          },
        }),
      },
    },

    MuiPaper: {
      variants: [
        {
          props: { variant: "home-section" },
          style: ({ theme }) => ({
            marginBottom: theme.spacing(2),
            padding: theme.spacing(3),
            border: "0.5px solid #A8A8A8",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: "transparent",
          }),
        },
        {
          props: { variant: "card" },
          style: ({ theme }) => ({
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 12,
            padding: theme.spacing(2.5),
            boxShadow: "0 2px 10px rgba(0,0,0,.06)",
          }),
        },
        {
          props: { "data-surface": "padded" },
          style: ({ theme }) => ({ padding: theme.spacing(2) }),
        },
        {
          props: { "data-surface": "tile" },
          style: ({ theme }) => ({ padding: theme.spacing(2), width: 160 }),
        },
        {
          props: { variant: "header" },
          style: ({ theme }) => ({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: theme.spacing(2),
            backgroundColor: theme.palette.secondary.light,
          }),
        },
      ],
    },

    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: "sm",
        slotProps: { backdrop: { className: "backdrop--blur" } },
      },
      styleOverrides: {
        container: { alignItems: "center", justifyContent: "center" },
        paper: ({ theme }) => ({
          borderRadius: 12,
          boxShadow: "0 8px 30px rgba(0,0,0,.18)",
        }),
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2.5, 3),
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
      },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2, 3),
        }),
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2, 3),
          gap: theme.spacing(1),
        }),
      },
    },
    // createTheme({ components: { … } })
    MuiTabs: {
      defaultProps: { textColor: "primary", indicatorColor: "primary" },
      styleOverrides: {
        // DEFAULT = plain
        root: ({ theme }) => ({
          backgroundColor: "transparent",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
      },
      variants: [
        {
          // VARIANT = styled
          props: { "data-variant": "styled" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.secondary.light,
            borderBottom: "none",
          }),
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        // DEFAULT = plain
        root: ({ theme }) => ({
          textTransform: "none",
          fontWeight: 600,
          color: theme.palette.text.primary,
          opacity: 1,
          "&.Mui-selected": { color: theme.palette.primary.main },
        }),
      },
      variants: [
        {
          // VARIANT = styled
          props: { "data-variant": "styled" },
          style: ({ theme }) => ({
            color: theme.palette.primary.dark,
            opacity: 0.7,
            "&.Mui-selected": { color: theme.palette.primary.main, opacity: 1 },
          }),
        },
      ],
    },
  },
});

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

AppThemeProvider.propTypes = { children: PropTypes.node.isRequired };
export default AppThemeProvider;
