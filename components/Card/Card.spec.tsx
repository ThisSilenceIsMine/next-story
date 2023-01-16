import {render, screen} from '@testing-library/react';
import {Card} from "./Card";

describe("Card", () => {
    it("renders title", () => {
        render(<Card title={"Hello"}/>);

        expect(screen.getByText('Hello')).toBeInTheDocument();
    })

})
