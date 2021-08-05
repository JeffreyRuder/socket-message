import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {Editor} from './Editor';

function mockMatchMedia() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

describe('Editor', () => {
  it('allows a user to enter text', () => {
    const mockOnSubmit = jest.fn();
    mockMatchMedia();
    render(<Editor onSubmit={mockOnSubmit} submitting={false} />);

    const input = screen.getByPlaceholderText(/Enter up to 255 characters/);
    userEvent.type(input, 'test text');
    expect(screen.getByText('test text')).toBeInTheDocument();
  });

  it('has a submit button that is disabled when there is no text', () => {
    const mockOnSubmit = jest.fn();
    mockMatchMedia();
    render(<Editor onSubmit={mockOnSubmit} submitting={false} />);

    const buttonText = screen.getByText(/Add Message/);
    expect(buttonText.parentElement).toBeInTheDocument();
    expect(buttonText.parentElement).toBeDisabled();
  });

  it('calls the passed onSubmit function when submitted', () => {
    mockMatchMedia();
    const mockOnSubmit = jest.fn();
    render(<Editor onSubmit={mockOnSubmit} submitting={false} />);

    const input = screen.getByPlaceholderText(/Enter up to 255 characters/);
    userEvent.type(input, 'test text');
    const button = screen.getByText(/Add Message/);
    userEvent.click(button);

    expect(mockOnSubmit).toHaveBeenCalledWith('test text');
  });
});
