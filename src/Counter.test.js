import React from 'react';
import '@testing-library/jest-dom/extend-expect'
// ! must have this piece of code or it will not work!!!!
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter'

test('button clicks', () => {
    const {getByText} = render(<span><Counter/></span>);
    const h2 = getByText('Current count: 0');
    const btn = getByText('Add');
    fireEvent.click(btn);
    expect(h2).toHaveTextContent('1');
    expect(h2).not.toHaveTextContent('0');    
} )

const {debug, getByText} = render(<Counter/>);
debug(); 

fireEvent.click(getByText('Add'));
debug();