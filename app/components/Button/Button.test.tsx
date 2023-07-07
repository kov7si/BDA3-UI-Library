import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps, sizeClasses } from './Button';

describe('Button component', () => {
  const defaultProps: ButtonProps = {
    label: 'Test Button',
    onClick: jest.fn(),
  };

  it('renders with default props', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const button = getByText('Test Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-slate-800');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('renders with primary prop', () => {
    const { getByText } = render(<Button {...defaultProps} primary />);
    const button = getByText('Test Button');
    expect(button).toHaveClass('bg-slate-400');
  });

  it('renders with custom background color', () => {
    const { getByText } = render(<Button {...defaultProps} backgroundColor="red" />);
    const button = getByText('Test Button');
    expect(button).toHaveStyle('background-color: red');
  });

  it('renders with different size prop', () => {
    const { getByText } = render(<Button {...defaultProps} size="small" />);
    const button = getByText('Test Button');
    expect(button).toHaveClass(sizeClasses["small"]);
  });

  it('calls onClick when clicked', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    const button = getByText('Test Button');
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});