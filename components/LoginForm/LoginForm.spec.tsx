import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as stories from "./LoginForm.stories";
import { composeStories } from "@storybook/testing-react";

const { Primary, WithHiddenPassword } = composeStories(stories);

describe("Login Form", () => {
  it("passes user data into callback on submit", async () => {
    const onSubmit = jest.fn();
    const email = "user@mail.com";
    const password = "pa55w0rd";

    const user = userEvent.setup();
    render(<Primary onSubmit={onSubmit} />);
    await user.type(screen.getByLabelText(/email/gi), email);
    await user.type(screen.getByLabelText(/password/gi), password);

    await user.click(screen.getByRole("button"));

    expect(onSubmit).toBeCalledWith(
      expect.objectContaining({
        email,
        password,
      })
    );
  });
  it("hides password if opted in", async () => {
    render(<WithHiddenPassword />);

    expect(screen.getByLabelText(/password/i)).toHaveAttribute(
      "type",
      "password"
    );
  });
});
