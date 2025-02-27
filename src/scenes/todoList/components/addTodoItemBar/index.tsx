import { Grid2, TextField, Button } from "@mui/material";
import { TASKS } from "../../../../services/general/constants";
import { TodoListDataStateI } from "../..";

type TodoAddBarPropsI = {
  handleTextfieldValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textfieldValue: string;

  handleTodoListData: (
    todoTask: TodoListDataStateI,
    task: keyof typeof TASKS
  ) => void;
};

const TodoAddBar = ({
  handleTextfieldValue,
  textfieldValue,
  handleTodoListData,
}: TodoAddBarPropsI): JSX.Element => {
  return (
    <Grid2
      display="flex"
      height="20%"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid2 width="70%">
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Enter Task"
          onChange={handleTextfieldValue}
          value={textfieldValue}
        />
      </Grid2>
      <Grid2 width="20%">
        <Button
          type="button"
          title="Save"
          sx={{
            textTransform: "none",
            // backgroundColor: "#659b86",
          }}
          variant="contained"
          size="large"
          color="success"
          onClick={() =>
            handleTodoListData({ text: textfieldValue }, TASKS.ADD)
          }
        >
          Save
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default TodoAddBar;
