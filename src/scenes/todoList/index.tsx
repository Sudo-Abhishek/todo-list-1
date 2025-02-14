import { Grid2 } from "@mui/material";

const TodoList = () => {

    return (
        <Grid2 container display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100vh" height="100vh">
            <Grid2 container display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" width="70%" height="80%">
                <Grid2>

                    Todo App
                </Grid2>
                <Grid2  border={(theme) => theme.palette.border.main}>
                    todolist box.

                </Grid2>
            </Grid2>


        </Grid2>
    )
}
export default TodoList;