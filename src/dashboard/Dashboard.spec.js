// Test away
import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';
import Display from '../display/Display'
import Controls from '../controls/Controls'

describe('<Dashboard />', () => {
    it.skip('matches snapshot', () => {
        const tree = renderer.create(<Dashboard/>).toJSON();
        expect(tree).toMatchSnapShot();
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders successfully', () => {
        render(<Dashboard/>)
    })

    it('renders successfully', () => {
        render(<Display/>)
    })

    it('renders successfully', () => {
        render(<Controls/>)
    })
})