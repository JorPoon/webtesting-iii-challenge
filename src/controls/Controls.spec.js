// Test away!
import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
    it.skip('matches snapshot', () => {
        const tree = renderer.create(<Controls/>).toJSON();
        expect(tree).toMatchSnapShot();
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Controls />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders successfully', () => {
        render(<Controls/>)
    })

    it('has a button for close gate', () => {
        const {getByText} = render(<Controls/>)
        
        const button = getByText(/close gate/i);
    })

    it('has a button for lock gate', () => {
        const {getByText} = render(<Controls/>)
        
        const button = getByText(/lock gate/i);
    })

    // it('close gate becomes open gate when clicked',() => {
    //     const {getByText} = render(<Controls/>)
    
    //     const button = getByText(/close gate/i);
    //     fireEvent.click(button)
        
    //      getByText('Open Gate');
        
    // })

})
