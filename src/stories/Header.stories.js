import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from '../components/Header';

export default {
    title: "HEADER",
    component: Header,
}

export const Text = (args) => <Header>HEADER STORY</Header>;



export const Emoji = () => {
    <Header>
        <span role="img" aria-label="so cool">

        </span>
    </Header>
};