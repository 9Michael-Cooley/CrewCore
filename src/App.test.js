// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewCore/i);
    expect(titleElement).toBeInTheDocument();
});
