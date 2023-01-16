import {styled} from "@stitches/react";

type Props = {
    title: string;
}

export const Card = ({title}: Props) => <Container>{title}</Container>

const Container = styled("div", {
    padding: "12px",
    borderRadius: "10px",
    backgroundColor: "gray",
    color: "white",
    width: "fit-content",
})