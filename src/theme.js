import { createTheme } from "@material-ui/core/styles";

const APP_PRIMARY = "#0037ff";
const BORDER_RADIUS = 8;

const global = {
  "@global": {
    body: {
      height: "100vh !important",
      overflowY: "hidden",
    },
    p: {
      margin: 0,
      padding: 0,
    },
    button: {
      outline: "none",
    },
    a: {
      cursor: "pointer",
      textDecoration: "none",
    },
    td: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    "#nprogress": {
      pointerEvents: "none",
      "& .bar": {
        background: APP_PRIMARY,

        position: "fixed",
        zIndex: 3000,
        top: 0,
        left: 0,

        width: "100%",
        height: 3,
      },
      "& .peg": {
        display: "block",
        position: "absolute",
        right: 0,
        width: 100,
        height: "100%",
        boxShadow: `0 0 10px ${APP_PRIMARY}, 0 0 5px ${APP_PRIMARY}`,
        opacity: 1,
        transform: "rotate(3deg) translate(0px, -4px)",
      },
    },
    ".apexcharts-toolbar": {
      zIndex: "0 !important",
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    type: "light",
    text: {
      label: "rgb(113, 113, 113)",
    },
    primary: {
      main: APP_PRIMARY,
    },
    secondary: {
      main: "#333",
    },
    tertiary: {
      main: "#ff6b00",
    },
    background: {
      default: "#fff",
      white: "#fff",
      whitesmoke: "#f5f5f5",
    },
    subBackground: {
      default: "#fff",
      white: "#fff",
      whitesmoke: "#f5f5f5",
    },
    border: {
      main: "rgb(221,221,221)",
    },
    skeleton: {
      background: "#e8e8e8",
      foreground: "#f5f5f5",
    },
  },
  overrides: {
    MuiCssBaseline: global,
    MuiPaper: {
      root: {
        backgroundColor: "#fff",
      },
      rounded: {
        borderRadius: BORDER_RADIUS,
      },
    },
    MuiTooltip: {
      tooltip: {
        color: "#fff",
        fontSize: ".725rem",
        backgroundColor: "#222",
      },
      arrow: {
        color: "#222",
      },
    },
    MuiPopover: {
      paper: {
        marginLeft: "32px",
      },
    },
    MuiTablePagination: {
      toolbar: {
        overflow: "hidden",
        height: "100%",
        minHeight: "38px",
        maxHeight: "38px",
      },
    },
    MuiTableSortLabel: {
      root: {
        fontSize: ".875rem",
      },
    },
    MuiTableCell: {
      root: {
        padding: "8px 20px",
        height: "38px",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        color: "#f5f5f5",
        backgroundColor: APP_PRIMARY,
      },
    },
    MuiTableSortLabel: {
      root: {
        paddingLeft: 24,
      },
    },
    MuiAutocomplete: {
      popper: {
        zIndex: "35001 !important",
      },
    },
  },
});
