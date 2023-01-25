import { Header } from "../Header/Header";
import { LoginForm as BaseLoginForm } from "../LoginForm/LoginForm";
import { styled } from "@stitches/react";

export const LoginScreen = () => {
  return (
    <>
      <Header>Hello, world!</Header>
      <LoginForm />
    </>
  );
};

const LoginForm = styled(BaseLoginForm, {
  width: "100%",
  height: "100%",
  display: "grid",
  placeContent: "center",
});
