import {render, screen, fireEvent} from '@testing-library/react';

import App from './App';
import {replaceCamelWithSpaces} from './App';

describe('button behavior', () => {
    test('button has correct initial color and updates when clicked', () => {
        render(<App/>);
        const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
        expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
        fireEvent.click(colorButton);
        expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
        expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
    });

    test('checkbox can enable and disable button', () => {
        render(<App/>);
        const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
        const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
        expect(colorButton).toBeEnabled();
        fireEvent.click(checkbox);
        expect(colorButton).toBeDisabled();
        fireEvent.click(checkbox);
        expect(colorButton).toBeEnabled();
    });

    test('button turns gray when disabled', () => {
        render(<App/>);
        const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
        const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
        fireEvent.click(checkbox);
        expect(colorButton).toBeDisabled();
        expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
    });
});

describe('spaces before camel-case capital letters', () => {
    test('works for no inner capital letters', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });

    test('works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });

    test('works for empty string', () => {
        expect(replaceCamelWithSpaces('')).toBe('');
    });

    test('works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });
});
