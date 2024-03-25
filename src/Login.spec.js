import { render, screen, fireEvent } from "@testing-library/react"
import Login from "./Login"
describe("login page", () => {
  test("renders learn react link", async () => {
    render(<Login />)
    const emailInput = screen.getByTestId("email")
    fireEvent.change(emailInput, { target: { value: "test" } })
    const passwordInput = screen.getByTestId("password")
    fireEvent.change(passwordInput, { target: { value: "123" } })
    const button = screen.getByTestId("connect")
    fireEvent.click(button)
    expect(await screen.findByText(/success/)).toBeInTheDocument()
  })
})
