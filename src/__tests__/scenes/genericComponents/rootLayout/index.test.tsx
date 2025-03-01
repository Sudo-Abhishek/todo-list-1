import React from "react";
import { RootLayout } from "../../../../scenes/genericComponents/rootLayout";
import "@testing-library/jest-dom"; // for additional assertions
import { render, screen } from "@testing-library/react";

describe("RootLayout", () => {
  test("should render children passed to RootLayout", () => {
    render(
      <RootLayout>
        <>Hello World</>
      </RootLayout>,
    );

    // Check if the child "Hello World" text is rendered using screen.getByText
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("should have the correct background color", () => {
    render(<RootLayout>Hello World</RootLayout>);

    // Check if the Grid2 has the correct background color style
    const gridElement = screen.getByTestId("root-layout"); // Assuming the Grid2 has a role of 'presentation'
    expect(gridElement).toHaveStyle("background-color: rgb(255, 255, 255)"); // Default background.paper color
  });
});
