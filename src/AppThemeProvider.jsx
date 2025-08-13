import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import { grey, amber } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F08732",
      dark: "#DB6B10",
      light: "#F3A15D",
      contrastText: "#FFFFFF",
      400: "#F3A15D",
      500: "#F08732",
      600: "#DB6B10",
    },

    secondary: {
      main: grey[700],
      dark: grey[800],
      light: grey[300],
      contrastText: "#FFFFFF",
      300: grey[300],
      700: grey[700],
      800: grey[800],
    },

    warning: {
      main: amber[500],
      dark: amber[900],
      light: amber[400],
      contrastText: "#FFFFFF",
      50: amber[50],
      400: amber[400],
      500: amber[500],
      900: amber[900],
    },

    ms: {
      alertWarning: {
        color: "#DB6B10",
        background: amber[50],
      },
    },
    custom: {
      mist: "#EBF3F5",
    },

    background: { light: "#EBF3F5", dark: "#282d32" },

    grey,
  },

  typography: {
    fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, Arial",

    h1: { fontSize: 38, fontWeight: 600, lineHeight: 1.25 },
    h2: { fontSize: 30, fontWeight: 600, lineHeight: 1.25 },
    h3: { fontSize: 24, fontWeight: 600, lineHeight: 1.25 },
    h4: { fontSize: 20, fontWeight: 600, lineHeight: 1.25 },
    h5: { fontSize: 16, fontWeight: 600, lineHeight: 1.5 },

    body1: { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: 14, fontWeight: 400, lineHeight: 1.5 },

    body1Semi: { fontSize: 16, fontWeight: 600, lineHeight: 1.5 },
    body2Semi: { fontSize: 14, fontWeight: 600, lineHeight: 1.5 },

    bodyMuted: { fontSize: 12, lineHeight: 1.4, color: grey[600] },
    captionItalic: { fontSize: 12, fontStyle: "italic" },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1Semi: "p",
          body2Semi: "p",
          bodyMuted: "p",
          captionItalic: "span",
        },
      },
      variants: [
        {
          props: { variant: "body1Semi" },
          style: ({ theme }) => theme.typography.body1Semi,
        },
        {
          props: { variant: "body2Semi" },
          style: ({ theme }) => theme.typography.body2Semi,
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
            backgroundColor: theme.palette.background.light,
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
          props: { variant: "header" },
          style: ({ theme }) => ({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.light,
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
        paper: () => ({
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
    MuiTabs: {
      defaultProps: { textColor: "primary", indicatorColor: "primary" },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "transparent",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
      },
      variants: [
        {
          props: { variant: "styled" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.background.light,
            borderBottom: "none",
          }),
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          fontWeight: 600,
          color: theme.palette.background.dark,
          opacity: 1,
          "&.Mui-selected": { color: theme.palette.primary.main },
        }),
      },
      variants: [
        {
          props: { variant: "styled" },
          style: ({ theme }) => ({
            color: theme.palette.background.dark,
            opacity: 0.7,
            "&.Mui-selected": { color: theme.palette.primary.main, opacity: 1 },
          }),
        },
      ],
    },

    MuiLink: {
      defaultProps: { underline: "hover", color: "primary" },
      styleOverrides: {
        root: {
          textDecoration: "none",
          cursor: "pointer",
        },
      },
      variants: [
        {
          props: { "data-variant": "crumb" },
          style: ({ theme }) => ({
            color: theme.palette.text.secondary,
            fontWeight: 500,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },

            '&[aria-current="page"]': {
              color: theme.palette.primary.dark,
              pointerEvents: "none",
              cursor: "default",
              textDecoration: "none",
              fontWeight: 700,
            },
          }),
        },
      ],
    },

    MuiBreadcrumbs: {
      variants: [
        {
          props: { variant: "breadcrumbs" },
          style: ({ theme }) => ({
            padding: theme.spacing(1),
            "& .MuiBreadcrumbs-separator": {
              color: theme.palette.text.secondary,
            },
            "& .MuiLink-root": {
              textDecoration: "none",
              cursor: "pointer",
            },
            '& .MuiLink-root[aria-current="page"]': {
              color: theme.palette.primary.dark,
              pointerEvents: "none",
              cursor: "default",
              fontWeight: 700,
              textDecoration: "none",
            },
          }),
        },
      ],
    },
    MuiTimePicker: {
      defaultProps: {
        ampm: false,
        slotProps: {
          textField: {
            size: "small",
            margin: "normal",
            variant: "standard",
            fullWidth: true,
          },
        },
      },
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
