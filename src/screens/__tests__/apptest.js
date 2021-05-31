import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

it('renders correctly', () => {
    renderer.create(<App />);
});