import React from "react";
import App from "../App";

test("app component", () => {
  const linkElement = <App />;
  expect(linkElement).toBeDefined();
});
