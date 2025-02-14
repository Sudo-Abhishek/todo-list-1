import { CssBaseline, ThemeProvider } from "@mui/material";
import TodoList from "./scenes/todoList";
import { defaultTheme } from "./theme";


function App() {
  return (<>
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <TodoList />
  </ThemeProvider>
  </>
  );
}

export default App;
