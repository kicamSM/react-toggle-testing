import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Toggler from './Toggler'


it('should start showing', () => {
   const { getByText } = render(<Toggler/>)
   const heading = getByText('Hello World')
   expect(heading).toHaveClass('Toggler-text')
   expect(heading).toBeInTheDocument();
})