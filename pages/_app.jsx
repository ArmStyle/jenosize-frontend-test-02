import React from "react";
import { wrapper } from "../redux/store";
import "../styles/globals.css";

import { ThemeProvider } from "@material-ui/core/styles";
import * as theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    // Remove the server-side injected CSS.
  }, []);

  return (
    <>
      <script
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMnhZAr6MZ6L0sCGG2G01oGdIeQVD78Tg&libraries=places"
      ></script>
      <ThemeProvider theme={theme.lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
