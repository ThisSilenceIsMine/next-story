import { Header } from "./Header";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  name: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Primary: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

Primary.args = {
  children: "Hello, I'm a header",
};
