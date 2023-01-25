import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LoginScreen} from "./LoginScreen";

export default {
    title: "Screens/Login",
    component: LoginScreen,
} as ComponentMeta<typeof LoginScreen>

export const Primary: ComponentStory<typeof LoginScreen> = () => <LoginScreen />;
