import * as React from "react";
import Heading from "../components/Heading";

export default {
    title: "HEADING",
    component : Heading,
    argTypes: {
        level: { control: "radio" },
        children: { control: "text"},
    },
};

export function Default(args) {
    return <Heading {...args} />;
}

Default.args = {
    children: "Heading(Default)"
}

export function H2(args) {
    return <Heading {...args} />;
}