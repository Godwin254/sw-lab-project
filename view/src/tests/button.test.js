//test button

import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../components/Button'

describe('Button', () => {
    it('should render button', () => {
        render(<Button label='Learn more' />)
        const button = screen.getByTestId('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Learn more')
        expect(button).toHaveStyle({border: '1px solid blue'})
    })
});


describe('Button', () => {
    it('should render without crashing', () => {
        const { container } = render(<Button label='Learn more' />);
        expect(container).toBeTruthy();
    });
});