import { TodoListDataStateI } from "../..";
import { TASKS } from "../../../../services/general/constants";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, Grid2, Typography, useTheme } from "@mui/material";

type TodoChildPropsI = {
  todoListItem: TodoListDataStateI;
  handleChecked: (index: number | undefined) => void;
  handleTodoListData: (
    todoTask: TodoListDataStateI,
    task: keyof typeof TASKS
  ) => void;
};

const TodoChild = ({
  todoListItem,
  handleChecked,
  handleTodoListData,
}: TodoChildPropsI): JSX.Element => {
  const theming = useTheme();
  return (
    <Grid2
      key={todoListItem.id}
      mr={1}
      ml={4}
      width="90%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderRadius={2}
      minHeight={40}
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
      padding={1}
      border={`1px solid ${theming.palette.primary.light}`}
      boxShadow="0px 4px 6px rgba(251, 248, 248, 0.1), 0px 4px 12px rgba(0, 0, 0, 0.2)"
    >
      <Grid2
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
      >
        <Checkbox
          checked={todoListItem.checked}
          inputProps={{ "aria-label": "controlled" }}
          color="success"
          onChange={() => handleChecked(todoListItem.id)}
        />
        <Typography
          sx={{
            textDecoration: todoListItem.checked ? "line-through" : undefined,
          }}
          variant="body1"
        >
          {todoListItem.text}
        </Typography>
      </Grid2>
      <Grid2>
        <DeleteIcon
          fontSize="small"
          titleAccess="Delete"
          sx={{ cursor: "pointer" }}
          onClick={() =>
            handleTodoListData({ id: todoListItem.id }, TASKS.DELETE)
          }
        />
      </Grid2>
    </Grid2>
  );
};

export default TodoChild;
