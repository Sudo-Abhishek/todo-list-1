import { Grid2, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { TodoListDataStateI } from "../..";
import { TASKS } from "../../../../services/general/constants";
import TodoAddBar from "../addTodoItemBar";
import TodoChild from "../todoChild";

type TodoListChildLayoutPropsI = {
  themeValue: boolean;
  toggleTheme: (value: boolean) => void;
  handleTextfieldValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleTodoListData: (
    todoTask: TodoListDataStateI,
    task: keyof typeof TASKS
  ) => void;
  textfieldValue: string;
  todoListData: TodoListDataStateI[];
  handleChecked: (index: number | undefined) => void;
};

const TodoListChildLayout = ({
  themeValue,
  toggleTheme,
  handleTextfieldValue,
  handleTodoListData,
  textfieldValue,
  handleChecked,
  todoListData,
}: TodoListChildLayoutPropsI): JSX.Element => {
  return (
    <Grid2
      height="70%"
      width="50%"
      sx={{ backgroundColor: (theme) => theme.palette.primary.dark }}
      borderRadius={5}
    >
      <Grid2
        display="flex"
        height="10%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding={4}
      >
        <Grid2 />
        <Typography variant="h6">Todo List</Typography>
        {themeValue ? (
          <DarkModeIcon onClick={() => toggleTheme(!themeValue)} />
        ) : (
          <LightModeIcon onClick={() => toggleTheme(!themeValue)} />
        )}
      </Grid2>
      <Grid2 height="60%">
        <TodoAddBar
          handleTextfieldValue={handleTextfieldValue}
          handleTodoListData={handleTodoListData}
          textfieldValue={textfieldValue}
        />
        <Grid2 overflow="hidden">
          <Grid2
            display="flex"
            flexDirection="column"
            overflow="scroll"
            alignItems="start"
            justifyContent="start"
            mb={10}
            rowGap={1}
            spacing={1}
            sx={{
              overflowX: "hidden",
              overflowY: "auto",
              scrollbarWidth: "thin",
            }}
            minHeight={300}
            maxHeight={310}
          >
            {todoListData?.map((item) => {
              return (
                <TodoChild
                  todoListItem={item}
                  handleChecked={handleChecked}
                  handleTodoListData={handleTodoListData}
                  key={item.id}
                />
              );
            })}
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default TodoListChildLayout;
