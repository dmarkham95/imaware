import {render, screen} from "@testing-library/react"
import React from "react"
import App from "./App"

test("renders imaware header", () => {
  render(<App />)
  const element = screen.getByText(/imaware/i)
  expect(element).toBeInTheDocument()
})
