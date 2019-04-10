// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
    // it.skip('matches snapshot', () => {
    //     const tree = renderer.create(<Controls/>).toJSON();
    //     expect(tree).toMatchSnapShot();
    // })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Controls />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders successfully', () => {
        render(<Controls/>)
    })
})
