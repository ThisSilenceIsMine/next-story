import {Card} from './Card';

import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: "Card",
    component: Card,

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    title: "Button",
};

Primary.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/VGuxMEuNQJCYk4pIiIhKGD/Untitled?node-id=2%3A154&t=YkIr2tYhbVPDS3S3-4"
    }
}
