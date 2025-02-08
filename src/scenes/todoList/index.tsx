import { Grid2 } from "@mui/material";
import TodoListBox from "./components/todoListBox";

const TodoList = () => {
    return (
        <Grid2 display="flex" flexDirection="row" alignItems="center" justifyContent="center" height="100vh">
            <TodoListBox />


        </Grid2>
    )
}
export default TodoList;