import { styled } from "@stitches/react";
import { FormEvent, useState } from "react";

type UserData = {
  email: string;
  password: string;
};

type Props = {
  /**
   * handler for form submit
   * */
  onSubmit?: (ud: UserData) => void;
  className?: string;
  hidePassword?: boolean;
};

export const LoginForm = ({ onSubmit, className, hidePassword }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onSubmit?.({
      email,
      password,
    });
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} className={className}>
      <Label>
        email
        <Input
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        password
        <Input
          name={"password"}
          type={hidePassword ? "password" : undefined}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Label>
      <Button type={"submit"}>Submit</Button>
    </Form>
  );
};

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  width: "fit-content",
});

const Label = styled("label", {
  display: "flex",
  flexDirection: "column",
});

const Input = styled("input", {
  all: "unset",
  padding: "4px",
  border: "1px solid gray",
  borderRadius: "10px",
});

const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  border: "2px solid orange",
  borderRadius: "10px",
  padding: "10px",
  display: "grid",
  placeContent: "center",
});
