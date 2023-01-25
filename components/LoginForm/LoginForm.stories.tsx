import { LoginForm } from "./LoginForm";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Login Screen / Login Form",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  onSubmit: (ud) => console.log("User Data: ", ud),
};

export const WithHiddenPassword = Template.bind({});

WithHiddenPassword.args = {
  onSubmit: (ud) => console.log("User Data: ", ud),
  hidePassword: true,
};
