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
      purple: "#AB47BC",
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
        {
          props: { variant: "formLabel" },
          style: ({ theme }) => ({
            display: "block",
            marginBottom: 4,
            color: theme.palette.text.secondary,
          }),
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
      variants: [
        {
          props: { color: "purple" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.custom.purple,
            color: theme.palette.common.white,
          }),
        },
      ],
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
        {
          props: { variant: "warning" },
          style: ({ theme }) => ({
            display: "flex",
            alignItems: "flex-start",
            gap: theme.spacing(1.5),
            padding: theme.spacing(2),
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,.06)",
            backgroundColor:
              theme.palette.ms?.alertWarning?.background ||
              theme.palette.warning[50],
            border: `1px solid ${theme.palette.warning[400]}`,
            color: theme.palette.warning[900],

            "& .PaperWarning-icon": {
              color:
                theme.palette.ms?.alertWarning?.color ||
                theme.palette.warning.main,
              marginTop: theme.spacing(0.25),
              flex: "0 0 auto",
            },
            "& .PaperWarning-title": {
              ...theme.typography.h6,
              margin: 0,
            },
            "& .PaperWarning-body": {
              ...theme.typography.body2,
              margin: 0,
            },
            "& .PaperWarning-actions": {
              marginLeft: "auto",
              display: "flex",
              gap: theme.spacing(1),
              alignItems: "center",
              flexWrap: "wrap",
            },
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
          letterSpacing: ".02em",
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
    // --- Snackbars & Alerts
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        autoHideDuration: 4000,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          // spacing around the snackbar container
          margin: theme.spacing(0, 1),
          // style the Alert rendered inside
          "& .MuiAlert-root": {
            borderRadius: 10,
            boxShadow: "0 6px 18px rgba(0,0,0,.15)",
            alignItems: "center",
          },
          "& .MuiAlert-icon": { marginRight: theme.spacing(1) },
          "& .MuiAlert-action": { paddingLeft: theme.spacing(1) },
        }),
      },
    },

    MuiAlert: {
      defaultProps: {
        variant: "filled", // all snackbars use filled by default
        elevation: 6,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: 14,
          lineHeight: 1.4,
          padding: theme.spacing(1, 1.5),
          borderRadius: 10,
        }),
        icon: { marginRight: 8 },
        action: { marginLeft: 8 },
        // brand-aligned filled colors
        filledSuccess: ({ theme }) => ({
          backgroundColor: theme.palette.success.main,
          color: theme.palette.common.white,
        }),
        filledInfo: ({ theme }) => ({
          backgroundColor: theme.palette.info.main,
          color: theme.palette.common.white,
        }),
        filledWarning: ({ theme }) => ({
          backgroundColor: theme.palette.warning.main,
          color: theme.palette.common.white,
        }),
        filledError: ({ theme }) => ({
          backgroundColor: theme.palette.error.main,
          color: theme.palette.common.white,
        }),
      },
    },
    MuiStack: {
      variants: [
        {
          props: { variant: "fieldWithLabel" },
          style: ({ theme }) => ({
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(0.5),
            width: "100%",
            '& > .MuiTypography-root[component="label"]': {
              display: "block",
              marginBottom: 2,
            },
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
