import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import { defaultValues, ThemeContext, ThemeContextType } from "../styles/theme/theme";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultValues.theme);
  const [mode, setMode] = useState(defaultValues.mode);
  const initialValues: ThemeContextType = {
      mode,
      theme,
      setTheme,
      setMode
  }

  return (<ThemeContext.Provider value={initialValues}>
      <Component {...pageProps} />
  </ThemeContext.Provider>);
}

export default MyApp;
