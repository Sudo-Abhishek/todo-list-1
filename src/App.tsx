import { CssBaseline, ThemeProvider } from "@mui/material";
import TodoList from "./scenes/todoList";
import { darkTheme, defaultTheme } from "./theme";
import { RootLayout } from "./scenes/genericComponents/rootLayout";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const toggleTheme = (value: boolean) => {
    setTheme(value);
  };

  return (
    <>
      <ThemeProvider theme={theme ? defaultTheme : darkTheme}>
        <RootLayout>
          <TodoList toggleTheme={toggleTheme} themeValue={theme} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
