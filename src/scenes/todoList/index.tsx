import { Grid2 } from "@mui/material";
import { useState } from "react";
import { TASKS } from "../../services/general/constants";
import TodoListChildLayout from "./components/todoListChildLayout";
import React from "react";

export interface TodoListDataStateI {
  id?: number;
  text?: string;
  inEditMode?: boolean;
  checked?: boolean;
}
export interface TodoListI {
  toggleTheme: (value: boolean) => void;
  themeValue: boolean;
}
const TodoList = ({ toggleTheme, themeValue }: TodoListI) => {
  const [todoListData, setTodoListData] = useState<TodoListDataStateI[]>([]);
  const handleTodoListData = (
    todoTask: TodoListDataStateI,
    task: keyof typeof TASKS,
  ) => {
    switch (task) {
      case "ADD":
        {
          if (todoTask?.text === "") {
            return;
          }
          const id = todoListData?.length;
          const todoTaskWithId = {
            ...todoTask,
            id,
            inEditMode: false,
          } as TodoListDataStateI;
          setTodoListData((prevState) => [todoTaskWithId, ...prevState]);
          setTextfieldValue("");
        }
        break;
      case "DELETE":
        {
          const taskToBeDeleted = todoTask?.id;
          if (taskToBeDeleted !== undefined) {
            const updatedTasks = todoListData?.filter(
              (item: TodoListDataStateI) => taskToBeDeleted != item.id,
            );
            setTodoListData(() => updatedTasks);
          } else {
            return;
          }
        }
        break;
      case "EDIT":
        {
          const taskToBeEdited = todoTask?.id;
          const updatedTasks = todoListData?.map((item: TodoListDataStateI) => {
            if (item.id === taskToBeEdited) {
              return {
                ...item,
                inEditMode: !item.inEditMode,
              };
            } else return item;
          });
          setTodoListData(updatedTasks);
        }
        break;
    }
  };
  const [textfieldValue, setTextfieldValue] = useState<string>("");
  const handleTextfieldValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTextfieldValue(event.target.value);
  };
  const handleChecked = (index: number | undefined) => {
    if (index === undefined) return;
    const updatedTask = todoListData?.map((item) => {
      if (index === item.id) {
        return {
          ...item,
          checked: !item.checked,
        };
      } else return item;
    });
    setTodoListData(updatedTask);
  };
  return (
    <Grid2
      height="100%"
      minHeight={520}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      width="100%"
      data-testid="todo-list"
    >
      <TodoListChildLayout
        handleChecked={handleChecked}
        handleTextfieldValue={handleTextfieldValue}
        handleTodoListData={handleTodoListData}
        textfieldValue={textfieldValue}
        themeValue={themeValue}
        todoListData={todoListData}
        toggleTheme={toggleTheme}
      />
    </Grid2>
  );
};
export default TodoList;
