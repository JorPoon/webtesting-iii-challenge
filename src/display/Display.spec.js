// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Display from './Display'
import Controls from '../controls/Controls'
import Dashboard from '../dashboard/Dashboard'

describe('<Display />', () => {
    it.skip('matches snapshot', () => {
        const tree = renderer.create(<Display/>).toJSON();
        expect(tree).toMatchSnapShot();
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Display />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders successfully', () => {
        render(<Display/>)
    })

    it(' default renders Open', () => {
        const {getByText} = render(<Display/>)
        const div = getByText(/Open/i)
    })

    it(' default renders Unlocked', () => {
        const {getByText} = render(<Display/>)
        const div = getByText(/unlocked/i)
    })

    it('renders Closed and open gate button when closed button is click', () => {
        const {getByText} = render(<Dashboard/>)
        const div = getByText(/Open/i)
        const button = getByText(/close gate/i)

        fireEvent.click(button)
        getByText(/Closed/i);
        getByText(/Open gate/i);
    })

    it('renders Closed and open gate button when closed button is click', () => {
        const {getByText} = render(<Dashboard/>)
        const div = getByText(/Open/i)
        const button = getByText(/close gate/i)

        fireEvent.click(button)
        getByText(/Closed/i);
        getByText(/Open gate/i);
    })

    it('renders Locked and unlock gate button when lock button is click', () => {
        const {getByText} = render(<Dashboard/>)
        const div = getByText(/unlocked/i)
        const button = getByText(/lock gate/i)

        fireEvent.click(button)
        getByText(/locked/i);
        getByText(/unlock/i);
    })


})