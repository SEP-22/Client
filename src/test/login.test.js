import LoginPage from "../pages/LoginPage/LoginPage";

test("username input should be rendered", () => {
    render(<LoginPage />);
    const emailInputEl = screen.getByTestId("login-email");
    expect(emailInputEl).toBeInTheDocument();
  });