import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        backgrounds: {
            default: "white",
            values: [
                { name: "white", value: "#ffffff" },
                { name: "dark", value: "#031331" },
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
    args: {
        label: "Button",
        bgcolor: "yellow",
        size: "small",
    },
};
export const Medium: Story = {
    args: {
        label: "Чытаць далей >",
        bgcolor: "yellow",
        size: "large",
    },
};
export const Whitebutton: Story = {
    parameters: {
        backgrounds: { default: "dark" },
    },
    args: {
        label: "Button",
        bgcolor: "white",
        size: "large",
    },
};
