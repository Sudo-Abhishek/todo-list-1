import { render, screen, fireEvent, act } from "@testing-library/react";
import TodoList from "../../../scenes/todoList";
import React from "react";

const mockToggleTheme = jest.fn();
const mockThemeValue = true;

describe("TodoList Component", () => {
  it("renders without crashing", () => {
    render(
      <TodoList toggleTheme={mockToggleTheme} themeValue={mockThemeValue} />,
    );
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
  });

  it("adds a new todo item", async () => {
    render(
      <TodoList toggleTheme={mockToggleTheme} themeValue={mockThemeValue} />,
    );

    const inputElement = screen.getByPlaceholderText(/Enter Task/i);
    const addButton = screen.getByText(/Save/i);

    // Simulate typing into the input field
    fireEvent.change(inputElement, { target: { value: "Test Todo" } });

    // Simulate clicking the add button
    fireEvent.click(addButton);

    // Ensure the new task is added to the list
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("deletes a todo item", async () => {
    render(
      <TodoList toggleTheme={mockToggleTheme} themeValue={mockThemeValue} />,
    );

    const inputElement = screen.getByPlaceholderText(/Enter Task/i);
    const addButton = screen.getByText(/Save/i);

    // Add a task first
    fireEvent.change(inputElement, {
      target: { value: "Test Todo to Delete" },
    });
    fireEvent.click(addButton);

    const deleteButton = screen.getByTestId(/delete-button/i);

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Ensure the task is deleted
    expect(screen.queryByText("Test Todo to Delete")).toBeNull();
  });
});
